---
id: user-registration
title: User Registration
sidebar_label: User Registration
---


This action will create a new user account. The form must contain at least an username or email address. The password can be collected via a password field or randomly generated. On successfull registration, access user info using the [NewUserId] and [User:*] tokens (for example [User:UserID] or [User:FirstName]).

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Username | Can contain My Tokens | Yes | None |
| Register with email | When this option is disabled, email will be used as username for registration. | No | None |
| Password | Can contain My Tokens | Yes | None |
| Generate random password | Enable this option to have our module generate a random password. This basically replaces the password fields. The generated password is stored in [RegRandomPass] token so you can use it for example in an email action. | No | None |
| Email | Can contain My Tokens | Yes | None |
| First Name | Can contain My Tokens | Yes | None |
| Last Name | Can contain My Tokens | Yes | None |
| Send standard DNN registration email | When this option is enabled, our module will use the standard registration email from DNN. For custom emails, disable this option and add Email actions. | No | None |
| Login if user already exists | When this option is enabled, instead of throwing an error, our module tries to login the user using the username and password provided. If authentication is successfull, then the module continues with the rest of the actions. | No | None |
| Authorize users who register with this form. | When this option is enabled, users that will register with this module will be authorized. | No | Authorize |
