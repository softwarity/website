---
slug: access-control
title: Contrôle d'accés
authors: fachache
tags: []
---

## Clients

Les clients de vos services, sont simplement les utilisateurs ou les services devant l'application.


### Utilisateurs

Pour les clients humains, lorsqu'ils tentent d'acceder à l'application, un ecran de login leur sera proposé.

### Services tiers

Pour les clients qui sont eux mêmes des applications, un mecanisme d'authentification par ticket `JWT` lui sera proposé. Plus particulièrement 2 `endpoints`:

 - Un `endpoint` pour s'authentifier.

 - Un `endpoint` pour rafraichir le tocken d'authentification.

## RBAC

Le contrôle d'accès basé sur les rôles (RBAC) est un mécanisme de contrôle d'accès qui définit les rôles de chaque utilisateur.

`ARCHWAY` Propose un mécanisme simple pour les gérer. 

Cette gestion est dite à plat. En effet il existe des systèmes de gestion des rôles hierarchiques. Mais cela devient très rapidement difficile à gérer. Nous avont donc choisi une gestion non hierarchique des rôles. Un mécanisme appelé `Profile` d'écrit plus loin permet néanmoins de regrouper les rôles.

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

Ce sont les profils qui seront associés aux utilisateurs et non directements les rôles.

## Groupes

`ARCHWAY` propose aussi une notion de groupes. Ceux ci ne sont pas à confondre avec les profils. 

Les profils définissent les actions de que vous pouvez faire alors que les groupes permettrait de réduire la porté des éléments impactés par ces actions.

Par exemple imaginons une application gérant des documents avec des niveaux d'accréditations différents.
 
 - SECRET
 - CONFIDENTIAL
 - PUBLIC

On pourrait créer des groupes, images de ces niveaux d'accréditations.

Les groupes possédés par l'utilisateur courant pouront être transmis aux microservices via des entêtes `HTTP` ou via un ticket `JWT`.

En charge du microservice d'intégrer les groupes ainsi transmis dans les APIs exposés.

## Organisations (multi-tenant)

À venir

## Authentification à 2 facteurs

L'authentification 2 facteurs est un mécanisme permettant d'augmenter la sécurité des comptes utilisateurs.

Un QR Code est généré par le serveur. L'utilisateur le scanne avec son application d'authentification, comme google authentication, Authy ou autre.

Aprés un succés d'authentification l'utilisateur est invité à saisir le code généré par l'application dédié. Ce code est contraint par le temps. 

L'utilisateur peut choisir d'enregistrer le navigateur comme de confiance. Ce qui évitera de redemander le code lors de sa prochaine connexion.
