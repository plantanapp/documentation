---
id: get-or-create-folder
title: Get or Create Folder
sidebar_label: Get or Create Folder
---


This action will create a new folder IF it does not already exists in DNN, using the default folder provider. It will generate the following tokens: [&lt;OutputTokenName&gt;:FolderName], [&lt;OutputTokenName&gt;:FolderId], [&lt;OutputTokenName&gt;:FolderPath]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Folder Path | Input a folder path to be retrieved or created. If the folder already exists, it will be returned. Supports Tokens | No | None |
| Storage Connection | Select or input a folder service connection to connect and use to create this folder if it does not exist. If the folder already exists, it will be returned and this parameter is ignored. When using expression, the parameter should be passed as ID. Supports Tokens. | No | None |
| Output Token Name | Specify a name for the token that will hold the generated tokens. | No | None |
