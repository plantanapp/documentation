---
id: create-thumbnail
title: Create Thumbnail
sidebar_label: Create Thumbnail
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Image | On a button: Link this action to a Single File Upload field. On a multifile upload: Use expr to offer a file path (Example: the [AbsoluteUrl] token) | No | None |
| Output Folder | Folder where thumbnails will be put. | No | None |
| Name | Thumbnail name. Can contain Tokens. | No | None |
| Width | This is the width of the image. Can contain Tokens. | No | None |
| Height | This is the height of the image. Can contain Tokens. | No | None |
| Crop |  | No | None |
| Stretch |  | No | None |
| Horizontal |  | No | Center |
| Vertical |  | No | Center |
| Compression | Number from 1 (very low quality, high compression) to 100 (no compression) | No | None |
| Token Name | Provide an aditional token name that will generate the following tokens: [&lt;TokenName&gt;:FileId], [&lt;TokenName&gt;:FileName], [&lt;TokenName&gt:FileExtension], [&lt;TokenName&gt:FileNameAndExtension], [&lt;TokenName&gt;:FilePath], [&lt;TokenName&gt;:RelativeUrl], [&lt;TokenName&gt;:NormalRelativeUrl], [&lt;TokenName&gt;:AbsoluteUrl], [&lt;TokenName&gt;:NormalAbsoluteUrl], [&lt;TokenName&gt;:Base64], [&lt;TokenName&gt:MimeType], [&lt;TokenName&gt:FileSize] and file size unit tokens [&lt;TokenName&gt:FileSizeB], [&lt;TokenName&gt:FileSizeKB], [&lt;TokenName&gt:FileSizeMB], [&lt;TokenName&gt:FileSizeGB]. | No | None |
