---
id: execute-actions-for-each-list-entry
title: Execute Actions for each List Entry
sidebar_label: Execute Actions for each List Entry
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action will execute the specified actions for each item that belongs to the entity collection named in the `EntityName` parameter. To access field values from the currently iterated entity in the specified actions, use this token syntax:`[EntityName:EntityFieldName]`.

## `Typical Use Cases`

- Use the [Send Email](/actions/send-email.md) action to send individual emails to a list of people in an entity.
- Use the [Run SQL Query](/actions/run-sql-query.md) action to insert the records in an entity to a table in the database.

## `Don't use it to`

- Run actions on data not loaded into an entity. Just run the actions normally.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Add List Entry](/actions/add-list-entry.md)   | Creates an list in the current context to which you can load values from the current context. Use this to create the list that will be processed with this action. |
| [Create List from CSV file (obsolete)](/actions/create-list-from-csv-file-obsolete.md)   | Creates an list in the current context from the content of a provided CSV file. Use this to create the list that will be processed with this action. |
| [Create List from a CSV source](/actions/create-list-from-a-csv-source.md)   | Creates an list in the current context from a CSV list. Use this to create the list that will be processed with this action. |
| [Create List from Excel (xlsx) ](/actions/create-list-from-excel-xlsx.md)   | Creates an list in the current context from the content of a provided Excel(XLSX) file. Use this to create the list that will be processed with this action. |
| [Create List from JSON](/actions/create-list-from-json.md)   | Creates an list in the current context from the provided JSON model. Use this to create the list that will be processed with this action. |
| [Create List from SQL](/actions/create-list-from-sql.md)   | Creates an list in the current context from the result of the provided SQL Query. Use this to create the list that will be processed with this action. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/actions/common-parameters.md).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| List Name | Name of the entity list on which the specified actions will execute. | Yes | `empty string` | Yes |
| Filters | Specify one or more Field and Value pairs to filter the items from the entity on which the action will execute. | Yes | None Specified | No |
| Context Behavior | Depending on how you use this action, you might want to change the scope of the generated tokens.<ul><li>The **Update all tokens in the original context** option will copy all the tokens generated in each iteration to the original context that was before this action </li><li>The **Don't save the iteration tokens** option will NOT keep any tokens generated in this action, not even from one iteration to the other.</li><li>The **Update the tokens in the initial context** option will allow you to save the tokens in the original context (before this action) and from one iteration to another, IF the tokens exist in the original context, meaning that you have to initialize them before this action.</li></ul> | No | None Selected | No |
| Action List | Specify the actions that will be executed on each item in the entity list. Refer to the fields of the loaded entity using the `[EntityName:EntityFieldName]` token syntax. | Yes | None Specified | No |
| Continue on error | Continues to the next iteration even if the current one failed to execute. | No | `false` | No |
| On Error | Specify the Actions that will be executed if an error is caught in one iteration. If Continue On Error is checked, final actions like Display Message/Error won't be executed. | Yes | None Specified | No |
