---
id: user-login
title: User Login
sidebar_label: User Login
---


This action will search in the form for the username and email fields, which can be either of the type found under the User tab or simple Text boxes with the ID set to username/password. The Password field must be of type 'Password', which is found under the Security tab. On successfull login, access user info using the [User:*] tokens (for example [User:UserID] or [User:FirstName]).

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Try Email as Username | When this option is enabled, Action Form looks for email - password match. | No | None |
