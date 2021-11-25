---
id: update-mailchimp-member
title: Update Mailchimp Member
sidebar_label: Update Mailchimp Member
---


Updates a Mailchimp Member's GDPR options.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Key | Get an API Key from MailChimp (under Account > Extra > API Keys). Supports My Tokens | Yes | None |
| List Name or Id | The value will be used to query Mailchimp lists by id then by name. The name must be exactly as it appears in Mailchimp. Supports tokens and My Tokens | Yes | None |
| Email Field | Which of the email fields should be used to subscribe to mailchimp? | No | None |
| Email Field | Which of the email fields should be used to subscribe to mailchimp? Supports tokens and My Tokens. | Yes | None |
| Email Field | Which of the email fields should be used to subscribe to mailchimp? | No | None |
| GDPR Permissions | These are the GDPR permissions that you set in your email list. In the Field Name you must provide exactly the name of the permission as it is found on your developer account. If you enable expressions the status field must evaluate to true/false. | No | None |
| Continue on error | You can check this if you need to execute the actions that follows this one when an error occures. | No | None |
| Error token name | The name of the token that will be populated with the error message. | No | None |
| Enable debug |  | No | None |
