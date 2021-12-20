---
id: send-user-reset-password-email
title: Send User Reset Password Email
sidebar_label: Send User Reset Password Email
---


This action will send the reset user password email. It can use the default DNN email template. If you edit the default template, you need to use the [PasswordResetUri] token for the proper URL to be sent in the email.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Identifier Field | This could be the user ID, username or email. Can contain context tokens (for example [Email]) and My Tokens. One common scenario is to use [QueryString:UserId] to read the user from the URL via My Tokens. | Yes | None |
| Use Configured | The Reset Password Page set in the PlantAnApp Settings will be used. | No | None |
| Password Reset Page | The page where an Action Form with the corresponding action to confirm the reset password process. In expressions you can use a TabId or a Tab Relative Path (eg. '/myPage/My-Sub-Page'). Can contain context tokens (for example [Email]) and My Tokens | Yes | None |
| Sender Email | The email address that the email will be sent from. Leave empty to use the DNN configured portal email address. | No | None |
| Template Source |  | No | Default |
| Template Subject | This is the subject of the email sent to the user. [User:*] tokens will have the information of the user to whom the password reset email is being sent. [Portal:*] tokens will return the current portal information. | No | None |
| Template Body | This is the body of the email sent to the user. [User:*] tokens will have the information of the user to whom the password reset email is being sent. [Portal:*] tokens will return the current portal information. IMPORTANT: Use the [PasswordResetUri] to embed the URI that the user will need to access to reset his password. | No | None |
| HTML email body | Check this if your reset password template contains HTML. | No | None |
