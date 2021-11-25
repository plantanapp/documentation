---
id: create-auto-login-link
title: Create Auto Login Link
sidebar_label: Create Auto Login Link
---


This action creates a link that will automatically login with a specified user. All generated links can be found in the DnnSharp_UserManagement_AutoLoginLinks database table.The AutoLoginUrl is: {SiteAlias}/DesktopModules/AutoLogin/API/AutoLogin?code={code}

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| User | Specify the field where you want to take the user you want to login as. It can be UserId, Email or UserName. You can enable expression and input a corresponding token containing UserId, Email or UserName too. Can not log in as Admin/SuperUser. Can contain My Tokens | Yes | None |
| Redirect To Page | The page where the user will be redirected after a successful login. Can be TabId or TabPath. If left empty it will redirect to the home page. (Optional) | No | None |
| QueryString Parameters | The values set here will be sent to the redirect URL. | No | None |
| Number Of Logins | The number of times this link will be permited to be used. Empty or 0 will be considered unlimited. When this number is reached the link will no longer work. (Optional) | No | None |
| Overwrite old link | When this is enabled, creating a new link for the same user will override the previous one | No | None |
| Validity period input mode |  | No | Simple |
| Start Date | The date when the link will activate. | No | None |
| End Date | The date when the link will expire. | No | None |
| Start Date | The date when the link will activate. Using [DateTime:Now] is recommended. If the value is UTC please use the ISO date time format(yyyy-MM-ddTHH:mm:ssZ), for example [DateTime:Now&#124;o]. Can contain My Tokens | Yes | None |
| End Date | The date when the link will expire. Using [DateTime:Now] is recommended. If the value is UTC please use the ISO date time format(yyyy-MM-ddTHH:mm:ssZ), for example [DateTime:Now&#124;o]. Can contain My Tokens | Yes | None |
| Offset | How long the link will be valid, relative to Start Date. Can contain My Tokens | Yes | None |
| Offset Unit |  | No | None |
| Output Token Name | The name of the token where you want to store the newly genererated link. [YourOutputTokenName] is a relative Url, so it can work on any portal alias, but it will still redirect to the portal alias it was created on. Also, [YourOutputTokenName:Absolute] is generated with current portal alias having an absolute URL for autologin. | No | None |
