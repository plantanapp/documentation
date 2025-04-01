---
id: clear-user-cache
title: Clear User Cache
sidebar_label: Clear User Cache
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `User Management`

This action clears the user level cache for users loaded into the current context when the action is called. By default, this will be the currently logged in user unless a different user or list of users has been loaded into context.

## `Typical Use Cases`

- Clear the cache for a user or users after adding a new role for the user(s).

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Load User](/actions/load-user.md) | Use this action to load the user(s) for whom you wish to clear the user cache. |
| [Load Users From SQL](/actions/load-users-from-sql.md) | Use this action to load a user or users into context by running a query that returns a list of the User IDs, Emails, or user names of the user(s) for whom you wish to clear the user cache. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/actions/common-parameters.md).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| User | User ID, username, or email of the user for whom the cache needs refreshing. | Yes | `Empty String` | No |
| Clear users loaded in context | Enable this option to also clear cache for all users loaded in context, for example, using the [Load User](/actions/load-user.md) action. | Yes | `Empty String` | No |
