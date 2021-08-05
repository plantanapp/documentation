---
id: overlay-pdf
title: Overlay PDF
sidebar_label: Overlay PDF
---

> Audience: [`Low-code Engineers`](/docs/audience#low-code-engineers)<br/>
> Skill Prerequisites: `HTML` `CSS`

Overlays two PDFs.

## `Typical Use Cases`

- Insert a watermark

## `Don't use it to`

- Combine 2 documents - Use [Merge PDF](/docs/actions/merge-pdf) instead.

## `Related Actions`

| Action Name                                   | Description                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Generate PDF](/docs/actions/generate-pdf) | Uses [wkhtmltopdf](https://wkhtmltopdf.org/) open source to generate PDF from HTML template. |



## `Input Parameter Reference`

| Parameter             | Description                                                                                                             | Supports Tokens | Default         | Required |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------- | --------------- | -------- |
| File Path             | Path to first file, that can have multiple pages and can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath.    | Yes             | `empty string`  | Yes      |
| Overlay PDF File Path | Overlay PDF File Path, that can have multiple pages and can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. | Yes             | `empty string`  | Yes      |
| Overlay Starting Page | Index of the page where to start the overlay (first page index is 0).                                                   | Yes             | `empty string`  | Yes      |
| Overlay Recursively   | Check if you want to go back to the first page of the overlay pdf after the last page has been reached.                 | Yes             | `empty string`  | No       |
| Folder                | Folder path where you want to store the new pdf.                                                                        | Yes             | `none selected` | No       |
| File Name | File Name for the newly generated file. | Yes | `empty string`  | No |
| Overlay Starting X Position | Set the starting X position of the overlay. Default is 0. | Yes | `empty string`  | No |
| Overlay Starting Y Position | Set the starting Y position of the overlay. Default is 0. | Yes | `empty string`  | No |

## `Output Parameters Reference`

| Parameter               | Description                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| Absolute URL            | Optionally, provide a token name where the absolute URL will be saved.    |
| Relative URL            | Optionally, provide a token name where the relative URL will be saved.    |
| Physical Path TokenName | Optionally, provide a token name where the physical path will be saved.   |
| Link Click TokenName    | Optionally, provide a token name where the LinkClick URL will be saved.   |
| DNN FileId TokenName    | Optionally, provide a token name where the FileId from DNN will be saved. |

## `Possible Issue`

If one of the PDFs is password protected or doesn't have read permissions, merging them will not work.

## `Examples`

### `1. Overlaying 2 newly generated PDFs`

​
The action below generates two PDFs, with different content, and then overlays them. [Import it](/docs/running-examples#import-the-action-in-a-module) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "overlaying two generated pdfs",
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
                    "HTMLCode": "<head>\n\t<style>\n      h1 {\n        color: red;\n        text-align: center;\n      }\n\t</style>\n</head>\n\n<body>\n\t<h1> \n      Picture - PDF 1 \n  \t</h1>\n</body>",
                    "PDFName": "PDF-1",
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
                    "StoreAbsoluteURL": "PDF1",
                    "StoreRelativeURL": "",
                    "StorePhysicalPath": "",
                    "StoreLinkClick": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952568490254593",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            },
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
                    "HTMLCode": "<head>\n\t<style>\n      img {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        width: 50%;\n      }\n\t</style>\n</head>\n\n<body>\n  \t<h2 style=\"text-align:center\">\n      PDF 2\n  \t</h2>\n\t<img src=\"https://learn.plantanapp.com/img/pap-logo.png\" alt=\"Plant An App Logo\">\n</body>",
                    "PDFName": "PDF-2",
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
                    "StoreAbsoluteURL": "PDF2",
                    "StoreRelativeURL": "",
                    "StorePhysicalPath": "",
                    "StoreLinkClick": "",
                    "ForceDownload": true
                },
                "$_uid": "action15952568490256933",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Id": -1
            },
            {
                "Id": -1,
                "$_uid": "action15952568490257538",
                "Parameters": {
                    "FilePath": "[PDF1]",
                    "OverlayFilePath": "[PDF2]",
                    "OverlayStartigPage": "0",
                    "OverlayRecursively": true,
                    "Folder": {
                        "Expression": "",
                        "Value": "/",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "FileName": "Overlayed-PDF",
                    "OverlayStartingXPosition": "",
                    "OverlayStartingYPosition": "20",
                    "AbsoluteUrlTokenName": "link",
                    "RelativeUrlTokenName": "",
                    "PhysicalPathTokenName": "",
                    "LinkClickTokenName": "",
                    "FileIdTokenName": ""
                },
                "ActionType": "OverlayPdf",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Definition": {
                    "IsClientAction": false,
                    "Settings": {
                        "Group": "Documents"
                    }
                }
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
                "$_uid": "action15952568490259309",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            }
        ]
    }
}
```