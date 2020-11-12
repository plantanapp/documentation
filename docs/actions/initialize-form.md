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
| [Open Form Popup](/docs/actions/open-form-popup)       | Opens a specified Form in a pop-up.|

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter                  | Description                                                                                                                                                                | Supports Tokens | Default            | Required |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------ | -------- |
| Select Module | Select the Form module you wish to initialize by selecting it from a prepopulated list of all the Forms on the page. Alternatively, select the `EXPR` button to set it programmatically by switching to an expression to use My Tokens or values based on other fields.                                                                                                                      | Yes              | `None selected`    | Yes      |
| QueryString Parameters                 | Optionally, enter parameters as `Name` and `Value` pairs that will be passed to the form being initialized. The values set here will be sent to the Form module and will be available in the Init and PreInit actions using the `[QueryString:Parameter]` token syntax.                                                                                                                                   | Yes              | `None`               | No       |
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
