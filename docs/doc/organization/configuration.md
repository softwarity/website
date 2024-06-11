---
slug: configuration
title: Configuration
authors: fachache
tags: []
---

import Configuration from './img/configuration.png'

<img src={Configuration} alt="Configuration" style={{height: '48em', float: 'left', marginRight: '3em'}}/>

## Organization name

You can modify the name of the organization here.

The id of the organization remains unchanged.

During the user's information is sent to the microservice, the id and the name of the organization are included. **See [member infos](../member-infos) for more details**

:::warning
Use the id and not the name to discriminate data by organization.
:::


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

## Disable organization

If you are owner of the organization, you can disable here.

## Delete organization

If you are owner of the organization and you disabled it before, you can delete here.

:::info
Delete an organization does not remove users.
:::

### Changement du mode de gestion des groupes.

import ChangeGroupMode from './img/change-group-mode.png';

<img src={ChangeGroupMode} alt="change-group-mode" width="400px" />

:::note
Change group mode will remove all tokens in this organization, for all users
:::

## Business access

Business access rules define when a user can connect to the application.

This can be useful if you want to limit access to the application at certain hours or days only.  

Business access can be defined on 3 levels.

- Application level
- Organization level
- Member level

For users you will be able to limit access between two dates.

See [Business access](../business-access) for more details.

## Sessions time

Sessions time rules define the time of session.

Sessions time can be defined on 3 levels.

- Application level
- Organization level
- Member level

See [Sessions](../sessions) for more details.


