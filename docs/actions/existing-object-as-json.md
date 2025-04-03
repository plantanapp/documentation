---
id: existing-object-as-json
title: Existing Object as JSON
sidebar_label: Existing Object as JSON
---

Available in: APIs.


Outputs the first entry from the context list that matches specified criteria.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| List Name | Name of the list to serialize. Can contain context tokens, for example [FieldId], and Tokens. | No | None |
| Http code | The http code that will be returned. Can contain context tokens, for example [FieldId], and Tokens. | No | None |
| Criteria | Provide criteria to determine which entries are removed.  | No | None |
| HTTP Headers | Can contain context tokens, for example [FieldId], and Tokens. | No | None |
| Allow JSONP | Instead of outputing { json here }, we output myfunction({ jsonhere }), where myfunction is the value of the 'callback' query string variable. | No | None |
