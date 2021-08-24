---
id: load-users-from-sql
title: Load Users from SQL
sidebar_label: Load Users from SQL
---


Related actions such as granting roles or sending emails will be performed for every user loaded in context. This letes you load additional users into the context. For example, make a selection of users, then send a tokenzied email to all of them.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| SQL Query | SQL to execute. It should return only one column, which is the UserID. A common query is SELECT UserId from Users Where FirstName LIKE '%John%'. Can contain context tokens (for example [ContextTokenName]) and My Tokens. | Yes | None |
