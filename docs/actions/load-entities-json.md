---
id: load-entities-json
title: Load Entities (JSON)
sidebar_label: Load Entities (JSON)
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This action creates an entity list in the current context from a provided JSON input string (JSONModel). This could be from a form field, or other actions such as a Server Request action. You can find the number of loaded entities in the `[<EntityName>:Count]` token.

:::note
This creates an entity that can be used ONLY in the current context. This does not create a [Plant an App Entity](/docs/entities).
:::

## `Typical Use Cases`

- Load values from a JSON response to a Server Request action into an entity.
- Use in **`Automation`** to Load values from a JSON string passed in a token and then use Execute Actions on Entity List to run the same actions on each item in the list.

## `Don't use it to`

- Parse JSON. Use the `Parse JSON Into Tokens` action instead.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list)   | Execute a list of actions on each item in the specified context entity. Use this to process the items loaded in the Entity created. |
| [Extend Entity](/docs/actions/extend-entity)   | Extends an entity with new properties. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter| Description| Supports Tokens | Default| Required |
| -- | -- | -- | -- | -- |
| JSON Model | A JSON string that will be parsed and used to create the entity.  | Yes | `empty string` | Yes |
| Entity Name | Provide a name for the entity being created. This name can be used in the [Execute Actions on Entity List](/docs/actions/execute-actions-entity-list) action to reference the items in the entity using `[EntityName:PropertyName]` token syntax. | Yes | `empty string` | Yes |
| On Error | Specify a list of actions to run on error. Otherwise, an error message is returned which will contain the underlying error if debug mode is on.  | Yes | None Specified | No |
