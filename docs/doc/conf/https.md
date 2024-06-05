---
slug: https
title: HTTPS - HTTP/2
authors: fachache
tags: []
---

In this section, we will see how to configure `ARCHWAY` so that the server is accessible via `HTTPS` and to enable `HTTP/2`.

`ARCHWAY` uses a `.p12` file to import the necessary certificates and keys.

:::note
A `.p12` file is a binary file format used to store the server certificate, the entire certificate chain, and the private key in a single encrypted file. It is also known as a PKCS#12 file, which is a standard for storing private keys and certificates.
:::

## Self-Signed Certificates

We will start with a self-generated `.p12` file for `localhost`.
This can be used locally on the developer's workstation, for example.

:::note
The procedure is described for a `linux` `debian` distribution.
:::

### Certificate Authorities

We will generate a new local `CA` that will issue and sign our `.p12` file.

Updating and installing tools:

```bash
$ sudo update-ca-certificates
$ sudo apt install libnss3-tools mkcert
```

Generating the local `CA`:

The following command will create and install a CA locally in your various browsers on your workstation.

```bash
$ sudo mkcert -install
```

```
The local CA is now installed in the system trust store! 👍
The local CA is now installed in the Firefox and/or Chrome/Chromium trust store (requires browser restart)! 🦊
The local CA is now installed in Java's trust store! 👍
```

### Creation of the `.p12`

We will create a store containing the certificates and key for `localhost`.

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

## Provided Certificates

:::tip
If you have a `.p12` file for your domain, skip to the next section.
:::

If your registrar provides you with a private key and an SSL certificate for your domain `mydomain.com`, you can generate a `.p12` store.

```bash
# mydomain.com_private_key.key
# mydomain.com_ssl_certificate.cer
```

From these files, generate the `server-keystore.p12` file.

```bash
openssl pkcs12 -export -out server-keystore.p12 -inkey mydomain.com_private_key.key -in mydomain.com_ssl_certificate.cer
# create password
```

### Displaying Information

```bash
keytool -list -keystore server-keystore.p12 -storetype PKCS12 -v
```

## Using the `.p12`

To add the certificate to `ARCHWAY` and thus enable `HTTPS` and `HTTP/2`, we will modify the `docker-compose.yml` used in the tutorial to mount the `.p12` store in the `archway` image.

<details>
  <summary>`docker-compose.yml`</summary>
```yml title="docker-compose.yml" showLineNumbers
version: '3.8'
services:
  archway:
    image: ghcr.io/softwarity/archway:latest
    ports:
      - 443:8443 # HTTPS
    volumes:
      - ./server-keystore.p12:/server-keystore.p12:ro
    environment:
      SERVER_PORT: 8443
      SSL: "true"
      SSL_KEY_STORE_TYPE: PKCS12
      SSL_KEY_STORE: server-keystore.p12
      SSL_KEY_STORE_PASSWORD: changeit
      SSL_KEY_ALIAS: 1
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

### Explanations

```yml
./server-keystore.p12:/server-keystore.p12:ro
```

The line `./server-keystore.p12:/server-keystore.p12:ro` specifies that we will mount the `.p12` store at the root of the container. It is specified as read-only `ro`.

In our case, the `server-keystore.p12` file and the `docker-compose.yml` file must be at the same level.

Adapt the password as needed, of course.

```yml
- 443:8443 # HTTPS
```

This exposes the container's `8443` port on the local `443` port.

If port 443 is not free, you can use another one.

```yml
SERVER_PORT: 8443
SSL: "true"
SSL_KEY_STORE_TYPE: PKCS12
SSL_KEY_STORE: server-keystore.p12
SSL_KEY_STORE_PASSWORD: changeit
SSL_KEY_ALIAS: 1
```

- `SERVER_PORT` defines the internal `HTTPS` listening port of the server.
- `SSL` activates `SSL`, `HTTPS`.
- `SSL_KEY_STORE_TYPE` Type of the store, normally `PKCS12`.
- `SSL_KEY_STORE` The store in `.p12` format that we mounted.
- `SSL_KEY_STORE_PASSWORD` The private key password.
- `SSL_KEY_ALIAS` The certificate alias in the store.

:::tip
To know the list of aliases in the store use the command:
```bash
keytool -list -keystore server-keystore.p12 -storetype PKCS12 -v
```
:::

### Starting the Project

```bash
docker compose -f docker-compose.yml pull
docker compose -f docker-compose.yml up -d
```

Connection: [https://localhost:443/login](https://localhost:443/login)

:::note
The previous link uses `localhost`, you should adapt this with the `DNS` linked to the certificate used.
:::
