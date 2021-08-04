---
id: sanitize-html
title: Sanitize Html
sidebar_label: Sanitize Html
---


This action removes html tags which are not listed in the allowed tags list. It also deletes the content of those listed as Removable Tags.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Html Content | Can contain My Tokens and context tokens. | Yes | None |
| Convert links to nofollow | Ensures all anchor tags have the "rel" attribute value set to "nofollow". | No | None |
| Removable attributes | The attributes specified here will be stripped off the HTML tags that were allowed in the HTML content. | No | None |
| Disable scripts | Removes all script tags and their content from the provided HTML content. | No | None |
| Toggle between Exclude/Allow HTML tag lists | When this option is checked Allow Mode is in effect.By default (in Exclude Mode) only the tags specified in the "Excluded Tags" list will be stripped. In Allow Mode it will strip all HTML tags except those specified in the "Allowed Tags" list. | No | None |
| Allowed Tags | Only HTML tags specified here will be preserved. All other tags will be deleted and their content processed recursively. | No | None |
| Excluded Tags | HTML tags specified here will be removed from the provided content. All other tags will remain in place. | No | None |
| Removable Tags | Removes specified tags and their content. | No | None |
| Output Token Name |  | No | None |
