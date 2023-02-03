---
id: send-email-with-subject-a-b-testing
title: Send Email with Subject A/B Testing
sidebar_label: Send Email with Subject A/B Testing
---


Sends an email and tracks open rate. Winner of the test will be chosen when based on the target open rate or the max open rate after the test period has concluded. Use Action Grid with "Marketing Campaigns" datasource to view reports.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Campaign Name | Views and clicks coming from this email are reported in this campaign. Note that you can have multiple emails belonging to same campaign. Can contain form tokens (for example [FieldId]) and My Tokens. | Yes | None |
| Email Identifier | If your campaign contains multiple emails, use this field to differentiate between them. Can contain form tokens (for example [FieldId]) and My Tokens. | Yes | None |
| Test Group Size | The system will send emails alternatively with subject A and subject B until this number is reached. Then, it will pick the one with highest open rate and use that going forward. Can contain form tokens (for example [FieldId]) and My Tokens. | Yes | None |
| Target Open Rate | Open rate that should be achieved for picking the winner. Can contain form tokens (for example [FieldId]) and My Tokens. | Yes | None |
| End Date | When to choose the winner after all emails to the test group have been sent if the target open rate wasn't achieved. Can contain form tokens (for example [FieldId]) and My Tokens. | Yes | None |
| From | Leave empty to use the system default. Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Determine Email Automatically | Action Form will determine email based on currently logged in user. | No | None |
| To | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Send mail to all users | Send mail to all users from the context. When this is checked the To field should be empty. In case it is not empty, beware that tokens form the 'User' namespace will have unexpected values. | No | None |
| Reply To | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| CC | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| BCC | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Subject A | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Subject B | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Format |  | No | Html |
| DNN email template to use. | Get subject and body of email from template. | No | None |
| Body | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Headers | Append custom headers to the email. Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Attach Portal Files |  | No | None |
| Attach Field #1 | Select an upload field to send as attachment | No | None |
| Attach Field #2 | Select an upload field to send as attachment | No | None |
| Attach Field #3 | Select an upload field to send as attachment | No | None |
| Attach Field #4 | Select an upload field to send as attachment | No | None |
| Attach Field #5 | Select an upload field to send as attachment | No | None |
| Attach from Token | This lets you compute file path from token. It must be relative to portal home folder. Can contain form tokens (for example [Email]) and My Tokens. Multiple items must be separated by semicolons. | Yes | None |
| Ignore Errors | If errors are ignored, the submission of the form continues even when there is an error sending the email. Otherwise, an error message will be displayed to the user. Note that if the email is being sent async or is placed in a pickup folder, errors won't be caught. | No | None |
