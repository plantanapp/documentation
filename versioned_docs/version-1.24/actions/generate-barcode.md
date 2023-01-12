---
id: generate-barcode
title: Generate Barcode
sidebar_label: Generate Barcode
---


This action will generate a barcode file.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Barcode | This is the input for the Barcode to be generated. | No | None |
| Barcode Encoding | Required. Please research the different symbologies before choosing one. If you don't provide type the barcode will not be generated. | No | code128b |
| Barcode image width | Required. Width in pixels of the image of the barcode that will be generated. | No | None |
| Barcode image height | Required. Height in pixels of the image of the barcode that will be generated. | No | None |
| Show text | If text of the barcode should be included in the image. | No | None |
| Upload to Folder | Location on disk where the image should be. | No | / |
| SignatureName | The name of the barcode image to generate. If left empty, a GUID will be generated for name. | No | None |
| FileName Token Name | Optionally provide a token name where to Store file name. The token can be used in next actions down the stack. | No | None |
| Absolute Url Token Name | Optionally provide a token name where to Store abolute url. The token can be used in next actions down the stack. | No | None |
| Relative Url Token Name | Optionally provide a token name where to Store relative url. The token can be used in next actions down the stack. | No | None |
| Portal Path Token Name | Optionally provide a token name where to Store portal path. The token can be used in next actions down the stack. | No | None |
| File Path Token Name | Optionally provide a token name where to Store file path. The token can be used in next actions down the stack. | No | None |
| Base64 Token Name | Optionally provide a token name where to Store image in base64. The token can be used in next actions down the stack. | No | None |
