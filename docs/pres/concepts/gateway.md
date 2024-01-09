---
title: Gateway
authors: fachache
tags: []
---

## Routes

Les routes sont les éléments principals de la `Gateway`. Elles sont définis par un URI de destination, un ensemble de prédicats et un ensemble de filtres. Une route est prise en compte si le prédicat agrégé est vrai.

L'URI est en général le `DNS` du microservice.

## Prédicats

Les prédicats sont les opérations qui conditionnent la route. Si tous les prédicats sont evalué à vrai alors la route est empruntée.

Ces prédicats peuvent être un entête `HTTP`, un cookie ou autre, mais c'est généralement un élement du chemin, le `path` de la requête.

## Filtres

Les filtres permettent de modifier le flux.

Nous pouvons distinguer 3 sortes de filtres.

 - Les filtres de requêtes

Modifie les élements constituant la requête avant de l'envoyer au microservice.

Par exemple le filtre de stripPrefix=1 permet de supprimer dans le chemin le morceau qui aurait servit de prédicat.

Ils permettent aussi de définir des entêtes `HTTP` spécifique ou autre modifications avant dêtre transmit au service cible.

 - Les filtres de réponses

Les filtres de réponses permettent quand à eux de modifier la réponse retourner par le service cible.

 - Les autres filtres

Les autres filtres, sont les filtres qui ne rentrent pas dans les 2 premières catégories.

Ce sont par exemple les filtres de modifications de status.