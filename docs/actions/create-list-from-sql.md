---
id: create-list-from-sql
title: Create List from SQL
sidebar_label: Create List from SQL
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Other Connection String | Leave this field empty to use the connection string from DNN. | No | None |
| SQL Query | SQL to execute. This field supports My Tokens. | Yes | None |
| List Name | Name this list so you can reference it later by name. This field supports My Tokens. | Yes | None |
| Properties | Map columns returned by the SQL to properties of the List. If the properties are left empty, all columns retrieved from the SQL query will be added as list properties. | No | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
