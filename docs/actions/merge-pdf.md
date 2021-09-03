---
id: merge-pdf
title: Merge PDF
sidebar_label: Merge PDF
---

> Audience: [`Low-code Engineers`](/docs/audience#low-code-engineers)
>
> Skill Prerequisites: `HTML` `CSS`

Merges two PDF into one.

## `Typical Use Cases`

- Send multiple PDFs to download as one
- Create an easy to read PDF 
- Attach your legal details at the end of any generated PDF

## `Don't use it to`

- Merge sensitive data to public data

## `Related Actions`

| Action Name                                   | Description                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Generate PDF](/docs/actions/generate-pdf) | Uses [wkhtmltopdf](https://wkhtmltopdf.org/) open source to generate PDF from HTML template. |

## `Input Parameter Reference`

| Parameter   | Description                                                                                                                     | Supports Tokens | Default         | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------- | -------- |
| First File  | Identifier for the first file that can have multiple pages and can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath.  | Yes             | `empty string`  | Yes      |
| Second File | Identifier for the second file that can have multiple pages and can be: RelativeUrl, AbsoluteUrl, LinkClickUrl or PhysicalPath. | Yes             | `empty string`  | Yes      |
| Folder      | Folder path where you want to store the new pdf.                                                                                | Yes             | `none selected` | No       |
| File Name   | The File Name for the newly generated file.                                                                                     | Yes             | `empty string`  | No       |

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

### `1. Merging 2 newly generated PDFs`

​
The action below generates two PDFs, with different content, and then merges them. [Import it](/docs/running-examples#import-the-action-in-a-module) into your application to see it in action.
​

```json
{
    "Title": "Execute Actions",
    "ActionType": "ExecuteActions",
    "Description": "merging two generated pdfs",
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
                "$_uid": "action15952552462363518",
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
                "$_uid": "action15952552462369384",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true,
                "Id": -1
            },
            {
                "Id": -1,
                "$_uid": "action15952552462366752",
                "Parameters": {
                    "FirstFileIdentifier": "[PDF1]",
                    "SecondFileIdentifier": "[PDF2]",
                    "Folder": {
                        "Expression": "",
                        "Value": "/",
                        "IsExpression": false,
                        "Parameters": {}
                    },
                    "FileName": "Merged-PDF",
                    "AbsoluteUrlTokenName": "link",
                    "RelativeUrlTokenName": "",
                    "PhysicalPathTokenName": "",
                    "LinkClickTokenName": "",
                    "FileIdTokenName": ""
                },
                "ActionType": "MergePdfs",
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
                "$_uid": "action15952552462364634",
                "$_isOpen": false,
                "$_isLoaded": true,
                "$_isFocus": true
            }
        ]
    }
}
```