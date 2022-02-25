---
id: update-user-profile
title: Update User Profile
sidebar_label: Update User Profile
---


This action will instruct the module to update only fields in the profile of current user that are specified in the action (default or additional ones). Important! Note that profile property names are case sensitive!

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| User Identifier | The user identifier (UserId, username or email) that you want to update. Leave empty to update the current user. Supports My Tokens | Yes | None |
| Password Field | Select a field to update the password of the user or use expressions to input a custom password. Expressions also supports My Tokens (for example [Email]). | Yes | None |
| Also update Display Name with | Select a field to update the Display Name of the user or use expressions to input a custom display name. Expressions also supports My Tokens (for example [Email]). | Yes | None |
| Update Email with | Select an email field from the form to set as the current user email. Expressions also supports My Tokens (for example [Email]). | Yes | None |
| Additional User Properties | Set here additional user profile properties that should be included in the update process. | No | None |
