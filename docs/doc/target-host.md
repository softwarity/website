---
slug: target-host
title: Target host
authors: fachache
tags: []
---

:::warning
This feature is only available for dev users.
:::

## Use case

`ARCHWAY` is deployed in a cluster (swarm or k8s).

Several services are deployed in the cluster, making up your application.

The application is available on the following URL : `https://www.monapp.com`.

Imagine now you want to work as developer on the UI (or any microservices) of the application.

The service that provide the UI is for exemple : `app-frontend`.

But you dont want to launch all the microservices on your local machine.

Problem, when access to `https://www.monapp.com`, the API gateway redirect to the service `app-frontend` in the cluster. Mean `http://app-frontend:80`.

But you want to provide the UI from your local machine.

When you launch the UI on your local machine the application `app-frontend` listen on `http://192.168.1.1:3000` for exemple.

If you launch the UI on your local machine, all the relatives urls cannot be resolved. Authentication and others features cannot work.

`ARCHWAY` provides a feature for solve this issue.

First you have to define a alternative target for the service `app-frontend` see [Alternative Target](/doc/gateway/route/alternative-target). Create an alternative target with http://localhost:3000.

Of course localhost is not a good target. But `ARCHWAY` will replace `localhost` the IP/DNS defined in `target-host`.

`target-host` can be define in 2 places :

 - Globaly in the gateway UI.

import GlobalHost from './img/global-host.png'
import UserHost from './img/user-host.png'

<img src={GlobalHost} alt="Target Host" width="500px"/>
 
 - With user scope.

<div>
  <img src={UserHost} alt="User Host" width="250px" style={{float: 'left', paddingRight: '50px'}}/>
  Define the target for each user.
</div>

:::note
 Means developers can define different target for each them.
 Means developers can work on differents versions of the microservice and use the same cluster.
 Means developers can work on differents microservices and use the same cluster. 
:::

:::note
 Of course you can launch the cluster as a private cluster (on your locale machine) and switch easily between internal microservices and external microservices.
:::








