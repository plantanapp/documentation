---
id: LoadUsersSql
title: Load Users From SQL
sidebar_label: Load Users From SQL
---

An action that loads users into a hidden context entity of users in order to be leveraged by other actions.

The following actions support the Users hidden entity:

- [Grant Role](/docs/Actions/grant-role.md)
- [Revoke Role](/docs/Actions/revoke-role.md)
- [Authorize User](/docs/Actions/authorize-user.md)
- [Unauthorize User](/docs/Actions/unauthorize-user.md)
- [Delete User](/docs/Actions/delete-user.md)
- [Send Email](/doc/Actions/send-email.md).

## `Typical Use Cases`

- Loading the users before granting the necessary roles
- Loading users before sending a mass email

## `Don't use it to`

- Alter the context user which the actions use, leverage [Load User](/docs/actions/load-user.md) instead

## `Related Actions`

- [Grant Role](/docs/Actions/grant-role.md) - grants the users in the context the specified roles
- [Send Email](/doc/Actions/send-email.md) - sends an email to the users loaded in the context

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Variables |
|---------------|---------------------------------------|--------------------|
| SQL Query | The SQL query will define what users will be loaded into context from the database. The SQL result must be an user ID, and user email, or a user name. | Yes |

## `Examples`

### `1. Load a list of users and grant the Subscribers role`

The actions below will load all the users into the context and then grant them the role `Subscribers` with an indefinite expiration date.

```json
{
    "Title": "Load Users from SQL",
    "ActionType": "LoadUsersFromSql",
    "Description": "Load all users into context",
    "Parameters": {
        "SqlQuery": "SELECT UserId FROM Users"
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
