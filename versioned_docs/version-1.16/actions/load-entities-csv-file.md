---
id: load-entities-csv-file
title: Load Entities (CSV File)
sidebar_label: Load Entities (CSV File)
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action creates an entity list in the current context from the content of a provided CSV file. You can find the number of loaded entities in the `[<EntityName>:Count]` token.

:::note
This creates an entity that can be used ONLY in the current context. This does not create a [Plant an App Entity](/entities.md).
:::

## `Typical Use Cases`

- Load values from a CSV file provided by a user in a File Upload form field and then use Execute Actions on Entity List to run the same actions on each item in the uploaded file.
- Use in **`Automation`** to Load values from a CSV file already on the server and then use Execute Actions on Entity List to run the same actions on each item in the file.

## `Don't use it to`

- Take actions on the provided CSV file such as renaming it. Use File Management actions instead.
- Serialize data to create a CSV file. Use the `Serialize to CSV` action instead.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Execute actions on entity list ](/actions/execute-actions-on-entity-list.md)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Extend Entity](/actions/extend-entity.md)   | Extends an entity with new properties. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/actions/common-parameters.md).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| File Path | Path to the CSV file. If using on a form and one or more `Single File Upload` fields are available, they will be listed in the dropdown. The file uploaded to that field will be used to create the entity. It's recommended that the field be restricted to CSV file type only if being used in this way. If not using a File Upload field, use the expressions (`EXPR` button) option to specify a token representing a RelativeUrl, AbsoluteUrl, LinkClickUrl, or PhysicalPath. | Yes | `empty string` | Yes |
| Field Separator | Use semicolon if you open CSV Files with Excel and your Region Format is set to other than English (United States). Left unselected, this will default to comma. You can use the expression setting (`EXPR` button) to dynamically pass a delimiter to the action. When using a token, it's value must be either the punctuation mark (i.e. ';') or the noun that describes that punctuation mark (i.e. 'semicolon') and be one of the options listed in the dropdown (comma, semicolon, tab, pipe, colon). Tab must be passed as 'tab'. | No | `comma` | No |
| Entity Name | Provide a name for the entity being created. This name can be used in the [[Execute actions on entity list ](/actions/execute-actions-on-entity-list.md) action to reference the items in the entity using `[EntityName:PropertyName]` token syntax. | Yes | `empty string` | Yes |
| Use first row as column names | Use the first row of the CSV file as column names. If this option is not checked the entity will be assigned 0 based index column names as `Field + Index`. e.g., Field0, Field1, Field2, etc. | No | `false` | No |
| On Error | Specify a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on.  | Yes | None Specified | No |
