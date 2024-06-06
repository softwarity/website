---
slug: configuration
title: Configuration
authors: fachache
tags: []
---

## Group mode 

Groups mode management

`ARCHWAY` provides an abstraction of roles called `Group`. 

A group is a collection of roles. A role is a functional right defined in your microservices/applications. 

Two modes of operation are possible.

### Group mode `MULTIPLE`

In this mode, when a user belongs to multiple groups, he will have all the rights of the groups.

`MULTIPLE` mode combines all group permissions for the user.

### Group mode `SINGLE`

In this mode, when a user belongs to multiple groups, he will have to select the group to use.

`SINGLE` mode requires a user with multiple groups to select one after choosing an organization.

### Changement du mode de gestion des groupes.

import ChangeGroupMode from './img/change-group-mode.png';

<img src={ChangeGroupMode} alt="change-group-mode" width="400px" />

:::note
Change group mode will remove all tokens in this organization, for all users
:::