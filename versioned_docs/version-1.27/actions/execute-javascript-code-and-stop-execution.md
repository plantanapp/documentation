---
id: execute-javascript-code-and-stop-execution
title: Execute JavaScript Code And Stop Execution
sidebar_label: Execute JavaScript Code And Stop Execution
---

> Audience: [`Low-Code Engineer`](/docs/audience#low-code-engineers)
>
> Skill Prerequisites: `JavaScript`

The `Execute Javascript Code And Stop Execution` action allows you to run custom JavaScript code as part of a button or form’s action stack, **and then immediately halt** any further action processing. This means that no additional actions will be executed after this one—including backend queries, data saves, HTTP POST submission, or additional JavaScript actions. Use this action whenever you need your button or user interaction to have client-side effects only, and prevent further server interaction.

:::note
**IMPORTANT:**
JavaScript entered in this action executes *at the point you configure it among your stack of actions*—but once this action runs, all subsequent actions are skipped, and form submission (when relevant) is **prevented**.
This is different from "on change/click" JavaScript properties of fields or buttons, which always run *before* any Plant an App actions.
:::

## `Typical Use Cases`

- Creating buttons or links that perform UI effects (such as showing a dialog, toggling visibility, or sending data via other JavaScript methods) **without submitting a form or saving data**.
- Adding quick-informational interactions (e.g., show an alert, copy data to clipboard) without allowing the form to move forward.
- Validating or checking something in JavaScript and preventing further actions if a certain condition is met.

## `When *Not* To Use This Action`

- If you want to perform client-side JavaScript **and then continue processing other actions**—including saving data or proceeding to the next action in a stack—**use the related action: `Execute Javascript Code And Continue Execution`** (see Related Actions below).
- Do not place business-critical or secure logic in this action: everything runs in the end user’s browser and is modifiable.

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
|-------------------|---------------------------------------------------------------------------------------------------|-----------------|-----------------|----------|
| Javascript Code | The JavaScript code you want to execute at this step. Fully supports JavaScript syntax and Plant an App tokens (for example, `[SomeField]`). | Yes | `empty string` | No |

## `Examples`

### 1. Show an Alert and Prevent Submission

```json
{
"Title": "Execute Javascript Code And Stop Execution",
"ActionType": "ExecuteJsCode",
"Parameters": {
"JavascriptCode": "alert('This form cannot be submitted.');"
}
}
```
No further form actions or submission will happen after the alert.

### 2. Conditionally Prevent Further Actions

```json
{
"Title": "Execute Javascript Code And Stop Execution",
"ActionType": "ExecuteJsCode",
"Parameters": {
"JavascriptCode": "if(form.fields.Age.value < 18) { alert('You must be 18 or older.'); }"
}
}
```
If this action is last in your button’s stack, no subsequent actions or submission will happen regardless of conditions you add in your code.

### 3. Use Tokens in Your JavaScript

```json
{
"Title": "Execute Javascript Code And Stop Execution",
"ActionType": "ExecuteJsCode",
"Parameters": {
"JavascriptCode": "console.log('Submission blocked for user: [UserEmail]');"
}
}
```
Tokens are replaced before code is executed in the browser.

## `Ideas on How to Use`

- Place this action as the final or only action on a button to create client-only buttons (e.g., "Open Info Dialog," "Close Modal," etc.).
- Use a Plant an App conditional action preceding this to determine, at runtime, whether the stack should halt with this action or proceed to others.

## `Related Actions`

| Action Name | Description |
|-------------------------------------------------|----------------------------------------------------------------------------------|
| Execute Javascript Code And Continue Execution | Runs custom JavaScript and continues executing all configured subsequent actions. Use this if you don’t want to prevent further processing after your JavaScript runs. |
| Open Form Popup And Stop Execution | Opens a new form popup and halts further processing. |
| Filter Listing | Filters a grid or listing with the given parameters. |

## `Security Considerations`

- All JavaScript placed in this action runs **in the client’s browser**. Users can see and alter this code, so never include sensitive data or logic here.
- Avoid inserting untrusted user input to prevent cross-site scripting (XSS) vulnerabilities.
- This action is not intended for secure business logic—use Plant an App’s backend actions for server-side processing.

## `Key Differences: Stop vs. Continue Execution`

- **This action halts all further actions in the process flow.**
- If you want to combine client-side JavaScript with continued backend or data actions, use `Execute Javascript Code And Continue Execution` instead.

## `Summary`

Use `Execute Javascript Code And Stop Execution` when you need a button or form action that only performs client-side logic and specifically prevents form submission or further processing. For scenarios where you want to insert JavaScript *without* interruption, see its companion action.
