---
id: files
title: Files
sidebar_label: Files
---

## `General Description`

The `Files` section under `Configuration` is a file management interface that allows administrators to interact with the platform's file system. From here, you can browse, upload, move, and delete files and folders stored on your server or supported storage providers. This interface is intended to streamline content management tasks, offering an accessible way to maintain your site's assets and documents.



![Files Interface](/img/files_overview1.png)


The `Files` screen also supports folder security options, advanced navigation, and file operations commonly needed in application management.

## `Typical Use Cases`

- Uploading new assets (images, PDFs, documents) to be used throughout the platform
- Organizing files into folders by type, department, or project
- Moving or copying files between different storage locations
- Setting permissions to control who can view, upload, or modify folders and files
- Deleting outdated or unnecessary files and folders
- Synchronizing the document management system with the actual file system on the server
- Searching for files by name or type, and sorting them for easier management

## `Navigation and Layout`

The `Files` section usually consists of two primary panes:

- **Left Pane (Folder Tree):**
Provides a hierarchical view for easy navigation. Use the plus (+) icons to expand folders or "Expand All"/"Collapse All" for convenience.
- **Right Pane (Content Browser):**
Displays the content of the currently selected folder, including files and subfolders. Sorting, searching, and multi-select options are provided here.

Selecting a folder in either pane sets the focus and displays contents in the right pane.

## `Folder Types and Providers`

When creating a new folder, you are prompted to select a **Folder Type** (Provider):

| Folder Type | Description |
| ----------- | ----------- |
| Standard Folder Provider | Default, non-secure—public file access. Suitable for public assets. |
| Secure Folder Provider | Secure files—files here cannot be directly accessed or downloaded without correct permissions. Use this for sensitive documents. |
| Database or S3 | (If configured) Allows storing files in the platform database or cloud storage like Amazon S3. |

> **Note:** Available folder providers may vary based on your configuration.

## `Folder and File Permissions`

You can set permissions on folders to allow or restrict actions such as browsing, uploading, or deleting files. By default, only administrators can perform all actions, but these can be further customized.

## `File and Folder Operations`

### Create Folder

1. Click `New Folder`
2. Input a name and select a Folder Type/Provider.
3. (Optional) Adjust folder permissions.
4. Save.

### Upload Files

1. Navigate to the desired folder.
2. Click `Upload Files` and drag files into the window or use the file picker.
3. Click `Save` to upload.

### View or Open Files

- Click on a file to preview it in the appropriate viewer (images, PDFs, or other supported types).

### Download Files

- Click the `...` menu next to a file and select `Download`.
- NOTE: Depending on the folder type and browser, some file types may open in the browser instead of downloading. 

### Move Files

1. Select one or more files with checkboxes.
2. Click `Move Selected`.
3. Pick the destination folder from the presented dialog.
4. Confirm the move.

### Delete Files or Folders

- To delete a single file: Click the `...` menu → `Delete`, then confirm.
- To delete multiple files: Check multiple files, click `Delete Selected`, then confirm.
**Caution:** The delete dialog lists all items to be deleted—please review carefully before confirming.
- To delete a folder: Focus on the folder, click `Delete Folder`, and confirm.
**Deleting a folder will remove all child files and subfolders.**

### Edit Folder

- Click `Edit` (pencil icon) next to a folder to rename it or change its permissions.

### Synchronize Folder

- Click `Sync` to resync the folder's content with the files on the server.
Use this if files have been manually added to the server (e.g., via FTP) outside the platform.

## `Searching and Sorting`

- Use the search box to filter by file name.
- Use the extension dropdown to filter files by type (e.g., JPG, PDF, CSV).
- Click column headers such as "Last Modified On" or "Size" to sort files for easier browsing.

## `Considerations & Cautions`

- **Deletion is Permanent:** Deleting files or folders cannot be undone. Always review the list in multi-delete dialogs.
- **Selection Remains After Navigation:** Files/folders selected for actions remain selected even after navigating to a different area of the folder. Double-check the deletion/move confirmation list.
- **Security:** Be mindful of folder types—standard folders expose files to public access. Only store sensitive files in secure folders.
- **Browser Behavior:** "Download" may open certain files in the browser instead of saving (especially from standard folders). 

## `Related Interfaces and Features`

| Name | Description |
| ---- | ----------- |
| Site Assets (DNN Persona Bar) | Default platform file manager, offers similar capabilities |
| Server File System (FTP, etc.) | Advanced users can access files directly on the server |
| Platform Permissions | Integrates with platform-wide permission system |



## `FAQ`

**Q: Why do some downloads open in the browser instead of saving?**
A: This is browser behavior for known file types in standard folders.

**Q: If I add files on the server via FTP, will they show up here?**
A: Not until you use the `Sync` button on that folder.

**Q: Can I recover deleted files or folders?**
A: No. This operation is irreversible.

**Q: Who can use the Files interface?**
A: Only users with appropriate permissions (typically administrators).

## `Release History`

- Introduced in version 1.27 as `Files Experimental` under Configuration.
