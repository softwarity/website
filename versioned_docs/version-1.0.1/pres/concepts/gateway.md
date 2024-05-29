---
title: Gateway
authors: fachache
tags: []
---

## Routes

Les routes sont les éléments principals de la `Gateway`. Elles sont définis par un `URI` de destination, un ensemble de prédicats et un ensemble de filtres. Une route est prise en compte si le prédicat agrégé est vrai.

:::note
L'`URI` est en général le `DNS` du microservice.
:::

## Prédicats

Les prédicats sont les opérations qui conditionnent la route. Si tous les prédicats sont evalué à vrai alors la route est empruntée.

Ces prédicats peuvent être un entête `HTTP`, un cookie ou autre, mais c'est généralement un élement du chemin, le `path` de la requête.

## Filtres

Les filtres permettent de modifier le flux.

Nous pouvons distinguer 3 sortes de filtres.

### Les filtres de requêtes

Les filtres de requêtes modifient les élements constituant la requête avant de l'envoyer au microservice désigné par l'`URI`.

:::info
Par exemple le filtre de `stripPrefix=1` permet de supprimer du chemin le morceau qui aurait servit de prédicat.
:::

Ils permettent aussi de définir des entêtes `HTTP` spécifique ou autre modifications avant dêtre transmit au service cible.

### Les filtres de réponses

Les filtres de réponses permettent quand à eux de modifier la réponse retournée par le service cible.

### Les autres filtres

Les autres filtres, sont les filtres qui ne rentrent pas dans les 2 premières catégories.

Ce sont par exemple les filtres de modifications de status.

:::note
La plupart du temps vous parametrerez un prédicat de type `path` et un filtre de requête `stripPrefix`.
:::

## Securité

La sécurité est une composante importante de `ARCHWAY`.

3 type d'exigences peuvent être définit

 - L'authentification est exigée
 - La nécessité de posseder un rôle (authentification implicite)
 - L'accés est réservé seulement à certain utilisateurs (authentification implicite)

Ces exigences peuvent être définit à 2 niveaux

### Sécurité de la `route`

Les 3 exigences peuvent être définit au niveau de la route.

Ceci peut être définit directement lors de la création de la route

### Sécurité des `endpoints`

Si la route expose un enpoint permettant de récuperer les specifications `open-api`, `ARCHWAY` permet de définir pour chaque endpoint les exigences de sécurité.

## Cas pratique

Par exemple, considérons le microservice `foo-service` qui ecoute sur le port 3000.

La route pourrait être :

- Prédicat: `path=/foo/**` définissant que toutes les requêtes commencant par `/foo/**` devront être redirigée vers `foo-service`
Mais le service `foo-service` n'a pas dans sont chemin de contexte `foo`.
On va donc utiliser le filtre de requête pour enlever cette partie superflue.
- Filtre: `stripPrefix=1`
Maintenant l'application web qui voudra requêter le service `foo-service` pourra juste requêter `/foo/...` 

:::info
Ainsi l'`API Gateway` routera le requête `/foo/v1/item` vers `http://foo-service:3000/vi/item`
:::

:::note
`ARCHWAY` pourra en plus exigé que l'initiateur de la reuquête soit authentifié. Et pourra transmettre les informations utilisateurs au service `foo-service`
 - via des entêtes `HTTP`
 - via un token `JWT`
:::

