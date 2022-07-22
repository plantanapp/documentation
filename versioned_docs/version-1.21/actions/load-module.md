---
id: load-module
title: Load Module
sidebar_label: Load Module
---


This action will load a DNN module into current context.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page Identifier | Identifies the page that contains the module. Leave empty to load a module from current page current page. Possible values are a Tab Id, a Tab Path (a valid path is //RootPage//SubPage//AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and My Tokens. | Yes | None |
| Module Identifier | Identifies the module to load. Possible values are a Module Id or a Module Name. These are matched against the Page above. Can contain context tokens (for example [SomeModuleId]) and My Tokens. | Yes | None |
| Store Module Title in | If specified, this is a field name or a token name that will receive the module title. Use of square brackets is optional. | No | None |
| Store Display Container in | If specified, this is a field name or a token name that will receive the Display Container setting. Use of square brackets is optional. | No | None |
| Store Enable Print in | If specified, this is a field name or a token name that will receive the Enable Print setting. Use of square brackets is optional. | No | None |
| Store Enable RSS in | If specified, this is a field name or a token name that will receive the Enable RSS setting. Use of square brackets is optional. | No | None |
| Store Start Date in | If specified, this is a field name or a token name that will receive the module start date. Use of square brackets is optional. | No | None |
| Store End Date in | If specified, this is a field name or a token name that will receive the module end date. Use of square brackets is optional. | No | None |
| Permissions | Load permissions for the page. The first column would contain VIEW or EDIT or other permission that appears in the Page Permissions table. The second is the token where you want to store the list of role IDs delimited by comma or semicolon. | No | None |
