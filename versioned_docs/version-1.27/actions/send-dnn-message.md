---
id: send-dnn-message
title: Send DNN Message
sidebar_label: Send DNN Message
---


Send a message using DNN Messaging system to an user, role or multiple users/roles. This inherits the behavior and the settings from DNN Messaging system.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| From | Leave empty to use the system default. Can contain tokens (for example [Email]) and Tokens. | No | None |
| To | Input Usernames or UserIDs. Separate multiple recipients by semicolon ";" or comma ",". Can contain tokens (for example [Email]) and Tokens. | No | None |
| To Roles | ONLY SuperUsers, Administrators and group members(on Evoq) can send message to roles! Input RoleNames or RoleIDs. Separate multiple recipients by semicolon ";" or comma "," when using expressions. Can contain tokens (for example [Email]) and Tokens. | No | None |
| Subject | Can contain tokens (for example [Email]) and Tokens. | No | None |
| Body | Can contain tokens (for example [Email]) and Tokens. | No | None |
| Attach Portal Files |  | No | None |
| Attach File Field | Select an upload field to send as attachment. | No | None |
| Attach from Token | This lets you compute file path from token. It must be relative to portal home folder.Can contain tokens (for example [Email]) and Tokens. Multiple items must be separated by semicolons. | No | None |
| Message Id Token | Optionally provide a token to store the sent Message ID. | No | None |
