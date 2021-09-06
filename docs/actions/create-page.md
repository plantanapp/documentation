---
id: create-page
title: Create Page
sidebar_label: Create Page
---


This action will create new DNN page.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page Name | Specify page name. Note that you can use a context token like [PageName] to read it from input or use My Tokens. | Yes | None |
| Page Title | Specify page title. Note that you can use a context token like [PageTitle] to read it from input or use My Tokens. | Yes | None |
| Show In Menu | Determines if the page will appear in menu. For expressions, you can use tokens that return 'true'/'false' or '1'/'0' (without the quotes). | No | None |
| Template | Select a page template that you've exported in DNN Export Page function. | No | None |
| Dynamic Template | If the path to the template is dynamic (determined at runtime based on context data for example), you can input it into this filed which can contain context tokens and My Tokens. | Yes | None |
| Parent Page | The new page will be created under this page. Leave empty to create a root page. | No | None |
| Parent Page Token | Optionally provide a token to set the parent page dynamically. For example, use [Tab:TabId] to create the new page under current page. Can contain context tokens (for example [SelectPage]) and My Tokens. | Yes | None |
| Page Description | Optionally, provide a meta description for this page. Note that you don't want to put HTML or large text in meta. Can contain context tokens (for example [Description]) and My Tokens. | Yes | None |
| Page Keywords | Optionally, provide meta keywords for this page. Can contain context tokens (for example [Keywords]) and My Tokens. | Yes | None |
| Start Date | This determines the date after which the page becomes visible on the site. Leave empty to show instantly. Can contain context tokens (for example [DateStart]) and My Tokens. | Yes | None |
| End Date | This determines the date after which the page is no longer visible on the site. Leave empty to disable this option. Can contain context tokens (for example [DateEnd]) and My Tokens. | Yes | None |
| Permissions | Set permissions for the page. The first column is the permission key (for example VIEW or EDIT) or permission name (View Tab or Edit Tab). The second is a list of role IDs or role names delimited by comma or semicolon. If you're linking to a Permission Grid control, you can use [PermissionGrid:PermissionName] tokens in this field. Can contain context tokens (for example [RoleName]) and My Tokens. | Yes | None |
| Other Settings | Here you can update any other setting you can think of, including custom settings. Can contain context tokens (for example [SettingValue]) and My Tokens. If you have latest My Tokens you will be able to access any of these with [Tab:]; | Yes | None |
| Store URL in Token | Provide the name of a token where to store the URL of the newly created page so it can be used later for example to redirect to that page or send an email with the link. | No | None |
| Store ID in Token | Provide the name of a token where to store the ID of the newly created page. | No | None |
