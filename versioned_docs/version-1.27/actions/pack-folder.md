---
id: pack-folder
title: Pack folder
sidebar_label: Pack folder
---


This action will create a new archive file containing specified files.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Directory to archive | All the files and folders from this directory will be archived. | No | None |
| Store in folder | Folder to write the archive. Use '/' as separator. | No | None |
| Archive name | Specify the newly created archive file name (absolute path or relative path to portal). The resulting path must exist, be in current portal but not in the archived folder. | No | None |
| Archive the subfolders | When this option is enabled the subfolders will be archived. | No | None |
| Archive extension | If left empty, the archive's file extension will be taken from the archive name; otherwise, this will set the archive extension.Warning: If left empty and the archive name does not contain an extension, an error will occur. | No | None |
| File Output Token Name | Optionally provide a token name where to store the file information.On submit you'll have access to the following tokens: [OutputTokenName] - Filename on the server, [OutputTokenName:RelativeUrl], [OutputTokenName:AbsoluteUrl], [OutputTokenName:FilePath] - Physical path, [OutputTokenName:LinkClick], [OutputTokenName:FileSize], [OutputTokenName:MimeType], [OutputTokenName:FileId], [OutputTokenName:FolderId]. | No | None |
