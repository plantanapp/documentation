---
id: delete-user
title: Delete User
sidebar_label: Delete User
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `User Management`

This action deletes users loaded into the current context when the action is called. By default, this will be the currently logged in user unless a different user or list of users has been loaded into context.

## `Typical Use Cases`

- Give a user the option of deleting their own account.
- Use in a custom User Management Grid to Delete multiple selected users.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Load User](/docs/actions/load-user) | Use this action to load the user(s)  you wish to delete. |
| [Load Users From SQL](/docs/actions/load-users-from-sql) | Use this action to load a user or users into context by running a query that returns a list of the User IDs, Emails, or user names of the user(s) you wish to delete. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

:::note
Whether or not the `Hard Delete` option listed below is selected, this action will run on all users loaded in the current context. Please consider using this action on a confirmation button (in forms), or enabling `Ask For Confirmation` (in grids).
:::

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Hard Delete | Enable this option to delete the user from the database completely. Otherwise, the user is only removed  from the current portal. | No | `false` | No |
