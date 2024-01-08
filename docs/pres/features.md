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

Tout ceci peut se faire directement à partir de l'interface utilisateur ou à partir de fichiers de configuraitons.

### Gestion des utilisateurs

`ARCHWAY` permet de gérer les utilisateurs des applications et services derriere l'`APP Gateway`.

Entre autre: 

 - Informations utilisateur
 - Gestion de la politique des mots de passe (complexité, echecs, changement)
 - Blocage
 - Gestion des plages de dates et horaires autorisées.

### Authentification et autorisation

`ARCHWAY` propose clé en main un mécanisme d'authentification et autorisations de type `RBAC` (contrôle d'accès basé sur le rôle).

Ceci vous permettra d'utiliser facilement les rôles pour sécuriser vos routes, services et endpoints.

En quelques points: 

 - Gestion des utilisateurs en base
 - Prise en charge de LDAP
 - Changement de mot de passe à date
 - Répudiation des utilisateurs
 - Authentification à deux facteurs
 - Notion de profils et groupes

### Locales

Comme nous allons le voir plus loin `ARCHWAY` transmet dans les requête `HTTP` les informations de l'utilisateur connecté.

`ARCHWAY` positionne aussi la langue préféré de l'utilisateur. 

il vous permet de gérer les langues et via des services `REST` d'interargir avec.

### Coffre-fort

`ARCHWAY` propose un coffre-fort comme le propose `AshiCorp Vault` mais en plus simple.

Le coffre-fort gére des secrets qui sont cryptés en base et des valeurs en claires.

Vous pouvez ajouter une date de péremption aux éléments cryptés pour être informé de la nécessité de les mettre à jour. 

De plus les élements chiffrés ne sont jamais affichés dans l'interface, ce qui permet d'éviter certaines déconvenues.

Les éléments stockés dans le coffre-fort peuvent être utilisé dans differents endroits identifiés par cette icone : ![vault](/img/vault.svg)


