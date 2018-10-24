### Actions

File Management add-on have four big actions that can be used with various DNN Sharp products in numerous ways:

* **Get archive file names**: It does exactly what it says, returns the name of the files in a token. You can set-up this action using the following parameters:

 * **Description**: Something so you'd quickly know what this action is about;
 * **Error Message**: The admins will also see the detailed error message. Leave empty to use the default message;
 * **Condition**: This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is [HasRole:Administrators|true] (which requires My Token to work) or [SomeField] == "Some Value". This field supports My Tokens. See More examples;
 * **Archive Upload Field**: Select one of the upload fields that you have in the form;
 * **Output token file names**: Specify the output token for file names.

![](/assets/get-archive-filename.png)

* **Upload to FTP**: Upload a list of files to a FTP server. You can set-up this action using the following parameters:

 * **Description**: Something so you'd quickly know what this action is about;
 * **Error Message**: The admins will also see the detailed error message. Leave empty to use the default message;
 * **Condition**: This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is [HasRole:Administrators|true] (which requires My Token to work) or [SomeField] == "Some Value". This field supports My Tokens. See More examples;
 * **FTP URL**: The URL to the FTP Server, including the folder path where you want to upload the files. Can contain My Tokens;
 * **Username**: The username used to login to the FTP Server. Can contain My Tokens;
 * **Password**: The password used to login to the FTP Server. Can contain My Tokens;
 *  **Use Passive**: Connect to the FTP Server using the passive mode (PASV);
 *   **Use SSL**: Connect to the FTP Server using a secured SSL channel;
 *   **File list**: Files separated by new line or pipe (|) character.

![](/assets/upload-ftp.png)

* **Pack folder**: Using this action you can pack all the files from a specific folder in an archive. You can set-up this action using the following parameters:

 * **Description**: Something so you'd quickly know what this action is about;
 * **Error Message**: The admins will also see the detailed error message. Leave empty to use the default message;
 * **Condition**: This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is [HasRole:Administrators|true] (which requires My Token to work) or [SomeField] == "Some Value". This field supports My Tokens. See More examples;
 * **Directory to archive**: All the files and folders from this directory will be archived;
 * **Archive name**: Specify the newly created archive file name (absolute path or relative path to portal). Directory must exist, be in current portal but not in archived folder;
 *  **Archive the subfolders**: When this option is enabled the subfolders will be archived;
 *  **Archive extension**: When this option is selected the file extension is ignored.

![](/assets/pack-folder.png)

* **Unpack an archive**: This action will create a new folder with items from the archive. You can set-up this action using the following parameters:

 * **Description**: Something so you'd quickly know what this action is about;
 * **Error Message**: The admins will also see the detailed error message. Leave empty to use the default message;
 * **Condition**: This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a ShowError action only if you've found an error let's say when you parsed a response from a web service. A common example is [HasRole:Administrators|true] (which requires My Token to work) or [SomeField] == "Some Value". This field supports My Tokens. See More examples;
 * **Archive**: Select one of the upload fields that you have in the form;
 * **Output directory**: Output directory to put the unpacked files;
 * **Copy non-archives**: When this option is enabled non-archive files are copied, otherwise are ignored;
 * **Create folders in path**: When this option is enabled the folders in path will be created if they don't exist.

![](/assets/unpack-archive.png)