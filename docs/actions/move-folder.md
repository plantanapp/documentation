---
id: move-folder
title: Move Folder
sidebar_label: Move Folder
---


Moves a folder. This action will generate the following tokens: [&lt;OutputTokenName&gt;:FolderId], [&lt;OutputTokenName&gt;:FolderPath], [&lt;OutputTokenName&gt;:PhysicalPath]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Folder to move | The folder to be moved. You must provide the path relative to 'Portals\&lt;PortalID&gt;' or a folder id. This field accepts MyTokens. | No | None |
| Folder to move to | Specify a folder to move the selected folder to. You must provide the path relative to 'Portals\&lt;PortalID&gt;' or a folder id. If left blank, the folder will be moved to the root ('Portals\&lt;PortalID&gt;'). This field accepts MyTokens. | No | None |
| Output Token Name | Specify a token name to hold the info about the moved folder. | No | None |
