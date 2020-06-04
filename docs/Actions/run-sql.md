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
| [Inject Data](Actions/inject-data.md) | Inject data into fields or create context tokens. |
| [Server Request](Actions/server-request.md) | A low-level action that allows for any kind of HTTP request to be performed. |

## `Input Parameter Reference`

| Parameter     | Description                           | Supports Variables |
|---------------|---------------------------------------|--------------------|
| Other Connection String | The connection string to the database. If left empty, the query will be executed on the main application database. | Yes |
| Query Timeout | This parameter determines how long in seconds it takes until a timeout happens if database doesn't respond. It doesn't accept values under 10 seconds. If left empty, it will default to 600 seconds. You should change this when the query duration might exceed the default of 10 minutes. Be careful when leveraging this options since your application will wait for the longer running queries before continuing execution. A balance must be found with the timeout duration since waiting for a query result in a scheduled job might be acceptable but might pose serious wait times in the case of form. | Yes |
| SQL Query     | The SQL query you want to execute on the database. While the query does accept tokens, we recommend using the `Bind Tokens` parameter in order to avoid any potential SQL injection exploits. | Yes |
| Bind Tokens       | This parameter allows you do use tokens as variables in the SQL Query field in order to avoid SQL injection. For example, if you want to use the token `[UserId]` in your query, you would put the token in the `Parameter Value` field and give it a name in the `Parameter Name` field, `ID` for example. After that, you can reference this variable as `@ID` inside the SQL Query Field.  | Yes |
| Show Errors | If this option is used, the error shown when something goes wrong will be the original SQL error. If the `On Error` event is used, the details of the exception thrown by this option will not be shown, but you can find details about it in the `[Exception]`,`[ExceptionType]`,`[ExceptionMessage]`,`[ExceptionStack]` tokens in case you want to create a custom error message. | No |

## `Output Parameters Reference`

| Parameter | Description |
|-----------|-------------|
| Extract Columns|  This option is useful when you map certain columns to certain tokens instead of using the column names brought back by the results. |
| Store Result | The variable name in which the data returned by the query will be stored. |

## `Events Reference`

| Event Name | Description |
|------------|-------------|
| On Error | When an error is thrown during the execution of this action, it will trigger the execution of the list of actions specified for this event. An error event won't stop the execution of further actions. |

## `Examples`
