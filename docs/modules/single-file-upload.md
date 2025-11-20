---
id: single-file-upload
title: Single File Upload
sidebar_label: Single File Upload
---


The `Single File Upload` field type in Plant an App provides a widget for users to upload single files with support for drag-and-drop functionality and a progress bar. This field type is ideal when you need users to upload only one file at a time within your forms.

## `Typical Use Cases`

* Collecting user profile images or documents.
* Uploading a single attachment in contact forms.
* Handling file inputs in a controlled manner for processing in actions.

## `Specific Parameters`

| Field | Description and information |
| ----- | --------------------------- |
| `Filename Pattern` | Define a pattern to use for filenames on the server. Use tokens like `[User:Username]-avatar`. If left blank, the original filename is used. Supports Tokens. |
| `File Types` | Specify file extensions that are accepted for upload, e.g., `txt,cs,doc`. Supports Tokens. |
| `File Size Limit` | Set a maximum file size in MB for uploads. Leave empty for no limit. |
| `Show max size in error` | Display the maximum file size error message when attempts exceed the limit. |
| `Folder Input Mode` | Choose to provide a folder path or ID for file uploads. Options are `Folder Path` or `Folder ID`. |
| `Upload to Folder` | Define the folder for file uploads. Active when "Folder Input Mode" is set to "Folder Path." Supports Tokens. |
| `Upload to Folder ID` | Define folder ID for uploads. Active when "Folder Input Mode" is set to "Folder ID." |
| `Handle Duplicates` | Decide how to handle duplicate uploads: `Rename` or `Overwrite`. |
| `Initial Value` | Pre-set a starting value that can be either a `FileName` or `FileId`. FilePath conflicts with 'Upload to Folder'. Supports Tokens. |
| `Save to Report` | When checked, stores the field's value in the `avtActionForm_Reports` table. |

## `Useful Details`

If the `Upload to Folder` parameter is provided, the file will be created and remain in that location.

If the `Upload to Folder` parameter is set to "--" (when in dropdown mode) or left blank (when in EXPR mode), the file is uploaded to a temporary location and deleted afterward. This is beneficial if your goal is to handle the file within the current action stack and trigger automatic removal afterward.

## `Output Tokens`

When a file is uploaded, several output tokens are created:

| Token | Description |
| ----- | ----------- |
| `[FieldName]` | Filename on the server |
| `[FieldName:RelativeUrl]` | Relative URL of the file |
| `[FieldName:AbsoluteUrl]` | Absolute URL of the file |
| `[FieldName:FilePath]` | Physical path of the file |
| `[FieldName:LinkClick]` | Link click representation of the file |
| `[FieldName:Stream]` | File stream for operations like uploading to a database |
| `[FieldName:Base64]` | Base64 representation of the file |
| `[FieldName:FileSize]` | Size of the file |
| `[FieldName:FileSizeB]`, `[FieldName:FileSizeKB]`, `[FieldName:FileSizeMB]`, `[FieldName:FileSizeGB]` | Size in bytes, kilobytes, megabytes, gigabytes |
| `[FieldName:MimeType]` | MIME type of the file |
| `[FieldName:FileId]` | Unique ID of the file |
| `[FieldName:FolderId]` | ID of the folder containing the file |
| `[FieldName:FolderPath]` | Path of the folder containing the file |
| `[FieldName:FileExtension]` | Extension of the uploaded file |

## `Examples`

### `Example 1: Upload a Profile Picture`

Configure a `Single File Upload` to collect profile images. Set `Filename Pattern` to `[User:Username]-profile-pic` and limit `File Types` to `jpg,png`. Handle duplicates by renaming.

```json
{
    "Title": "Profile Picture Upload",
    "ActionType": "upload.single",
    "Parameters": {
        "Pattern": "[User:Username]-profile-pic",
        "FileExt": "jpg,png",
        "FileLimit": "5",
        "MaxSizeInError": true,
        "FolderInputMode": "FolderPath",
        "Folder": "UserImages",
        "Duplicates": "Rename",
    }
}
```

### `Example 2: Temporary File Handling`

Upload files to a temporary folder for immediate processing by omitting the `Upload to Folder`. This approach handles files in ongoing actions and then they are automatically deleted.

```json
{
    "Title": "Temporary File Upload",
    "ActionType": "upload.single",
    "Parameters": {
        "Pattern": "temp-[User:UserId]",
        "FileLimit": "10",
        "MaxSizeInError": true,
        "FolderInputMode": "FolderPath",
        // No Folder specified to ensure temp handling
        "Duplicates": "Overwrite",
    }
}
```

## `Conclusion`

The `Single File Upload` field is a powerful tool within Plant an App for managing single file inputs efficiently, with the added flexibility of tokens and detailed settings to refine the upload process.

Revised 11/20/2025