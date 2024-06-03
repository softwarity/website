---
slug: role-group
title: Role and group
authors: fachache
tags: []
---

At this stage we have:

 - a role: `HTTPBIN_TESTER`
 - a route: `httpbin` secured by this role.
 - an organization: `MAIN` (auto created on setup phase)
 - 5 groups: (auto created on setup phase) named `GROUP_0` to `GROUP_4`
 - And we are inside it

On va maintenant ajouter au `GROUP_0` le rôle `HTTPBIN_TESTER` et devenir membre de ce groupe.

Go to the `MAIN` page which allows you to administer the organization.

Then select the `Groups` section.

Check the checkbox between `HTTPBIN_TESTER` and `GROUP_0`.

![role-in-group](../img/role-in-group.png)

