---
id: LoadUser
title: Load User
sidebar_label: Load User
---

An action that allows altering the contextual users which all the subsequent actions use. This action supports loading multiple users by providing multiple user identifiers. The last user identifier provided will also be used as the context user under which all actions execute (logged in user).

When used in conjunction with actions such as [Grant Role](/docs/Actions/grant-role.md), the `Grant Role` action will grant the role specified to all users loaded by this action.

## `Typical Use Cases`

- Impersonating an user
- Loading the user before granting the necessary roles
- Loading users before sending a mass email

## `Don't use it to`

- Load multiple users by a specific condition, use [Load Users From SQL](/docs/actions/load-users-sql.md) instead

## `Related Actions`

- [Grant Role](/docs/Actions/grant-role.md) - grants the users in the context the specified roles
- [Send Email](/doc/Actions/send-email.md) - sends an email to the users loaded in the context

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Variables |
|---------------|---------------------------------------|--------------------|
| User Identifier | The identifier which will indicate which user to load into context. You can use the user ID, username or the email as identifiers. <br/> <br/> You can load multiple users by providing multiple values separated by a comma. | Yes |
| Portal ID | The identifier which will specify in which portal to look for the user indicated by the 'User Identifier'. If left blank, the action will search for the user across all portals. Valid values are either the portal ID or the portal name. | Yes |

## `Examples`

### `1. Load an user and grant it a role`

The actions below will load the user with the identifier (user ID) '0' into the context and then grant him the role `Subscribers` with an indefinite expiration date.

```json
{
    "Title": "Load User",
    "ActionType": "LoadUser",
    "Description": "Load the user into the context",
    "Condition": null,
    "Parameters": {
        "Id": "0",
        "Portal": ""
    }
}
```

```json
{
    "Title": "Grant User Role",
    "ActionType": "GrantUserRole",
    "Description": "Grant the Subscribers role",
    "Condition": null,
    "Parameters": {
        "RoleId": {
            "Expression": "",
            "Value": "2",
            "IsExpression": false,
            "Parameters": {}
        },
        "RoleNames": "",
        "DateSelectionMode": {
            "Expression": "",
            "Value": "OffsetFromNow",
            "IsExpression": false,
            "Parameters": {}
        },
        "ExtensionDays": "",
        "StartDate": {
            "Date": ""
        },
        "StartDateToken": "",
        "ExpireDate": {
            "Date": ""
        },
        "ExpireDateToken": "",
        "RoleExpiration": ""
    }
}
```
