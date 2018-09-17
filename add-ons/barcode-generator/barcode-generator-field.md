## Barcode Generator Field

## ![](/add-ons/barcode-generator/assets/bg.jpg)

This field comes with the Barcode Generator Add-On and is available under Fields&gt;Images&gt;Barcode Generator. Its output is a printable and scanable barcode in Code128 B or C, Code 39, EAN 13, UPC, ITF, and ITF 14 [symbologies](https://en.wikipedia.org/wiki/Barcode#Types_of_barcodes){:target="_blank"}, which can be called via tokens \(described below\) to be included directly into your documents.

The below particular properties can be set for this field type:

* Barcode - the input for the Barcode to be generated. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.
* Barcode Encoding - the symbologies of the generated barcode. Its output is a printable and scanable barcode in Code128 B or C, Code 39, EAN 13, UPC, ITF, and ITF 14. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.
* Barcode Width - the width of a single bar. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.
* Barcode Height - height of the generated barcode. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.
* Show Text - decide if you want to display/hide the text under the barcode. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.
* Text Alignement - choose a position \(like: left, center, right\) where the text under the barcode is displayed. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.
* Signature Name - the name of the image to be generated. If left empty, a GUID will be generated for name. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens){:target="_blank"}.
* Upload to Folder - the relative path where the .jpeg file will be stored. 

The tokens below are generated on submit:

* \[&lt;Fieldname&gt;\] - the filename on the server

* \[&lt;Fieldname&gt;:RelativeUrl\] - the stored relative URL. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:AbsoluteUrl\] - the stored absolute URL. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:FilePath\] - the stored physical path. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:PortalPath\] - the stored portal path. The token can be used in further actions down the stack;

* \[&lt;Fieldname&gt;:Base64\] - the BASE 64 string of the generated barcode. The token can be used in further actions down the stack.



