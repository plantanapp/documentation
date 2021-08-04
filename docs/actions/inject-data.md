---
id: inject-data
title: Inject Data
sidebar_label: Inject Data
---


This action lets you add data (tokens) manually to the current execution context.You can use the data afterwards using the token syntax, for example [Name].Note that this is only valid for current action list. It does not persists until next list of actions executes for example on submit.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Data | Input the Name and Value for each data you want to inject. It can be accessed later by using [NameHere] tokens. Note that if data with same name already exists, it will get overwritten. Can contain context tokens (for example [TokenName]) and My Tokens. | Yes | None |
