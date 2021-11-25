---
id: create-object
title: Create Object
sidebar_label: Create Object
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action creates an entity in the current context to which you can load values from the current context. Use the action additional times to add items to the entity.

:::note
This creates an entity that can be used ONLY in the current context. This does not create a [Plant an App Entity](/entities.md).
:::

## `Typical Use Cases`

- Load values from a form or grid into an entity and then use Execute Actions for each List Entry to run the same actions on each item.

## `Don't use it to`

- Create an entity that will have values loaded from another source like SQL, CSV, CSV File, etc. Use the `Load Entities (Source)` actions instead (e.g. [Create List from CSV file (obsolete)](/actions/create-list-from-csv-file-obsolete.md)).

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Execute Actions for each List Entry ](/actions/execute-actions-for-each-list-entry.md)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Extend Object Properties](/actions/extend-object-properties.md)   | Extends an entity with new properties. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/actions/common-parameters.md).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| Entity Name | Provide a name for the entity being created. This name can be used in the [Execute Actions for each List Entry ](/actions/execute-actions-for-each-list-entry.md) action to reference the items in the entity using `[EntityName:PropertyName]` token syntax. | Yes | `empty string` | Yes |
| Properties | Specify the Property Names and Values to include in the entity.  | Yes | None Specified | No |
