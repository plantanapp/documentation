---
id: load-user
title: Load User
sidebar_label: Load User
---

> Audience: [`Business Users`](/docs/audience#business-users)<br/>
> Skill Prerequisites: `User management`

An action that allows altering the user which the subsequent actions refer to. The user change affects all actions after the `Load User` action and after all actions have finished executing the user will be reverted back to the initial one (i.e. the logged-in user). By default, all actions that need a user for their execution will refer to the currently logged in user.

This action also supports loading multiple users by providing multiple user identifiers. The last user identifier provided will also be used as the context user under which all actions execute. Loading multiple users creates a hidden context entity that is leveraged by the following actions which support this:

- [Grant Role](/docs/actions/grant-user-role)
- [Revoke Role](/docs/actions/revoke-user-role)
- Authorize User
- Unauthorize User
- Delete User
- [Send Email](/docs/actions/send-email)

When used in conjunction with the actions above, the logic applies to all users that have been loaded into the context by the `Load User` action. For example, the `Grant Role` action will assign the specified role to each and every user loaded into the context.

Calling the `Load User` action the second time inside the same workflow will replace the context user that the actions use and add to the list of context users (the Users entity) that actions such as `Grant Role` leverage. If a user is already present in the Users entity he will not be added again.

## `Typical Use Cases`

- Update another user profile
- Loading the user before granting the necessary roles
- Loading users before sending a mass email

## `Don't use it to`

- Load multiple users by a specific condition, use [Load Users From SQL](/docs/actions/load-users-from-sql) instead

## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Grant Role](/docs/actions/grant-user-role) | Grants the users in the context the specified roles.|
| [Send Email](/docs/actions/send-email) | Sends an email to the users loaded in the context.|
| Update User Profile | updates user profile properties. |

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Tokens | Default | Required |
|---------------|---------------------------------------|--------------------|---------|----------|
| User Identifier | The identifier which will indicate which user to load into context. You can use the user ID, username or the email as identifiers. <br/> You can load multiple users by providing multiple values separated by a comma. | Yes | `empty string` | Yes |
| Portal ID | The identifier which will specify in which portal to look for the user indicated by the 'User Identifier'. If left blank, the action will search for the user across all portals. Valid values are either the portal ID or the portal name. | Yes | `All Portals` | No |

## `Examples`

### `1. Load a user and grant it the Subscribers role`

The actions below will load the user with the identifier `(user email) 'john.doe@gmail.com'` into the context and then grant him the role `Subscribers` with an indefinite expiration date.

```json
{
    "Title": "Load User",
    "ActionType": "LoadUser",
    "Description": "Load the user into the context",
    "Condition": null,
    "Parameters": {
        "Id": "john.doe@gmail.com",
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

### `2. Load a user and update it's first name and last name`

The action exports below will load the user which has the email `john.doe@gmail.com` and update it's `Last Name` and `First Name` with the corresponding values coming from two text box fields.

```json
{
    "Title": "Load User",
    "ActionType": "LoadUser",
    "Description": "Load the user into the context",
    "Condition": null,
    "Parameters": {
        "Id": "john.doe@gmail.com",
        "Portal": ""
    }
}
```

```json
{
    "Title": "Update User Profile",
    "ActionType": "UpdateUserProfile.v2",
    "Description": "Update current user's Last Name and First Name",
    "Condition": null,
    "Parameters": {
        "UserIdentifier": "",
        "UpdatePasswordField": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "UpdateDisplayNameField": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "UpdateEmailField": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "AdditionalProperties": [
            {
                "UserProfileProperty": {
                    "Value": "FirstName",
                    "IsExpression": false,
                    "Parameters": {}
                },
                "PropertyValue": {
                    "Value": "FirstNameField",
                    "IsExpression": false
                }
            },
            {
                "UserProfileProperty": {
                    "Value": "LastName",
                    "IsExpression": false,
                    "Parameters": {}
                },
                "PropertyValue": {
                    "Value": "LastNameField",
                    "IsExpression": false
                }
            }
        ]
    }
}
```
