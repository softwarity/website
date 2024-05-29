---
slug: intro
title: Introduction
authors: fachache
tags: []
---

ARCHWAY was born from the observation that most projects based on a microservice architecture had the same needs.
Within companies, teams often, due to lack of knowledge, dissatisfaction with existing `API Gateways`, or simply by choice, prefer to develop their own solution.

Often this solution is called `PORTAL`, `GATE`, or something similar. If you find yourself in this situation, you are in the right place.

Generally, a custom solution allows for easier control over several aspects such as user management.

## ARCHWAY: An ~~API~~ APP Gateway

:::info
Archway is an `Application gateway`, a kind of super `API Gateway`.
:::

In short, if you know what an `API Gateway` is, you will quickly understand what an `APP Gateway` is.

Especially, `ARCHWAY` offers a complete user interface that allows controlling all its features.

`ARCHWAY` was conceived by and for developers of web applications based on a microservices architecture. It allows for quickly and at runtime switching the position of a service within the cluster or outside the cluster. This easily facilitates working on a microservice without the need to manage complex redirections.

### API Gateway

An `API Gateway` is a service that primarily manages the routing of requests from an application based on a microservice architecture, especially within a `cluster`.

:::note
In a microservice architecture, the application is no longer built on **one** `client` and **one** server, but rather **one** `client` **(or several)** and **multiple** microservices.
:::

### Microservices Architecture

Microservice architecture is a good architecture because it allows, among other things:

- **Easier Scalability**: Microservices allow each service to evolve individually according to its needs. This facilitates horizontal scaling of services that require more resources without having to scale the entire application.
- **Agile Development**: Development teams can work autonomously on specific microservices. This promotes agile development, speeds up deployment, and allows for more frequent production updates.
- **Error Isolation**: In case of failure or bug in a microservice, it generally does not affect the entire system. Errors are isolated, which facilitates diagnosis and resolution.
- **Suitable Technologies**: Each microservice can be developed using the technology best suited to its use case, allowing for the use of different technologies within the application.
- **Better Resource Utilization**: Hardware and software resources can be allocated more efficiently because each microservice can run on independent servers.

### Implications

As previously mentioned, we no longer have a server addressable by its address, but multiple services.

These must be addressed in such a way that they are easily reachable by the `client` (usually a web application).

The problem is, in a `cluster` (swarm or k8s), we do not know where the services are. It would not be reasonable to expose all services on different ports.

```bash
# absolute request (to never do)
GET http://host:port/path1/path2?param1=value1&param2=value2
# relative request from root
GET /path1/path2?param1=value1&param2=value2
# relative request from path of current path (to avoid)
GET path2?param1=value1&param2=value2
```

This is not feasible. Imagine having to deliver each `client` with different `URLs` and manage all services with distinct ports. It would quickly become unmanageable.

Fortunately, `clusters` have their own `DNS` manager, the `ingress`. In the `cluster`, each microservice is identified by a fixed name.

The `ingress` will maintain the resolution of services by their name, regardless of the number of instances of it, their positions (multi-nodes), or their `IPs`. However, the `ingress` is not accessible from outside the `cluster`.

The `API Gateway` will be the sole agent that will enable resolving services in the `cluster` from the `client` who is outside the `cluster` (generally a web browser).

Imagine a web service `foo-service` deployed in the `cluster`. It exposes an endpoint `GET api/v1/bar`.

From outside the `cluster`, you of course want to access this `endpoint`. A web application (`HTML/CSS/JS`), probably itself from a microservice in the `cluster`.
This application does not directly know the `IP` or `DNS` of `foo-service`.
However, it knows how to query the server from which the application itself is issued.
Relatively, it can therefore query the service `./foo/api/v1/bar`. (note the prefix `foo` which may differ from the service name `foo-service`)
This request will arrive at the `API Gateway`, which knows that requests prefixed by `foo` should be redirected to the service `foo-service`. And there you have it.

Now that the primary interest of the `API Gateway` is touched upon. What does this imply?

Since it is located at the front of our application, it can take care of a number of things for us.

For example, the authentication and authorization part. Indeed, since the `API Gateway` is the gateway to our services, it seems a good choice to delegate this task to it.

### APP Gateway

Routing, the primary function of `API Gateways`, is (hopefully) very well handled by the market's `API Gateways`.
Sometimes this involves somewhat obscure configuration files, but why not.

However, their roles generally stop there. While most offer basic authentication mechanisms via hard-coded user files, this obviously cannot be used in production.

Moreover, the authorization part is limited to routes since these are the only objects known to the `API Gateway`.

Generally, all `API Gateways` propose connecting it to external services such as `KeyCloak` or `Okta` via `oauth2` to handle authentication and authorizations.
This is of course a good solution in itself to delegate this to a third-party service. But from our point of view, this greatly complicates the architecture of the application, especially for `on-premise` applications and even more so for applications that are installed in a private network (without internet).

The `APP Gateway` will therefore propose a certain number of services including the authentication and authorization part, turnkey.

