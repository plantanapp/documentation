---
id: open-form-popup-and-stop-execution
title: Open Form Popup And Stop Execution
sidebar_label: Open Form Popup And Stop Execution
---

> Audience: [`Citizen Developers`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action allows you to open a specified Action Form from the same page in a popup. Depending on the Action selected, the remaining actions will also execute.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Open Form Popup And Continue Execution | Opens the specified Form and then continues to subsequent actions on the button and submission. |
| Open Form Popup And Stop Execution | Opens the specified Form and then stops further execution of both subsequent actions and HTTP post submission. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Form you wish to open in a popup. Optionally, click the `EXPR` button to tokenize the selection of the form ID| Yes | Empty String | No |
| Reinitialize Form | Causes the selected form to reinitialize each time it is opened in a popup | No |  Unset | No |
| QueryString Parameters | Optionally, you can enter `Name` and `Value` pairs that will be passed to the form being opened in the popup. The form in the popup can reference these values using the `[QueryString:Parameter]` token syntax. | Yes | Unset | No |
