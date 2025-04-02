---
id: parse-xml-into-json-tokens
title: Parse XML Into JSON Tokens
sidebar_label: Parse XML Into JSON Tokens
---


This action transforms XML into JSON and then applies the same logic as Parse JSON into tokens. This means you can use the same suite of actions that you would normaly use for JSON manipulation after parsing it into tokens. Creates tokens that follow this pattern [&lt;BaseTokenName&gt;:PropertyName]. BaseTokenName is a parameter of this action that is specified below. Note that if the the object is complex, child nodes can be accessed with dot notation like this [&lt;BaseTokenName&gt;:Property.SubProperty.AndSoOn]. XML Attributes of a node can be accessed with [&lt;BaseTokenName&gt;:@AttributeName] syntax. The tokens resulting from an array parse will look like this: [:0.Property], [:1.Property].

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| XML String | Can contain contextual tokens (for example [Email]) and My Tokens. | Yes | None |
| Base Token Name | This is a prefix for all tokens that are created from the XML string. See action help text above for details. | No | None |
