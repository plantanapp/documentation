---
id: update-module
title: Update Module
sidebar_label: Update Module
---


This action will update a DNN module.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page | Identifies the page that contains the module. Leave empty to load the module from current page. If it's an expression, possible values are a Tab Id, a Tab Path (a valid path is //RootPage//SubPage//AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and My Tokens. | Yes | None |
| Module Identifier | Identifies the module to load. Possible values are a Module Id or a Module Name. These are matched against the Page above. Can contain context tokens (for example [SomeModuleId]) and My Tokens. | Yes | None |
| Module Title | Specify a title for the module. Leave empty if you don't want to update Page Name. Note that you can use a context token like [Title] to read it from input or use My Tokens. | Yes | None |
| Display Container | This option will be evaluated as a boolean such as true. Note that you can use a context token like [DisplayContainer] to read it from input or use My Tokens. | Yes | None |
| Enable Print | This option will be evaluated as a boolean such as true. Note that you can use a context token like [EnablePrint] to read it from input or use My Tokens. | Yes | None |
| Enable RSS | This option will be evaluated as a boolean such as true. Note that you can use a context token like [EnableRss] to read it from input or use My Tokens. | Yes | None |
| Start Date | When specified, this option determines the date after which the module becomes visible on the site. Can contain context tokens (for example [DateStart]) and My Tokens. | Yes | None |
| End Date | When specified, this option determines the date after which the module is no longer visible on the site. Can contain context tokens (for example [DateEnd]) and My Tokens. | Yes | None |
| Permissions | Set permissions for the module. The first column would contain VIEW or EDIT. The second is a list of role IDs or role names delimited by comma or semicolon. If you're linking to a Permission Grid control, you can use [PermissionGrid:PermissionName] tokens in this field. Can contain context tokens (for example [RoleName]) and My Tokens. | Yes | None |
