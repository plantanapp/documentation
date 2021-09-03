---
id: read-multiple-entities
title: Read Multiple Entities
sidebar_label: Read Multiple Entities
---


Retireves multiple entries from the Dynamics CRM server based on conditions with ability to order the results. The resulting Dynamics CRM entities are mapped into a DnnSharp Entity List. This Entity List can be use in further "Execute Actions on Entity List" actions that will iterate throught the list and execute the Action List provided on each entity.For entity attributes of type EntityReference (e.g. Customer, Lookup, Owner) additional tokens will be created to expose the name and logical name of the reference. Tokens are: [&lt;EntityPropertyName&gt;:Id], [&lt;EntityPropertyName&gt;:Name] and [&lt;EntityPropertyName&gt;:LogicalName]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials |  | No | None |
| Context Entity Name | The name of the DnnSharp entity that will store the resulting list of Dynamics CRM entities. The values can then be accessed using some of the actions in the 'Entities' and 'Serialization' action groups. | No | None |
| Logical Name |  | No | None |
| Id Mapping | This specifies the name of the context token where the Id of the CRM entity will be stored. If empty, the Id will not be exposed as token. | No | None |
| Attribute Mapping |  | No | None |
| Conditions |  | No | None |
| Order By |  | No | None |
| Result Count |  | No | None |
| Page Number |  | No | None |
| Paging Cookie | Optional. You can pass the Paging Cookie from a previous Read Multiple action to continue the reading. | No | None |
| Output Paging Cookie | Optional. It can be used in a future Read Multiple Entities action to retrieve paged results, when the query returns many results. | No | None |
