---
id: send-email
title: Send email
sidebar_label: Send email
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| From | Leave empty to use the system default. Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| To | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Determine email automatically | If To field above is empty, Action Form will determine email based on currently logged in user. | No | None |
| Send mail to all users | Send mail to all users from the context. When this is checked the To field should be empty. In case it is not empty, beware that tokens form the 'User' namespace will have unexpected values. | No | None |
| Reply To | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| CC | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| BCC | Separate multiple recipients by semicolon ";". Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Subject | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Format | Email format. | No | Html |
| Body | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Headers | Append custom headers to the email. Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| Attach Portal Files |  | No | None |
| Attach from Token | This lets you compute file path from token. It must be relative to portal home folder. Can contain form tokens(for example[Email]) and My Tokens. Multiple items must be separated by semicolons. | Yes | None |
