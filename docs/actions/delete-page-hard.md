---
id: delete-page-hard
title: Delete Page (Hard)
sidebar_label: Delete Page (Hard)
---


This action will deletes DNN page, including from the database.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page Identifier | Leave empty to delete current page. Possible values are a Tab Id, a Tab Path (a valid path is //RootPage/SubPage/AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and My Tokens. | Yes | None |
