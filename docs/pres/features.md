---
slug: features
title: Fonctionnalités
authors: fachache
tags: []
---

Nous allons ici essayer de presenter rapidement les fonctionnalités prise en charge par ARCHWAY. 

À noter que toutes ces fonctionnalitées sont accessibles via l'interface utilisateur

### Gestion des routes

`ARCHWAY` est basé sur [Spring Cloud Gateway](https://spring.io/projects/spring-cloud-gateway/).

Aussi il propose la plupart des fonctionnalités fournit par ce dernier.

C'est le minimum...

 - Définission des conditions de la route (Prédicats)
 - Modification des requêtes (Filtres)
 - Modification des reponses (Filtres)

Il rajoute en plus un mécanisme simple pour sécuriser ces dernières.

### Gestion des utilisateurs

`ARCHWAY` permet de gérer les utilisateurs des applications et services derriere l'`APP Gateway`.

Entre autre: 
 - Information utilisateur
 - Gestion de la politique des mots de passe (complexité, echecs, changement)
 - blocage
 - Gestion des plages de dates et horaires autorisées.

### Authentification et autorisation

`ARCHWAY` propose clé en main un mécanisme d'authentification et autorisations de type `RBAC` (contrôle d'accès basé sur le rôle).

Ceci vous permettra d'utiliser facilement les rôles pour sécuriser vos routes, services et endpoints.

 - Gestion en base
 - Connexion à un serveur LDAP
 - Changement de mot de passe à date
 - Authentification à deux facteurs

### Profils

Pour faciliter la gestion des utilisateurs une abstraction appelé profil permet de regrouper les rôles.

Plusieurs rôles peuvent être asosciés à un profil et plusieurs profils peuvent être associés à un utilisateur.

Pour faire simple on imagine qu'un profil d'adminstrateur aura bien plus de rôles qu'un exploitant de l'application.

### Groupes

ARCHWAY propose aussi une notion de groupes. Ceux ci ne sont pas à confondre avec les profils. 

Les profils définissent les actions de que vous pouvez faire alors que les groupes permettrait de réduire la porté des éléments impactés par ces actions.

Par exemple imaginons une application gérant des stocks dans plusieurs pays. On peut aisément imaginer que modifier les stocks nécessite un rôle particulier `ROLE_UPDATE_ITEM`. Mais vous ne voulez pas que le gestionnaire du pays `A` modifi le stock du pays `B`. Aussi les deux gestionnaires auront peut être les même rôles, mais pas les même groupes. ã vous bien sûrt de récuperer cette information dans les informations utilisateur et de limiter les actions en fonciton des informations stockés dans les groupes.

### Locales

Comme nous allons le voir plus loin `ARCHWAY` transmet dans les requête `HTTP` les informations de l'utilisateur connecté.
`ARCHWAY` positionne aussi la langue préféré de l'utilisateur. 

`ARCHWAY` permet de gérer ces langues et via des services `REST` d'interargir avec.

### Coffre-fort

`ARCHWAY` propose un coffre-fort comme le propose `AshiCorp Vault` mais en plus simple.

Le coffre-fort gére des secrets qui sont cryptés en base et des valeurs en claires.

Vous pouvez ajouter une date de péremption aux éléments cryptés pour être informé de la nécessité de les mettre à jour. 

De plus les élements chiffrés ne sont jamais affichés dans l'interface, ce qui permet d'éviter certaines déconvenues.

Les éléments stockés dans le coffre-fort peuvent être utilisé dans differents endroits identifiés par cette icone : ![vault](/img/vault.svg)


