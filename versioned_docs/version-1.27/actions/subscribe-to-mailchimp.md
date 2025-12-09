---
id: subscribe-to-mailchimp
title: Subscribe To Mailchimp
sidebar_label: Subscribe To Mailchimp
---


Sends the email address in current form to Mailchimp. If there's First Name and Last Name fields on the form, they will also be passed along.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Key | Get an API Key from MailChimp (under Account > Extra > API Keys). Supports Tokens | No | None |
| List Name or Id | The value will be used to query Mailchimp lists by id then by name. The name must be exactly as it appears in Mailchimp. Supports tokens and Tokens | No | None |
| Email Field | Which of the email fields should be used to subscribe to mailchimp? | No | None |
| Email Field | Which of the email fields should be used to subscribe to mailchimp? Supports tokens and Tokens. | No | None |
| Email Field | Which of the email fields should be used to subscribe to mailchimp? | No | None |
| List Data | Select which data to pass to mailchimp. Map a field name to the mailchimp list fields. For example, map FirstName to FNAME or SomeFieldId to MMERGE3. Supports tokens and Tokens. | No | None |
| Interests | Select in which interest groups to add the subscriber into. You can specicy multiple intrests in the same group by separating them with comma or semicolon. Supports tokens and Tokens. Most likely you'll be using a dropdown or a checkbox list for this. If that's the case, simply provide the [IdOfTheDropdown] token. | No | None |
| Double Optin | Flag to control whether a double opt-in confirmation message is sent, defaults to true. Abusing this may cause your account to be suspended. | No | None |
| Continue on error | You can check this if you need to execute the actions that follows this one when an error occures. | No | None |
| Error token name | The name of the token that will be populated with the error message. | No | None |
| Enable debug |  | No | None |
