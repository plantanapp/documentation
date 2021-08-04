---
id: tabspro-change-tab-and-stop-execution
title: TabsPro Change Tab And Stop Execution
sidebar_label: TabsPro Change Tab And Stop Execution
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| TabsPro Module | Select the Tabs Pro module. If an expression is passed in, it needs to return the ModuleId of the TabsPro module. It supports context tokens (such as [InputField]) and My Tokens | Yes | None |
| Tab | Select the tab in Tabs Pro module. If an expression is passed in, it needs to return the id of the tab in the TabsPro module. It supports context tokens (such as [InputField]) and My Tokens | Yes | None |
| Evaluate state | This option evaluates the state of the TabsPro' Tabs before changing the tab. | No | None |
| QueryString Parameters | The values set here will be sent to the Tabs Pro module. Any Action Form modules present in the tab will receive the values as tokens with 'QueryString:' namespace. | No | None |
