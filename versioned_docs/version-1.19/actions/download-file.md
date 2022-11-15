---
id: download-file
title: Download File
sidebar_label: Download File
---

Available in: APIs.


Downloads a file based on your identifier.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| File Identifier | Input a file identifier that can be a FileId, or a File Path relative to current portal. Can contain context tokens, for example [FieldId], and My Tokens. | Yes | None |
| (optional) New File Name | Optionally, input a new file name. The file extension will be automatically appended. If this field is empty (even after tokenization), it will be downloaded with the original filename. Can contain context tokens, for example [FieldId], and My Tokens. | Yes | None |
| Override User Security Checks | By default, this action checks if the user in the context has permissions to view the specified file.By checking this, you skip the inner portal folder security checks and the user can access any file in context portal, even if he is NOT logged in. You can also specify a file path, relative to portal, eg. "/Images/me.jpg", as well as a file ID. | No | None |
| Override Portal Security Checks | By default, this action checks if the user in the context has permissions to view the specified file.By checking this, you skip portals security checks and the user can access any file in every portal, if the File Identifier field specifies relative path to the current site folder, by prefixing the path with a `~` character.Eg. "~/Portals/AnotherFolder/me.jpg". The path must start with "~/Portals/".Note that this will be limited only by system permissions of the current AppPool, and it's NOT recommended to use this at all! | No | None |
| Override Server Security Checks | By default, this action checks if the user in the context has permissions to view the specified file.By checking this, you skip every security check and the user can access any file on disk, but the File Identifier field must specify a full disk path.You can also specify relative paths to the current site folder, by prefixing the path with a `~` character. Eg. "~/Portals/AnotherFolder/me.jpg" or a full disk path. Eg "C:\wwwroot\Portals\_default\Images\me.jpg".Note that this will be limited only by system permissions of the current AppPool, and it's NOT recommended to use this at all! | No | None |
| Force Download | If Force Download is enabled, the response will trigger a download of the file when it is received, uncheck if you want to allow the browser to show a preview of the file. | No | true |
