---
slug: contents
title: Table of contents
authors: fachache
tags: []
---

In this tutorial, we will see how to install `ARCHWAY`, create, secure a route, and test it.

The goal is to see quickly an complete use case.

First, we will install `ARCHWAY`.

Next, we will create a role to access the route.

:::note
The role can be created durring the creation of the route, before or later.
::: 

Then we will create a route to `httpbin.org`.

:::note
`httpbin` is a simple online service that returns the `HTTP` data it receives, such as requests and headers. 
It is often used to test HTTP clients and libraries because it allows you to see exactly what data is sent and how it is received.
The advantage here is that `httpbin` exposes both a frontend and APIs.
:::

We will create a `MAIN` organization, which will be the default organization and a group with the role for access to the route.

Finally, we will test it.

 - via the `swagger-ui` interface to see if we can access the route.
 - via the `httpbin` interface
 - via a secure API call using a `JWT` ticket

