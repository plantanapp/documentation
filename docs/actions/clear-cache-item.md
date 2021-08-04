---
id: clear-cache-item
title: Clear Cache Item
sidebar_label: Clear Cache Item
---


Clears a cache item by specifying its cache key or a prefix key and/or select a type of cache to clear. To see a list of everything that's in cache, check the documentation.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Clear All Cache | Clears all the DNN cache. This is equal to manually clearing the cache in DNN Admin Panel/PersonaBar. | No | None |
| Clear Tabs Cache | Clears all the tabs cache on the current portal or on the specified portals. | No | None |
| Clears Portal Cache | Clears the portal cache on current portal or on the specified portals. | No | None |
| Portal IDs | Specify one or more portal ids, separated by comma. These ids are used only for Clear Tabs Cache and Clear Portal Cache Eg. 0,1,2 | No | None |
| Cache Key | The key used to create the cache or a partial key. Can contain My Tokens. Eg. Tab_Tabs will clear the tabs cache on ALL portals. | Yes | None |
