---
id: files
title: Files
sidebar_label: Files
---

This type of field allows you to define a file uploader in your Form and finetune its usage. There are three types of `Files` fields:

- `File Manager`(Documented below)
- `Single File Uploade` (Expand the Files node for more information)
- `Multi File Uploade` (Expand the Files node for more information)

Note that only the field-specific parameters will be listed below. Please <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">see here</a> for a list of **common parameters** to all fields and <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">here</a> for the **common configuration** elements to all fields.

## File manager

This field gives you the ability to browse files from the Plant an App File Manager, as well as uploading new files to the selected folder via its too tabs: `Upload` and `Browse Files`. It supports *Single* and *Multiple* file uploads (see parameters below). The files retrieved from the server can be filtered by their extension. If this is used to upload images, they can be resized in the browser before being uploading them to the server. This way you can save bandwidth and speed-up the upload process. This field can also be used as a "helper field" when the "*`Display in Popup`*" option (see below) is enabled. You can both upload files and select existing files, and when the modal is committed, you will have access to the selected files and the files in the upload queue using the Callback setting.

>ss file-manager-upload

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
|*Display in Popup*|Checkbox; if enabled, the File Manager will not be displayed in the Form, but rather made available to be displayed in popup. |
|*Default Browse Files View*|Allows you to set the default Browse Files view: `List` (list with file names and sizes) or `Grid` (thumbnails grid). Note that the toggles for this option is also available from the File Manager's interface.|
|*Container Class*|Allows you to define a custom CSS class (custom Bootstrap tabs styles provided by different skins) for customizing the way the File Manager is displayed. |
|*Upload Multiple Files*|Checkbox; if enabled, allows for multiple file upload. |
|Auto upload Files |Checkbox; if enabled, the files will be automatically uploaded (i.e., without needing to click the "`Add Files...`" button for confirmation).|
|*File Size Limit*|Allows you to set a file size limit (in MB) for uploaded files. Leave empty for no limit.|
|*Upload to Folder*|Dropdown list that enables you to set the folder where the files will be uploaded. The list is populated according to your Entity setup and folder tree structure. Accepts expressions (`EXPR` button) to use Tokens or values based on other fields.|
|*File Types*|Optional; define the file extension types that are accepted for upload. Syntax example: "`txt,cs,doc`".|
|*Restricted file name characters*|Optional; define a string of characters that cannot be contained in a file name to be uploaded.|
|*Filename Pattern*|Optional; provide a pattern to use for displaying filenames on the server (leave blank to use the original filename.). For example: "`[User:Username]-avatar`". Note that you can use `[<FieldName>]`, `[<FieldName>:FileName]`, `[<FieldName>:FileExtension]`. Important: the file name is the one before the duplication handling. this field supports Tokens.|
|*Resize Method*|Determines how the images will be scaled down: `Crop` or `Keep Aspect Ratio`.|
|*Width*|Determines the image height in [px (pixels)](https://www.w3.org/Style/Examples/007/units.en.html#units).|
|*Height*|Determines the image height in [px (pixels)](https://www.w3.org/Style/Examples/007/units.en.html#units).|
|*Handle Duplicates*|Define how the file upload duplicates will be handled: `Rename` or `Overwrite`.|
|*Display total progress bar*|Checkbox; display an upload progress bar or not. Useful for large/multiple files upload.|
|*Enable File Browser*|Checkbox; if disabled, the Uploaded Files browser will not be available as a tab.|
|*Display button in file browser*|Checkbox (advanced); if active, the button from File Browser will be displayed. Gives you access to a JavaScript editor. The JavaScript code defined in the editor will be executed when the "*`Done`*" button from the File Browser tab is clicked. The "`files`" JavaScript variable is automatically initialized with an object containing all files(`filesInQueue` and `selectedFiles`). Example: `console.log(files.selectedFiles, files.filesInQueue);`<br /> **Note**: active only if "*Enable File Browser*" is checked.|
|*Display button in upload tab*|Checkbox; if active, the selected button will appear in the "Upload" tab. If activated, a drop-down list appears with the available buttons on the Form (see the **`Button`** page).|
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |
|*For Each File*|Allows you to execute actions on each uploaded file. Please see <a href="https://learn.plantanapp.com/docs/faq" target="_blank">a list of available Actions</a> in Plant an App.<br /> The following tokens are available for those actions: `[FileName]`, `[RelativeUrl]`, `[AbsoluteUrl]`, `[FilePath]` (physical path), `[LinkClick]`, `[Stream]` ([file stream](https://learn.microsoft.com/en-us/sql/relational-databases/blob/filestream-sql-server?view=sql-server-ver16), for uploading into a database for example), `[Base64]`, `[FileSize]`, `[FileSizeB]` (in bytes), `[FileSizeKB]` (in kilobytes), `[FileSizeMB]` (in megabytes), `[FileSizeGB]` (in gigabytes), `[MimeType]` ([see here](https://en.wikipedia.org/wiki/Media_type) for Mime Types), `[FileId]`, `[FolderId]`, `[FolderPath]`, `[FileExtension]`. Also creates the `[FileOrThumbnailNameAndExtension]` token; this token contains the file name and extension, but if the field is used in a create thumbnail action it will be overwritten with then thumbnail value.|


Revised 11/20/2025