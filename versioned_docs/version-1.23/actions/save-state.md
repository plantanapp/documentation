---
id: save-state
title: Save State
sidebar_label: Save State
---


This action saves all the submitted data in the server session so it can be loaded back into this or another form.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Key | Select a key to save under. Note that the scope is global, data can be shared between any two Action Forms. Supports My Tokens | No | None |
| Save Location | Select where to store the saved data. Session data is lost after a period of inactivity, usually around 20 minutes. Browser cookies usually last longer. | No | None |
