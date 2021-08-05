---
id: execute-javascript-code
title: Execute JavaScript Code
sidebar_label: Execute JavaScript Code
---

> Audience: [`Low-Code Engineer`](/docs/audience#low-code-engineers)<br/>
> Skill Prerequisites: `JavaScript`

These actions allow you to execute javascript code when a button is clicked, similar to the code you you may enter in the on change/click field of a button or form field. You can run the code and then stop all further actions, or run the code and allow subsequent actions in the stack to run.

:::note
IMPORTANT: The javascript code that you run using this action will execute by following the order of the actions on the button (ex: first run an sql query and then run javascript code) while the javascript code you enter in the on change/click field of the  will be executed before all actions on the button.
:::

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Execute Javascript Code And Continue Execution | Runs the javascript and then continues to subsequent actions on the button and submision. | 
| Execute Javascript Code And Stop Execution | Runs the javascript and then stops further execution of both subsequent actions and HTTP post submission. Use this action either conditionally or because you want the button to act client-side only.|

## `Typical Use Cases`

- Make changes to the appearance of a page, such as hiding or displaying an element or changing CSS
- Add interaction with a third party feature on the page

## `Don't use it to`

- Interact with other Plant an App features on the page. Use Plant an App or DNN Sharp special actions instead (e.g. `Open Action Form Popup and Stop Execution` or `Filter Action Grid`)

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Javascript Code | The JavaScript code to run (Full syntax supported). To export values back to the process, use return statements. | Yes | `empty string` | No |

## `Ideas on How to Use`

- Condition the execution of the code by using boolean expressions (or conditions that upon execution will evaluate to true/false)
- Run multiple final actions available in the public APIs (like initform, openpopup, closemodal,etc.)
