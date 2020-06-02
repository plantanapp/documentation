---
id: apply-tokens
title: Apply Tokens
sidebar_label: Apply Tokens
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Variables`

This actions executes a Variable (token), usually a Variables token, where tokens can contain business logic that generates and/or saves data.
This action will output a token that stores the output of a Variable (token).

## `Typical Use Cases`

- Execute a Variable token
- Apply tokens inside a text from various sources (eg: other actions, form fields, API input parameters)

## `Don't use it to`

- Concatenate 2 tokens - Use [Inject Data](/docs/Actions/inject-data.md)
- Overwrite a token - Use [Inject Data](/docs/Actions/inject-data.md)

## `Related Actions`

| Action Name                                                     | Description                                                                        |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Update form with AJAX](/docs/Actions/update-form-with-ajax.md) | Form module only, it updates the fields based on the values from the tokens        |
| [Display Message](/docs/Actions/display-message.md)             | Form Module only, shows a message after the executions of set of actions/workflow. |


## `Input Parameter Reference`

| Parameter        | Description                                     | Supports Variables |
| ---------------- | ----------------------------------------------- | ------------------ |
| Token Expression | The tokens and/or text you want to be evaluated | Yes                |

## `Output Parameters Reference`

| Parameter         | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| Output Token Name | The variable name in which the response is to be stored for further use. |

## `Examples`

### `1. Calculations with Variable DoMath`

By default the expression will only concatenate the variables and/or text from the token expression so in case we need to do some math Variables provides a token called DoMath that can solve this issue.


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

### `2. Set a Cookie with Variable SetCookie`

You can set the value of a cookie by using the example below. You can retrieve the value of the cookie using the Cookie Variable. 

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

### `3. Set a Session token with Variable SetSession`

You can set the value of a session token by using the example below. You can retrieve the value of the session token using the Session Variable. 

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

Spelling of plurals can be as easy as the next example. Instead of adding (s) at the end of number (eg: 1 car(s) or 3 car(s) ) we can use the Pluralization Variable. For this example **3** can be another variable. 

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

## `Frequently asked questions`

**How long can I use the output token?**

It can be used after the action is executed in the execution flow and/or Workflow and it be available until the executions ends or it is stopped. 

**Can I use multiple actions in a row?**

Yes. There is no limit or restriction regarding the usage of this action.

**Where can I use the output token?**

The output token can be used starting from the next action as any other token in conditions, as parameters to other actions etc.

**What tokens can I use?**

Module related tokens (form fields, API input parameters etc.), Workflow input parameters, Variables tokens and other output tokens from the same execution/workflow.