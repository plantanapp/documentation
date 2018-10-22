## Generate Barcode Action

This action comes with the Barcode Generator Add-On, is available under Actions&gt;Images&gt;Generate Barcode and it generates a barcode file. You have the ability to use this integration as part of any form or module. You can use it with Action Form, Action Grid, DNN API Endpoint and Sharp Scheduler. 

Its output is a printable and scanable barcode in Code128 B or C, Code 39, EAN 13, UPC, ITF, and ITF 14 [symbologies](https://en.wikipedia.org/wiki/Barcode#Types_of_barcodes){:target="_blank"}, which can be called via tokens \(described below\) to be included directly into your documents.

The below particular properties can be set for this field type:

* Barcode - the input for the Barcode to be generated. This field supports [My Tokens](/my-tokens/index.html).
* Barcode Encoding - the symbologies of the generated barcode. Its output is a printable and scanable barcode in Code128 B or C, Code 39, EAN 13, UPC, ITF, and ITF 14, etc. Click on EXPR option to add a different type of encoding that's not available in the dropdown, see the [comprehensive documentation](https://en.wikipedia.org/wiki/Barcode#Types_of_barcodes){:target="_blank"}. This field supports [My Tokens](/my-tokens/index.html).
* Barcode Width - the width in pixels of the image to be generated. Note that this should be proportional with the number of characters set as Barcode Input. This field supports [My Tokens](/my-tokens/index.html).
* Barcode Height - the height in pixels of the barcode to be generated. This field supports [My Tokens](/my-tokens/index.html).
* Show Text - decide if you want to display/hide the text under the barcode. This field supports [My Tokens](/my-tokens/index.html).
* Upload to Folder - the relative path where the .jpeg file will be stored. 
* Signature Name - the name of the image to be generated. If left empty, a GUID will be generated for name. This field supports [My Tokens](/my-tokens/index.html).

The tokens below are generated on submit:

* \[&lt;Fieldname&gt;\] - the filename on the server

* \[&lt;Fieldname&gt;:RelativeUrl\] - the stored relative URL. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:AbsoluteUrl\] - the stored absolute URL. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:FilePath\] - the stored physical path. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:PortalPath\] - the stored portal path. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:Base64\] - the BASE 64 string of the generated barcode. The token can be used in further actions down the stack.



