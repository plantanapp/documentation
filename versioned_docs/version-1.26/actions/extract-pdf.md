---
id: extract-pdf
title: Extract PDF
sidebar_label: Extract PDF
---

> Audience: [`Low-code Engineers`](/audience.md#low-code-engineers)
>
> Skill Prerequisites: `Tokens`

This action allows you to select specific sections from one `.pdf` file, extract them and add them to a new `.pdf` file.

## Typical Usage

- Extract and synthesize sections from a larger PDF file.

## Alternative suggestions

- To combine two .pdf documents, use [Merge PDF](/actions/merge-pdf.md) instead.
- If you want to simply create a .pdf file, use [Generate PDF](/actions/generate-pdf.md).

## Input Parameter Reference

| Parameter | Description | Supports Tokens | Default Value |
| --------------------- | --------------------------------------------------------------- | --------------- | --------------- |
| *Source file* | Define the source file. The identifier for the source file can be:<li>`RelativeUrl` (a token name where the relative URL will be saved)</li><li>`AbsoluteUrl` (a token name where the absolute URL will be saved)</li><li>`LinkClickUrl` (a token name where the LinkClick URL will be saved)</li><li>`PhysicalPath` (a token name where the physical path will be saved).</li> | &#x2705; | `empty string` |
| *Section Selection* | Define which sections of the source PDF you want to extract (each section is defined by a "`Start Page`" and an "`End Page`"). The page indexes are "0" based. | &#x2705; |  N/A (selection)  |
| *Folder* | Select a folder where you want to store the new pdf. Can contain My Tokens. | &#x2705; |  `empty string` |
| *File Name* | File Name for the newly generated file. | &#x2705; | `empty string` |
| *Output Token Name* | Optionally provide a token name in which to store the file id. Other information can be accessed with `[OutputTokenName:AbsoluteUrl]`, `[OutputTokenName:RelativeUrl]`, `[OutputTokenName:PhysicalPath]`, `[OutputTokenName:LinkClick]`. | &#10060; |  `empty string` |
| *Title* | Allows you to customize this specific action name.<br />**Note**: this parameter is available only in specific contexts (such as in the `Form Builder`, `Workflows`, etc.). | &#x2705; | `Extract PDF`  |
| *Description* | Allows you to define a text description of the action. This is used only internally for documentation purposes; it is not displayed to users.<br />**Note**: this parameter is available only in specific contexts (such as in the `Form Builder`, `Workflows`, etc.). | &#10060; | `empty string` |
| *Error message* | Allows you to define a custom error message when the action fails. The admins will also see the detailed error message. Leave empty to use the default message.<br />**Note**: this parameter is available only in specific contexts (such as in the `Form Builder`, `Workflows`, etc.). | &#x2705; | `empty string` |
| *Condition* | Define the conditionality for the action: a boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you can enable a `ShowError` action only if you find an error when you parsed a response from a web service. A common example is `[HasRole:Administrators\|true]` (which requires My Token to work) or `[SomeField]` == "Some Value".<br />**Note**: this parameter is available only in specific contexts (such as in the `Form Builder`, `Workflows`, etc.). | &#x2705; | `empty string` |

:::note

If the .pdf file you want to extract the sections from is password protected or does not have read permissions, the extraction operation will fail.

:::

<br /><br /><a href="#top">Back to the top &#10548;</a>