---
id: create-portal
title: Create Portal
sidebar_label: Create Portal
---


This action will create a DNN portal.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Portal Name (required) | Specify portal name. Note that you can use a context token like [PortalName] to read it from input or use My Tokens. | Yes | None |
| Token portal id | Specify token name to store portal id. Note that you can use a context token like [TokenName] to read it from input or use My Tokens. | Yes | None |
| Home Directory | Specify home directory in format Portals/{directory name}. Leave empty to create Portals/{portalId}. Note that you can use a context token like [HomeDirectory] to read it from input or use My Tokens. | Yes | None |
| Portal Alias (required) | Specify portal alias. This can not contain spaces and must be unique per site. Note that you can use a context token like [PortalAlias] to read it from input or use My Tokens. | Yes | None |
| Administrator Id | Specify administrator id. If empty the current user will be administrator. Note that you can use a context token like [AdministratorId] to read it from input or use My Tokens. | Yes | None |
| KeyWords | Specify portal keyWords. Note that you can use a context token like [KeyWords] to read it from input or use My Tokens. | Yes | None |
| Description | Specify portal description. Note that you can use a context token like [Description] to read it from input or use My Tokens. | Yes | None |
| Email | Specify portal email. Note that you can use a context token like [Email] to read it from input or use My Tokens. | Yes | None |
