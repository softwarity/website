---
slug: https
title: HTTPS - HTTP/2
authors: fachache
tags: []
---

Dans cette section nous allons voir comment configurer `ARCHWAY` pour que le serveur soit accessible en `HTTPS` et activer le `HTTP/2`.

`ARCHWAY` utilise un fichier `.p12` pour importer les certificats et clés nécessaires.

:::note
Un fichier `.p12` est un format de fichier binaire utilisé pour stocker le certificat du serveur, ainsi que toute la chaîne de certificats et la clé privée dans un seul fichier encrypté. Il est également connu sous le nom de fichier PKCS#12, qui est un standard pour le stockage de clés privées et de certificats.
:::


## Certificats autogénérés

Nous allons commencer avec un fichier `.p12` autogénéré pour `localhost`.    
Ce dernier pourra être utilisé localement sur le poste du développeur par exemple.

:::note
La procédure est décrite pour une distribution `linux` `debian`.
:::

### Autorités certifiantes

Nous allons générer une nouvelle `CA` locale qui émettra et signera  notre fichier `.p12`

Mise à jour et installation des outils

```bash
$ sudo update-ca-certificates
$ sudo apt install libnss3-tools mkcert
```

Génération de la `CA` locale

La commande suivate va créer et installer une CA localement dans vos differents navigateurs sur votre poste.

```bash
$ sudo mkcert -install
```

```
The local CA is now installed in the system trust store! 👍
The local CA is now installed in the Firefox and/or Chrome/Chromium trust store (requires browser restart)! 🦊
The local CA is now installed in Java's trust store! 👍
```

### Creation du `.p12`

Nous allons créer un magasin contenant les certificats et clé pour `localhost`.

```bash
$ mkcert -p12-file server-keystore.p12 -pkcs12 localhost
```

```
Created a new certificate valid for the following names 📜
 - "localhost"

The PKCS#12 bundle is at "server-keystore.p12" ✅

The legacy PKCS#12 encryption password is the often hardcoded default "changeit" ℹ️

It will expire on 17 April 2026 🗓
```

## Certificats fournis

:::tip
Si vous avez un fichier `.p12` pour votre domaine, passez à la section suivante.
:::

Si votre registraire vous fournit un certificat et une clé privée, utilisez la procédure suivante pour créer le fichier `.p12`.


### Custom domaine

Si votre registraire vous fournit pour votre domaine `mydomain.com` une clé privée et un certificat `ssl`. Vous pouvez générer un magasin au format `.p12`.

```bash
# mydomain.com_private_key.key
# mydomain.com_ssl_certificate.cer
```

À partir de ces fichiers générez le fichier `server-keystore.p12`.

```bash
openssl pkcs12 -export -out server-keystore.p12 -inkey mydomain.com_private_key.key -in mydomain.com_ssl_certificate.cer
# create password
```

### Afficher les infos

```bash
keytool -list -keystore server-keystore.p12 -storetype PKCS12 -v
```

## Utilisation du `.p12`

Pour ajouter le certificat à `ARCHWAY` et ainsi activer, le `https` et le `http/2`, nous allons modifier le `docker-compose.yml` utilisé dans le tutoriel pour ajouter le montage du magasin `.p12` dans l'image `archway`.

<details>
  <summary>`docker-compose.yml`</summary>
```yml title="docker-compose.yml" showLineNumbers
version: '3.8'
services:
  archway:
    image: ghcr.io/softwarity/archway:latest
    ports:
      # highlight-next-line
      - 443:8443 # HTTPS
    volumes:
      # highlight-next-line
      - ./server-keystore.p12:/server-keystore.p12:ro
    environment:
      # highlight-start
      SERVER_PORT: 8443
      SSL: "true"
      SSL_KEY_STORE_TYPE: PKCS12
      SSL_KEY_STORE: server-keystore.p12
      SSL_KEY_STORE_PASSWORD: changeit
      SSL_KEY_ALIAS: 1
      # highlight-end
      MONGODB_HOST: mongodb 
      MONGODB_DB_NAME: archway
      MONGODB_USER: admin
      MONGODB_PWD: changeit

  mongodb:
    image: mongo # official image  
    volumes:
      - mongodb_data:/data/db
    environment:
      MONGO_INITDB_DATABASE: archway
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: changeit
volumes:
  mongodb_data:

```
</details>

### Explications

```yml
./server-keystore.p12:/server-keystore.p12:ro
```

La ligne `./server-keystore.p12:/server-keystore.p12:ro` définit que l'on va monter le magasin `.p12` à la racine du conteneur. On précise que c'est en lecture seule `ro`.

Dans notre cas, le fichier `server-keystore.p12` et le fichier `docker-compose.yml` doivent être au même niveau.

Adaptez au besoin le mot de passe bien sûr.

```yml
- 443:8443 # HTTPS
```

Ceci expose le port `8443` du conteneur sur le port local `443`.

Si le port 443 n'est pas libre vous povez en utiliser un autre.

```yml
SERVER_PORT: 8443
SSL: "true"
SSL_KEY_STORE_TYPE: PKCS12
SSL_KEY_STORE: server-keystore.p12
SSL_KEY_STORE_PASSWORD: changeit
SSL_KEY_ALIAS: 1
```

- `SERVER_PORT` définit le port `HTTPS` interne d'écoute du serveur.
- `SSL` active le `SSL`, le `HTTPS`.
- `SSL_KEY_STORE_TYPE` Type du magasin, normalement `PKCS12`.
- `SSL_KEY_STORE` Le magasin au format `.p12` que l'on a monté.
- `SSL_KEY_STORE_PASSWORD` Le mot de passe de la clé privée.
- `SSL_KEY_ALIAS` L'alias du certificat dans le magasin.

:::tip
Pour connaitre la liste des alias dans le magasin utiliser la commande:
```bash
keytool -list -keystore server-keystore.p12 -storetype PKCS12 -v
```
:::

### Démarrage du projet

```bash
docker compose -f docker-compose.yml pull
docker compose -f docker-compose.yml up -d
```

Connexion: [https://localhost:443/login](https://localhost:443/login)

:::note
le lien précédent utilise `localhost`, il faut bien sur adater cela avec le `DNS` lié au certificat utilisé.
:::
