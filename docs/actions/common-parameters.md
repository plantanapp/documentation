---
id: common-parameters
title: Common Parameters for All Actions
sidebar_label: Common Parameters
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `None`

All actions in Plant an App have three common input parameters that are not listed in the input parameter reference for each action documented on this site. Those three parameters are listed below.

## `Common Input Parameter Reference`

| Parameter   | Description                                                                                                                     | Supports Tokens | Default         | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------- | -------- |
| Description | A short description for the action. While this field is not required, it is recommended because it will help understand the purpose of the action without having to expand it when examining the Action Stack.  | No | `empty string`  | No |
| Error Message | An error message that will be shown when an error occurs in this action. If left blank, the system default error message will be shown. Administrators will also be shown a detailed message. | Yes | `empty string`  | No |
| Condition | This boolean expression determines if the action will execute. Use it to enable or disable actions programmatically. For example, you could put a condition on a **Display Error Message** action that uses the output token of a previous action where you have parsed the response from a web service for a known error. You can reference any token in the context, such as Form fields, output tokens from other actions, or Plant an App system Tokens. A common example is **[SomeField] == “Some Value”**. | Yes | `empty string` | No |
