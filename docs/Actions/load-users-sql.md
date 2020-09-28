---
id: load-users-from-sql
title: Load Users From SQL
sidebar_label: Load Users From SQL
---

    > Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
    > Skill Prerequisites: `User management` `SQL` `Users Table`

An action that loads users into a hidden context entity of users in order to be leveraged by other actions.

The following actions support the Users hidden entity:

- [Grant Role](/docs/actions/grant-user-role)
- [Revoke Role](/docs/actions/revoke-user-role)
- Authorize User
- Unauthorize User
- Delete User
- [Send Email](/docs/actions/send-email)

Calling the `Load Users From SQL` action the second time inside the same workflow will add to the already existing list of context users (the Users entity) from the previous call. If a user is already present in the Users entity he will not be added again.

## `Typical Use Cases`

- Loading the users before granting the necessary roles
- Loading users before sending a mass email

## `Don't use it to`

- Alter the context user which the actions use, leverage [Load User](/docs/actions/load-user) instead

## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Grant Role](/docs/actions/grant-user-role) | Grants the users in the context the specified roles.|
| [Send Email](/docs/actions/send-email) | Sends an email to the users loaded in the context.|

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Tokens | Default | Required |
|---------------|---------------------------------------|-----------------|---------|----------|
| SQL Query | The SQL query will define what users will be loaded into context from the database. The SQL result must be a user ID, a user email or a user name. | Yes | `empty string` | Yes |

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
