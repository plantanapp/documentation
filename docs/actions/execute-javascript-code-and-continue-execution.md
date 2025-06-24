---
id: execute-javascript-code-and-continue-execution
title: Execute JavaScript Code And Continue Execution
sidebar_label: Execute JavaScript Code Continue Execution
---

> Audience: [`Low-Code Engineer`](/docs/audience#low-code-engineers)
>
> Skill Prerequisites: `JavaScript`

The `Execute Javascript Code And Continue Execution` action enables you to run custom JavaScript code as part of a button’s action stack, then automatically proceed to any subsequent configured actions—such as continuing with form submission or running additional logic. This gives you precise control over the timing of your custom JavaScript in relation to other actions within the same button or trigger.

:::note
**IMPORTANT:**
JavaScript code added in this action executes **in the order you have configured it in the button’s actions**. This differs from "on change/click" scripts you might assign directly to a field or button, which always run *before* any actions are executed. Use this action when you want JavaScript to run at a precise place in your process flow.
:::

## `Typical Use Cases`

- Modifying the appearance of the page after a backend action (for example, hiding a success message after updating a record).
- Triggering interactions with third-party widgets or APIs after some Plant an App logic runs.
- Notifying a user via alert, toast, or other UI messages immediately before form submission completes.

## `When *Not* To Use This Action`

- Do not use this action if you wish to **stop** execution of subsequent actions or prevent data submission. For that scenario, use the related action: **Execute Javascript Code And Stop Execution** (see Related Actions).
- For backend logic or secure calculations, use Plant an App or DNN Sharp backend actions instead, as client-side JavaScript is always visible and editable to users.

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
|-------------------|---------------------------------------------------------------------------------------------------|-----------------|-----------------|----------|
| Javascript Code | The JavaScript code you want to execute at this step. Fully supports JavaScript syntax and Plant an App tokens (for example, `[SomeField]`). | Yes | `empty string` | No |

## `Examples`

### 1. Hide an Element Without Interrupting Submission

```json
{
"Title": "Execute Javascript Code And Continue Execution",
"ActionType": "ExecuteJsCodeAndContinue",
"Parameters": {
"JavascriptCode": "document.getElementById('promoBanner').style.display = 'none';"
}
}
```
This hides the specified page element, and any actions configured after this one (including form submission) will still occur.

### 2. Copy Data from One Field to Another, Then Continue

```json
{
"Title": "Execute Javascript Code And Continue Execution",
"ActionType": "ExecuteJsCodeAndContinue",
"Parameters": {
"JavascriptCode": "form.fields.LastName.value = form.fields.FirstName.value;"
}
}
```
Copies the first name to the last name field and proceeds to the next actions as usual.

### 3. Use Tokens in Your JavaScript

```json
{
"Title": "Execute Javascript Code And Continue Execution",
"ActionType": "ExecuteJsCodeAndContinue",
"Parameters": {
"JavascriptCode": "console.log('Order ID from backend: [OrderID]');"
}
}
```
Tokens are replaced with their values before the code is run in the browser.

## `Ideas on How to Use`

- Chain this after backend actions or data processing—run JavaScript only when certain data has already been fetched, calculated, or stored.
- Combine with conditional visibility: Use Plant an App conditional actions first, and use this action to apply cosmetics or initiate complex UI updates.

## `Related Actions`

| Action Name | Description |
|-----------------------------------------------|----------------------------------------------------------------------------------|
| Execute Javascript Code And Stop Execution | Runs custom JavaScript and halts all further action and submission. Use this if you need to interrupt form or button logic after running your code. |
| Open Form Popup And Stop Execution | Opens a form popup and stops further processing. |
| Filter Listing | Filters a listing/grid using given parameters. |

## `Security Considerations`

- All JavaScript placed in this action runs **in the client’s browser**. Users can see and alter this code, so never include sensitive data or logic here.
- Avoid injecting untrusted user input into your JavaScript code to prevent cross-site scripting vulnerabilities.
- Limit access to this action to users with JavaScript knowledge.

## `Key Differences: Continue vs. Stop Execution`

- **This action continues running all subsequent actions in the stack.**
- If you wish to halt actions or prevent default submission after running JavaScript, you should use the `Execute Javascript Code And Stop Execution` action instead.

## `Summary`

Use `Execute Javascript Code And Continue Execution` any time you want to add JavaScript *within* your process stack without interrupting the flow. For interruption or client-only flows, see its companion action.

