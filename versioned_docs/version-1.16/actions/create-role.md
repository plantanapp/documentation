---
id: create-role
title: Create Role
sidebar_label: Create Role
---


Creates a new role in the current portal.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Role Name | The name of the role that will be created. Can contain My Tokens. | Yes | None |
| Role Description | The description of the role that will be created. Can contain My Tokens. | Yes | None |
| Role Group Identifier | The identifier of the group that will be assigned to the role. You can use a group name or a group ID, it defaults to the id that represents no role group assigned (-1) if nothing is provided. Can contain My Tokens. | Yes | None |
| Role Status | The status of the role that will be created. If you use an expression, the values accepted are -1 (Pending), 0 (Disabled), 1 (Approved). Can contain My Tokens. | Yes | None |
| Add to existing users | Add this newly created role to existing users. A value of "true" or "false" should be provided, it defaults to false if no input is received. Can contain My Tokens. | Yes | None |
| Auto Assign | Assign the newly created role to all users that will register on the portal. A value of "true" or "false" should be provided, it defaults to false if no input is received. Can contain My Tokens. | Yes | None |
| Is Public | Is a public role. A value of "true" or "false" should be provided, it defaults to false if no input is received. Can contain My Tokens. | Yes | None |
| Output Token Name | Provide a token to save the Role Id in. | No | None |
