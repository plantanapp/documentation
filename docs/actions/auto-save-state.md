---
id: auto-save-state
title: Auto Save State
sidebar_label: Auto Save State
---


Add this action to Init event to auto save form state in browser cookies. Load it back later by using LoadState action (make sure Storage Location is set to Browser Cookies), normally also placed in the initialization event.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Key | Select a key to save under. Note that the scope is global, data can be shared between any two Action Forms. Important! This is saved in cookies. So, when using LoadState action, make sure to load from cookies. Supports Tokens | No | None |
