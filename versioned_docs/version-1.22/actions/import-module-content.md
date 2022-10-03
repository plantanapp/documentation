---
id: import-module-content
title: Import Module Content
sidebar_label: Import Module Content
---


This action will import module content into an already existing module.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Module ID | Specify the ID of the module in which the content will be imported. Can contain context tokens (for example [SomeModuleId]) and My Tokens. WARNING: The module number you specify WILL BE OVERWRITTEN with the "Imported Module Content". The original module content will be lost and is not recoverable. If the module and the "Imported Module Content" are of different module types, the module's type will be changed (i.e., if "Module ID" is an HTML module and "Imported Module Content" is an Action Form definition, "Module ID" will become an Action Form). | Yes | None |
| Imported Module Content | Pass the module content that will be imported. | No | None |
