---
id: generate-pdf
title: Generate PDF
sidebar_label: Generate PDF
---

> Audience: [`Low-code Engineers`](/docs/audience#low-code-engineers)
>
> Skill Prerequisites: `HTML` `CSS`

Uses [wkhtmltopdf](https://wkhtmltopdf.org/) open source to generate PDF from HTML template.

## `Typical Use Cases`

- Generate receipts
- Generate contracts

## `Don't use it to`

- Merge PDFs
- Overlay PDFs

## `Related Actions`

| Action Name                                       | Description                                                                                       |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [Apply Tokens](/docs/actions/apply-tokens)       | Returns the HTML code that generates the PDF.|
| [Run SQL Query](/docs/actions/run-sql-query)         | Execute a SQL query that returns one or more variables so that they can be used in the HTML code. |
| [Server Request](/docs/actions/server-request) | Perform a HTTP request that returns one or more variables that can be used in the HTML code.     |

## `Input Parameter Reference`

| Parameter                  | Description                                                                                                                                                                | Supports Tokens | Default            | Required |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------ | -------- |
| Html Input Type            | Select the HTML editor from the dropdown between 'Rich Text Editor' which interferes with the html code, or 'Codemirror' where you can paste the plain html code directly. | No              | `Rich Text Editor` | Yes      |
| HTML Code                  | Write down the HTML code which will be used to generate the desired PDF.                                                                                                   | Yes             | `empty string`     | Yes      |
| PDF Name                   | Give a name to the PDF that will be automatically generated or leave empty for a random name given by GUID.                                                                | Yes             | `empty string`     | No       |
| Generated File Destination | Select the path where the generated PDF will be saved.                                                                                                                     | No              | `None selected`    | Yes      |
| Paper Size                 | Select size of paper the PDF will have.                                                                                                                                    | No              | `A4`               | No       |
| Orientation Landscape      | Checkbox that set orientation to Landscape. Leave unchecked for Portrait orientation.                                                                                      | No              | `Unchecked`        | No       |
| Grayscale                  | Checkbox that generates the PDF in grayscale                                                                                                                               | No              | `Unchecked`        | No       |

## `Output Parameters Reference`

| Parameter           | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| Store DNN FileId    | Provide a token name where the FileId from DNN will be saved. |
| Store Absolute URL  | Provide a token name where the absolute URL will be saved.    |
| Store Relative URL  | Provide a token name where the relative URL will be saved.    |
| Store Physical Path | Provide a token name where the physical path will be saved.   |
| Store LinkClick Url | Provide a token name where the LinkClick URL will be saved.   |

## `External Resources`

### `Pictures`
  
Including a picture in the PDF can be made using the image absolute URL. For example, if you want to include our logo in your PDF, you can use the following HTML syntax:

```html
<img src="https://learn.plantanapp.com/img/pap-logo.png" alt="PlantAnApp Logo">
```

###  `CSS`

CSS can be used using the default HTML syntax in the default 3 ways: 
Inline, for example a red heading can be made using the following syntax: 
```html
<h1 style="color:red;">Heading</h1>
```

Internal,  the previous example can be written in the header like this:  
```html
<html>
  <head>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Heading</h1>
  </body>
</html>      
```

External, you can load any external style sheet using this syntax in header:
```html
<link rel="your_own_stylesheet" href="styles.css">
```
**Note!** A style sheet can be written in any text editor and the file will look something like this:
```CSS
body {
  background-color: blue;
}
h1 {
  color: red;
}
```

### `JavaScript`

JavaScript can also be executed when compiling a PDF file. The following code generates a PDF with red, centered and Arial font Heading, all made by the javascript found between script tags.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "change font, text align and font using JS",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Title": "Generate PDF",
                "ActionType": "GeneratePDF",
                "Description": null,
                "Condition": null,
                "Parameters": {
                    "HtmlInputType": {
                        "Expression": "",
                        "Value": "richtext",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "HTMLCode": "<h1 id=\"heading\">Hello World!</h1>\n\n\n\n<p>\n\t<script>\n\tdocument.getElementById(\"heading\").style.color = \"red\";\n\tdocument.getElementById(\"heading\").style.fontFamily = \"Arial\";\n\tdocument.getElementById(\"heading\").style.textAlign = \"center\";\n\t<\/script>\n</p>\n",
                    "PDFName": "Testing-JS",
                    "PathDestination": {
                        "Expression": "",
                        "Value": "/",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "OrientationLandscape": "",
                    "PaperSize": {
                        "Expression": "",
                        "Value": "A4",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "Grayscale": "",
                    "OtherOptions": "--javascript-delay 1000",
                    "StoreFileId": "",
                    "StoreAbsoluteURL": "link",
                    "StoreRelativeURL": "",
                    "StorePhysicalPath": "",
                    "StoreLinkClick": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952449891874616",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            },
            {
                "Title": "Redirect to URL",
                "ActionType": "RedirectToUrl",
                "Description": null,
                "Condition": null,
                "Parameters": {
                    "Url": "[link]",
                    "EscapeUrl": "",
                    "OpenInPopup": "",
                    "PopupTitle": "",
                    "OpenInNewTab": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952449891871794",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            }
        ]
    }
}
```

​

## `Examples`

### `1. Generate a PDF using HTML/CSS directly into the action`

​
The action below generates a simple PDF with custom CSS styles for title and paragraph. [Import it](/docs/actions/running-examples#import-the-action-in-a-module) into your application to see it in action.
​

```json
​{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "simple example using html directly into the html code box",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Title": "Generate PDF",
                "ActionType": "GeneratePDF",
                "Description": null,
                "Condition": null,
                "Parameters": {
                    "HtmlInputType": {
                        "Expression": "",
                        "Value": "codemirror",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "HTMLCode": "<head>\n\t<style>\n      h1 {\n        color: red;\n        text-align: center;\n      }\n      p {\n        color: blue;\n        text-align: left;\n      }\n\t</style>\n</head>\n\n<body>\n\t<h1> \n      Example \n  \t</h1>\n\t<p>\n    \tThis is a simple generated PDF.  \n  \t</p>\n</body>",
                    "PDFName": "Example",
                    "PathDestination": {
                        "Expression": "",
                        "Value": "/",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "OrientationLandscape": "",
                    "PaperSize": {
                        "Expression": "",
                        "Value": "A4",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "Grayscale": "",
                    "OtherOptions": "--javascript-delay 1000",
                    "StoreFileId": "",
                    "StoreAbsoluteURL": "link",
                    "StoreRelativeURL": "",
                    "StorePhysicalPath": "",
                    "StoreLinkClick": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952466244288115",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            },
            {
                "Title": "Redirect to URL",
                "ActionType": "RedirectToUrl",
                "Description": null,
                "Condition": null,
                "Parameters": {
                    "Url": "[link]",
                    "EscapeUrl": "",
                    "OpenInPopup": "",
                    "PopupTitle": "",
                    "OpenInNewTab": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952466244288030",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            }
        ]
    }
}​
```

### `2. Generate a PDF with pictures/signatures`

The action below generates a PDF that has a red title and a loaded picture. This picture can be a signature, a watermark or anything else. [Import it](/docs/actions/running-examples#import-the-action-in-a-module) into your application to see it in action.

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "generating a pdf that has a picture",
    "Condition": null,
    "Parameters": {
        "ActionList": [
            {
                "Title": "Generate PDF",
                "ActionType": "GeneratePDF",
                "Description": null,
                "Condition": null,
                "Parameters": {
                    "HtmlInputType": {
                        "Expression": "",
                        "Value": "codemirror",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "HTMLCode": "<head>\n\t<style>\n      h1 {\n        color: red;\n        text-align: center;\n      }\n      img {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        width: 50%;\n      }\n\t</style>\n</head>\n\n<body>\n\t<h1> \n      Picture \n  \t</h1>\n\t<img src=\"https://learn.plantanapp.com/img/pap-logo.png\" alt=\"Plant An App Logo\">\n</body>",
                    "PDFName": "PDF-Example",
                    "PathDestination": {
                        "Expression": "",
                        "Value": "/",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "OrientationLandscape": "",
                    "PaperSize": {
                        "Expression": "",
                        "Value": "A4",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "Grayscale": "",
                    "OtherOptions": "--javascript-delay 1000",
                    "StoreFileId": "",
                    "StoreAbsoluteURL": "link",
                    "StoreRelativeURL": "",
                    "StorePhysicalPath": "",
                    "StoreLinkClick": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952510276878309",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            },
            {
                "Title": "Redirect to URL",
                "ActionType": "RedirectToUrl",
                "Description": null,
                "Condition": null,
                "Parameters": {
                    "Url": "[link]",
                    "EscapeUrl": "",
                    "OpenInPopup": "",
                    "PopupTitle": "",
                    "OpenInNewTab": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952510276874502",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            }
        ]
    }
}
```