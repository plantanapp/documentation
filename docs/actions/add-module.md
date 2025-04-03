---
id: add-module
title: Add Module
sidebar_label: Add Module
---


This action will add a DNN module to a page.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page | Identifies the page that contains the module. Leave empty to load the module from current page. If it's an expression, possible values are a Tab Id, a Tab Path (a valid path is //RootPage//SubPage//AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and Tokens. | No | None |
| Module Type | Identifies the type of module to create. Select from list or use an expression that resolves to an extension name. Can contain context tokens (for example [SomeModuleType]) and Tokens. | No | None |
| Module Title | Specify a title for the module. Leave empty if you don't want to update Page Name. Note that you can use a context token like [Title] to read it from input or use Tokens. | No | None |
| Pane | The name of the pane where to place the new module. Note that you can use a context token like [PaneName] to read it from input or use Tokens. | No | None |
| Display Container | This option will be evaluated as a boolean such as true. Note that you can use a context token like [DisplayContainer] to read it from input or use Tokens. | No | None |
| Enable Print | This option will be evaluated as a boolean such as true. Note that you can use a context token like [EnablePrint] to read it from input or use Tokens. | No | None |
| Enable RSS | This option will be evaluated as a boolean such as true. Note that you can use a context token like [EnableRss] to read it from input or use Tokens. | No | None |
| Start Date | When specified, this option determines the date after which the module becomes visible on the site. Can contain context tokens (for example [DateStart]) and Tokens. | No | None |
| End Date | When specified, this option determines the date after which the module is no longer visible on the site. Can contain context tokens (for example [DateEnd]) and Tokens. | No | None |
| Permissions | Set permissions for the module. The first column would contain VIEW or EDIT. The second is a list of role IDs or role names delimited by comma or semicolon. If you're linking to a Permission Grid control, you can use [PermissionGrid:PermissionName] tokens in this field. Can contain context tokens (for example [RoleName]) and Tokens. | No | None |
| Store Module ID in | Specify a key for storing the ID of the newly created module. You can access it in other actions using the bracket syntax. For example, if you save under MyModuleId, you can get it later with [MyModuleId] token. Leave empty if you don't need the module ID. | No | None |
