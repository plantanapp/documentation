---
id: unpack-an-archive
title: Unpack an archive
sidebar_label: Unpack an archive
---


This action will create a new folder with items from the archive.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Archive | Select one of the upload fields that you have in the form. If using Expr specify absolute path or relative path to current portal. | No | None |
| Archive | Specify absolute path or relative path to current portal. | No | None |
| Output directory | Output directory to put the unpacked files. | No | None |
| Copy non-archives | When enabled, if the file specified in Archive is not in archive format, it will be copied to the specified directory. If disabled, these non-archive files will be ignored. | No | None |
| Create folders in path | When this option is enabled the folders in path will be created if they don't exist. | No | None |
