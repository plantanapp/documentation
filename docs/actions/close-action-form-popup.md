---
id: close-form-popup
title: Close Form Popup
sidebar_label: Close Form Popup
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This action allows you to manually trigger a close popup action for the specified Action Form. Depending on the Action selected, the remaining actions will also execute.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Close Action Form Popup And Continue Execution | Closes the specified Action Form popup and then continues to subsequent actions on the button and submission. |
| Close Action Form Popup And Stop Execution | Closes the specified Action Form popup and then stops further execution of both subsequent actions and HTTP Post submission. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Form for which you want to trigger a close popup action. Optionally, click the `EXPR` button to tokenize the selection of the form ID| Yes | Empty String | No |
