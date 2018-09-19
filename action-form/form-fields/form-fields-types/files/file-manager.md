# File Manager

![upload](/action-form\form-fields\form-fields-types\files\assets\upload.png)
![browse files](/action-form\form-fields\form-fields-types\files\assets\browse-files.png)

This field gives you the ability to browse files from the DNN File Manager, as well as uploading new files to the selected folder. Supports single and multiple file uploads. The files retrieved from the server can be filtered by their extension.
If this is used to upload images, they can be resized in the browser, before uploading them to the server. This way you can save bandwidth and speed up the upload process.
This field can also be used as an helper field when the **Display in popup** is enabled. You can both upload files and select existing files, and when the modal is commited, you will have access to the selected files and the files in the upload queue using the **Callback** setting.

This field will generate the following tokens: `[<FieldName>]` (file name on the server), `[<FieldName>:FileIds]`, `[<FieldName>:Filestates]` (file States: new/selected/existing/delete), `[<FieldName>:Count]`, `[<FieldName>:PortalRelativeUrls]`, `[<FieldName>:RelativeUrls]`, `[<FieldName>:Filenames]`, `[<FieldName>:FolderId]`, `[<FieldName>:FolderPath]`

## Display in Popup

If this parameter is set the file manager will not be displayed in the form, making it available to be displayed in popup.

## Container Class

This css class will be added to FileManager container for custom bootstrap tabs styles provided by different skins.

* Upload Multiple Files
    * Enables the support for multiple file upload.

* Auto upload Files
    * If this parameter is set the files will be automatically uploaded.
  
## File Size Limit

Optionally provide a file size(MB) to limit the upload. For example "12.8".

## Upload to Folder

Select the path where the file(s) will be uploaded. It also supports `EXPR`.

## File Types

Optionally provide a series of file types to limit the upload to these specific types. For example "txt,cs,doc".

## Filename Pattern

Optionally provide a pattern to use for filenames on the server. For example "`[User:Username]-avatar`". Leave blank to use the original filename. Here you can use `[<FieldName>]`, `[<FieldName>:FileName]`, `[<FieldName>:FileExtension]` (note the file name is before the duplication handling). Supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}

## Resize Method

Determines how the images will be scaled down.

## Width/Height

Determines the image width/height in px.

## Handle Duplicates

Here you can select if you want to Overwrite the duplicates or to Rename it.

* Display total progress bar
* Enable File Browser
    * If this is set to true the 'Upload' and 'Browse Files' tabs will be visible in File Manager.
* Display button in file browser
    * If this is set to true the button from file browser will be displayed.

## JavaScript CallBack

This javascript code will be executed when the 'Done' button from the File Browser tab is clicked. The 'files' javascript variable is automatically initialized with an object containing all files(filesInQueue and selectedFiles). Example: console.log(files.selectedFiles, files.filesInQueue);

## Form Button

The selected button will be added in upload tab.

## For Each File

Execute actions on each uploaded file. Following tokens are available: `[FileName]`, `[RelativeUrl]`, `[AbsoluteUrl]`, `[FilePath]`(physical path), `[LinkClick]`, `[Stream]`(file stream, for example to upload into database), `[Base64]`, `[FileSize]`, `[FileSizeB]`, `[FileSizeKB]`, `[FileSizeMB]`, `[FileSizeGB]`, `[MimeType]`, `[FileId]`, `[FolderId]`, `[FolderPath]`, `[FileExtension]`.
Also creates `[FileOrThumbnailNameAndExtension]`. This token contains the file name and extension, but if the field is used in a create thumbnail action it will be overwriten with then thumbnail value.