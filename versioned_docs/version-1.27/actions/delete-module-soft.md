---
id: delete-module-soft
title: Delete Module (Soft)
sidebar_label: Delete Module (Soft)
---


This action will delete a DNN module, but it's not removed from database. It can be later restored from Admin > Recycle bin.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page | Identifies the page that contains the module. Leave empty to load the module from current page. If it's an expression, possible values are a Tab Id, a Tab Path (a valid path is //RootPage//SubPage//AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and Tokens. | No | None |
| Module Identifier | Identifies the module to delete. Possible values are a Module Id or a Module Name. These are matched against the Page above. Can contain context tokens (for example [SomeModuleId]) and Tokens. | No | None |
