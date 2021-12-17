---
id: inject-data-obsolete
title: Inject Data (Obsolete)
sidebar_label: Inject Data (Obsolete)
---

> Audience: [`Business Users`](/audience.md#business-users)
>
> Skill Prerequisites: `None`

An action that lets you create new tokens into the current execution context. The value of each token is usually a computation of other tokens from the context. Once created, the new tokens can be accessed by any subsequent action.

## `Typical Use Cases`

- Generate a new token
- Concatenate 2 tokens
- Overwrite a token
- Initialize variables with empty strings

## `Don't use it to`

- Execute the same token multiple times, in case the token contains other tokens inside - use [Create/Update Tokens](/actions/create-update-tokens.md) instead
- Create a token that is used in another execution context - store the data in a hidden field, cookies or server session instead
- Store data in [Entities](/entities.md)

## `Related Actions`

| Action Name                                     | Description                                                                                                                  |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Run SQL Query](/actions/run-sql-query.md) | Executes an SQL statement and captures the output, so you can create tokens derived from the data returned by the SQL query. |

## `Input Parameter Reference`

| Parameter      | Description                                              | Supports Variables |
| -------------- | -------------------------------------------------------- | ------------------ |
| Token -> Value | The value that you want to assign to the created token. | Yes                |

## `Output Parameters Reference`

| Parameter     | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| Token -> Name | The token name(s) in which the response is to be stored for further use. |

## `Examples`

### `1. Inject data using Run SQL Query`

​
The action below counts the total number of users from users database using Run SQL Query and appends the token for user experience purposes. [Import it](/actions/running-examples.md#import-the-action-in-a-module) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Extract and inject total number of users into form",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15913545646539602",
                "Parameters": {
                    "ConnectionString": "",
                    "QueryTimeout": "",
                    "SqlQuery": "SELECT COUNT(UserId) as Total FROM Users",
                    "BindTokens": [],
                    "OutputTokenName": "",
                    "ExtractColumns": [
                        {
                            "value": "SQL_TotalNumber",
                            "name": "Total"
                        }
                    ],
                    "OnError": [],
                    "ShowErrors": false
                },
                "ActionType": "RunSql",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Data"
                    }
                }
            },
            {
                "Id": -1,
                "$_uid": "action15913545646536347",
                "Parameters": {
                    "Data": [
                        {
                            "value": "[SQL_TotalNumber]",
                            "name": "Inject_Total"
                        }
                    ]
                },
                "ActionType": "InjectData",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Context"
                    }
                }
            }
        ]
    }
}
```

### `2. Generate a new token`

​
The action below logs a debug message only if injected data is true. [Import it](/actions/running-examples.md#import-the-action-in-a-module) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Check if debug mode is on",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15913550876418705",
                "Parameters": {
                    "Data": [
                        {
                            "value": "true",
                            "name": "Debug"
                        }
                    ]
                },
                "ActionType": "InjectData",
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
                "$_uid": "action15913550876417679",
                "Parameters": {
                    "Message": "Inject data worked."
                },
                "ActionType": "LogDebug",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Logging"
                    }
                },
                "Condition": "[Debug] == true",
                "Description": "Debug Logging"
            }
        ]
    }
}
```

### `3. Concatenate 2 tokens`

​
The action below extract "FirstName" and "LastName" from users database and concatenate them so that "FullName" can be used in the form. [Import it](/actions/running-examples.md#import-the-action-in-a-module) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Inject first user full name into form",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15911732046536029",
                "Parameters": {
                    "ConnectionString": "",
                    "QueryTimeout": "",
                    "SqlQuery": "SELECT FirstName, LastName FROM Users\nWHERE UserId = 1",
                    "BindTokens": [],
                    "OutputTokenName": "",
                    "ExtractColumns": [
                        {
                            "value": "FirstName",
                            "name": "FirstName"
                        },
                        {
                            "value": "LastName",
                            "name": "LastName"
                        }
                    ],
                    "OnError": [],
                    "ShowErrors": false
                },
                "ActionType": "RunSql",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Data"
                    }
                }
            },
            {
                "Id": -1,
                "$_uid": "action15911732046533516",
                "Parameters": {
                    "Data": [
                        {
                            "value": "[FirstName] [LastName]",
                            "name": "FullName"
                        }
                    ]
                },
                "ActionType": "InjectData",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Context"
                    }
                }
            }
        ]
    }
}
```

### `4. Overwrite a token`

​
The action below creates a token with different value depending on logged in user role, the default value being admin role. [Import it](/actions/running-examples.md#import-the-action-in-a-module) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "overwrite a token",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action159135668460984",
                "Parameters": {
                    "Data": [
                        {
                            "value": "Admin User",
                            "name": "Role"
                        }
                    ]
                },
                "ActionType": "InjectData",
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
                "$_uid": "action15913566846095614",
                "Parameters": {
                    "Data": [
                        {
                            "value": "Manager User",
                            "name": "Role"
                        }
                    ]
                },
                "ActionType": "InjectData",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Context"
                    }
                },
                "Title": "Inject Data",
                "Condition": "[HasRole:Managers] == true",
                "ActionErrorMessage": ""
            }
        ]
    }
}
```
