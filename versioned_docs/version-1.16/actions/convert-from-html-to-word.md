---
id: convert-from-html-to-word
title: Convert from HTML to Word
sidebar_label: Convert from HTML to Word
---


This action converts HTML data into a Word Document. It support sections orientation changes with the help of the section-orientation tag which can be attributed to a p or div tag. The position of the orientation change which be attributed to the value current or after. And the new orientation portrait or landscape.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| HTML | Provide the HTML content that will be converted to a Word document. Supports My Tokens | Yes | None |
| Template File Identifier | Provide a file identifier for the template document. If this is parameter is provided, instead of creating a new Word document from scratch, a template will be used in the generation of the final Word. This can be a file id or portal relative path. If the path to the file is Portals/0/SomeFolder/SomeDoc.docx, the parameter must receive SomeFolder/SomeDoc.docx. Supports My Tokens | Yes | None |
| Folder | Where to save the document generated from the HTML. When providing the folder path through an expression, any path you supply will be starting in the current portal. If you supply a path like Images/ExampleFolder and the action runs on the portal 0, the file will be located in Portals/0/Images/ExampleFolder. Leaving this blank will cause the action to save to the Temp folder. Supports My Tokens | Yes | None |
| Pattern | Optionally provide a pattern to use for filenames on the server. For example &quot;generated-document-[User:Username]&quot;. Leave blank to use a GUID. Supports My Tokens | Yes | None |
| Handle Duplicates | How to handle the case in which a file already exists with the same name. Default behavior is to rename the newly generated file. | No | None |
| Output Token Name | Provide a token name in which the newly word file id will be stored. | No | None |
