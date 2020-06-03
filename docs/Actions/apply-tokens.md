---
id: apply-tokens
title: Apply Tokens
sidebar_label: Apply Tokens
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Variables`

This actions executes multiple expressions and applies tokens on those expressions and stores it in another (or the same) token(s). Note that this presents a security risk when the expression has content from untrusted users. 

## `Typical Use Cases`

- Execute a Variable expression that returns an token that needs to be reevaluated
- Apply tokens inside a text from various sources (eg: other actions, form fields, API input parameters)

## `Don't use it to`

- Concatenate 2 tokens - Use [Inject Data](/docs/Actions/inject-data.md)
- Overwrite a token - Use [Inject Data](/docs/Actions/inject-data.md)

## `Related Actions`

| Action Name                                                     | Description                                                                        |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Update form with AJAX](/docs/Actions/update-form-with-ajax.md) | Form module only, it updates the fields based on the values from the tokens.       |
| [Display Message](/docs/Actions/display-message.md)             | Form Module only, shows a message after the executions of set of actions/workflow. |


## `Input Parameter Reference`

| Parameter                 | Description                                                                                                                 | Supports Variables |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Token -> Token Expression | The tokens and/or text (expression) you want to be evaluated or reevaluated                                                 | Yes                |
| Number of Recursions      | Specify how many times to apply tokenization. This is useful when tokens contain other tokens that also need to be replaced | Yes                |

## `Output Parameters Reference`

| Parameter         | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| Token -> Store as | The variable name(s) in which the response is to be stored for further use. |

## `What is recursion and when to use it`

Recursion refers of how many times we should try to check for tokens in the expression and try to replace them. 

If recursion is set to 1 then this action will work as [Execute Token](/docs/Actions/execute-token.md) action. Will assign the Expression to a token.

There are situation ([like example number 2](#2-apply-tokens-inside-a-template-recursion-1)) where you save a template (let's say email template) and you save it with tokens instead of the First Name and Last Name so you can save only one copy and when you need to deliver that email you only have to replace the Variables. 

Eg. Email Template: Hi, [User:FirstName] [User:LastName]. Please contact me!

Let's say we have the above template stored in \[EmailTemplate\]

When will bring the template value will have to set it's value in a token that will contain tokens itself so we will need to set the recursion to 2 to replace the token to the template and the template to a plain token. See below example for Recursion set to 2:

\[EmailTemplate\] -> Hi, \[User:FirstName\] \[User:LastName\]. Please contact me! -> Hi, John Doe. Please contact me!



## `Examples`

### `1. Calculations with Variable DoMath (Recursion =1)`

Applying tokens is just replacing the placeholders inside the token expression. If we needed to do some arithmetic operations, we can use the built-in [DoMath](/docs/tokens/do-math) token.


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

## `Frequently asked questions`

**What is the average number of recursions?**


It really depends on what you need to achieve. 2 or 3 recursions is the maximum that we've seen. Setting the number of recursion higher than needed will not have any impact on the result, but will impact the performance. If you are not sure how recursion works, increment the value by one until you get the desired output and there are no tokens left. That will be the ideal number for your use case.


**How long can I use the output token?**

It can be used after the action is executed in the execution flow and/or Workflow and it be available until the executions ends or it is stopped. 

**Can I use multiple actions in a row?**

Yes. There is no limit or restriction regarding the usage of this action. Be aware that a bigger than need it Number of recursion may affect the performance.

**Where can I use the output token?**

The output token can be used starting from the next action as any other token in conditions, as parameters to other actions etc. Store as values (output tokens) will not be available in the execution of the same action even if they are above in the token/expression list.

**What tokens can I use?**

Module related tokens (form fields, API input parameters etc.), Workflow input parameters, Variables tokens and other output tokens from the same execution/workflow.
