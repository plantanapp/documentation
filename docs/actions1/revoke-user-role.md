---
id: revoke-user-role
title: Revoke User Role
sidebar_label: Revoke User Role
---

> Audience: [`Business Users`](/docs/audience#business-users)<br/>
> Skill Prerequisites: `Permission Scheme`

## `Typical Use Cases`

- Revoke roles of existing users
- Remove access to resources for specific users

## `Don't use it to`

- Prevent users from accessing the system at all. Instead, use `Unauthorize User` action to unauthorize loaded user(s) or use `Delete User` to delete loaded user(s).

## `Related Actions`

| Action Name                                             | Description                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------------- |
| [Load Users](/docs/actions/load-user)                | Can be used to revoke roles to a single user or to a list of users. |
| User Registration | Can be used to revoke roles to a newly created user.                |

## `Input Parameter Reference`

| Parameter        | Description                                                                                                                | Supports Variables | Default      | Required |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------ | -------- |
| Role             | Select the security role to revoke from a list with all the roles in the application. RoleId can also be used as input.    | Yes                | Not selected | Yes      |
| Other Role Names | Freely input the role name(s) you want to revoke. Multiple roles are separated by comma. RoleId can also be used as input. | Yes                | Empty string | No       |

## `Examples`

**Note** 

If a role is deleted, it will simply be revoked from any user that has it.

### `1. Revoke a User Role `

The action below loads the current user using [Load User](/docs/actions/load-user) action and revokes its '[Users]' role. Nothing will happen if a not assigned role is revoked. [Import it](/docs/running-examples#import-the-action-in-a-module) into your application to see it in action.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Revoke Users role from current user",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15923143726521407",
                "Parameters": {
                    "Id": "[User:UserId]",
                    "Portal": ""
                },
                "ActionType": "LoadUser",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Context"
                    }
                }
            },
            {
                "Id": -1,
                "$_uid": "action15923143726526549",
                "Parameters": {
                    "RoleId": {
                        "Expression": "",
                        "Value": "8",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "RoleNames": ""
                },
                "ActionType": "RevokeUserRole",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "User"
                    }
                }
            }
        ]
    }
}
```

### `2. Revoke a Role from all users`

The action below loads all users using Load Entities and [Load User](/docs/actions/load-user) action and revokes the `Managers` role from every one. [Import it](/docs/running-examples#import-the-action-in-a-module) into your application to see it in action.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "revoke 'Managers' role from every user",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Title": "Load Entities (SQL)",
                "ActionType": "LoadEntitiesFromSql",
                "Parameters": {
                    "ConnectionString": "",
                    "SqlQuery": "select UserId from Users",
                    "BindTokens": "",
                    "EntityName": "UserDetails",
                    "EntityProps": [],
                    "OnError": []
                },
                "$_uid": "action15922109647737176",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            },
            {
                "Title": "Execute actions on entity list",
                "ActionType": "ExecuteActionsOnEntityList",
                "Parameters": {
                    "EntityName": "UserDetails",
                    "Filters": "",
                    "ContextBehavior": {
                        "Expression": "",
                        "Value": "",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "ActionList": [
                        {
                            "Id": -1,
                            "$_uid": "action15922109648872432",
                            "Parameters": {
                                "Id": "[UserDetails:UserId]",
                                "Portal": ""
                            },
                            "ActionType": "LoadUser",
                            "$_isOpen": false,
                            "$_isLoaded": true,
                            "$_isFocus": true,
                            "Definition": {
                                "IsClientAction": false,
                                "Settings": {
                                    "Group": "Context"
                                }
                            }
                        },
                        {
                            "Id": -1,
                            "$_uid": "action15922109648872488",
                            "Parameters": {
                                "RoleId": {
                                    "Expression": "",
                                    "Value": "7",
                                    "IsExpression": false,
                                    "Parameters": {}
                                },
                                "RoleNames": ""
                            },
                            "ActionType": "RevokeUserRole",
                            "$_isOpen": false,
                            "$_isLoaded": true,
                            "$_isFocus": true,
                            "Definition": {
                                "IsClientAction": false,
                                "Settings": {
                                    "Group": "User"
                                }
                            }
                        }
                    ],
                    "ContinueOnError": "",
                    "OnError": []
                },
                "$_uid": "action15922109647731312",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            }
        ]
    }
}
```
