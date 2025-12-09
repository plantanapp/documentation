---
id: forms-tokens
title: Forms Tokens
sidebar_label: Forms Tokens
---

# Special Forms Tokens

This article details the special tokens available when working with forms in the Action Form module. These tokens provide useful information about form submissions, user details, and interaction context, enabling advanced functionalities and interoperability.

## Available Special Tokens

### Basic Tokens

These tokens provide essential information about the form submission and its context.

| Token                        | Description                                                                                 | Example                                                                                                                     |
|------------------------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `_CurrentActionID`           | Unique identifier for the current action.                                                   | 7856                                                                                                                        |
| `_Referrer`                  | The URL from which the user arrived at the form.                                             | [https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens](https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens) |
| `_UserIp`                    | The IP address of the user.                                                                  | 47.222.128.133                                                                                                              |
| `_TimeZoneOffset`            | The user's time zone offset from UTC, in minutes.                                           | 300                                                                                                                         |
| `_FormUrl`                   | Full URL where the form is hosted.                                                          | [https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens](https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens) |
| `_FormUrlRelative`           | Relative URL where the form is hosted.                                                      | /en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens                                                       |
| `_ReportKey`                 | Unique ID that identifies the current submission, used for edit functionality.              | bf80c017-23e4-4ff8-ba52-f43480917aa3                                                                                        |
| `_EditUrl`                   | URL to edit the current submission at a later time.                                         | [https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens?entry=bf80c017-23e4-4ff8-ba52-f43480917aa3](https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens?entry=bf80c017-23e4-4ff8-ba52-f43480917aa3) |
| `_IsNew`                     | Boolean flag that is true when the form is submitted for the first time.                    | true                                                                                                                        |
| `_IsEdit`                    | Boolean flag that is true when the form is being edited (using `_EditUrl` or Action Grid).  | false                                                                                                                       |
| `_ReportEntryId`             | Unique identifier of the report entry associated with the form submission.                  | 335                                                                                                                         |

### Query String Tokens

These tokens are parsed from the query string of the URL that the form submission came from.

| Token                         | Description                                   | Example                                                                                                                     |
|-------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `QueryString:openMode`        | Specifies the mode in which the form was opened. | Always                                                                                                                      |
| `QueryString:language`        | The language setting from the query string.   | en-US                                                                                                                       |
| `QueryString:_`               | A timestamp or unique identifier.             | 1725468460255                                                                                                               |
| `QueryString:event`           | The event that triggered the form submission. | click                                                                                                                       |
| `QueryString:b`               | (Reserved QueryString Value; do not use this in your form implementation)   | 5851                                                                                                                        |
| `QueryString:referrer`        | The referrer URL from the query string.       | [https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens](https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens) |
| `QueryString:_url`            | The URL specified in the query string.        | [https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens](https://plantanapp-drw202010lowcode.apps.plantanapp.com/en-us/Tests/Support-Center-2024/09/Document-the-special-forms-tokens) |

## Usage Scenarios

1. **Form Validation and Custom Actions:**
   - You can use `_UserIp` to perform location-based validation or actions.
   - Utilize `_ReportKey` and `_EditUrl` to implement edit functionalities and create unique workflows.

2. **Tracking and Analytics:**
   - Track where users are coming from using `_Referrer`.
   - Analyze user engagement time using `_TimeZoneOffset`.

3. **Conditional Logic:**
   - Use `_IsNew` and `_IsEdit` tokens to implement conditional logic based on whether the form is being submitted for the first time or being edited.

## Conclusion

Special forms tokens in the Action Form module provide a mechanism to capture and utilize metadata about form submissions. By leveraging these tokens, you can create more dynamic, responsive, and intelligent forms that cater to complex business processes and user scenarios.
