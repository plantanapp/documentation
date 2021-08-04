---
id: read-entity
title: Read Entity
sidebar_label: Read Entity
---


Retrieves one entity by its unique identifier (GUID).For attributes of type EntityReference (e.g. Customer, Lookup, Owner) additional tokens will be created to expose the name and logical name of the reference. Tokens are: [&lt;OutputTokenName&gt;:Name] and [&lt;OutputTokenName&gt;:LogicalName]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials |  | No | None |
| Logical Name |  | No | None |
| Entity Guid |  | No | None |
| Attribute Mapping |  | No | None |
