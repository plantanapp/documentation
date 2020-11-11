---
id: initialize-form
title: Initialize Action Form
sidebar_label: Initialize Action Form
---

> Audience: [`Low-code Engineers`](/docs/audience#low-code-engineers)<br/>
> Skill Prerequisites: `HTML`

This action allows you to manually trigger the initialization of a Form.

It is helpful in situations where you have multiple Form modules on the same page, and you set their **Display Mode** to **Manual**. This prevents the forms from loading and helps save bandwidth at page load (your page will load a lot faster) while allowing you to initialize them (wake them up) when they are needed.

:::note
The page will not be refreshed when a Form is initialized.
:::

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Initialize Action Form And Continue Execution | Initializes the specified Action Form and then continues to subsequent actions on the button and submission. |
| Initialize Action Form And Stop Execution | Opens the specified Action Form and then stops further execution of both subsequent actions and HTTP post submission. |

## `Typical Use Cases`

- Show a Form that is not visible by default
- Re-initialze a form that was already submitted, but has not been closed so multiple entries can be submitted

## `Don't use it to`

- Open a Form in a pop-up. Use the Open Form Popup action instead.
  
## `Related Actions`

| Action Name                                       | Description                                                                                       |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [Open Form Popup](/docs/actions/open-form-popup)       | Opens a a specified Form in a pop-up.|

## `Input Parameter Reference`

| Parameter                  | Description                                                                                                                                                                | Supports Tokens | Default            | Required |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------ | -------- |
| Description            | A short description for the action. Only Citizen Developers and Admins will be able to see this field. | No              | `empty string` | No      |
| Error Message                  | A generic error message that will be displayed to end users in case an error occurs in the action.  Citizen Developer and above will also see the detailed error message provided by the system.  Leave empty to use the default message.                                                                                                 | Yes             | `empty string`     | No      |
| Condition                   | This boolean expression is used to determine if this action will execute. Use it to enable or disable this action programatically. For example, you’d enable a ShowError action only if you’ve found an error let’s say when you parsed a response from a web service. A common example is [SomeField] == “Some Value”.                                                                 | Yes             | `empty string`     | No       |
| Select Module | Select the Form module that you wish to initializeby selecting it from a prepopulated list of all the Forms on the page. Alternativly you can set it programatically by switching to an expression to use My Tokens or values based on other fields.                                                                                                                      | Yes              | `None selected`    | Yes      |
| QueryString Parameters                 | Optionally enter parameters as Name/Value pairs that can be accessed through querystring. The values set here will be sent to the Form module and will be available in the Init and PreInit actions as values of the 'QueryString:' token namespace.                                                                                                                                    | Yes              | `None`               | No       |
|

## `Output Parameters Reference`

| Parameter           | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| None    | Does not apply to this action |

## `Alternate Method`

### `Javascript`
  
This action can be accomplished directly from Javascript by calling:

- dnnsf.api.actionForm.initForm(1234) - when you just want to init the form with module id 1234
  
- dnnsf.api.actionForm.initForm(1234, {param1:val1, param2:val2}) - when you also want to pass some parameters to the form with module id 1234
