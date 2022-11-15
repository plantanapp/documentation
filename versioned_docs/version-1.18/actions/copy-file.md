---
id: copy-file
title: Copy File
sidebar_label: Copy File
---


Copy a file to another DNN Folder.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| File Identifier | Identifier for the file. It can be: The file ID (Example: 77), the file path (Example: Images/Cars/Ford.jpg) or the file path from current portal (Example: Portals/0/Images/Cars/Ford.jpg). Supports My Tokens. | Yes | None |
| Destination Folder Identifier | This field supports expressions, by passing the path of the destination folder. | No | None |
| Ignore errors |  | No | None |
| Output Token Name | Input a token name to store the information for the copied file. Tokens created: File Id: [&lt;OutputTokenName&gt;]Absolute URL: [&lt;OutputTokenName&gt;:AbsoluteUrl]Relative URL: [&lt;OutputTokenName&gt;:RelativeUrl]Physical Path: [&lt;OutputTokenName&gt;:PhysicalPath]Link Click: [&lt;OutputTokenName&gt;:LinkClick] | No | None |
