---
id: user-registration-obsolete
title: User Registration (Obsolete)
sidebar_label: User Registration (Obsolete)
---


This action will create a new user account. The form must contain at least an username or email address. The password can be collected via a password field or randomly generated. On successfull registration, access user info using the [NewUserId] and [User:*] tokens (for example [User:UserID] or [User:FirstName]).

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Username Field | Which of the input parameters is the username field. | No | None |
| Password Field | ... and which is the password field. | No | None |
| Email Field | And of course, don't forget the email field. They don't make them without emails anymore. | No | None |
| Generate random password | Enable this option to have DNN Api Endpoint generate a random password. This basically replaces the password fields. The generated password is stored in [RegRandomPass] token so you can use it for example in an email action. | No | None |
| Send standard DNN registration email | When this option is enabled DNN Api Endpoint will use the standard registration email from DNN. For custom emails, disable this option and add Email actions. | No | None |
