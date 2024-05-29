---
slug: route-predicate
title: Définir le prédicat
authors: fachache
tags: []
---

Nous devons définir maintenant la condition d'exécution de la route.   

## Définir la condition de la route

Allons dans l'onglet `Predicates`

:::info
`ARCHWAY` propose une collection de prédicats pour la plupart issues du framework sur lequel il se base `Spring cloud gateway`.
:::

### Ajouter un prédicat de type `Path`

Saisisez `/httpbin/**`

Cela veut dire que toutes les routes qui commenceront par `/httpbin/**` exécuteront cette route.

![connection](img/create-route-predicate-1.png)

Saisissez `httpbin` dans le champ `link`.   
Puis `spec.json` dans le champ `open api`.

:::tip
La saisie d'un nom dans le champ `link`, permettra d'acceder à cette route directement dans l'écran d'administration.
:::

:::tip
Si la cible de la route expose un fichier `open-api`, cela permettra d'y accéder directement à travers l'interface `swagger-api` intégrée.
:::

![connection](img/create-route-predicate-2.png)