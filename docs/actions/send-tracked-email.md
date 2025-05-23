---
id: send-tracked-email
title: Send Tracked Email
sidebar_label: Send Tracked Email
---


Sends an email and tracks open and click rates. Use Action Grid with "Marketing Campaigns" datasource to view reports.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Campaign Name | Views and clicks coming from this email are reported in this campaign. Note that you can have multiple emails belonging to same campaign. Can contain form tokens (for example [FieldId]) and Tokens. | No | None |
| Email Identifier | If your campaign contains multiple emails, use this field to differentiate between them. Can contain form tokens (for example [FieldId]) and Tokens. | No | None |
| Send Method | By default, emails are added to a queue and processed via Sharp Scheduler when the application is Idle. | No | Queue |
| From | Leave empty to use the system default. Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Determine Email Automatically | Action Form will determine email based on currently logged in user. | No | None |
| To | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Send mail to all users | Send mail to all users from the context. When this is checked the To field should be empty. In case it is not empty, beware that tokens form the 'User' namespace will have unexpected values. | No | None |
| Reply To | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and Tokens. | No | None |
| CC | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and Tokens. | No | None |
| BCC | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Subject | Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Format |  | No | Html |
| DNN email template to use. | Get subject and body of email from template. | No | None |
| Body | Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Headers | Append custom headers to the email. Can contain form tokens (for example [Email]) and Tokens. | No | None |
| Attach Portal Files |  | No | None |
| Attach Field #1 | Select an upload field to send as attachment | No | None |
| Attach Field #2 | Select an upload field to send as attachment | No | None |
| Attach Field #3 | Select an upload field to send as attachment | No | None |
| Attach Field #4 | Select an upload field to send as attachment | No | None |
| Attach Field #5 | Select an upload field to send as attachment | No | None |
| Attach from Token | This lets you compute file path from token. It must be relative to portal home folder. Can contain form tokens (for example [Email]) and Tokens. Multiple items must be separated by semicolons. | No | None |
| Ignore Errors | If errors are ignored, the submission of the form continues even when there is an error sending the email. Otherwise, an error message will be displayed to the user. Note that if the email is being sent async or is placed in a pickup folder, errors won't be caught. | No | None |
