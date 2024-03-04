---
slug: files
title: Fichiers
authors: fachache
tags: []
---

:::info
# BUSINESS EDITION   
Cette fonctionnalité n'est accessible que dans la version business
:::

## Principe

Si `ARCHWAY` a pour ambition d'être entierement configurable via son `UI`. Une fois cette configuration faite, `ARCHWAY` permet d'exporter les differentes configuration pour pouvoir les initialiser lors de la mise en production sans avoir à reconfigurer les `routes` et autre paramétres.

Les fichiers de configuration n'ont pas vocation tous à être modifier manuellement. Certain comme les routes sont assez compliqués. En revanche les exports des élement du coffre fort (`Vault`) et les utilisateurs auront besoin d'être modifier avant export. En effet les valeurs encrypter, comme les mots de passe ne seront pas exporter. Il conviendra de définir les valeurs voulues avant de les importer, que se soit par l'interface utilisateur ou par le systéme de fichiers.

Pour les mot de passe utilisateurs en particulier, il conviendra de renseigner le password. Celui ci sera noté comme tempraire pendant 7 jours max.

## Procédure

Dans les interfaces de gestion correspondantes, un bouton permet d'exporter individuellement chaque configuration. (Un autre permet aussi d'importer la configuration ainsi exportée)

## Exports pris en charge

- Les routes ✔
- Les utilisateurs ✔
- Les rôles ✔
- Les profiles
- Les groupes
- Les élements du Vault ✔
- Configuration Smtp
- Configuration Ldap
- Configuration des policies (passwords et heures d'accés)

## Montage des fichiers dans le container.


