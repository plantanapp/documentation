---
id: user-registration-obsolete
title: User Registration (Obsolete)
sidebar_label: User Registration (Obsolete)
---


This action will create a new user account. The form must contain at least an username or email address. The password can be collected via a password field or randomly generated. On successfull registration, access user info using the [NewUserId] and [User:*] tokens (for example [User:UserID] or [User:FirstName]).

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Email as Username | When this option is disabled, Action Form looks for a username field in the form. | No | None |
| Generate random password | Enable this option to have Action Form generate a random password. This basically replaces the password fields. The generated password is stored in [RegRandomPass] token so you can use it for example in an email action. | No | None |
| Send standard DNN registration email | When this option is enabled Action Form will use the standard registration email from DNN. For custom emails, disable this option and add Email actions. | No | None |
| Login if user already exists | When this option is enabled, instead of throwing an error Action Form tries to login the user using the username and password provided. If authentication is successfull, then Action Form continues with the rest of the actions. | No | None |
| Authorize users who register with this form. | When this option is enabled, users that will register with this Action Form will be authorized. | No | Authorize |
