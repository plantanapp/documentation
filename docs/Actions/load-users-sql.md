---
id: LoadUsersSql
title: Load Users From SQL
sidebar_label: Load Users From SQL
---

An action that allows altering the contextual users which all the subsequent actions use. This action will not alter the context user (logged in user).

When used in conjunction with actions such as [Grant Role](/docs/Actions/grant-role.md), the `Grant Role` action will grant the role specified to all users loaded by this action.

## `Typical Use Cases`

- Loading the users before granting the necessary roles
- Loading users before sending a mass email

## `Don't use it to`

- Alter the currently logged in context user, use [Load User](/docs/actions/load-user.md) instead

## `Related Actions`

- [Grant Role](/docs/Actions/grant-role.md) - grants the users in the context the specified roles
- [Send Email](/doc/Actions/send-email.md) - sends an email to the users loaded in the context

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Variables |
|---------------|---------------------------------------|--------------------|
| SQL Query | The SQL query will define what users will be loaded into context from the database. The SQL result must be an user ID, and user email, or a user name. | Yes |


## `Examples`

### `1. Load a list of users and grant the a role`

The actions below will load the user with the identifier (user ID) '0' into the context and then grant him the role `Subscribers` with an indefinite expiration date.

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
