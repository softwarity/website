---
title: Gateway
authors: fachache
tags: []
---

## Routes

Routes are the main elements of the `Gateway`. They are defined by a destination `URI`, a set of predicates, and a set of filters. A route is considered if the aggregated predicate is true.

:::note
The `URI` is generally the `DNS` of the microservice.
:::

## Predicates

Predicates are the operations that condition the route. If all predicates are evaluated to true, then the route is taken.

These predicates can be an `HTTP` header, a cookie, or something else, but it's generally an element of the path, the `path` of the request.

:::note
The first route whose all predicates are verified is taken. It is therefore important to pay attention to the order of the routes.
:::

## Filters

Filters allow modifying the flow.

We can distinguish 3 types of filters.

### Request Filters

Request filters modify the elements constituting the request before sending it to the microservice designated by the `URI`.

:::info
For example, the `stripPrefix=1` filter allows removing from the path the piece that would have served as a predicate.
:::

They also allow defining specific `HTTP` headers or other modifications before being transmitted to the target service.

### Response Filters

Response filters allow modifying the response returned by the target service.

:::info
This kind of filter can add a button in the `UI`.
:::

### Other Filters

Other filters are those that do not fit into the first two categories.

These are for example the filters for status modifications.

:::note
Most of the time you will set up a `path` type predicate with a `stripPrefix` request filter or a `host` type predicate.
:::

## Security

Security is an important component of `ARCHWAY`.

2 types of requirements can be defined:

 - Authentication is required
 - The necessity to possess a role (implicit authentication)

These requirements can be defined at 2 levels:

### Route Security

The 2 requirements can be defined at the route level.

This can be defined directly during the creation of the route.

### Endpoint Security

If the route exposes an endpoint allowing to retrieve the `open-api` specifications, `ARCHWAY` allows defining for each endpoint the security requirements.

## Practical Case

For example, consider the `foo-service` microservice that listens on port 3000.

The route could be:

- Predicate: `path=/foo/**` defining that all requests starting with `/foo/**` will be redirected to `foo-service`
But the `foo-service` does not have `foo` in its context path.
So we will use the request filter to remove this unnecessary part.
- Filter: `stripPrefix=1`
Now the web application that wants to request the `foo-service` can just request `/foo/...`

:::info
Thus the `API Gateway` will route the request `/foo/v1/item` to `http://foo-service:3000/v1/item`
:::

:::note
`ARCHWAY` can transmit user information to the `foo-service`
 - via `HTTP` headers
 - via a `JWT` token
:::

