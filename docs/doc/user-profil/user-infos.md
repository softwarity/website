---
slug: user-infos
title: User infos
authors: fachache
tags: []
---

import Pi from './img/personal-infos.png';

<img src={Pi} alt="personal-infos" width="500px" />

## Manage MFA

:::note 
This feature is only available for db users
:::

import Mfa from './img/mfa-dialog.png';

<img src={Mfa} alt="mfa-dialog" width="300px" />

Download the authenticator for your device.

Scan the QR code with your authenticator app.

Enter the secret key from your authenticator app and valid.

On the next login, `ARCHWAY` will ask you for the MFA code from your authenticator app. You can also set that the browser

## Update password

:::note 
This feature is only available for db users
:::

import Pwd from './img/password.png';

<img src={Pwd} alt="password" width="300px" />

:::info
Password should have follow rules defined in [password policy](/doc/password-policy) 
:::

## Personal infos

  You can edit your username, email, full name.
  
  - `full name` is editable for all user.
  - `email` is not editable for `oauth2` users.
  - `username` is not editable for `LDAP` users.
  - `username` and `email` should be unique.

## Define target host

Target host is manage on 2 levels.

See [target-host](/doc/target-host) for more details.

