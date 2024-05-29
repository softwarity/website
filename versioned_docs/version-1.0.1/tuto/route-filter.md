---
slug: filter
title: Ajouter des filtres
authors: fachache
tags: []
---

Nous avons définit comme prédicat de route le chemin `/httpbin/**`.   

Cela signifie que si je fais:

```bash
curl http://localhost:8080/httpbin/get
```
Je m'attends à ce que cela me réponde de la même maniere que si je faisais: 

```bash
curl http://httpbin.org/get
```

Mais dans l'etat actuel c'est ceci qui sera joué.

```bash
curl http://httpbin.org/httpbin/get
```

Ce n'est pas ce que l'on souhaite.

Pour fixer cela il faut rajouter un filtre de requête qui va supprimer le préfixe qui nous à permis de conditionner la route.

Pour se faire nous allons utiliser le filtre `stripPrefix` avec la valeur 1 (suppression d'un élement).

![connection](img/create-route-filter-1.png)

Enfin nous allons activer la transmission des informations utilisateurs via un ticket `JWT` signé.

![connection](img/create-route-filter-2.png)

:::warning
Pensez à sauvegarder la route.
:::
