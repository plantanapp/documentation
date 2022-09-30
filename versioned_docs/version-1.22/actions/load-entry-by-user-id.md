---
id: load-entry-by-user-id
title: Load Entry (by User ID)
sidebar_label: Load Entry (by User ID)
---


This action looks up the most recent submission of a user and redirects to the form with a specific record already loaded. Submiting the form will update that record instead of creating a new one.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| UserId | An user ID, username or email address that identifies the user. Leave blank to load data for current user. Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
