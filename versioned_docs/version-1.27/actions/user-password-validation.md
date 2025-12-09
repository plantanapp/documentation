---
id: user-password-validation
title: User/Password Validation
sidebar_label: User/Password Validation
---


Checks the User/Password combination to see if it is valid. Warning: This action sends the user and password values back to the server in plain text. To ensure your website security it is recommended to use it only when the site is served through HTTPS.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Username | Supports My Tokens | Yes | None |
| Password | Supports My Tokens | Yes | None |
| Validate user role |  | No | None |
| Output Token | This is the token name that the result will be stored in. The verification will not be performed if no token name is provided. | No | None |
