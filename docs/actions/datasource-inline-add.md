---
id: datasource-inline-add
title: Datasource Inline Add
sidebar_label: Datasource Inline Add
---


If data source supports updates, this turns on inline editing.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| On Save | Define a list of actions that should execute when entries are added. Note that the Inline Add action already updates data in the datasource. So use these actions to execute additional logic. These actions are executed after each row is added in the datasource, so the Id of the newly created entry is also available using the token syntax. When using ODBC connections the Id column of the newly added row is not available. | No | None |
