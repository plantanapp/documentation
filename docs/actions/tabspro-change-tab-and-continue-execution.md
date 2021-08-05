---
id: tabs-change-tab
title: Tabs Pro Change Tab
sidebar_label: Tabs Pro Change Tab
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This action allows you to change the active tab in a Tabs Pro module on a Form or Grid’s button click.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Tabs Pro Change Tab And Continue Execution | Changes the specified Tabs Pro module to the specified tab and then continues to subsequent actions on the button and submission. |
| Tabs Pro Change Tab And Stop Execution | Changes the specified Tabs Pro module to the specified tab and then stops further execution of both subsequent actions and HTTP Post submission. |

## `Input Parameter Reference`

The parameters unique to this action are listed below. [Review the common parameters for all actions here](/docs/actions/common-parameters).

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Tabs Pro Module | Select the Tabs Pro module for which the active tab will be changed. if an expression is passed you will need to pass the Tabs Pro ModuleID | Yes | Empty String | No |
| Tab | Select the tab you wish to make active; if an expression is passed you will need to pass the Tabs Pro tabID | Yes | Empty String | No |
| Evaluate State | This option evaluates the state of the Tabs Pro tabs prior to changing the tab | No | Unchecked | No |
| QueryString Parameters | Optionally, you can enter `Name` and `Value` pairs that will be passed to the Tabs Pro module. Any Action Form modules present in the tab can reference these values using the `[QueryString:Parameter]` token syntax. | No | Unchecked | No |
