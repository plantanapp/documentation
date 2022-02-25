---
id: running-examples
title: Running the examples from actions
sidebar_label: Running examples
---

In Plant an App, when adding Actions, there is an option to import an Action. This allows you to paste JSON that will create an action with fields and settings already configured. In the Actions section of this documentation, most Actions will include an `Examples` section where you will find a JSON code snippet that can be copied and imported in the Plant an App application so that it can be run. Below is a screenshot from the first example of the [Run SQL Query](/actions/run-sql-query.md) action:

<img src="/img/running-examples-1.jpg" alt="Run SQL Query Example" />

As the red circle suggests, in the top right corner there is a `Copy` button that can be used to copy the entire code snippet. After the code is in the clipboard, there are 2 ways to use it:

1. Import it in a module
2. Import it in a Workflow

## `Import the action in a module`

When customizing a module, a button labeled `Import Action` can be used for pasting the copied code. After clicking on the `Import Action` button, a pop-up will appear and the copied JSON can be pasted in the empty box.

For better understanding, in the below screenshot, when importing into a Form module, the previous code was copied and then pasted in the `Import Action` that can be found in the `On Page Load` section:

<img src="/img/running-examples-2.jpg" alt="Import Example" />

After clicking the `Import` button, the action will appear in the list of actions above the `Import Action` button.

## `Import the action in a Workflow`

When creating a new workflow, or editing an existing one, on the top line there is a button labeled `Import`. The operating principle is the same as the one used on `Import the action in a module`.

The only **major difference** is that if the text in the clipboard is valid code, there is no need to paste. It will be executed automatically and the action will appear as a workflow element, but will not be connected. Below there is an illustration of this concept using the code from the first screenshot:

<img src="/img/import.gif" alt="Import Example" />

The first time you perform this action, your browser will likely ask you to allow Plant an App access to your clipboard. The notification may look like this:

<img src="/img/clipboard-access.png" alt="Clipboard Access Request" />

:::note
 If the content of the clipboard is not valid code **OR** if your browser has denied access to the clipboard, a pop-up titled `Import Actions` will appear. If access to the clipboard has been denied, the `Action or Array of Actions` box will be empty and you can paste your code into it. Otherwise, it will be populated with the invalid code text from clipboard as seen below:
:::

<img src="/img/import_wrong.gif" alt="Import Wrong Example" />

:::note
Multiple actions can be imported individually, or, if they are in an `Execute Actions` action, then the `Import Action` will see it as a single action and you will find the other actions inside the `Execute Actions` action after import.
:::
