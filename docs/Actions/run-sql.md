---
id: run-sql
title: Run SQL Query
sidebar_label: Run SQL Query
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `SQL`

Executes an SQL statement on a database and captures the output for further use.

## `Typical Use Cases`

- Query the database for a specific single row of data
- Insert data into tables
- Pre-load data into a form
- Pull data from external databases

## `Don't use it to`

- Load multiple sets of data - use [Load Entities (SQL)](Actions/load-entities-sql.md) instead
- Query entities - use entity specific actions instead
- Update system tables - it might have unwanted effects on functionality, use specific actions instead

## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Server Request](Actions/server-request.md) | A low-level action that allows for any kind of HTTP request to be performed. |

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Tokens | Default | Required
|---------------|---------------------------------------|-----------------|---------|---------|
| Other Connection String | The connection string to the database. If left empty, the query will be executed on the main application database. You can connect to any database which supports the ODBC standard. For example, if you want to connect to a Oracle DB, you would specify `Data Source=MyOracleDB;User Id=myUsername;Password=myPassword;Integrated Security=no;` in the field. You can find out more about connection strings at [this resource](https://www.connectionstrings.com/net-framework-data-provider-for-odbc/).| Yes | `Application database` | No |
| Query Timeout | This parameter determines how long in seconds it takes until a timeout happens if database doesn't respond. It doesn't accept values under 10 seconds. If left empty, it will default to 600 seconds. You should change this when the query duration might exceed the default of 10 minutes. Be careful when leveraging this options since your application will wait for the longer running queries before continuing execution. A balance must be found with the timeout duration since waiting for a query result in a scheduled job might be acceptable but might pose serious wait times in the case of form. | Yes | `600` | No |
| SQL Query     | The SQL query you want to execute on the database. While the query does accept tokens, we recommend using the `Bind Tokens` parameter in order to avoid any potential SQL injection exploits. | Yes | `Unset` | Yes |
| Bind Tokens       | This parameter allows you do use tokens as variables in the SQL Query field in order to avoid SQL injection. For example, if you want to use the token `[UserId]` in your query, you would put the token in the `Parameter Value` field and give it a name in the `Parameter Name` field, `ID` for example. After that, you can reference this variable as `@ID` inside the SQL Query Field.  | Yes | `Unset` | No |
| Show Errors | If this option is used, the error shown when something goes wrong will be the original SQL error.  | No | `Unset` | No |

## `Output Parameters Reference`

| Parameter | Description |
|-----------|-------------|
| Extract Columns|  This option is useful when you map certain columns to certain tokens instead of using the column names brought back by the results. If you just want to inject the result data into fields/tokens, this is the most efficient way. |
| Store Result | The token name in which the data returned by the query will be stored. You should leverage this method of storing the result you don't need to map the columns to any fields or tokens and just want to manipulate the results for various uses. This will generate a syntax like `[VariableName:SQLColumn]`, where `SQLColumn` is any column you brought as a result of the query. The `[VariableName]` token with no further column specifier will contain the first column of the SQL query result.  |

## `Events Reference`

| Event Name | Description |
|------------|-------------|
| On Error | When an error is thrown during the execution of this action, it will trigger the execution of the list of actions specified for this event. An error event won't stop the execution of further actions. If the `On Error` event is used, the details of the exception thrown by this option will not be shown, but you can find details about it in the `[Exception]`,`[ExceptionType]`,`[ExceptionMessage]`,`[ExceptionStack]` tokens in case you want to create a custom error message. |

## `Examples`

### `1. Selecting the first user and storing it's data in the token "user"`

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
        "OutputTokenName": "user",
        "ExtractColumns": "",
        "OnError": [],
        "ShowErrors": false
    }
}
```

### `2. Update the First Name of the first user to "Aaron"`

 This action will update the First Name of the firs user. Please note that no `OutputTokenName` is set, as this action has no output.

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
