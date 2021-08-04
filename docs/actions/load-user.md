---
id: load-user
title: Load User
sidebar_label: Load User
---


Actions are run in the context of a user. It could be the current user performing the submit or it could be the result of other actions. This lets you manually set a user.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| User Identifier | This could be the user ID, username or email. Can contain tokens (for example [Email]) and My Tokens. One common scenario is to use [QueryString:UserId] to read the user from the URL via My Tokens. | Yes | None |
| Portal Id | This could be the portal ID or portal name. Can contain tokens (for example [Email]) and My Tokens. Leave it empty to search for a user in all portals. | Yes | None |
