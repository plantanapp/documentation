---
id: load-entities-sql
title: Load Entities (SQL)
sidebar_label: Load Entities (SQL)
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This action creates an entity in the current context from the result of the provided SQL Query. You can find the number of loaded entities in the `[<EntityName>:Count]` token.

:::note
This creates an entity that can be used ONLY in the current context. This does not create a [Plant an App Entity](/docs/entities).
:::

## `Typical Use Cases`

- Load values from a SQL Query that returns a list of contacts and then send individual emails to that list.
- Load values from a SQL Query into an entity and then serialize that entity into CSV or Excel to provide the results in a file to the end-user.

## `Don't use it to`

- Run a SQL query for any other reason than selecting records to create a contextual entity. For other SQL query scenarios, use the [Run SQL Query](/docs/actions/run-sql) action instead.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Extend Entity](/docs/actions/extend-entity)   | Extends an entity with new properties. |
| `Serialize to CSV`   | Serializes a list of entities from the context into CSV (Comma Separated Values) format. |
| `Serialize to Excel from entity list XSLX`   | Serializes a list of entities from the context into Excel format. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| Other Connection String | The connection string to the database. If left empty, the query will be executed on the main application database. You can connect to any database which supports the ODBC standard. For example, if you want to connect to an Oracle DB, you would specify <br/>`Data Source=MyOracleDB;User Id=myUsername; Password=myPassword;Integrated Security=no;` <br/>in the field. You can find out more about connection strings [here](https://www.connectionstrings.com/net-framework-data-provider-for-odbc/).| Yes | `Application database` | No |
| SQL Query | The SQL query you want to execute on the database. While the query does accept tokens, we recommend using the `Bind Tokens` parameter to avoid any potential SQL injection exploits. | Yes | `Unset` | Yes |
| Bind Tokens       | This parameter allows you to use tokens as variables in the SQL Query field to avoid SQL injection. For example, if you want to use the token `[UserId]` in your query, you would put the token in the `Parameter Value` field and give it a name in the `Parameter Name` field such as `ID`. After that, you can reference this variable as `@ID` inside the SQL Query Field.  | Yes | `Unset` | No |
| Entity Name | Provide a name for the entity being created. This name can be used in the [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list) action to reference the items in the entity using `[EntityName:PropertyName]` token syntax. | Yes | `empty string` | Yes |
| Properties | Map columns returned by the SQL to properties of the entity. If the list is empty, all columns retrieved from the SQL query will be added as entity properties. | Yes | None Specified | No |
| On Error | Specify a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on.  | Yes | None Specified | No |
