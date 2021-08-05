---
id: load-entities-excel-file-xslx
title: Load Entities (Excel File) XLSX
sidebar_label: Load Entities (Excel File) XLSX
---

&gt; Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
&gt; Skill Prerequisites: `Using Form Builder`

This action creates an entity list in the current context from the content of a provided XLSX file. You can find the number of loaded entities in the `[<entityname>:Count]` token.

:::note
This creates an entity that can be used ONLY in the current context. This does not create a [Plant an App Entity](/docs/entities).
:::

## `Typical Use Cases`

- Load values from an Excel file provided by a user in a File Upload form field and then use Execute Actions on Entity List to run the same actions on each item in the uploaded file.
- Use in **`Automation`** to Load values from an Excel file already on the server and then use Execute Actions on Entity List to run the same actions on each item in the file.

## `Don't use it to`

- Take actions on the provided Excel file such as renaming it. Use File Management actions instead.
- Serialize data to create an Excel file. Use the `Serialize to Excel from entity list XLSX` action instead.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the entity created. |
| [Extend Entity](/docs/actions/extend-entity)   | Extends an entity with new properties. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| File Path | Path to the Excel (XLSX) file. If using on a form and one or more `Single File Upload` fields are available, they will be listed in the dropdown. The file uploaded to that field will be used to create the entity. It's recommended that the field be restricted to XLSX file type only if being used in this way. If not using a File Upload field, use the expressions (`EXPR` button) option to specify a token representing a RelativeUrl, AbsoluteUrl, LinkClickUrl, or PhysicalPath. | Yes | `empty string` | Yes |
| Entity Name | Provide a name for the entity being created. This name can be used in the [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list) action to reference the items in the entity using `[EntityName:PropertyName]` token syntax. | Yes | `empty string` | Yes |
| Include All Fields | Select this option to include all columns in the provided Excel file. | No | `false` | No |
| Use first row as column names | Use the first row of the Excel file as column names. If this option is not checked the entity will be assigned 0 based index column names as `Field + Index`. e.g., Field0, Field1, Field2, etc. | No | `false` | No |
| Properties | Map columns from the Excel file to properties of the entity. | Yes | None Specified | No |
| Sheet Name | Name of the sheet in the Excel file to use. | Yes | `empty string` | Yes |
| Start Row | Specify the first row to be included in the entity. If left empty, the entity will be created starting with the first row of the sheet. | Yes | `empty string` | No |
| End Row | Specify the last row to be included in the entity. If left empty the entity will include the last row. | Yes | `empty string` | No |
| On Error | Specify a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on.  | Yes | None Specified | No |
</entityname>