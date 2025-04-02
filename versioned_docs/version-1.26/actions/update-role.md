---
id: update-role
title: Update Role
sidebar_label: Update Role
---


Updates a role on the current portal

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Role Identifier | The identifier of the role that will be updated. You can use a role name or a role ID. Can contain My Tokens. | Yes | None |
| Role Group Identifier | The identifier of the group that will be assigned to the role. You can use a group name or a group ID, nothing changes if no input is received. Can contain My Tokens. | Yes | None |
| Role Name | The new name of the role, nothing changes if no input is received. Can contain My Tokens. | Yes | None |
| Role Description | The new description of the role, nothing changes if no input is received. Can contain My Tokens. | Yes | None |
| Role Status | The new status of the role. If you use an expression, the values accepted are -1 (Pending), 0 (Disabled), 1 (Approved), nothing changes if no input is received. Can contain My Tokens. | Yes | None |
| Add to existing users | Add the updated role to existing users. A value of "true" or "false" should be provided, nothing changes if no input is received. Can contain My Tokens. | Yes | None |
| Is Public | Is a public role. A value of "true" or "false" should be provided, nothing changes if no input is received. Can contain My Tokens. | Yes | None |
| Auto Assign | Add the updated role to all users that will register on the portal. A value of "true" or "false" should be provided, if no input is received the role will not be added to already existing users. Can contain My Tokens. | Yes | None |
