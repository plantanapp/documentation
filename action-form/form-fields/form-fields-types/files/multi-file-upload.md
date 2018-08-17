# Multi File Upload

This field is a File Upload widget with multiple file selection, drag & drop support and progress bar.

On submit, it creates tokens \[&lt;FieldName&gt;\] \(filename on the server\), \[&lt;FieldName&gt;:FileIds\], \[&lt;FieldName&gt;:Filestates\] \(file States: new/existing/delete\), \[&lt;FieldName&gt;:Count\], \[&lt;FieldName&gt;:PortalRelativeUrls\], \[&lt;FieldName&gt;:RelativeUrls\], \[&lt;FieldName&gt;:Filenames\], \[&lt;FieldName&gt;:FolderId\],\[&lt;FieldName&gt;:FolderPath\].

_**Drawing AddOn required:**_ When a create thumbnail action is used it also creates \[&lt;FieldName&gt;:ThumbanilUrls\],\[&lt;FieldName&gt;:ThumbanilUrlsAsJson\],\[&lt;FieldName&gt;:ThumbanilIds\],\[&lt;FieldName&gt;:ThumbanilNames\],\[&lt;FieldName&gt;:ThumbanilNamesAsJson\].

### Options

* Filename Pattern

  * Optionally provide a pattern to use for filenames on the server. For example "\[User:Username\]-avatar". Leave blank to use the original filename. Here you can use \[&lt;FieldName&gt;\], \[&lt;FieldName&gt;:FileName\], \[&lt;FieldName&gt;:FileNameAndExtension\], \[&lt;FieldName&gt;:FileExtension\] \(note the file name is before the duplication handling\). Supports [My Tokens](https://www.dnnsharp.com/dnn/modules/my-custom-tokens). 

* For Each File

  * Execute actions on each uploaded file. Following tokens are available: \[FileName\] \[RelativeUrl\], \[AbsoluteUrl\], \[FilePath\] \(physical path\), \[LinkClick\], \[Stream\] \(file stream, for example to upload into database\), \[Base64\], \[FileSize\], \[FileSizeB\], \[FileSizeKB\], \[FileSizeMB\], \[FileSizeGB\], \[MimeType\], \[FileId\], \[FolderId\], \[FolderPath\], \[FileExtension\].

    Also creates \[FileOrThumbnailNameAndExtension\]. This token contains the file name and extension, but if the field is used in a create thumbnail action it will be overwritten with then thumbnail value.

* File Types

  * Optionally provide a series of file types to limit the upload to these specific types. For example "txt,cs,doc".

* File Size Limit

  * Optionally provide a file size\(MB\) to limit the upload. For example "12.8". Use file size \[FieldName:FileSize\] and file size unit tokens \[FieldName:FileSizeB\], \[FieldName:FileSizeKB\], \[FieldName:FileSizeMB\], \[FieldName:FileSizeGB\]; file extension token \[FieldName:FileExtension\] and \[FieldName:MimeType\] token.

* Upload to Folder

  * Choose the folder to upload the files

* Handle Duplicates

  * Overwrite

  * Rename

* Automatically add unknown extensions to Host settings

  * This setting can harm your website or its users. Use with caution.

### ![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_13-23-04.png)

### How to edit the uploaded images

* add a for on a page;

* add Multi File Upload field;

* optionally specify File Types and File Size Limit;

* set the location on Upload to Folder;

* add a button

* add Redirect to URL action

* set \[\_EditUrl\] token on the URL field

* save

* upload multiple images and click on the button  
   =&gt; as an expected result, the redirect is made to an "edit" page where a query string is loaded into the url and you have the possibility to remove existing images to upload new ones.

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-01-34.png)

