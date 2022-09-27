---
id: change-tab
title: Change Tab
sidebar_label: Change Tab
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Form Builder`

This action allows you to change the active tab in a Tabs module on a Form or Grid’s button click.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Tabs  Change Tab And Continue Execution | Changes the specified Tabs module to the specified tab and then continues to subsequent actions on the button and submission. |
| Tabs  Change Tab And Stop Execution | Changes the specified Tabs module to the specified tab and then stops further execution of both subsequent actions and HTTP Post submission. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/actions/common-parameters.md).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Tabs Module | Select the Tabs module for which the active tab will be changed. if an expression is passed you will need to pass the Tabs ModuleID | Yes | Empty String | No |
| Tab | Select the tab you wish to make active; if an expression is passed you will need to pass the Tabs tabID | Yes | Empty String | No |
| Evaluate State | This option evaluates the state of the Tabs tabs prior to changing the tab | No | Unchecked | No |
| QueryString Parameters | Optionally, you can enter `Name` and `Value` pairs that will be passed to the Tabs module. Any Form modules present in the tab can reference these values using the `[QueryString:Parameter]` token syntax. | No | Unchecked | No |
