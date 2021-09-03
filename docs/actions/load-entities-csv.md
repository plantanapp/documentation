---
id: load-entities-csv
title: Load Entities (CSV)
sidebar_label: Load Entities (CSV)
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action creates an entity list in the current context from a CSV list loaded in context. This could be from a form field, or other actions such as Inject Data. You can find the number of loaded entities in the `[<EntityName>:Count]` token.

:::note
This creates an entity that can be used ONLY in the current context. This does not create a [Plant an App Entity](/docs/entities).
:::

## `Typical Use Cases`

- Load values from a CSV list provided by a user in a Large Text form field and then use Execute Actions on Entity List to run the same actions on each item in the list.
- Use in **`Automation`** to Load values from a CSV list passed in a token and then use Execute Actions on Entity List to run the same actions on each item in the list.

## `Don't use it to`

- Serialize data to create a CSV file. Use the `Serialize to CSV` action instead.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Extend Entity](/docs/actions/extend-entity)   | Extends an entity with new properties. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| CSV | A CSV list that will be used to create the entity. If using on a form this could be a field token for a large text field or a list of tokens separated by the selected delimiter below. | Yes | `empty string` | Yes |
| Field Separator | The delimiter value used in the provided list. Left unselected, this will default to comma. You can use the expression setting (`EXPR` button) to dynamically pass a delimiter to the action. When using a token, it's value must be either the punctuation mark (i.e. ';') or the noun that describes that punctuation mark (i.e. 'semicolon') and be one of the options listed in the dropdown (comma, semicolon, tab, pipe, colon). Tab must be passed as 'tab'. | No | `comma` | No |
| Entity Name | Provide a name for the entity being created. This name can be used in the [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list) action to reference the items in the entity using `[EntityName:PropertyName]` token syntax. | Yes | `empty string` | Yes |
| Use first row as column names | Use the first row of the CSV list as column names. If this option is not checked the entity will be assigned 0 based index column names as `Field + Index`. e.g., Field0, Field1, Field2, etc. | No | `false` | No |
| On Error | Specify a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on.  | Yes | None Specified | No |
