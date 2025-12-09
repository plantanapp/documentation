---
id: run-sql-query
title: Run SQL Query
sidebar_label: Run SQL Query
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
> 
> Skill Prerequisites: `SQL`

This action executes a SQL statement, optionally capturing the output for use in subsequent actions. By default, it targets the SQL Server instance of the application, however, it is not restricted to SQL Server and can run against any database which supports ODBC connections. 

A recent enhancement introduces transaction support to the SQL execution process, ensuring a safer and more consistent outcome by automatically rolling back any changes if an error occurs within a script. Previously, executing multiple SQL statements sequentially would commit changes until an error was encountered, potentially leaving partial updates in the database. This change enhances data integrity and reliability, though it may affect systems that expected the previous behavior. Users should be aware that unsuccessful scripts no longer leave intermediate database alterations intact.

## `Typical Use Cases`

* Query the database for a specific single row of data
* Insert data into tables
* Pre-load data into a form
* Pull data from external databases

## `Don't use it to`

* Load multiple sets of data - use Create List from SQL instead
* Query entities - use entity specific actions instead
* Update system tables - it might have unwanted effects on functionality, use specific actions instead

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Database | Select a database for connection. If left unselected, the main application database will be used. | No | `Application database` | No |
| Override Connection String | The connection string to the database. Use this field to override the default connection string. | Yes | `Application database` | No |
| Query Timeout | This parameter determines how long in seconds it takes until a timeout happens if the database doesn't respond. It doesn't accept values under 10 seconds. Defaults to 600 seconds. | Yes | `600` | No |
| SQL Query | The SQL query you want to execute on the database. It's recommended to use the `Bind Tokens` parameter to avoid potential SQL injection. | Yes | `Unset` | Yes |
| Bind Tokens | Allows using tokens as variables in the SQL Query to avoid SQL injection. References the variable in the SQL Query as `@VariableName`. | Yes | `Unset` | No |
| Show Errors | Enables showing the original SQL error if something goes wrong. | No | `Unset` | No |

## `Output Parameters Reference`

| Parameter | Description |
| --------- | ----------- |
| Store Result | Token name in which the data returned by the query will be stored. Generates a syntax like `[VariableName:SQLColumn]`. |
| Extract Columns | Maps certain columns directly to tokens instead of using the returned column names for token generation. |

## `Events Reference`

| Event Name | Description |
| ---------- | ----------- |
| On Error | Executes a list of actions if an error occurs during the execution. The exception details can be accessed via the `[Exception]`, `[ExceptionType]`, `[ExceptionMessage]`, and `[ExceptionStack]` tokens. |

## `Examples`

:::tip
To understand how to use the below examples, please see [`Running Examples`](/docs/actions/running-examples).
:::


### `1. Selecting the first user and storing its data in the token "selecteduser"`

This action selects all the details of the first user and stores them in a token named `user` for further use.

```json
{
    "Title": "Run SQL Query",
    "ActionType": "RunSql",
    "Parameters": {
        "ConnectionString": "",
        "QueryTimeout": "",
        "SqlQuery": "SELECT * FROM Users\nWHERE UserId=1",
        "BindTokens": "",
        "OutputTokenName": "selecteduser",
        "ExtractColumns": "",
        "OnError": [],
        "ShowErrors": false
    }
}
```

### `2. Update the First Name of the first user to "Aaron"`

This action will update the First Name of the first user. Note that no `OutputTokenName` is set, as this action has no output.

```json
{
    "Title": "Run SQL Query",
    "ActionType": "RunSql",
    "Parameters": {
        "ConnectionString": "",
        "QueryTimeout": "",
        "SqlQuery": "UPDATE Users\nSET FirstName='Aaron'\nWHERE UserID=1",
        "BindTokens": "",
        "OutputTokenName": "",
        "ExtractColumns": "",
        "OnError": [],
        "ShowErrors": false
    }
}
```

Revised 11/04/2025