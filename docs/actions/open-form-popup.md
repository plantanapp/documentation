---
id: open-form-popup
title: Open Form Popup
sidebar_label: Open Form Popup
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This action allows you to open a specified Action Form from the same page in a popup. Depending on the Action selected, the remaining actions will also execute.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Open Action Form Popup And Continue Execution | Opens the specified Action Form and then continues to subsequent actions on the button and submission. |
| Open Action Form Popup And Stop Execution | Opens the specified Action Form and then stops further execution of both subsequent actions and submission. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Form you wish to open in a popup. Optionally, click the `EXPR` button to tokenize the selection of the form ID| Yes | Empty String | No |
| Reinitialize Form | Causes the selected form to reinitialize each time it is opened in a popup | No |  Unset | No |
| QueryString Parameters | Optionally, you can enter `Name` and `Value` pairs that will be passed to the form being opened in the popup. The form in the popup can reference these values using the `[QueryString:Parameter]` token syntax. | Yes | Unset | No |

-------

- `I think the below should be removed from this document and added under visibility documentation to show how you can call an action form pop-up without using an action, but will ask team for confirmation.`
  
Using the javascript API you can open Action Form in popup by calling the next javascript method

`dnnsf.api.actionForm.openPopupById(‘1234’, {‘param’:’valueofparam’,’param2’:’valueofparam2’},true)`

First parameter is required and is the module id of the Action Form

The second parameter is optional and it is a JS object. After the Action Form init the values can be used by calling the QueryString token (eg. [QueryString:param]).

The third parameter is optional and tells Action Form if the module should be reinitialized (refreshed). This can be used when you want to refresh the form so it can use the values from the second parameters. Show Condition and Enable Condition are refreshed as well. Default is false.
