---
id: generate-pdf
title: Generate PDF
sidebar_label: Generate PDF
---

> Audience: [`Low-code Engineers`](/docs/audience#low-code-engineers)<br/>
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
| [Tokens Module](/docs/Actions/my-tokens.md)       | Returns the HTML code that generates the PDF.                                                     |
| [Run SQL Query](/docs/Actions/run-sql.md)         | Execute a SQL query that returns one or more variables so that they can be used in the HTML code. |
| [Server Request](/docs/Actions/server-request.md) | Performe a HTTP request that returns one or more variables that can be used in the HTML code.     |


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

- `Pictures`
  
  Including a picture in the PDF can be made using the image absolute URL.

-  `CSS`

  CSS can be used using the default HTML syntax in the default 3 ways: 
    - Inline
    - Internal 
    - External

-  `JavaScript`
  
  s
​

## `Examples`

### `1. Read a JSON Array`

​
The action below reads a list of employees from an API via GET and saves it to a variable `[Employees]`. [Import it](/docs/Actions/Import-actions) into your application to see it in action.
​

```json
​
{
    "Title": "Server Request",
    "ActionType": "PostData",
    "Description": "Get Employees",
    "Parameters": {
        "URL": "http://dummy.restapiexample.com/api/v1/employees",
        "UseSSL": "",
        "Timeout": "",
        "HttpMethod": {
            "Expression": "",
            "Value": "GET",
            "IsExpression": false,
            "Parameters": {}
        },
        "Data": "",
        "DoNotEscapeTokens": "",
        "DisableReferer": "",
        "Headers": "",
        "UseDNNProxySettings": "",
        "AddCurrentCookies": "",
        "CookieContainerToken": "",
        "UrlTokenContext": {
            "Expression": "",
            "Value": "Url",
            "IsExpression": false,
            "Parameters": {}
        },
        "OutputTokenName": "Employees",
        "OutputHeaders": "",
        "IgnoreErrors": "",
        "OnError": []
    }
}
​
```
