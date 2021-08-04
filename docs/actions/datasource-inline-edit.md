---
id: datasource-inline-edit
title: Datasource Inline Edit
sidebar_label: Datasource Inline Edit
---


If data source supports updates, this turns on inline editing.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| On Save | Define a list of actions that should execute when entries are saved.Note that the the Inline Edit action already updates data in the datasource. So use these actions to execute additional logic. These actions are executed after each row is updated in the datasource.Note 2: Any final actions that are added here will stop the execution for the current row and the action result will be discarded; the remaining rows will continue to be processed. | No | None |
