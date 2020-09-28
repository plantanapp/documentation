---
id: apply-tokens
title: Apply Tokens
sidebar_label: Apply Tokens
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Tokens`

This actions executes multiple expressions and applies tokens on those expressions and stores it in a token. The expression can also be stored in the same token, overwriting the original content.

## `Typical Use Cases`

- Execute a token expression (a mix of tokens and/or free text) that returns an other token expression that needs to go thru the same process
- Apply tokens inside a text from various sources (eg: other actions, form fields, API input parameters)

## `Don't use it to`

- Concatenate 2 tokens - Use [Inject Data](/docs/actions/inject-data)
- Overwrite a token - Use [Inject Data](/docs/actions/inject-data)

## `Related Actions`

| Action Name                                                     | Description                                                                        |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Update form with AJAX | Form action only, it updates the fields based on the values from the tokens.       |
| Display Message             | Form action only, shows a message after the executions of set of actions/workflow. |
| [Run SQL Query](/docs/actions/run-sql)                 | Executes an SQL statement and captures the output.                                 |


## `Input Parameter Reference`

| Parameter                 | Description                                                                                                                 | Supports Tokens | Default        | Required |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------- | -------- |
| Token -> Token Expression | The tokens and/or text (expression) you want to be evaluated or reevaluated                                                 | Yes             | `empty string` | No       |
| Number of Recursions      | Specify how many times to apply tokenization. This is useful when tokens contain other tokens that also need to be replaced | Yes             | 1              | No       |

## `Output Parameters Reference`

| Parameter         | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| Token -> Store as | The token name(s) in which the response is to be stored for further use. |

## `Security`
**Note that this presents a security risk when the expression has content from untrusted sources.**

Tokens are powerful and can execute code that is not meant for end users to execute. This may result in unwanted behaviors or security breaches. Eg: `[User:Email(UserId=1)]` will provide the email of that user so **expressions that come directly from a user should not be used in this action**. Consider using only expressions the system manages and end users can't modify.  

## `What is recursion and when to use it`

Recursion refers of how many times we should try to check for tokens in the expression and try to replace them. 

If recursion is set to 1 then this action will work as [Execute Token](/docs/actions/execute-token) action. Will assign the Expression to a token.

There are situation ([like example number 2](#2-apply-tokens-inside-a-template-recursion-1)) where you save a template (let's say email template). Some of the content has tokens inside to replace the First Name and Last Name. At this point you only have one copy of the template and when you need to deliver that email you only have to replace the tokens. 

Eg. Email Template: Hi, `[User:FirstName] [User:LastName]`. Please contact me!

Let's say we have the above template stored in `[EmailTemplate]`

When will bring the template content we'll have to set its value in a token that will contain tokens itself. At this point we'll need to set the recursion to 2 to replace the tokens inside the template. See below example for Recursion set to 2:

`[EmailTemplate]` -> Hi, `[User:FirstName] [User:LastName]`. Please contact me! -> Hi, John Doe. Please contact me!

## `What is the average number of recursions?`

It really depends on what you need to achieve. 2 or 3 recursions is the maximum that we've seen. Setting the number of recursion higher than needed will not have any impact on the result, but will impact the performance. If you are not sure how recursion works, increment the value by one until you get the desired output and there are no tokens left. That will be the ideal number for your use case.

## `Examples`

### `1. Calculations with DoMath Token (Recursion =1)`

Applying tokens is just replacing the placeholders inside the token expression. If we needed to do some arithmetic operations, we can use the built-in DoMath token.


```json

{
    "Title": "Apply Tokens",
    "ActionType": "ApplyTokens",
    "Parameters": {
        "Tokens": [
            {
                "value": "[DoMath:Eval(expression=[User:UserId]*2)]",
                "name": "DoubleOfUserId"
            },
            {
                "value": "[DoMath:Eval(expression=(5*2)+2)]",
                "name": "DoubleOfFivePlusTwo"
            }
        ],
        "RecursionCount": "1"
    }
}
​
```

### `2. Apply tokens inside a template (Recursion >1)`

This example demonstrates replacing tokens inside the content returned by evaluating a different token named `[EmailTemplate]`.


```json

{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Apply tokens inside a template",
    "Parameters": {
        "ActionList": [
            {
                "Title": "Apply Tokens",
                "ActionType": "ApplyTokens",
                "Parameters": {
                    "Tokens": [
                        {
                            "value": "Hi, [User:FirstName] [User:LastName]. Please contact me!",
                            "name": "EmailTemplate"
                        }
                    ],
                    "RecursionCount": "1"
                },
                "$_uid": "action15910976849431312",
                "$_isOpen": true,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Description": "Assign Template to Token"
            },
            {
                "Title": "Apply Tokens",
                "ActionType": "ApplyTokens",
                "Parameters": {
                    "Tokens": [
                        {
                            "value": "[EmailTemplate]",
                            "name": "FinalTemplate"
                        }
                    ],
                    "RecursionCount": "2"
                },
                "$_uid": "action1591097684943656",
                "$_isOpen": true,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Id": -1,
                "Description": "Apply tokens twice"
            }
        ]
    }
}

```