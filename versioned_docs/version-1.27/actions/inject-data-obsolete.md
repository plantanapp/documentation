---
id: inject-data-obsolete
title: Inject Data (Obsolete)
sidebar_label: Inject Data (Obsolete)
---

> Audience: [`Business Users`](/audience.md#business-users)
>
> Skill Prerequisites: `None`

An action that lets you create new tokens into the current execution context. The value of each token is usually a computation of other tokens from the context. Once created, the new tokens can be accessed by any subsequent action.

## `Obsolete`
This action has been designated as obsolete.  Use the *Create/Update Token* action instead.  

## `Typical Use Cases`

- Generate a new token
- Concatenate 2 tokens
- Overwrite a token
- Initialize variables with empty strings

## `Don't use it to`

- Execute the same token multiple times, in case the token contains other tokens inside - use [Create/Update Tokens](/actions/create-update-tokens.md) instead
- Create a token that is used in another execution context - store the data in a hidden field, cookies or server session instead
- Store data in [Entities](/entities.md)


## `Input Parameter Reference`

| Parameter      | Description                                              | Supports Variables |
| -------------- | -------------------------------------------------------- | ------------------ |
| Token -> Value | The value that you want to assign to the created token. | Yes                |

## `Output Parameters Reference`

| Parameter     | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| Token -> Name | The token name(s) in which the response is to be stored for further use. |
