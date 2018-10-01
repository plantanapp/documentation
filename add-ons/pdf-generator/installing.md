# Installing PDF Generator

**Step 1** - Install Action Form if you don't have it installed yet.

**Step 2** - Install the Add On

**Note** that the add on will install locally an executable that will need appropriate permissions to run on your server. If your system administrator does not allow this, you can use the External URL field in conjunction with Generate Pdf Web API portal.


Please note that PDF Generator is **not** compatible with Azure.


**Step 3** - Configure the Action


How to generate Pdf documents directly from the DNN portal:


* Create a form with some text boxes and a button.
* Add an action of type Generate Pdf to the button.
* In the Generate Pdf action you can define an HTML template, using tokens, DNN or My Tokens, texts from your form text boxes, etc.
* Add a name for the PDF file to generate.
* Add the Generated PDF File Destination Path.
* There are a few options to select for your pdf: Orientation,Paper Size and Color.
* Optionally provide token names that can be used in next actions down the stack, for Absolute URL, Relative URL,  Physical Path for the Generated PDF.
* Leave External URL empty for default local generation.