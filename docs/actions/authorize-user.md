---
id: authorize-user
title: Authorize User
sidebar_label: Authorize User
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `User Management`

This action Authorizes users who currently have a status of Unauthorized in the user database. The users must be loaded into the current context when the action is called. By default, this will be the currently logged in user unless a different user or list of users has been loaded into context. This has the same result as authorizing a user through the `Users` option on the persona bar.

## `Typical Use Cases`

- Authorize a user after they have confirmed their email address.
- Use in a custom User Management Grid to Authorize multiple selected users.

## `Related Actions`

| Action Name | Description |
| -- | -- |
| [Load User](/docs/actions/load-user) | Use this action to load the user(s) you wish to authorize. |
| [Load Users From SQL](/docs/actions/load-users-from-sql) | Use this action to load a user or users into context by running a query that returns a list of the User IDs, Emails, or user names of the user(s) you wish to authorize. |
| [Unauthorize User](/docs/actions/unauthorize-user) | If you need to Unauthorize users, use this action instead. |

## `Input Parameter Reference`

Since this action acts on users that have been loaded into the hidden Users Context Entity, it only has [the common parameters for all actions listed here](/docs/actions/common-parameters).
