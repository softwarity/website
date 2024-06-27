---
slug: custerization
title: Clusterization
authors: fachache
tags: []
---

:::info
# BUSINESS EDITION   
Cette fonctionnalité n'est accessible que dans la version business
:::

`ARCHWAY` supporte d'être clusterizé au sein d'un cluster style `SWARM` ou `KUBERNETES`.

Pour fonctionner avec plusieurs instances, `ARCHWAY` a besoin que les instances se synchronisent entre elles.

Pour ce faire `ARCHWAY` utilise `RABBITMQ`.

## RABBITMQ

Il suffit donc de déployer un `RABBITMQ` comme décrit [ici](https://hub.docker.com/_/rabbitmq) et de donner les informations de connexion à `ARCHWAY` lors du déploiement de celui ci.

Si les informations de connexion  sont présentes `ARCHWAY` créera une topologie de type `TOPIC` pour se synchroniser.

Le nom des variables pour définir les informations de connexions sont les suivantes.

| name | optional | default value | description |
|-|:-:|:-:|-|
| RABBITMQ_HOST | | | Le `host` du rabbitmq, dans le cluster cela devrait être le nom du service `rabbitmq`. Si cette valeur est absente, le mode cluster est désactivé |
| RABBITMQ_PORT | ✔ | 5672 | Le port d'écoute du rabbitmq, par default 5672|
| RABBITMQ_USER | ✔ | guest | Le login par défaut de rabbitmq est `guest` |
| RABBITMQ_PWD | ✔ | guest | Le mot de passe par défaut de rabbitmq est `guest` |
| ARCHWAY_ID | ✔ | IP4: \d+\.\d+\.\d+\.(\<id\>\d+)| Cette valeur est calculé avec l'IP du container, plus précisément l'octet de poids faible. Vous pouvez utiliser un identifiant lié au numéro du container comme `.Task.Slot` dans `SWARM` ou `metadata.uid` dans `kubernetes` |

### SWARM

Voici un exemple de `docker-compose.yml` avec les informations de connexion du `RABBITMQ`.

<details>
  <summary>docker-compose.yml</summary>

```yml showLineNumbers
version: '3.8'
services:
  archway:
    image: ghcr.io/softwarity/archway-be:latest
    # highlight-start
    deploy:      
      replicas: 3 # here define instance number
      restart_policy:
        condition: any
    # highlight-end
    ports:
      - 8080:8080 # HTTP
    environment:
      # highlight-start
      ARCHWAY_ID: "{{.Task.Slot}}"
      RABBITMQ_HOST: rabbitmq
      # RABBITMQ_PORT: 5672
      # RABBITMQ_USER: guest
      # RABBITMQ_PWD: guest
      # highlight-end
      MONGODB_HOST: mongodb 
      MONGODB_DB_NAME: archway
      MONGODB_USER: admin
      MONGODB_PWD: changeit
    networks:
      - dnet

  mongodb:
    image: mongo # official image  
    volumes:
      - mongodb_data:/data/db
    environment:
      MONGO_INITDB_DATABASE: archway
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: changeit
    networks:
      - dnet

  rabbitmq:
    image: rabbitmq:3-management-alpine
    volumes: 
      - "rabbitmq_data:/var/lib/rabbitmq/"
    networks:
      - dnet

volumes:
  rabbitmq_data:

volumes:
  mongodb_data:

```   
</details>

--- 

### KUBERNETES 

Voici un exemple de `deployment.yaml` avec les informations de connexion du `RABBITMQ`.

<details>
  <summary>templates/deployment.yaml</summary>

```yml showLineNumbers
apiVersion: apps/v1
kind: Deployment
metadata:
  name: archway-deployment
spec:
  # highlight-start
  replicas: 3
  # highlight-end
  selector:
    matchLabels:
      app: archway-app
  template:
    metadata:
      labels:
        app: archway-app
    spec:
      containers:
        - name: archway-container
          image: ghcr.io/softwarity/archway-be
          ports:
            - containerPort: 8080
          env:
            # highlight-start
            - name: ARCHWAY_ID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.uid
            - name: RABBITMQ_HOST
              value: "rabbitmq"
            - name: RABBITMQ_PORT
              value: 5672
            - name: RABBITMQ_USER
              value: "guest"
            - name: RABBITMQ_PWD
              value: "guest"
            - name: MONGODB_HOST
              value: "mongodb"
            - name: MONGODB_DB_NAME
              value: "archway"
            - name: MONGODB_USER
              value: "admin"
            - name: MONGODB_PWD
              value: "changeit"
            # highlight-end

```
</details>

## Réplicats

Activer le mode cluster ne suffit bien sûr pas, il convient de déployer `ARCHWAY` dans une architecture adaptée. Généralement un cluster constitué de plusieurs noeuds `node`.

Ensuite il faut aussi définir le nombre de réplicat désiré au sein du cluster. Ce que vous pouvez définir comme suit dans vos fichiers de déploiement.

### SWARM

```yml title="docker-compose.yml" showLineNumbers
  ...
  archway:
    image: ghcr.io/softwarity/archway-be:latest
    # highlight-start
    deploy:      
      replicas: 3 # here define instance number
      restart_policy:
        condition: any
    # highlight-end
    ...

```

### KUBERNETES

```yml title="templates/deployment.yaml" showLineNumbers
apiVersion: apps/v1
kind: Deployment
metadata:
  name: archway-deployment
spec:
  # highlight-start
  replicas: 3
  # highlight-end
  ...

```