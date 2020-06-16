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

- Prevent users from accessing the system at all. Instead, mark users as deleted or unauthorize them

## `Related Actions`

| Action Name                                             | Description                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------------- |
| [Load Users](/docs/Actions/load-user.md)                | Can be used to revoke roles to a single user or to a list of users. |
| [User Registration](/docs/Actions/user-registration.md) | Can be used to revoke roles to a newly created user.                |

## `Input Parameter Reference`

| Parameter        | Description                                                                              | Supports Variables |
| ---------------- | ---------------------------------------------------------------------------------------- | ------------------ |
| Role             | Select the security role to revoke from a list with all the roles in the application.                                | Yes                |
| Other Role Names | Freely input the role name(s) you want to revoke. Multiple roles are separated by comma. | Yes                |

## `Examples`

### `1. Revoke a User Role `

The action below loads the current user using [Load User](/docs/Actions/load-user) action and revokes its '[Citizen Developers]' role. [Import it](/docs/Actions/Import-actions) into your application to see it in action.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Revoke Citizen Developers role from current user",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action1591868419626850",
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
                "$_uid": "action15918684196265931",
                "Parameters": {
                    "RoleId": {
                        "Expression": "",
                        "Value": "6",
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

The action below loads all users using [Load Entities](/docs/Actions/load-entitites) and [Load User](/docs/Actions/load-user) action and revokes the `Managers` role from every one. [Import it](/docs/Actions/Import-actions) into your application to see it in action.

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

## `Frequently asked questions`

**What about revoking a role that the user doesn't have?**

Nothing will happen if a not assigned role is revoked.

**What happens if the Role is deleted?**

The role will simply be revoked from any user that has it.
