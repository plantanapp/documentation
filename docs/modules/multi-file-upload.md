---
id: multi-file-upload
title: Multi File Upload
sidebar_label: Multi File Upload
---

The Multi File Upload field in Plant an App allows users to upload multiple files simultaneously with features such as drag-and-drop functionality and file upload progress tracking. It also provides flexibility in terms of file size restrictions, file type constraints, and duplicate management.

## `Typical Use Cases`

- Uploading multiple documents or images at once.
- Handling files securely with specific naming patterns and duplicate policies.
- Automating file processing with actions executed for each uploaded file.

## `Field Specific Parameters`

| Parameter | Description | Supports Tokens | Required |
| --------- | ----------- | --------------- | -------- |
| Filename Pattern | Optional pattern to name files on the server. For example: `[User:Username]-avatar`. | Yes | No |
| For Each File | Defines actions to execute for each uploaded file. | Yes | No |
| File Types | Specifies allowed file type extensions for uploads, e.g., `txt,cs,doc`. | Yes | No |
| File Size Limit | Limits file upload size in MB. Leave empty for no limit. | Yes | No |
| Show max size in error | Displays size limit feedback to users on upload errors. | No | No |
| Folder Input Mode | Determines upload location: `Folder` or `FolderID`. | No | No |
| Upload to Folder | Specifies the target folder for uploads based on setup and structure. | Yes | No |
| Upload to Folder ID | Uploads files to a folder identified by an ID. | Yes | No |
| Handle Duplicates | Manages file naming conflicts with options: `Rename` or `Overwrite`. | No | No |
| Save to Report | Automatically records field values in the database, under `avtActionForm_Reports`. | No | No |

## `Output Parameters Reference`

| Parameter | Description |
| --------- | ----------- |
| [FieldName] | Server filename for reference. |
| [FieldName:FileIds] | IDs of uploaded files. |
| [FieldName:Filestates] | States of files: new/existing/delete. |
| [FieldName:Count] | Total number of files uploaded. |
| [FieldName:PortalRelativeUrls] | Portal relative URLs of files. |
| [FieldName:RelativeUrls] | Server relative URLs. |
| [FieldName:Filenames] | Name of files on the server. |
| [FieldName:FolderId] | ID of the folder where files are stored. |
| [FieldName:FolderPath] | Path of the folder on the server. |
| [FieldName:FilesInfoJson] | JSON format details of all files: names, IDs, states, URLs. |


## `Useful Details`

If the `Upload to Folder` parameter is provided, the files will be created and remain in that location.

If the `Upload to Folder` parameter is left blank, the files are uploaded to a temporary location and deleted afterward. This is beneficial if your goal is to handle the file within the current action stack and trigger automatic removal afterward.

## `Using For Each File`

Within the Multi File Upload field, you can define operations for each file uploaded using the "For Each File" parameter. This is essential for processing or handling files individually.

### Available Tokens Per File

- `[FileName]`: The name of the file.
- `[RelativeUrl]`: Location of the file relative to the server root.
- `[AbsoluteUrl]`: Full URL to access the file.
- `[FilePath]`: Physical path of the file on the server.
- `[LinkClick]`: Link for downloading the file.
- `[Stream]`: File stream for database operations.
- `[Base64]`: Base64 encoded string of the file.
- `[FileSize]`, `[FileSizeB]`, `[FileSizeKB]`, `[FileSizeMB]`, `[FileSizeGB]`: File size in various units.
- `[MimeType]`: The media type of the file.
- `[FileId]`: Unique identifier for the file.
- `[FolderId]`, `[FolderPath]`: IDs and paths related to the storage folder.
- `[FileExtension]`: Extension of the file.
- `[FileOrThumbnailNameAndExtension]`: Output labeled for files or generated thumbnails.

## `Examples`

### `1. Basic Multi File Upload With Filename Pattern`

This example demonstrates a simple Multi File Upload configuration with a filename pattern applied.

```json
{
    "Title": "Multi File Upload",
    "ActionType": "upload.multi",
    "Parameters": {
        "Pattern": "[User:Username]-file",
        "FileExt": "jpg,png,pdf",
        "FileLimit": "10",
        "FolderInputMode": "FolderPath",
        "Folder": "UserFiles",
        "Duplicates": "Rename"
    }
}
```

### `2. Handling Each File Upload`

In this example, an action list is defined to be executed for each file.

```json
{
    "Title": "Multi File Upload",
    "ActionType": "upload.multi",
    "Parameters": {
        "Actions": [
            {
                "Title": "Log File Info",
                "ActionType": "LogAction",
                "Parameters": {
                    "Message": "File uploaded: [FileName] at [RelativeUrl]"
                }
            }
        ]
    }
}
```

Revised 11/20/2025
