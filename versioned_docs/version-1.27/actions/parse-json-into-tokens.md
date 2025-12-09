---
id: parse-json-into-tokens
title: Parse JSON Into Tokens
sidebar_label: Parse JSON Into Tokens
---


Creates tokens that follow this pattern [&lt;BaseTokenName&gt;:PropertyName]. BaseTokenName is a parameter of this action that is specified below. Note that if the the object is complex, child nodes can be accessed with dot notation like this [&lt;BaseTokenName&gt;:Property.SubProperty.AndSoOn]. In case of an array, for performance reasons and to prevent context flooding with tokens, they are not expanded. You will need to re-apply the Parse JSON Into Tokens action on the array token (e.g. [:ArrayProperty]) to generate tokens for it. The tokens resulting from an array parse will look like this: [:0.Property], [:1.Property].

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| JSON String | Can contain contextual tokens (for example [Email]) and Tokens. | No | None |
| Base Token Name | This is a prefix for all tokens that are created from the JSON string. See action help text above for details. | No | None |
