---
id: clear-user-cache
title: Clear User Cache
sidebar_label: Clear User Cache
---


This action requires an email or username field and a password field to be present in the form in order to login the user. On successfull login, access user info using the [User:*] tokens (for example [User:UserID] or [User:FirstName]).

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| User | User ID, username or email of the user for which the cache needs to be refreshed. | No | None |
| Clear users loaded in context. | Enable this option to also clear cache for all users loaded in context, for example using the Context &gt; Load Users actions. | No | None |
