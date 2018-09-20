# Settings Reference

* **HTML Code**
Can contain form tokens (for example [Email]) and My Tokens.

* **PDF Name**
The name of the PDF file to generate. If left empty, a GUID will be generated for name. Illegal characters will be cut out from the name.

* **Generated File Destination**
The destination directory on your portal.

* **Orientation Landscape**
Set orientation to Landscape. Default, unchecked, is Portrait.

* **Paper Size**
Set paper size to: A4, Letter, etc.

* **Grayscale**
If checked, PDF will be generated in Grayscale, otherwise will keep the html colors.

* **Store Absolute URL**
Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack.

* **Store Relative URL**
Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack.

* **Store Physical Path**
Optionally provide a token name where to Store Physical Path. The token can be used in next actions down the stack.
Useful for example to send the generated Pdf file in an email attachment.

* **External URL**
When this is present, Action Form POSTs the HTML to this URL. Useful when pdf generation can't be executed on server due to permission restrictions.

There is a Generate Pdf Web API application available for download, to install it on your server of choice.