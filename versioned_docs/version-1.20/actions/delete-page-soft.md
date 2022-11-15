---
id: delete-page-soft
title: Delete Page (Soft)
sidebar_label: Delete Page (Soft)
---


This action will delete a DNN page, but it's not removed from database. It can be later restored from Admin > Recycle bin.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Page Identifier | Leave empty to delete current page. Possible values are a Tab Id, a Tab Path (a valid path is //RootPage/SubPage/AndSoOn) or a Tab Name (the first one is matched, so use this carefully). Can contain context tokens (for example [SomeTabId]) and My Tokens. | Yes | None |
