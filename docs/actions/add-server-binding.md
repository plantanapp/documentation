---
id: add-server-binding
title: Add Server Binding
sidebar_label: Add Server Binding
---


This action will create a new alias in database and a new binding in IIS.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Alias/Binding | Specify the new alias to be created. This field supports tokens. | No | None |
| Certificate Thumbprint | Specify the certificate thumbprint which is already installed on the server to use with the new alias, or leave this empty to set an HTTP alias. This field supports tokens. The datasource for Portal Certificates outputs the value as certificate thumbprint. This field supports tokens. | No | None |
| Add DNN Alias | Check this box if you want to also add a DNN alias too. | No | None |
