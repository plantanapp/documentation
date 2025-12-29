---
id: run-workflow
title: Run Workflow
sidebar_label: Run Workflow
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)  
>  
> Skill Prerequisites: `Tokens`, `Workflow`

## `Understanding Workflow Tokens in Plant an App`

Workflow tokens are a powerful feature in Plant an App, allowing you to execute workflows conveniently through tokens. These tokens encapsulate the execution of a workflow and can return outputs that are processed within the workflow.

### `Typical Use Cases`

- Execute a workflow and retrieve its output within a token-allowing environment.
- Use as a dynamic configuration tool where the outcome of a workflow influences the application behavior.
- Simplify complex operations by using tokens to trigger workflows across different parts of the application.

### `Input Parameter Reference`

| Parameter           | Description                                                                 | Supports Tokens | Default      | Required |
|---------------------|-----------------------------------------------------------------------------|-----------------|--------------|----------|
| Workflow Execution  | Specify the workflow you want to execute using the token.                   | No              | `None`       | Yes      |
| Output Field Name   | Name the field from the workflow whose output is to be captured.            | No              | `results`    | No       |
| Cache Duration      | Set the number of seconds to cache results. Zero means no cache mechanism. | No              | `0`          | No       |

### `Output Parameters Reference`

| Parameter      | Description                                                      |
|----------------|------------------------------------------------------------------|
| Token Value    | The result returned from the workflow execution through the token.|

## `Using Workflow Tokens`

Workflow tokens execute the assigned workflow whenever resolved, making it versatile and handy for multiple scenarios. It’s crucial to consider the `Cache Duration` parameter. Tokens served from cache do not execute the workflow; they return the cached value. If you want the workflow to run every time, set this to `0`.

### `How to Create Workflow Tokens`

To create a workflow token:

1. Navigate to the tokens section and select your desired namespace.
2. Define a token name.
3. Choose "Run Workflow" as the token type.
4. Select your workflow from the drop-down list.
5. Specify the output field you wish to use.
6. Set up cache preferences if necessary.

### `Importing and Exporting Workflow Tokens`

From version 1.28 onward, Plant an App allows you to export and import workflow tokens. This facilitates moving tokens between different systems, ensuring consistency and reusability across environments.

### `Demonstration Video`

To explore this Workflow Tokens further, you can watch the video explaining the process: [Workflow Tokens Video](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/IQB2FTSwKgTaTJ_0ktieBr9kAYJRW6a4fCPpdxqtPr5WwE0?e=jtpgay&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

### `Examples`



### `Security Considerations`

Be cautious when designing workflows and their output. Ensure they do not expose sensitive data, especially when workflows use external inputs.

Revised 12/29/2025