---
id: update-page
title: Update Page
sidebar_label: Update Page
---


This action will update a DNN page.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page Identifier | Leave empty to update current page. Possible values are a Tab Id, a Tab Path (a valid path is //RootPage/SubPage/AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and My Tokens. | Yes | None |
| Page Name | Specify page name. Leave empty if you don't want to update Page Name. Note that you can use a context token like [PageName] to read it from input or use My Tokens. | Yes | None |
| Page Title | Specify page title. Leave empty if you don't want to update Page Title. Note that you can use a context token like [PageTitle] to read it from input or use My Tokens. | Yes | None |
| Parent Page (select) | The page will be moved under this page (only if text parameter is left empty). | No | None |
| Parent Page (text) | The page will be moved under this page (this parameter has priority over the select). For example, use [Tab:TabId] to moved new page under current page. Can contain context tokens (for example [SelectPage]) and My Tokens. | Yes | None |
| Page Description | Specify page description. Leave empty if you don't want to update Page Description. Can contain context tokens (for example [Description]) and My Tokens. | Yes | None |
| Page Keywords | Specify page meta keywords. Leave empty if you don't want to update Page Keywords. Can contain context tokens (for example [Keywords]) and My Tokens. | Yes | None |
| Start Date | When specified, this option determines the date after which the page becomes visible on the site. Can contain context tokens (for example [DateStart]) and My Tokens. | Yes | None |
| End Date | When specified, this option determines the date after which the page is no longer visible on the site. Can contain context tokens (for example [DateEnd]) and My Tokens. | Yes | None |
| Permissions | Set permissions for the page. The first column is the permission key (for example VIEW or EDIT) or permission name (View Tab or Edit Tab). The second is a list of role IDs or role names delimited by comma or semicolon. If you're linking to a Permission Grid control, you can use [PermissionGrid:PermissionName] tokens in this field. Can contain context tokens (for example [RoleName]) and My Tokens. | Yes | None |
| Other Settings | Here you can update any other setting you can think of, including custom settings. Can contain context tokens (for example [SettingValue]) and My Tokens. If you have latest My Tokens you will be able to access any of these with [Tab:]; | Yes | None |
| Store URL in Token | If you change Page Name, the URL will change. Provide the name of a token where to store it so it can be used later for example to redirect to that page or send an email with the link. | No | None |
