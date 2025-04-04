---
id: alter-folder-permissions
title: Alter Folder Permissions
sidebar_label: Alter Folder Permissions
---


Alter folder permissions. You can overwrite the old permissions or just append new ones

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Folder | Input a folder ID or a folder path to change the permissions for. Supports Tokens | No | None |
| Append New Permissions | Check this if you want just to add the new permissions configured below. Otherwise all the permissions are overwritten. | No | None |
| Permissions | Append permission for an user or a roleAlso, you can create a new permission for a role and a single user simultaneously, but it is highly recommended to separate themAll fields can contain contextual tokens (for example [Email]) and Tokens. | No | None |
