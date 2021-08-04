---
id: remove-server-binding
title: Remove Server Binding
sidebar_label: Remove Server Binding
---


This action will delete an alias from database and from IIS using a PortalAliasID or the alias/binding name itself. In order to target more specifically a binding, use the port too, like example.com:443 or example.com:80 to ensure the correct binding is deleted.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Alias | Specify the PortalAliasID (passed from the grid), or the alias itself. | No | None |
| Delete DNN Alias | Check this box if you want to also delete a DNN alias too. | No | None |
