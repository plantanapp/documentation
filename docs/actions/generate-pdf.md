---
id: generate-pdf
title: Generate PDF
sidebar_label: Generate PDF
---


Generates PDF on the fly from HTML template using wkhtmltopdf. Check documentation for wkhtmltopdf on http://wkhtmltopdf.org/.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Html Input Type | Rich text interferes with your html so if you just want to paste html and not edit it here you should pick Codemirror. | No | richtext |
| HTML Code | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| HTML Code | Can contain form tokens (for example [Email]) and My Tokens. | Yes | None |
| PDF Name | The name of the PDF file to generate. If left empty, a GUID will be generated for name. | No | None |
| Generated File Destination |  | No | None |
| Orientation Landscape | Set orientation to Landscape. Default, unchecked, is Portrait. | No | None |
| Paper Size |  Set paper size to: A4, Letter, etc. | No | A4 |
| Grayscale | PDF will be generated in grayscale. | No | None |
| Other Options | Other Options. Use with caution! Check documentation for wkhtmltopdf on http://wkhtmltopdf.org/. | No | None |
| Store DNN FileId | Optionally provide a token name where to Store the FileId from DNN. The token can be used in next actions down the stack. | No | None |
| Store Absolute URL | Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack. | No | None |
| Store Relative URL |  Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack. | No | None |
| Store Physical Path | Optionally provide a token name where to Store Physical Path. The token can be used in next actions down the stack. | No | None |
| Store LinkClick Url |  Optionally provide a token name where to Store the LinkClick Url. The token can be used in next actions down the stack. | No | None |
| Enable Force Download | Enables LinkClick URL force download feature. | No | None |
