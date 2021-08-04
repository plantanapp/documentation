---
id: publish-signing-key
title: Publish Signing Key
sidebar_label: Publish Signing Key
---


This will mark the key specified by the Kid as published. The publish date of the key will be set to DateTime.UtcNow. If the key is already published, an error will be thrown.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Kid | The GUID Kid of the key to publish. | No | None |
