---
id: open-file-manager
title: Open File Manager
sidebar_label: Open File Manager
---

Requires: AFORM version above 03.09.550.




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Select File Manager | Select the File Manager field that you want to open in popup. | No | None |
| CallBack Javascript Code | This javascript code will be executed on 'Done' button click from FileBrowser. The 'files' javascript variable is automatically initialized with an object containing all files(filesInQueue and selectedFiles). | No | console.log(files); |
