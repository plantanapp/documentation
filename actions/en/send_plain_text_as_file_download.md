### Send Plain Text as File Download

Takes the specified plain text contents and passes them to the browser for user download. Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **[SomeField] == "Some Value"**. This field supports **My Tokens**. 
* **EntryId**. A guid that uniquely identifies an entry. Can contain form tokens (for example **[Email]**) and **My Tokens**.
* **File name**. Optionally provide name for the file. Leave blank to use current page name. Supports **My Tokens**.
* **File Type**. This is the content type of the file. Supports **My Tokens**. Supports the following file types: csv, html, txt, xml and xsl.
* **Headers**. Additional HTTP headers to pass.
* ** Force download**. Check if you want the browser to automatically start the file download.
* **File Content**. Specify the selected file content. Supports **My Tokens**.
