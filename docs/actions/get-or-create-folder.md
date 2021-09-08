---
id: get-or-create-folder
title: Get or Create Folder
sidebar_label: Get or Create Folder
---


This action will create a new folder IF it does not already exists in DNN, using the default folder provider. It will generate the following tokens: [&lt;OutputTokenName&gt;:FolderName], [&lt;OutputTokenName&gt;:FolderId], [&lt;OutputTokenName&gt;:FolderPath]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Folder Path | Input a folder path to be retrieved or created. If the folder already exists, it will be returned. Supports My Tokens | Yes | None |
| Output Token Name | Specify a name for the token that will hold the generated tokens. | No | None |
