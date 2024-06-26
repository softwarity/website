---
slug: business-access
title: Business access
authors: fachache
tags: []
---

You can restrict when users can access services behind `ARCHWAY` at 3 different levels.

 - Globally at the application level
 - At the organization level
 - At the organization member level (within an organization)

The most specific configuration takes precedence.

This means that if you have set a restriction at the member level, it will take precedence over the organization level restriction, which in turn will take precedence over the global application restriction.

By configuring these restrictions, you can define a time range during which the member is allowed to access the application, as well as the days of the week.

:::note
The member-level restriction can be complemented by a date range.
This can be useful for a temporary collaborator to whom you want to limit access to a start and end date.
:::

:::note
The calculation of restrictions takes into account the time zone defined on the restriction AND the user's time zone.
This is why the user cannot change their time zone.
:::

## Globally

In the main top bar, click on `Application`. At the bottom left of the interface, click on `Configuration` then open the `Business Access` section.

import Global from './img/global-business-access.png'

<img src={Global} alt="Global"/>

:::warning
Be sure to save the changes before leaving the page.
:::

## Organization level

import BusinessAccessIcon from './img/business-access-icon.png'

In the main top bar, click on the name of the organization (here `MAIN`). Click on the icon <img src={BusinessAccessIcon} alt="BusinessAccessIcon"/>. 

import Organization from './img/organization-business-access.png'

<img src={Organization} alt="Organization"/>

## Member level

Finally, you can specifically restrict access to a member within the organization.

Still in the main top bar, click on the name of the organization (again `MAIN`). Then select `Members` on the left.
In the members table, hover over the member whose restrictions you want to modify. A button bar appears. Click on the icon <img src={BusinessAccessIcon} alt="BusinessAccessIcon"/>.

import Member1 from './img/member-business-access-1.png'

<img src={Member1} alt="Member"/>

import Member2 from './img/member-business-access-2.png'

<img src={Member2} alt="Member"/>

:::note
To set restrictions at the organization or member level, you must uncheck the `The access rules are inherited` option.
:::