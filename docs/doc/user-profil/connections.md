---
slug: connections
title: Connections
authors: fachache
tags: []
---

Connections history allows you to check the legitimacy of connections.

![Connections](./img/connections.png)

You will therefore see here, the authentications that have succeeded SUCCESS and the one who failed FAILED.

## Table columns

**Organization**: The organization for which the connection was made.(Can be empty in case of failure)

**Browser MFA**: If the MFA (Multi Factor Authentication) is activated, this column allows us to know whether the browser having initiated this authentication required or not of a MFA validation. Indeed you can define that a browser is considered to be trusted and therefore does not need MFA.

**From**: IP V4 or V6 of the machine that initiated authentication

**Agent**: Information from the customer who has initiated authentication, generally browser information.

**Type**: The type of authentication used: FORM, TOKEN, JWT, OAUTH2

**Status**: The result of the authentication attempt, with the cause if it failed.

**Created at**: The date of the connection

## Details

In the organization column, a button allows you to see the detail of the connection.

## Trusted browser

In the Browser MFA column, you can add or delete the browser caused the connection of the confidence browser list.