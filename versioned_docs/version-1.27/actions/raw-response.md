---
id: raw-response
title: Raw Response
sidebar_label: Raw Response
---


This action lets you output raw content, for example text, HTML or JSON. Make sure to set the ContentType header, otherwise it defaults to text/html..

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Content | Content to output to browser.Supports context tokens (such as [InputField]) and Tokens | No | None |
| Http code | The http code that will be returned. Can contain context tokens, for example [FieldId], and Tokens. | No | None |
| HTTP Headers | Can contain context tokens, for example [FieldId], and Tokens. | No | None |
