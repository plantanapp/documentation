---
id: running-examples
title: Running the examples from actions
sidebar_label: Running examples
---

In each `Examples` section there is a code snippet that can be copied and imported in the Plant An App aplication so that it can be run. Below is a screenshot from the first example of the [Run SQL Query](\docs\run-sql.md) action:

<img src="/static/img/running-examples-1.jpg" alt="Run SQL Query Example" />

As the red circle suggest, in the top right corner there is a `Copy` button that can be used to copy the whole code. After the code is in the clipboard, there are 2 ways to use it:
1. Import it in a module;
2. Import it in a Workflow;

## `Import the action in a module`

When customizing a module, an action labeled `Import Action` can be used for pasting the copied code. After clicking on the `Import Action` button, a pop-up will appear and the copied JSON can be pasted in the empty box. 

For better understanding, in the below screenshot, when importing into a Form module, the previous code was copied and then pasted in the `Import Action` that can be found in the `On Page Load` section:

<img src="/static/img/running-examples-2.jpg" alt="Import Example" />

After clicking the `Import` button, the action should be imported.

## `Import the action in a Workflow`

When creating a new workflow, or editing an existing one, on the top line there is a button labeled `Import`. The operating principle is the same as the one used on `Import the action in a module`.

The only **major difference** is that if in the clipboard is a valid code it will be executed automatically and the action will appear as a workflow element, but will not be connected. Below there is an ilustration for the concept, using the code from the first screenshot:

<img src="/static/img/import.gif" alt="Import Example" />

:::note
 If in the clipboard is not a valid code, a pop-up similarly to the previous one will appear, with the `Action or Array of Actions` box completed with the text from clipboard:
:::

<img src="/static/img/import_wrong.gif" alt="Import Wrong Example" />

:::note
Multiple actions can be imported each one individually, or, if they are in an `Execute Actions` actions, then the `Import Action` will see it as a single action and you will find the other inside the `Execute action`.
:::
