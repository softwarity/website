---
slug: custerization
title: Clusterization
authors: fachache
tags: []
---

:::info
# BUSINESS EDITION   
This feature is only accessible in the business version.
:::

`ARCHWAY` supports being clustered within a `SWARM` or `KUBERNETES` style cluster.

To operate with multiple instances, `ARCHWAY` needs the instances to synchronize with each other.

To do this, `ARCHWAY` uses `RABBITMQ`.

## RABBITMQ

So, you just need to deploy a `RABBITMQ` as described [here](https://hub.docker.com/_/rabbitmq) and provide the connection information to `ARCHWAY` during its deployment.

If the connection information is present, `ARCHWAY` will create a `TOPIC` type topology to synchronize.

The names of the variables to define the connection information are as follows.

| name | optional | default value | description |
|-|:-:|:-:|-|
| RABBITMQ_HOST | | | The `host` of the rabbitmq, in the cluster this should be the name of the `rabbitmq` service. If this value is absent, cluster mode is disabled |
| RABBITMQ_PORT | ✔ | 5672 | The listening port of the rabbitmq, by default 5672|
| RABBITMQ_USER | ✔ | guest | The default login of rabbitmq is `guest` |
| RABBITMQ_PWD | ✔ | guest | The default password of rabbitmq is `guest` |
| ARCHWAY_ID | ✔ | IP4: \d+\.\d+\.\d+\.(\<id\>\d+)| This value is calculated with the container's IP, specifically the least significant byte. You can use an identifier related to the container number like `.Task.Slot` in `SWARM` or `metadata.uid` in `kubernetes` |

### SWARM

Here is an example of a `docker-compose.yml` with the `RABBITMQ` connection information.

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

Here is an example of `deployment.yaml` with the connection information of the `RABBITMQ`.

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

## Replicas

Activating cluster mode is of course not enough, it is appropriate to deploy `ARCHWAY` in a suitable architecture. Generally a cluster made up of several `node` nodes.

Then you also need to define the desired number of replicas within the cluster. Which you can define as follows in your deployment files.

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