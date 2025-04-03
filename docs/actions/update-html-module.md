---
id: update-html-module
title: Update HTML Module
sidebar_label: Update HTML Module
---


This action will update the content of an HTML module.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page | Identifies the page that contains the module. Leave empty to load the module from current page. If it's an expression, possible values are a Tab Id, a Tab Path (a valid path is //RootPage//SubPage//AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and Tokens. | No | None |
| Module Identifier | Identifies the module to load. Possible values are a Module Id or a Module Name. These are matched against the Page above. Can contain context tokens (for example [SomeModuleId]) and Tokens. | No | None |
| Regular Expressions | Optionally, provide a regular expressions to update only a part of the content. Otherwise, the entire content is updated. Can contain context tokens (for example [MyExpression]) and Tokens. | No | None |
| Content | The content that needs to go in the HTML module. Can contain context tokens (for example [Content]) and Tokens. | No | None |
