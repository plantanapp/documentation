---
id: save-file-to-disk
title: Save file to disk
sidebar_label: Save file to disk
---


Saves a file to disk. The contents of the file can be retrieved from an arbitrary URL or it can be specified as a plain text value. When retrieving the file from an URL endpoint the supported request method is GET. Also, we can infer the filename and extension from the Content-Disposition header of the request if it is present and the Pattern parameter evaluates to an empty string.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Input mode | Url: will retrieve the content from the provided Url and save it to the specified file.Text: will write the provided text content to the specified file.Base64 image: will process the base64 image string (in Data URI Scheme format, e.g. data:image/png;base64,&lt;base64 content&gt;) and save the data as image on disk to the specified file. It will enforce file extension if it doesn't match with the metadata in the base64 string. | No | None |
| Url | The URL of the file to be downloaded. A GET request will be made to the URL provided here. | No | None |
| Content | Content of the file. Can contain My Tokens. | Yes | None |
| Folder | Select the portal folder where the file will be saved. | No | None |
| Pattern | Optionally provide a pattern to use for filenames on the server. For example &quot;[User:Username]-avatar&quot;. Leave blank to use generate a random name. If no extension is provided, the .txt extension will be automatically added. Supports My Tokens  | Yes | None |
| Handle Duplicates |  | No | Rename |
| Absolute URL Output Token Name | Optionally provide a token name where to Store the Absolute URL. The token can be used in next actions down the stack. | No | None |
| Relative URL Output Token Name | Optionally provide a token name where to Store the Relative URL. The token can be used in next actions down the stack. | No | None |
| Physical Path Output Token Name | Optionally provide a token name where to Store the Physical Path. The token can be used in next actions down the stack. | No | None |
| Link Click Output Token Name | Optionally provide a token name where to Store the LinkClick Url. The token can be used in next actions down the stack. | No | None |
| File Id Output Token Name | Optionally provide a token name where to Store the File Id. The token can be used in next actions down the stack. | No | None |
