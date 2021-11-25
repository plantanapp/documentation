---
id: open-tabs-popup-and-continue-execution
title: Open Tabs Popup And Continue Execution
sidebar_label: Open Tabs Popup And Continue Execution
---

> Audience: [`Citizen Developers`](audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action allows you to open a specified Tabs Pro from the same page in a popup. Depending on the Action selected, the remaining actions will also execute.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Open Tabs Popup And Continue Execution | Opens the specified Tabs instance and then continues to subsequent actions on the button and submission. |
| Open Tabs Popup And Stop Execution | Opens the specified Tabs  instance and then stops further execution of both subsequent actions and HTTP post submission. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Tabs Pro you wish to open in a popup. Optionally, click the `EXPR` button to tokenize the selection of the Tabs Pro ID| Yes | Empty String | No |
| QueryString Parameters | Optionally, you can enter `Name` and `Value` pairs that will be passed to the Tabs Pro being opened in the popup. The Tabs Pro in the popup can reference these values using the `[QueryString:Parameter]` token syntax. | Yes | Unset | No |
