---
id: extend-entity
title: Extend Entity
sidebar_label: Extend Entity
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This action exends an entity in the current context with new properties. 

## `Typical Use Cases`

- After creating a contextual entity with any of the load entity actions, use this action to add a property such as an ID before passing to the [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list) action.

## `Don't use it to`

- Create an entity. Use [Create Entity](/docs/actions/create-entity) or any of the `Load Entities (Source)` actions instead (e.g. [Load Entities (CSV File)](/docs/actions/load-entities-csv-file)).

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Create Entity](/docs/actions/create-entity)   | Creates an entity in the current context to which you can load values from the current context. Use this to create the entity that will be processed with this action. |
| [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Load Entities (CSV File)](/docs/actions/load-entities-csv-file)   | Creates an entity in the current context from the content of a provided CSV file. Use this to create the entity that will be processed with this action. |
| [Load Entities (CSV)](/docs/actions/load-entities-csv)   | Creates an entity in the current context from a CSV list. Use this to create the entity that will be processed with this action. |
| [Load Entities (Excel File) XSLX](/docs/actions/load-entities-excel)   | Creates an entity in the current context from the content of a provided Excel(XLSX) file. Use this to create the entity that will be processed with this action. |
| [Load Entities (JSON)](/docs/actions/load-entities-json)   | Creates an entity in the current context from the provided JSON model. Use this to create the entity that will be processed with this action. |
| [Load Entities (SQL)](/docs/actions/load-entities-sql)   | Creates an entity in the current context from the result of the provided SQL Query. Use this to create the entity that will be processed with this action. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| Entity Name | Provide the name of the entity alread in context that will be updated. | Yes | `empty string` | Yes |
| Properties | Specify the Property Names and Values to include in the entity.  | Yes | None Specified | No |
| Entity Object Properties | You can add or replace properties on the entity which reference previously created entity objects. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. | Yes | None Specified | No |
| List Properties | You can add or replace properties on the entity which reference previously created entity lists. NOTE: No recursive referencing checks will be done when setting the property so infinite loops can be encountered. | Yes | None Specified | No |
