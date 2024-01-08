---
slug: access-control
title: Contrôle d'accés
authors: fachache
tags: []
---

## Clients

Les clients de vos services, sont simplement les utilisateurs ou les services devant l'application.

Pour les clients humains, lorsqu'ils tente d'acceder à l'application, un ecran de login lui sera proposé.

Pour les clients qui sont eux mêmes des applications, un mecanisme d'authentification par ticket JWT lui sera proposé.

## RBAC

Le contrôle d'accès basé sur les rôles (RBAC) est un mécanisme de contrôle d'accès qui définit les rôles de chaque utilisateur.

ARCHWAY Propose un mécanisme simple pour les gérer. 

Cette gestion est dite à plat. En effet il existe des systèmes de gestion des rôles hierarchiques. Mais cela devient très rapidement difficile à gérer. Nous avont donc choisi une gestion non hierarchique des rôles.

## Rôles

Un rôle devrait par son nom évoqué l'action qu'il autorise et l'objet métier sur lequel il s'applique.  
Aussi les rôles devraient être le plus atomiques possibles.

Par exemple, il vaut mieux créer :

 - MANAGER_USER
 - VIEWER_USER
 - MANAGER_GROUP
 - VIEWER_GROUP

Plutôt que ceci: 

 - ADMIN
 - VIEWER
 
## Profils

Pour faciliter l'association des rôles aux utilisateurs une abstraction appelé profil permet de regrouper ces derniers.

Plusieurs rôles peuvent être associés à un profil et plusieurs profils peuvent être associés à un utilisateur.

Pour faire simple on imagine qu'un profil d'adminstrateur aura bien plus de rôles qu'un exploitant de l'application.

Un profil est donc un regroupement de rôles.

Ce sont les profils qui seront associés aux utilisateurs et non les rôles.

## Groupes

`ARCHWAY` propose aussi une notion de groupes. Ceux ci ne sont pas à confondre avec les profils. 

Les profils définissent les actions de que vous pouvez faire alors que les groupes permettrait de réduire la porté des éléments impactés par ces actions.

Par exemple imaginons une application gérant des stocks dans plusieurs pays. On peut aisément imaginer que modifier les stocks nécessite un rôle particulier `ROLE_UPDATE_ITEM`. Mais vous ne voulez pas que le gestionnaire du pays `A` modifie le stock du pays `B`. Aussi les deux gestionnaires auront peut être les même rôles, mais pas les même groupes. À vous bien sûr de récupérer cette information dans les informations utilisateur et de limiter les actions en fonction des groupes possédés par celui ci.

## Authentification à 2 facteurs

L'authentification 2 facteurs est un mécanisme permettant d'augmenter la sécurité des comptes utilisateurs.

Un QR Code est généré par le serveur. L'utilisateur le scanne avec son application d'authentification, comme google authentication ou Authy.

Aprés un succés d'authentification l'utilisateur est invité à saisir le code généré par l'application dédié. Ce code est contraint par le temps. 

L'utilisateur peut choisir d'enregistrer le navigateur comme de confiance. Ce qui évitera de redemander le code lors de sa prochaine connexion.
