---
slug: created
title: Activation de la route
authors: fachache
tags: []
---

Une fois la route sauvegardée, cette dernière n'est pas activée.

En effet l'ordre des routes a son importance, car elles sont jouée dans l'ordre.

Aussi placer en premier une route qui aurait comme prédicat `path=/**` rendrait toutes les autres routes inopérantes.

![created](img/route-created.png)

## Activation

![created](img/route-activated.png)

Voilà la route est créée et activée. Nous pouvons maintenant la tester.