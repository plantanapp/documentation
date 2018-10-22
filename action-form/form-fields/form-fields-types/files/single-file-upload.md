# Single File Upload

This field is a File Upload widget with single file selection, drag & drop support and progress bar.

Using the **Single File Upload **field on a form gives you the possibility to create tokens on submit action and to stream the files into database.

On submit, it creates tokens \[&lt;FieldName&gt;\] \(filename on the server\), \[&lt;State&gt;\] \(file State: new/existing/delete\), \[&lt;FieldName&gt;:RelativeUrl\], \[&lt;FieldName&gt;:AbsoluteUrl\], \[&lt;FieldName&gt;:FilePath\] \(physical path\), \[&lt;FieldName&gt;:LinkClick\], \[&lt;FieldName&gt;:Stream\] \(file stream, for example to upload into database\), &lt;FieldName&gt;:Base64, \[&lt;FieldName&gt;:FileSize\], \[&lt;FieldName&gt;:FileSizeB\], \[&lt;FieldName&gt;:FileSizeKB\], \[&lt;FieldName&gt;:FileSizeMB\], \[&lt;FieldName&gt;:FileSizeGB\], \[&lt;FieldName&gt;:MimeType\], \[&lt;FieldName&gt;:FileId\], \[&lt;FieldName&gt;:FolderId\],\[&lt;FieldName&gt;:FolderPath\], \[&lt;FieldName&gt;:FileExtension\].

_**Drawing AddOn required:**_** **Also creates \[&lt;FieldName&gt;:FileOrThumbnailNameAndExtension\]. This token contains the file name and extension, but if the field is used in a create thumbnail action it will be overwritten with the thumbnail value.

### Options

* Filename Pattern

  * Optionally provide a pattern to use for filenames on the server. For example "\[User:Username\]-avatar". Leave blank to use the original filename. Here you can use \[&lt;FieldName&gt;\], \[&lt;FieldName&gt;:FileName\], \[&lt;FieldName&gt;:FileNameAndExtension\], \[&lt;FieldName&gt;:FileExtension\] \(note the file name is before the duplication handling\). Supports [My Tokens](/my-tokens/index.html). 

* File Types

  * Optionally provide a series of file types to limit the upload to these specific types. For example "txt,cs,doc".

* File Size Limit

  * Optionally provide a file size\(MB\) to limit the upload. For example "12.8". Use file size \[FieldName:FileSize\] and file size unit tokens \[FieldName:FileSizeB\], \[FieldName:FileSizeKB\], \[FieldName:FileSizeMB\], \[FieldName:FileSizeGB\]; file extension token \[FieldName:FileExtension\] and \[FieldName:MimeType\] token.

* Upload to Folder

  * Choose the folder to upload the files

* Handle Duplicates

  * Overwrite

  * Rename

  ![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-10-32.png)

#### How to Get the File Size for an Uploaded file

If you want to display a message which informs the user about the details of the uploaded file, you can use some predefined tokens, here's how:

* on your form add a Single File Upload field, set the title to "**Upload**", set an upload location and optionally a file size limit;
* add a button with a Display message action, in the Message box fill in the following tokens:

_extension: \[Upload:FileExtension\]  
size \[Upload:FileSize\] and size expressed in units: \[Upload:FileSizeB\]B,\[Upload:FileSizeKB\] KB, \[Upload:FileSizeMB\] MB, \[Upload:FileSizeGB\] GB  
mime type \[Upload:MimeType\]  
where \[Upload\] is the title of the Single File Upload field_

* save the form and once you're on the form page upload a file and click on submit button, here's how the data will be returned:

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-13-39.png)

#### How to upload files on S3 Browser via Single File Upload using EvotivaGlobalStorage

* Install EvotivaGlobalStorage \(here's the page from where you can download a free trial: [//www.evotiva.com/Downloads](//www.evotiva.com/Downloads%29\);

* Access S3 Browser and in Accounts &gt; Manage Accounts &gt; double click on Account Name - from here you'll need to use the Access Key ID and the Secret Key ID;

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-31-14.png)

* Access the site &gt; go to Admin &gt; File Management &gt; click on Manage Folder Types from Actions &gt; click on Add new Type &gt; set a Name and select as Folder Provider the Evotiva-AmazonS3FolderProvider then fill in the Access ID and Secret Key ID provided in S3 Browser and select the Bucket Name you need to use when uploading the files;

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-31-48.png)

* also on File Management page you have to create a folder \(click on Create New Folder\) and select the Folder Type to the one previously created;

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-32-19.png)

* add Action Form on a page &gt; add the Upload Single File field where you have to set the folder previously created on Upload to Folder option &gt; and also add a button;

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-32-43.png)

* upload a file and click Submit then check both in Admin &gt; File Management and on S3 Browser if the file was correctly uploaded.

#### How to upload files on Dropbox via Single File Upload using Intelequia

* install Intelequia DNN Drive module on one of the following allowed domains:  
  localhost, \*.local, \*.dnndev.me, \*.cloudapp.net, \*.azurewebsites.net, \*.evoqtrials.dnncloudservices.com, \*.evoqtrials.com

* add IntelequiaDNNDrive module on a page and check the Licensing Settings options in order to see if the license for this module is active - the following details should be displayed on the page:

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-34-02.png)

* access Admin &gt; File Management &gt; Actions &gt; click on Manage Folder Types button &gt; set a name for the folder you want to create, select the folder provider you want to use, in our case ISSDropBoxFolderProvider:![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-36-17.png)

* generate via Dropbox an app key and a secret key \(for more info regarding application key, click here\);

* take the generated app key and secret key and paste them into the Folder Provider Settings &gt; click on Connect to Dropbox button then on Update;

* access again Admin &gt; File Management &gt; Actions &gt; click on Create New Folder button &gt; set a name and select as Folder Type the one previously created with Dropbox as Folder Provider:

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-37-12.png)

* after you create the folder add ActionForm on a page &gt; add Single File Upload field where you have to set on Upload to Folder drop down list the location you want the files to be uploaded. In our case use the folder created on step 6 &gt; add a button &gt; save and test:

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-07_15-37-30.png)

* after browsing a file and clicking on Submit button, refresh the page with the folder previously created on step 6 in order to see if the file was correctly uploaded and you can also check directly on Dropbox if the upload was correctly made.



