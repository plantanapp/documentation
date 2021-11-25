---
id: replace-tokens-in-word-document
title: Replace Tokens in Word Document
sidebar_label: Replace Tokens in Word Document
---


Tokenize a template DOCX document and create a new document with the result in the specified folder. Please read the documentation on this action before using it.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| File Identifier | Provide a file identifier for the template document. This can be a file id or portal relative path. If the path to the file is Portals/0/SomeFolder/SomeDoc.docx, the parameter must receive SomeFolder/SomeDoc.docx. Supports My Tokens | Yes | None |
| Folder | Where to save the document generated from the template. Leaving this blank will cause the action to save to the Temp folder. Supports My Tokens | Yes | None |
| Pattern | Optionally provide a pattern to use for filenames on the server. For example &quot;generated-document-[User:Username]&quot;. Leave blank to use a GUID. Supports My Tokens | Yes | None |
| Handle Duplicates | How to handle the case in which a file already exists with the same name. Default behavior is to rename the newly generated file. | No | None |
| Output Token Name | Provide a token name in which the newly generated file id will be stored. | No | None |
