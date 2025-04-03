---
id: load-page
title: Load Page
sidebar_label: Load Page
---


This action will load a DNN page into current context.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page Identifier | Determines which page to load. Leave empty to load current page. Possible values are a Tab Id, a Tab Path (a valid path is //RootPage/SubPage/AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and Tokens. | No | None |
| Store Page Name in | If specified, this is a field name or a token name that will receive the page name. Use of square brackets is optional. | No | None |
| Store Page Title in | If specified, this is a field name or a token name that will receive the page title. Use of square brackets is optional. | No | None |
| Store Parent Page ID in | If specified, this is a field name or a token name that will receive the parent page ID. Use of square brackets is optional. | No | None |
| Store Parent Page Name in | If specified, this is a field name or a token name that will receive the parent page name. Use of square brackets is optional. | No | None |
| Store Page Description in | If specified, this is a field name or a token name that will receive the page description. Use of square brackets is optional. | No | None |
| Store Page Keywords in | If specified, this is a field name or a token name that will receive the page keywords. Use of square brackets is optional. | No | None |
| Store Start Date in | If specified, this is a field name or a token name that will receive the page start date. Use of square brackets is optional. | No | None |
| Store End Date in | If specified, this is a field name or a token name that will receive the page end date. Use of square brackets is optional. | No | None |
| Permissions | Load permissions for the page. Set permissions for the page. The first column is the permission key (for example VIEW or EDIT) or permission name (View Tab or Edit Tab) that appears in the Page Permissions table.. The second is the token where you want to store the list of role IDs delimited by comma or semicolon. | No | None |
| Other Settings | Here you can load any other setting you can think of, including custom settings. If you have latest Tokens you will be able to access any of these with [Tab:]; | No | None |
| Store Page URL in | If specified, this is a field name or a token name that will receive the parent URL. Use of square brackets is optional. | No | None |
