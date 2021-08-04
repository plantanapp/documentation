---
id: json-entity-list
title: JSON Entity List
sidebar_label: JSON Entity List
---

Available in: APIs.


Outputs all entities from the context that matches specified criteria.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Entity Name | Name of entity to serialize. Can contain context tokens, for example [FieldId], and My Tokens. | Yes | None |
| Http code | The http code that will be returned. Can contain context tokens, for example [FieldId], and My Tokens. | Yes | None |
| Criteria | Provide criteria to determine which entries are removed.  | No | None |
| HTTP Headers | Can contain context tokens, for example [FieldId], and My Tokens. | Yes | None |
| Allow JSONP | Instead of outputing { json here }, we output myfunction({ jsonhere }), where myfunction is the value of the 'callback' query string variable. | No | None |
