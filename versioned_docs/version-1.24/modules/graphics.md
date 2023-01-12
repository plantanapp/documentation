---
id: graphics
title: Graphics
sidebar_label: Graphics
---

## **Graphics**

The Fields under this section allow you to upload and manipulate images and graphical elements to be inserted into your form.

### Display Image

This Field type enables the display of an image - either hosted on the Plan an App portal or from an external URL.

Available parameters:

| Field | Description and information |
| ----- | --------------------------- |
|*Image*|Choose an image from the Plant an App portal. The drop-down list is automatically populated with all the available images.|
|*Image URL*|Alternatively, load an image from an external URL. If provided, this setting will take precedence over the "*Image*" parameter above. This field supports Tokens.|

### Image Editor

This field inserts an image editor canvas in the form that allows for the ability to crop the selected area of an image and submit the data in [base64 format](https://en.wikipedia.org/wiki/Base64).

It is very useful when images uploaded are displayed on the website and you want to give the uploader the possibility of “publishing” only part of an image.

Generated tokens: 
- `[<FieldId>]` contains the full base64 image information (e.g. `data:image/png;base64,<base64 string>`)
- `[<FieldId>:ContentType]` contains the content (file) type information (e.g. .jpeg, .png, etc.)
- `[<FieldId>:Content]` - contains just the [base64 string](https://www.base64decode.org/).

The image resulting from this field can:

- Be saved directly to the database in base64 format.
- Saved to disk with the help of the ["`Save file to disk`"](https://learn.plantanapp.com/docs/actions/save-file-to-disk) action by setting the input mode to: "Base64 image content".

Available parameters:

| Field | Description and information |
| ----- | --------------------------- |
|*Initial Image*|Input an image path or a [base64 string](https://www.base64decode.org/) that represents an image. This field Supports Tokens.|
|*Output Type*|Determines the type of the image to be returned (e.g. .PNG or .JPEG).|
|*Hide Select Image Button*|Hide/show the image select button below the canvas via a token.|
|*Reset Button*|Checkbox; if enabled, shows the "Reset" button below the canvas. The reset button resets the crop box and image to default values.|
|*Drag Mode*|Choose the dragging mode of the cropper - either create a new crop box (`Crop`) or move the canvas (`Move`).<br /> **Note**: if you do not want the form user to have the ability to resize the cropping area, this setting should be set to *Move* and the "*Resizable Crop Box*" checkbox (see below) needs to be disabled.|
|*Resizable Crop Box*|Checkbox; enable to resize the crop box by dragging (the aspect ratio is defined by width and height). When disabled, the resulting image will use the crop box width and height defined below.|
|*Crop Box Width*|Define the crop box width in [px](https://www.w3.org/Style/Examples/007/units.en.html#units) (Integer number).|
|*Crop Box Height*|Define the crop box height in [px](https://www.w3.org/Style/Examples/007/units.en.html#units) (Integer number).|
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

### Progress Bar

Allows you to insert a progress bar into your Form, that can be used to indicate the progress of an operation to the user.

:::tip

How to quickly create a **Progress Bar** for your Form:

1. Add a **Progress Bar** field
2. Set the preferred *`Display Text`*, *`Animation`* and *`Min/Max Values`* (see *Parameters list*, below)
3. Add a [Slider field](#slider) and set your preferred *`Values`* for it
4. Add the Slider’s `FieldID` token on the Progress Bar’s **Bind Expressions** (see the "**Common Configuration sections**" section on the "**Fields: Overview and settings**" page), in the *Value* field.

:::

Parameters list:

| Field | Description and information |
| ----- | --------------------------- |
|*Initial Value*|The field initially loads with this value. It should be between (or equal to) *Min Value* and *Max Value* - see below. Supports Tokens so you can pull data from various sources such as user profile.|
|*Shape*|Choose the shape of the Progress Bar, between: `Line`, `Circle`, or `Semicircle`.|
|*Display Text*|The text display corresponding to your Progress Bar progress: `None` (no progress figure info), `Value` (inferior and superior limits TBD below) and `Percentage`.|
|*Min Value*|Inferior (minimum) value of the range where the percentage will be calculated. Can be negative. Default value: `0`. (eg. 20). This field supports Tokens so you can pull data from various sources such as user profile.|
|*Max Value*|Superior (maximum) value of the range where the percentage will be calculated. Can be negative. Default value: `100`. (eg. 80). This field supports Tokens so you can pull data from various sources such as user profile.|
|*Stroke color*|Set progress bar **stroke** color (color of filled part). Accepts [RGB](https://www.google.com/search?q=hex+color+picker) and [HEX](https://www.google.com/search?q=rgb+color+picker) color codes. This field also supports Tokens so you can pull data from various sources such as user profile.|
|*Trail color*|Set progress bar **trail** color (color of unfilled part). Accepts [RGB](https://www.google.com/search?q=hex+color+picker) and [HEX](https://www.google.com/search?q=rgb+color+picker) color codes. This field also supports Tokens so you can pull data from various sources such as user profile.|
|*Stroke Width*|Set progress bar stroke (filled part) width.|
|*Trail Width*|Set progress bar trail (unfilled part) width.|
|*Animation*|Animation type on value change. Choose between `bounce` and `easeInOut.`|
|*Animation Duration*|Time in milliseconds. Disable with `-1`. Supports Tokens so you can pull data from various sources such as user profile.|
|*Change color on value*|Set threshold for color change when it reaches a specific value. Multiple steps can be added. This color change applies to the *Value* figure, not to the progress bar.|