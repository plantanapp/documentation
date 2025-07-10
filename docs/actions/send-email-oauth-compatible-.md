---
id: send-email-oauth-compatible-
title: Send Email (Oauth Compatible)
sidebar_label: Send Email (Oauth Compatible)
---

> Audience: [`Business Users`](/audience.md#business-users)
>
> Skill Prerequisites: `HTML`

This action sends an email to one or more recipients, including attachments if needed. The **Send Email (OAuth Compatible)** action works just like the standard email action, but it is designed to support modern OAuth2-based email connectors (such as Microsoft 365 and Google Workspace). It is ideal for cloud environments or stricter email server security policies.  It is available when you install the PlantAnApp.EmailOAuth add-on, replacing the classic **Send Email** action.

:::info
**Note:** Custom email headers and alternate message formats (AlternateViews) are not supported in the OAuth compatible version. Any such configuration will be ignored during send.
:::

## `Typical Use Cases`

- Send email notifications to individuals or groups
- Send confirmation or alert emails after form submissions
- Schedule newsletters or campaigns via [BeeFree](https://beefree.io/) template integration
- Automate mass or transactional emails using modern SMTP connectors (OAuth2)

## `Don't use it to`

- Debug — for troubleshooting, use Log Error or Log Debug Message actions

## `Related Actions`

| Action Name                                        | Description                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| Load Users from SQL     | Bulk load users and send emails to all at once                            |
| Create List from CSV file (obsolete)               | Load recipients or data from a CSV file                                   |
| Create List from a CSV source                      | Load recipients or data from a CSV-formatted text source                  |
| Create List from Excel (xlsx)                      | Load emails/data from an Excel file                                       |
| Create List from JSON                              | Load emails/data from JSON text                                           |
| Create List from SQL                               | Load emails/data from SQL query results                                   |
| Load User                | Load a single user to populate email details                              |
| Execute Actions for each List Entry                | Perform actions for each entity (to send personalized mass emails, etc.)  |

## `Input Parameter Reference`

| Parameter                  | Description                                                                                                                                                                                                                                                               | Supports Tokens | Default                                  | Required |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------- | -------- |
| From                       | The email address used as sender. Leave empty to use the system default. Can contain tokens (e.g. `[Email]`, `[User:Email]`).                                                                                                                                              | Yes            | Creator of the website                   | No       |
| To                         | Recipients of the email. Separate multiple recipients by semicolon (;). Can contain tokens.                                                                                                                                                                               | Yes            | empty string                             | Yes (unless others used) |
| Send email to all users    | Sends an email to each user in the context loaded via Load Users from SQL | No            | No                                       | No       |
| Determine Email Automatically | If enabled, uses the email of the currently logged in user as recipient.  | No            | No                                       | No       |
| Reply To                   | Email address for replies. Separate multiple with semicolons or commas. Can contain tokens.                                                                                                                                        | Yes           | empty string                             | No       |
| CC                         | Carbon Copy. Multiple addresses can be separated by semicolons or commas. Can contain tokens.                                                                                                                                      | Yes           | empty string                             | No       |
| BCC                        | Blind Carbon Copy. Multiple addresses can be separated by semicolons or commas.                                                                                                                                                     | Yes           | empty string                             | No       |
| Format                     | Sets the email format. See [Formats](#formats).                                                                                                                                                                                     | No            | Html (And replace newline with <br />)   | No       |
| DNN email template to use. | Choose from predefined email templates (subject & body) from the system.                                                                                                                                                            | No            | Unset                                    | No       |
| Subject                    | The subject line for the email. Can contain tokens.                                                                                                                                                                                 | Yes           | empty string                             | Yes      |
| Body                       | The content of the email. Can include tokens. For templates, leave empty.                                                                                                                                                           | Yes           | empty string                             | No       |
| Attach Portal Files        | Select existing files from the file system as attachments.                                                                                                                                    | No            | Unset                                    | No       |
| Attach Field #             | Form-only parameter. Lets you attach up to 5 file uploads (from form fields) to the email.                                                                                                   | No            | Unset                                    | No       |
| Attach from Token          | Compute attachment file path from token. Supports file ID, path, portal-relative path, or URL. Multiple separated by semicolons.                                                              | Yes           | empty string                             | No       |
| Ignore Errors              | If true, form continues after email send error. If false, errors will display to user unless handled in the On Error section.                                                                 | No            | No                                       | No       |
| On Error                   | Actions to execute on error (such as logging, notification, alternate flows).                                                                                                                 | n/a           | Unset                                    | No       |
| Connector                  | The SMTP or OAuth connector to use for sending the email. (Cloud and OAuth are supported in this action.)                                                                                    | No            | System default or specified connector    | No       |

## `Formats`

| Format                                   | Details                                                                                                                                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTML (And replace newline with `<br />`) | Newlines (`\n`) in body are replaced with `<br/>` for convenience in HTML emails. Compatibility may vary by email client. |
| Text                                     | Plain text with no formatting or HTML. Good for raw or legacy email clients.                                                                         |
| HTML(**Recommended**)                    | HTML body—what you see in the visual editor is what recipients see. Best for modern email.                                                           |

## `Security`

:::caution
Email fields (`To`, `From`, `CC`, `BCC`, `Reply To`) support tokens, which means they may be dynamically generated from form/user input. This is powerful but can introduce security concerns if the source is untrusted.
:::

For example, a malicious user could enter `user@example.com;attacker@example.com` into a field, inadvertently or intentionally sending sensitive messages to unauthorized recipients. To mitigate, use tokens like `[User:Email]` or hardcoded addresses for recipient-related parameters, and avoid passing untrusted user input into these fields.

## `What is different about this action?`

- **OAuth2 compatibility:** You can connect to modern cloud/email providers with secure, token-based authentication, instead of username/password.
- **No support for custom headers or alternate views:** These are not passed to the server (ignored). Only a single email body (plain or HTML) is used in each message sent.
- **Otherwise, the experience and parameters are identical to the classic email action.**

## `Examples`

All examples below are equivalent to their classic email action versions—simply use `"ActionType": "SendMail"` for classic or `"ActionType": "SendMail"` with the OAuth compatible action type string for OAuth.

### `1. Simple Email`

```json
{
    "Title": "Send Email",
    "ActionType": "SendMail",
    "Description": "Simple example, confirmation email (OAuth compatible)",
    "Parameters": {
        "From": "support@plantanapp.com",
        "DetermineEmail": "",
        "To": "support@plantanapp.com",
        "ToAllUsers": "",
        "ReplyTo": "",
        "Cc": "",
        "Bcc": "",
        "Subject": "Confirmation email",
        "Format": {
            "Expression": "",
            "Value": "Html",
            "IsExpression": false,
            "Parameters": {}
        },
        "DnnEmailTemplate": {
            "Expression": "",
            "Value": "",
            "IsExpression": false,
            "Parameters": {}
        },
        "Body": "<p>Dear Customer,</p><p>Thank you for choosing us.</p>",
        "PortalFiles": "",
        "FileField1": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField2": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField3": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField4": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField5": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileToken1": "/Portals/0/Images/logo.png",
        "IgnoreErros": ""
    }
}
```

### `2. Tokenized Email`

```json
{
    "Title": "Send Email",
    "ActionType": "SendMail",
    "Description": "Email with tokenized values (OAuth compatible)",
    "Parameters": {
        "From": "[User:Email]",
        "DetermineEmail": "",
        "To": "[User:Email]",
        "ToAllUsers": "",
        "ReplyTo": "",
        "Cc": "",
        "Bcc": "",
        "Subject": "",
        "Format": {
            "Expression": "",
            "Value": "Html",
            "IsExpression": false,
            "Parameters": {}
        },
        "DnnEmailTemplate": {
            "Expression": "",
            "Value": "",
            "IsExpression": false,
            "Parameters": {}
        },
        "Body": "<p>Dear [User:FirstName] [User:LastName],</p><p>This is an example email with tokens.</p>",
        "PortalFiles": "",
        "FileField1": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField2": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField3": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField4": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileField5": {
            "Expression": "",
            "Value": "",
            "IsExpression": false
        },
        "FileToken1": "",
        "IgnoreErros": ""
    }
}
```

### `3. Complex Email With Attachment`

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Complex OAuth email with logo attachment",
    "Parameters": {
        "ActionList": [
            {
                "ActionType": "InjectData",
                "Parameters": {
                    "Data": [
                        { "value": "/Images/logo.png", "name": "Path" }
                    ]
                }
            },
            {
                "Title": "Send Email",
                "ActionType": "SendMail",
                "Parameters": {
                    "From": "The Sender <support@plantanapp.com>",
                    "DetermineEmail": "",
                    "To": "user1@plantanapp.com; user2@plantanapp.com; [User:Email]",
                    "ToAllUsers": "",
                    "ReplyTo": "",
                    "Cc": "user3@plantanapp.com; user4@plantanapp.com;",
                    "Bcc": "user5@plantanapp.com; user6@plantanapp.com;",
                    "Subject": "Multiple emails sent",
                    "Format": { "Value": "Html" },
                    "DnnEmailTemplate": { "Value": "" },
                    "Body": "<p>Dear Customers,</p><p>This is an example using tokens. The email was sent to: user1@plantanapp.com; user2@plantanapp.com; [User:Email]</p>",
                    "PortalFiles": "",
                    "FileField1": { "Value": "" },
                    "FileField2": { "Value": "" },
                    "FileField3": { "Value": "" },
                    "FileField4": { "Value": "" },
                    "FileField5": { "Value": "" },
                    "FileToken1": "[Path]",
                    "IgnoreErros": ""
                }
            }
        ]
    }
}
```

### `4. Send to All Users Loaded Into Context`

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "Send email to all loaded users (OAuth compatible)",
    "Parameters": {
        "ActionList": [
            {
                "ActionType": "LoadUsersFromSql",
                "Parameters": {
                    "SqlQuery": "SELECT UserId from Users"
                }
            },
            {
                "Title": "Send Email",
                "ActionType": "SendMail",
                "Parameters": {
                    "From": "support@plantanapp.com",
                    "To": "",
                    "ToAllUsers": true,
                    "ReplyTo": "",
                    "Cc": "",
                    "Bcc": "",
                    "Subject": "Example",
                    "Format": { "Value": "Html" },
                    "DnnEmailTemplate": { "Value": "" },
                    "Body": "<p>Dear Customers,</p><p>This is an example.</p>",
                    "PortalFiles": "",
                    "FileField1": { "Value": "" },
                    "FileField2": { "Value": "" },
                    "FileField3": { "Value": "" },
                    "FileField4": { "Value": "" },
                    "FileField5": { "Value": "" },
                    "FileToken1": "",
                    "IgnoreErros": ""
                }
            }
        ]
    }
}
```

### `5. Send Email for Each Entity in List`

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Parameters": {
        "ActionList": [
            {
                "ActionType": "LoadEntitiesFromSql",
                "Parameters": {
                    "SqlQuery": "select Firstname, Lastname, Email, CreatedOnDate, Username from Users",
                    "EntityName": "UserDetails"
                }
            },
            {
                "ActionType": "ExecuteActionsOnEntityList",
                "Parameters": {
                    "EntityName": "UserDetails",
                    "ActionList": [
                        {
                            "Title": "Send Email",
                            "ActionType": "SendMail",
                            "Parameters": {
                                "From": "support@plantanapp.com",
                                "To": "[UserDetails:Email]",
                                "Subject": "Created date for [UserDetails:Username]",
                                "Format": { "Value": "Html" },
                                "Body": "<p>The user: [UserDetails:Firstname] [UserDetails:Lastname] was created on date [UserDetails:CreatedOnDate]</p>",
                                "PortalFiles": "",
                                "FileField1": { "Value": "" },
                                "FileField2": { "Value": "" },
                                "FileField3": { "Value": "" },
                                "FileField4": { "Value": "" },
                                "FileField5": { "Value": "" },
                                "FileToken1": "",
                                "IgnoreErros": ""
                            }
                        }
                    ]
                }
            }
        ]
    }
}
```

## `Troubleshooting and Tips`

- Ensure the **Connector** selected is a valid OAuth-enabled email connector (such as Microsoft 365, Google Workspace, or another modern provider).
- Do not use custom headers or alternate HTML/Text views—these will be ignored in this action.
- For large mass-mail campaigns, ensure your connector/account has sufficient permissions and limits.


The **Send Email (OAuth Compatible)** action ensures you can reliably and securely send email through modern, OAuth-secured SMTP connectors—while continuing to use all existing patterns for templated, dynamic, and mass message delivery. For the majority of scenarios, use it exactly as the classic Send Email action, but enjoy better compatibility with newer email systems and policies.