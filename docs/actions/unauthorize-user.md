---
id: unauthorize-user
title: Unauthorize User
sidebar_label: Unauthorize User
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `User Management`

This action Unauthorizes users who currently have a status of Authorized in the user database. The users must be loaded into the current context when the action is called. By default, this will be the currently logged in user unless a different user or list of users has been loaded into context. This has the same result as unauthorizing a user through the `Users` option on the persona bar.

## `Typical Use Cases`

- Use in a custom User Management Grid to unauthorize multiple selected users.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Load User](/docs/actions/load-user) | Use this action to load the user(s) you wish to unauthorize. |
| [Load Users From SQL](/docs/actions/load-users-from-sql) | Use this action to load a user or users into context by running a query that returns a list of the User IDs, Emails, or user names of the user(s) you wish to unauthorize. |
| [Authorize User](/docs/actions/authorize-user) | If you need to Authorize users, use this action instead. |

## `Input Parameter Reference`

Since this action acts on users that have been loaded into the hidden Users Context Entity, it only has [the common parameters for all actions listed here](/docs/actions/common-parameters).
