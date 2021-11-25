---
id: create-entity
title: Create Entity
sidebar_label: Create Entity
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action creates an entity in the current context to which you can load values from the current context. Use the action additional times to add items to the entity.

:::note
This creates an entity that can be used ONLY in the current context. This does not create a [Plant an App Entity](/docs/entities).
:::

## `Typical Use Cases`

- Load values from a form or grid into an entity and then use Execute Actions on Entity List to run the same actions on each item.

## `Don't use it to`

- Create an entity that will have values loaded from another source like SQL, CSV, CSV File, etc. Use the `Load Entities (Source)` actions instead (e.g. [Load Entities (CSV File)](/docs/actions/load-entities-csv-file)).

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Execute actions on entity list ](/docs/actions/execute-actions-on-entity-list)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Extend Entity](/docs/actions/extend-entity)   | Extends an entity with new properties. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| Entity Name | Provide a name for the entity being created. This name can be used in the [Execute actions on entity list ](/docs/actions/execute-actions-on-entity-list) action to reference the items in the entity using `[EntityName:PropertyName]` token syntax. | Yes | `empty string` | Yes |
| Properties | Specify the Property Names and Values to include in the entity.  | Yes | None Specified | No |
