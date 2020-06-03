---
id: execute-token
title: Execute Token
sidebar_label: Execute Token
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Tokens`

This actions executes a token, usually a token, where tokens can contain business logic that generates and/or saves data.
This action will output a token that stores the output of a token.

## `Typical Use Cases`

- Execute a token
- Execute Token inside a text from various sources (eg: other actions, form fields, API input parameters)

## `Don't use it to`

- Concatenate 2 tokens - Use [Inject Data](/docs/Actions/inject-data.md)
- Overwrite a token - Use [Inject Data](/docs/Actions/inject-data.md)

## `Related Actions`

| Action Name                                                     | Description                                                                        |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Update form with AJAX](/docs/Actions/update-form-with-ajax.md) | Form action only, it updates the fields based on the values from the tokens.       |
| [Display Message](/docs/Actions/display-message.md)             | Form action only, shows a message after the executions of set of actions/workflow. |
| [Run SQL Query](/docs/Actions/run-sql-query.md)                 | Executes an SQL statement and captures the output.                                 |


## `Input Parameter Reference`

| Parameter        | Description                                     | Supports Tokens | Default        |
| ---------------- | ----------------------------------------------- | --------------- | -------------- |
| Token Expression | The tokens and/or text you want to be evaluated | Yes             | `empty string` |

## `Output Parameters Reference`

| Parameter         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Output Token Name | The token name in which the response is to be stored for further use. |

## `Security`
**Note that this presents a security risk when the expression has content from untrusted sources.**

Tokens are powerful and can execute code that is not meant for end users to execute. This may result in unwanted behaviors or security breaches. eg: [User:Email(UserId=1)] will provide the email of that user so **expressions that come directly from a user should not be used in this action.**. Consider using only expressions the system manages and end users can't modify.  

## `Examples`

### `1. Calculations with DoMath token`

By default the expression will only concatenate the tokens and/or text from the token expression so in case we need to do some math tokens provides a token called DoMath that can solve this issue.


```json

{
    "Title": "Execute Token",
    "ActionType": "ExecuteToken",
    "Parameters": {
        "Token": "[DoMath:Eval(expression=[User:UserId]*2)]",
        "OutputTokenName": "DoubleOfUserId"
    }
}
​
```

### `2. Set a Cookie with SetCookie token`

You can set the value of a cookie by using the example below. You can retrieve the value of the cookie using the Cookie token. 

```json

{
    "Title": "Execute Token",
    "ActionType": "ExecuteToken",
    "Parameters": {
        "Token": "[SetCookie:MyCookie='More at learn.plantanapp.com']",
        "OutputTokenName": "MyCookie"
    }
}

```

### `3. Set a Session token with SetSession token`

You can set the value of a session token by using the example below. You can retrieve the value of the session token using the Session token. 

```json

{
    "Title": "Execute Token",
    "ActionType": "ExecuteToken",
    "Parameters": {
        "Token": "[SetSession:MySessionVar='More at learn.plantanapp.com']",
        "OutputTokenName": "MySessionVar"
    }
}

```

### `4. Pluralization of a value`

Spelling of plurals can be as easy as the next example. Instead of adding (s) at the end of number (eg: 1 car(s) or 3 car(s) ) we can use the Pluralization token. For this example **3** can be another token. 

```json

{
    "Title": "Execute Token",
    "ActionType": "ExecuteToken",
    "Parameters": {
        "Token": "You own 3 [Pluralization:Get(Value=3, Singular='car', Plural='cars')]",
        "OutputTokenName": "MySessionVar"
    }
}

```

## `Frequently Asked Questions`

**How long can I use the output token?**

It can be used after the action is executed in the execution flow and/or Workflow and it be available until the executions ends or it is stopped. 

**Can I use multiple actions in a row?**

Yes. There is no limit or restriction regarding the usage of this action.

**Where can I use the output token?**

It can be used after the action is executed in the action set and/or Workflow and it be available until the end of the process or it is stopped. 

**What tokens can I use?**

Module related tokens (form fields, API input parameters etc.), Workflow input parameters, tokens tokens and other output tokens from the same execution/workflow.