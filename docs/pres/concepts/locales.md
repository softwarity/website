---
title: Regional Settings
authors: fachache
tags: []
---

### Application Language

By default, `ARCHWAY` sets the `Accept-language` header to `en`, which means English.

`ARCHWAY` saves the user's chosen language. It also exposes APIs to retrieve the available languages in your business application and to set the user's chosen language.

You can associate a language with a microservice serving a `UI`. If you activate the `UserBtn` filter, the user will be able to choose their preferred language through it.

This will be saved in the user's preferences and will be transmitted in the user information sent to the microservices.

