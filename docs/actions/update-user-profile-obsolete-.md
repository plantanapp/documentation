---
id: update-user-profile-obsolete-
title: Update User Profile (Obsolete)
sidebar_label: Update User Profile (Obsolete)
---


This action will update fields in the profile of the current user, or the user specified through the User Identifier parameter. It will search in the context for tokens matching the names of the profile properties. It will try to match profile properties both with and without spaces between words.Important! Note that profile property names are case sensitive!

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| User Identifier | The user identifier (UserId, username or email) that you want to update. Leave empty to update the current user. Supports My Tokens | Yes | None |
| Allow password update | If there's a password field on the form, Action Form will also update the password for the current user. | No | None |
| Also update Display Name with | Select a field to update the Display Name of the user or use expressions to input a custom display name. Expressions also supports My Tokens (for example [Email]). | Yes | None |
| Update Email with | Select an email field from the form to set as the current user email. Expressions also supports My Tokens (for example [Email]). | Yes | None |
| Overwrite Images | If the form contains upload fields that map to user profile, such as the Photo property, enabling this option will have Action Form overwrite existing file instead of creating a new one. | No | None |
| Ignored Properties | Set here the user profile properties that should be ignored in the update process. Put only one property per row. | No | None |
