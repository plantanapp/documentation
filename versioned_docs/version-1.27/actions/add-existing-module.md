---
id: add-existing-module
title: Add Existing Module
sidebar_label: Add Existing Module
---


This action will add an already existing module to another page.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Source Tab | Identifies the page that contains the module. If it's an expression, please provide a Tab Id. Can contain context tokens (for example [SomeTabId]) and Tokens. | No | None |
| Destination Tab | Identifies the page that the module selected will be added to. If it's an expression, please provide a Tab Id. Can contain context tokens (for example [SomeTabId]) and Tokens. | No | None |
| Module Type | Identifies the type of module to look for. Select from list or use an expression that resolves to a deployable desktop module id. Can contain context tokens (for example [SomeModuleType]) and Tokens. | No | None |
| Module | Specify the module to add. Select from the list or use an expression that resolves a valid module id. Can contain context tokens (for example [SomeModuleId]) and Tokens. | No | None |
| Pane | The name of the pane where to place the added module. Note that you can use a context token like [PaneName] to read it from input or use Tokens. | No | ContentPane |
| Position in the pane | The position of the module in the pane. Select from the list or use an expression that resolves to a valid odd integer. Please note that the integer 0 means the module will be placed at the top, while -1 means it will be placed at the bottom. | No | None |
| Make A Copy | If you want to make a copy of the selected module, please check this. If you add an existing module without checking this option, the modules will be linked, meaning if you change something in the initial module, it will propagate to the new module added. | No | false |
| Output Module Id Token | Specify a key for storing the ID of the newly created module. You can access it in other actions using the bracket syntax. For example, if you save under MyModuleId, you can get it later with [MyModuleId] token. Leave empty if you don't need the module ID. | No | None |
