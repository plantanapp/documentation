---
id: overlay-pdf
title: Overlay PDF
sidebar_label: Overlay PDF
---


Overlay two pdf files.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| File Path | Path to the file. Can have multiple pages. Can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. Can contain My Tokens. | Yes | None |
| Overlay PDF File Path | Path to the pdf background file. Can have multiple pages. Can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. Can contain My Tokens. | Yes | None |
| Overlay Startig Page | Index of the page where to start the overlay (first page index is 0). Can contain My Tokens. | Yes | None |
| Overlay Recursively | Check this if you want to go back to the first page of the overlay pdf after the last page has been reached. Can contain My Tokens. | Yes | True |
| Folder | Select a folder where you want to store the new pdf. Can contain My Tokens. | Yes | None |
| File Name | File Name for the newly generated file. Can contain My Tokens. | Yes | None |
| Overlay Starting X Position | Optional. Default is 0. The starting X position of the overlay. Can contain My Tokens. | Yes | None |
| Overlay Starting Y Position | Optional. Default is 0. The starting Y position of the overlay. Can contain My Tokens. | Yes | None |
| Absolute URL | Optionally provide a token name where to Store Absolute URL. | No | None |
| Relative URL | Optionally provide a token name where to Store Relative URL. | No | None |
| Physical Path TokenName | Optionally provide a token name where to Store Physical Path/ | No | None |
| Link Click TokenName | Optionally provide a token name where to Store The LinkClick URL. | No | None |
| DNN FileId TokenName | Optionally provide a token name where to store DNN File ID. | No | None |
