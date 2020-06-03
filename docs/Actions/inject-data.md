---
id: inject-data
title: Inject Data
sidebar_label: Inject Data
---

> Audience: [`Business Users`](/docs/audience#business-users)<br/>
> Skill Prerequisites: `None`

An action that lets you add data as tokens to the current execution context. Inject data can be used to load data that other actions other actions down the stack need.

## `Typical Use Cases`

- Generate a new token
- Concatenate 2 tokens
- Overwrite a token
- Initialize variables with empty strings

## `Don't use it to`

- Execute a Variables token - use [Apply Tokens](/docs/Actions/apply-tokens.md) or [Execute Tokens](/docs/Actions/execute-tokens.md) actions instead
- Apply tokens inside a text from different sources - use [Apply Tokens](/docs/Actions/apply-tokens.md) or [Execute Tokens](/docs/Actions/execute-tokens.md) actions instead
- Create a token that is used in another execution context - store the data in a [hidden field](/docs/Actions/hidden-field.md), cookies or server session instead

## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Run SQL Query](/docs/Actions/run-sql-query.md) | Executes an SQL statement and captures the output, so that it can be used in the form using Inject Data.|

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Variables |
|---------------|---------------------------------------|--------------------|
| Name/Value | The first parameter refers to the name of the new token that will be created. The second one refers to the value assigned. The action uses a key-value (name-value) concept. | Yes |

## `Output Parameters Reference`

| Parameter | Description |
|-----------|-------------|
| Name | The Name parameter is stored as a token for further use anywhere in the form. |

## `Examples`

### `1. Inject data using Run SQL Query`

​
The action below selects first username from users database using Run SQL Query and sends it into the form. <br></br>[Import it](/docs/Actions/import-actions.md) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Extract and inject first username into form",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15911731358816854",
                "Parameters": {
                    "ConnectionString": "",
                    "QueryTimeout": "",
                    "SqlQuery": "SELECT Username FROM Users\nWHERE UserId = 1",
                    "BindTokens": [],
                    "OutputTokenName": "",
                    "ExtractColumns": [
                        {
                            "value": "SQL_Username",
                            "name": "Username"
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
                "$_uid": "action15911731358819956",
                "Parameters": {
                    "Data": [
                        {
                            "value": "[SQL_Username]",
                            "name": "Inject_Username"
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
The action below generates a new token named "ClientId" with the assigned value "ID15367" that can be used in the form. <br></br> [Import it](/docs/Actions/import-actions.md) into your application to see it in action.
​

```json
{
    "Title": "Inject Data",
    "ActionType": "InjectData",
    "Description": null,
    "Condition": null,
    "Parameters": {
        "Data": [
            {
                "value": "ID15367",
                "name": "ClientId"
            }
        ]
    }
}
```

### `3. Concatenate 2 tokens`

​
The action below extract "FirstName" and "LastName" from users database and concatenate them so that "FullName" can be used in the form. <br></br> [Import it](/docs/Actions/import-actions.md) into your application to see it in action.
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
The action below creates a token with initial value "1" and overwrites it. The injected token will have value "2", which is the new one. <br></br> [Import it](/docs/Actions/import-actions.md) into your application to see it in action.
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
                "$_uid": "action15911055285914160",
                "Parameters": {
                    "Data": [
                        {
                            "value": "1",
                            "name": "InitialValue"
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
                "$_uid": "action15911055285914424",
                "Parameters": {
                    "Data": [
                        {
                            "value": "2",
                            "name": "OverwrittenValue"
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
                "Title": "Inject Data"
            }
        ]
    }
}
```