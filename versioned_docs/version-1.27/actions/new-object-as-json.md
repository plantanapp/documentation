---
id: new-object-as-json
title: New Object as JSON
sidebar_label: New Object as JSON
---


This action outputs a JSON object. Content Type will be set to application/json unless overriden from headers.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Http code | The http code that will be returned. Can contain context tokens, for example [FieldId], and Tokens. | No | None |
| Properties | The fields of the JSON object. | No | None |
| HTTP Headers | Can contain context tokens, for example [FieldId], and Tokens. | No | None |
| Allow JSONP | Instead of outputing { json here }, we output myfunction({ jsonhere }), where myfunction is the value of the 'callback' query string variable. | No | None |
