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

## `Don't use it to`

- Execute a Variables token - use [Apply Tokens](/docs/Actions/apply-tokens.md) or [Execute Tokens](/docs/Actions/execute-tokens.md) actions instead
- Apply tokens inside a text from different sources - use [Apply Tokens](/docs/Actions/apply-tokens.md) or [Execute Tokens](/docs/Actions/execute-tokens.md) actions instead
- Use a token into another action list, only use it for the current one - store the data in a [hidden field](/docs/Actions/hidden-field.md), cookies or server session instead

## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Run SQL Query](/docs/Actions/run-sql-query.md) | Executes an SQL statement, optionally capturing the output |

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Variables |
|---------------|---------------------------------------|--------------------|
| Name/Value | First parameter refers to the name of the variable, the second one refers to the value assigned. The action use a key-value(name-value) concept. <br></br> Each data that you want to inject has different parameters. | Yes |

## `Output Parameters Reference`

| Parameter | Description |
|-----------|-------------|
| Output Token Name | The Name parameter is stored as a token for further use anywhere in the form. |

## `Examples`

### `1. Inject data using Run SQL Query`

​
The action below selects first client name from a database using Run SQL Query and sends it into the form. <br></br>[Import it](/docs/Actions/import-actions.md) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Extract and inject first client name into form",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15911016148437876",
                "Parameters": {
                    "ConnectionString": "",
                    "QueryTimeout": "",
                    "SqlQuery": "SELECT Name FROM app.Client\nWHERE Id = 1",
                    "BindTokens": [],
                    "OutputTokenName": "",
                    "ExtractColumns": [
                        {
                            "value": "SQL_Name",
                            "name": "Name"
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
                "$_uid": "action15911016148431102",
                "Parameters": {
                    "Data": [
                        {
                            "value": "[SQL_Name]",
                            "name": "Inject_Name"
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
The action below generates a new token named "Client_ID" with the assigned value "ID15367" that can be used in the form. <br></br> [Import it](/docs/Actions/import-actions.md) into your application to see it in action.
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
                "name": "Client_ID"
            }
        ]
    }
}
```

### `3. Concatenate 2 tokens`

​
The action below extract "FirstName" and "LastName" from a database and concatenate them so that "FullName" can be used in the form. <br></br> [Import it](/docs/Actions/import-actions.md) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Inject first client full name into form",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Id": -1,
                "$_uid": "action15911044123153952",
                "Parameters": {
                    "ConnectionString": "",
                    "QueryTimeout": "",
                    "SqlQuery": "SELECT FirstName, LastName FROM app.Client\nWHERE Id = 1",
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
                "$_uid": "action15911044123153988",
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