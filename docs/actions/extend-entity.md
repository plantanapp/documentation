---
id: extend-entity
title: Extend Entity
sidebar_label: Extend Entity
---

> Audience: [`Citizen Developer`](/audience#citizen-developers.md)
>
> Skill Prerequisites: `Using Form Builder`

This action extends an entity in the current context with new properties. 

## `Typical Use Cases`

- After creating a contextual entity with any of the load entity actions, use this action to add a property such as an ID before passing to the [Execute actions on entity list ](/actions/execute-actions-on-entity-list.md) action.

## `Don't use it to`

- Create an entity. Use [Create Entity](/actions/create-entity) or any of the `Load Entities (Source)` actions instead (e.g. [Load Entities (CSV File)](/docs/actions/load-entities-csv-file).md).

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Create Entity](/actions/create-entity.md)   | Creates an entity in the current context to which you can load values from the current context. Use this to create the entity that will be processed with this action. |
| [Execute actions on entity list ](/actions/execute-actions-on-entity-list.md)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Load Entities (CSV File)](/actions/load-entities-csv-file.md)   | Creates an entity in the current context from the content of a provided CSV file. Use this to create the entity that will be processed with this action. |
| [Load Entities (CSV)](/actions/load-entities-csv.md)   | Creates an entity in the current context from a CSV list. Use this to create the entity that will be processed with this action. |
| [Load Entities (Excel File) XSLX ](/actions/load-entities-excel-file-xslx)   | Creates an entity in the current context from the content of a provided Excel(XLSX.md) file. Use this to create the entity that will be processed with this action. |
| [Load Entities (JSON)](/actions/load-entities-json.md)   | Creates an entity in the current context from the provided JSON model. Use this to create the entity that will be processed with this action. |
| [Load Entities (SQL)](/actions/load-entities-sql.md)   | Creates an entity in the current context from the result of the provided SQL Query. Use this to create the entity that will be processed with this action. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/actions/common-parameters.md).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| Entity Name | Provide the name of the entity alread in context that will be updated. | Yes | `empty string` | Yes |
| Properties | Specify the Property Names and Values to include in the entity.  | Yes | None Specified | No |
| Entity Object Properties | You can add or replace properties on the entity which reference previously created entity objects. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. | Yes | None Specified | No |
| List Properties | You can add or replace properties on the entity which reference previously created entity lists. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. | Yes | None Specified | No |
