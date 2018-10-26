# Image Editor

This field will give you(or your users) the ability to crop a selected area of an image and submit the data in base64 format. 

It is very useful when images uploaded are displayed on the website and you want to give the uploader the possibility of "publishing" only part of an image.

The field generates 3 tokens on submit, as follows:
* **[FieldId]** -  which is the entire content of the field in base64 format (full base64 image information)
* **[FieldId:ContentType]** - which holds the content type information (image type: jpeg, png, ...)
* **[FieldId:Content]** - which holds just the base64 string

> If the user should not have the ability to resize the cropping area then the *Drag Mode* setting for the field should be set to *Move* and the *Resizable Crop Box* checkbox needs to be *disabled*.

The image resulting from this field can:
* either be saved directly to the database in base64 format
* or saved to disk with the help of the [Save file to disk](/actions/Save-file-to-disk.html) action by setting the input mode to *Base64 image content*

![Image Editor Field](https://static.dnnsharp.com/documentation/image_editor_field.png)