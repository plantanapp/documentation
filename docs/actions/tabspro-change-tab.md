---
id: tabspro-change-tab
title: TabsPro Change Tab
sidebar_label: TabsPro Change Tab
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Form Builder`

This action will allow you to change tabs in a TabsPro module on a Form or Grid’s button click.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| TabsPro Change Tab And Continue Execution | Changes the specified Tabs and then continues to subsequent actions on the button and submission. |
| TabsPro Change Tab And Stop Execution | Changes the specified Tabsand then stops further execution of both subsequent actions and HTTP Post submission. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| TabsPro Module | Select the TabsPro module to which the action refers to; if an expression is passed you will need to pass the TabsPro ModuleID | Yes | Empty String | No |
| Tab | Select the tab to which you wish to change; if an expression is passed you will need to pass the TabsPro tabID | Yes | Empty String | No |
| Evaluate State | This option evaluates the state of the TabsPro tabs prior to changing the tab | No | Unchecked | No |
