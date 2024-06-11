---
slug: members
title: Members
authors: fachache
tags: []
---

As said previously, the members are the users who have access to the application in an organization. 

import Members from './img/members.png'

<img src={Members} alt="Members"/>

They can be added to the application here in the `Members` section of the current organization.

Use the button on the bottom right to add a new member or invite a user.

:::note
Adding a member to an organization implicitly adds a user.
The opposite is not true.
:::

If a user already exists, it is better to invite them instead of creating them.

## Create member

import CreateMember from './img/create-member.png'

<img src={CreateMember} alt="Create member" width="50%"/>

:::note 
The username and email must be unique.
:::

When you create member (as user), if the SMTP server is configured, the user will receive an email to confirm the creation of the account with a temporary password.

Else the password will be displayed in the UI. Give it to the user. He will have to change it at the first connection.

## Invite user

If the user exist already. You can't use the creation popup. This is to avoid any error. Like a username with a different email or other.

import InviteUser from './img/invite-user.png'

<img src={InviteUser} alt="Invite user" width="50%"/>

## Add member in groups

After adding a member, you can add him to groups.

For that, use the checkboxes between the group and the member.

## Group management

You can also create and modify groups as needed. Managing groups allows you to control member access and permissions within the organization more effectively.

## Create Group

To create a new group, use the button on top right of the table, in the header.

## Modify Group

To modify an existing group, use the button in the header of each group.

## Delete Group

To delete an existing group, use the button in the header of each group.




