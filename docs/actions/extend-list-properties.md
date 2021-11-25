---
id: extend-list-properties
title: Extend List Properties
sidebar_label: Extend List Properties
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action extends an entity in the current context with new properties. 

## `Typical Use Cases`

- After creating a contextual entity with any of the load entity actions, use this action to add a property such as an ID before passing to the [Execute Actions for each List Entry ](/actions/execute-actions-for-each-list-entry.md) action.

## `Don't use it to`

- Create an entity. Use [Create Entity](/actions/create-entity.md) or any of the `Load List (Source)` actions instead (e.g. [Create List from CSV file (obsolete)](/actions/create-list-from-csv-file-obsolete.md)).

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Create Entity](/actions/create-entity.md)   | Creates an entity in the current context to which you can load values from the current context. Use this to create the entity that will be processed with this action. |
| [Execute Actions for each List Entry ](/actions/execute-actions-for-each-list-entry.md)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Create List from CSV file (obsolete)](/actions/create-list-from-csv-file-obsolete.md)   | Creates an entity in the current context from the content of a provided CSV file. Use this to create the entity that will be processed with this action. |
| [Create List from a CSV source](/actions/create-list-from-a-csv-source.md)   | Creates an entity in the current context from a CSV list. Use this to create the entity that will be processed with this action. |
| [Create List from Excel (xlsx) ](/actions/create-list-from-excel-xlsx.md)   | Creates an entity in the current context from the content of a provided Excel(XLSX) file. Use this to create the entity that will be processed with this action. |
| [Create List from JSON](/actions/create-list-from-json.md)   | Creates an entity in the current context from the provided JSON model. Use this to create the entity that will be processed with this action. |
| [Create List from SQL](/actions/create-list-from-sql.md)   | Creates an entity in the current context from the result of the provided SQL Query. Use this to create the entity that will be processed with this action. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/actions/common-parameters.md).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| Entity Name | Provide the name of the entity alread in context that will be updated. | Yes | `empty string` | Yes |
| Properties | Specify the Property Names and Values to include in the entity.  | Yes | None Specified | No |
| Entity Object Properties | You can add or replace properties on the entity which reference previously created entity objects. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. | Yes | None Specified | No |
| List Properties | You can add or replace properties on the entity which reference previously created entity lists. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. | Yes | None Specified | No |
