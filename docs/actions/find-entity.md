---
id: find-entity
title: Find Entity
sidebar_label: Find Entity
---


Retrieves the first item that matches the conditions.For attributes of type EntityReference (e.g. Customer, Lookup, Owner) additional tokens will be created to expose the name and logical name of the reference. Tokens are: [&lt;OutputTokenName&gt;:Name] and [&lt;OutputTokenName&gt;:LogicalName]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials |  | No | None |
| Logical Name |  | No | None |
| Id Mapping | This specifies the name of the context token where the Id of the CRM entity will be stored. If empty, the Id will not be exposed as token. | No | None |
| Attribute Mapping |  | No | None |
| Conditions |  | No | None |
| Order By |  | No | None |
