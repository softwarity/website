---
title: Organization
authors: fachache
tags: []
---

Organizations enable the management of multitenancy.

By introducing the organization, `ARCHWAY` allows for centralized management of an organization's resources.

The information of an organization `id` and `name` will be transmitted along with user information.

## Organization

Organizations are entities that generally allow for the segregation of an organization's resources.

A user connected within an organization should not be able to access resources from another organization.

## Groups

Within an organization, administrators can define user groups.

User groups can be associated with one or more roles.

Depending on the mode `SINGLE` or `MULTIPLE`.

  - `SINGLE` The user will have to choose one of the groups they belong to. They will have all the roles associated with the chosen group.
  - `MULTIPLE` The user will end up with all the roles from the groups they belong to.



