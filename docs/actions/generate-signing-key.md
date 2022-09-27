---
id: generate-signing-key
title: Generate Signing Key
sidebar_label: Generate Signing Key
---


This will generate, and save to database, a new RSA Key of size 3072 that can be later used to sign the license payload.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Output Token Name | Required. The generated tokens are [&lt;OutputTokenName&gt;:Kid] and [&lt;OutputTokenName&gt;:PublicKey]. | No | None |
