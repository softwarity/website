---
slug: profiles
title: Gestion des accès
authors: fachache
tags: []
---

2 profils sont définis par défaut pour gérer les accés à l'interface utilisateur.

## ARCHWAY_Amin

L'administrateur de `ARCHWAY` gére tout ce qui attrait au routes et option non lié aux applications hébergées dans le cluster.

## APP_Amin

L'administrateur d'application peut lui en revanche gérer tout se qui attrait aux applications, comme les utilisateurs, les profils, les groupes.

| Objets/Profiles | ARCHWAY_Admin | APP_Amin |
|-|:-:|:-:|
| User | R | RW |
| Role | RW | R |
| Profile | | RW |
| Groupe | | RW |
| Route | RW | |
| Locale | RW | |
| VaultItem | RW | |

# Modules

Liste des modules UI de `ARCHWAY`

- Access management: Permet de gérer les utilisateurs, de créer, profils et groupes. D'associer les rôles aux profiles. Mais pas de créer les rôles.
- Route management: Permet de gérer les routes des microservice gérés par `ARCHWAY`.
- Locale management: Permet d'associer les langues acceptées par les routes dites localisées.
- Role management: Permet de créer les rôles, cela est fait en amont de la gestion des utilisateurs.

