---
id: load-entities-sql
title: Load Entities (SQL)
sidebar_label: Load Entities (SQL)
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Other Connection String | Leave this field empty to use the connection string from DNN. | No | None |
| SQL Query | SQL to execute. This field supports My Tokens. | Yes | None |
| Entity Name | Name this entity so you can reference it later by name. This field supports My Tokens. | Yes | None |
| Properties | Map columns returned by the SQL to properties of the entity. If the list is empty, all columns retrieved from the SQL query will be added as entity properties. | No | None |
| On Error | Define a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on. | No | [] |
