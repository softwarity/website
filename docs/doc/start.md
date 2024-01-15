---
slug: start
title: Premiers pas
authors: fachache
tags: []
---
## Installation

Installer `ARCHWAY` est trés facile, l'application `ARCHWAY` nécessite 2 images `docker`. L'image de `ARCHWAY` et l'image de mongodb.

:::tip
Noté que la base mongo peut être clusterisé (dans swarm ou k8s), mais surtout peut être utilisé par vos microservices pour stocker vos documents. 
:::

:::warning
En revanche il est déconseillé d'accéder et surtout de modifier les documents de `STOCKAPI` via vos services. C'est ce que l'on appelle la gouvernance de la donnée. 
:::

La plus simple facon d'installer `ARCHWAY` est de le déployer dans un cluster. Mais vous pouvez bien sur l'installer comme simple container `docker` via `docker-compose`. 

### Lancement via `docker-compose`

#### Déclaration du `docker-compose.yml`

<details>
  <summary>`docker-compose.yml` pour compose</summary>
```yml title="docker-compose.yml"
version: '3.8'
services:
  archway:
    image: ghcr.io/hhdevelopment/archway:latest
    ports:
      - 8080:8080 # non HTTPS
    environment:
      MONGODB_HOST: mongodb 
      MONGODB_DB_NAME: archway
      MONGODB_USER: admin
      MONGODB_PWD: changeit

  mongodb:
    image: mongo # official image  
    environment:
      MONGO_INITDB_DATABASE: archway
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: changeit
```
</details>

Ce `docker-compose` est la version minimal requise.

:::tip
Notez que les données de mongodb ne sont pas persistées dans cette exemple.   
Un [volume](https://docs.docker.com/storage/volumes/) est donc à monter dans le container de l'image `mongodb` dans le répertoire `/data/db`, si vous utilisez l'image officiel de `mongo`.
:::

#### Démarrage du projet

```bash
docker compose -f docker-compose.yml up -d
```

### Installation dans un `cluster` `Swarm`

Dans cette exemple, nous allons lancer `ARCHWAY` dans une stack `myapp`.

Nous donc nommer la base `archway` et persister les données sur le système de fichier via un volume nommé `mongodb_data`.

<details>
  <summary>`docker-compose.yml` pour swarm</summary>
```yml title="docker-compose.yml"
version: '3.8'

services:
  archway:
    image: ghcr.io/hhdevelopment/archway:latest
    ports:
      - 8080:8080
    environment:
      MONGODB_HOST: mongodb
      MONGODB_DB_NAME: archway
      MONGODB_USER: admin
      MONGODB_PWD: changeit
    networks:
      - dnet

  mongodb:
    image: mongo
    environment:
      MONGO_INITDB_DATABASE: archway
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: changeit
    ports:
      - 27017:27017
    volumes:
      - mongodb_data:/data/db
    networks:
      - dnet
volumes:
  mongodb_data:
networks:
  dnet:
```
</details>

```bash
docker stack deploy -c docker-compose.yml myapp
```

### Installation dans un `cluster` `Kubernetes`

## Configuration

### Par l'interface

### Par fichiers json

