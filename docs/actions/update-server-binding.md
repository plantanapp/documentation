---
id: update-server-binding
title: Update Server Binding
sidebar_label: Update Server Binding
---

Not available in: Automation.


This action will update an alias in database and the corresponding binding in IIS. To change a binding to HTTPS, put a valid certificate into the field. To change it back to HTTP binding leave an empty certificate. Both Old Alias and New Alias fields are required in order to work. In order to target more specifically a binding, use the port too, like example.com:443 or example.com:80 to ensure the correct binding is deleted.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Old Alias/Binding | Specify the old alias by PortalAliasID or the alias/binding itself. It is strongly recommended to use the PortalAliasID (retrieved from the grid datasource). This field supports tokens. | No | None |
| New Alias/Binding | Specify the new alias/binding to which update the old one. This field supports tokens. | No | None |
| Certificate Thumbprint | Specify the certificate thumbprint which is already installed on the server to use with the new alias/binding, or leave this empty to set an HTTP alias. This field supports tokens. The dropdown datasource for Portal Certificates outputs the value as certificate thumbprint. | No | None |
| Update DNN Alias | Check this box if you want to also update a DNN alias too. | No | None |
