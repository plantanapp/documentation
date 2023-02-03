---
id: generate-rsa-keys
title: Generate RSA Keys
sidebar_label: Generate RSA Keys
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Key Length | The length of the generated key. The value must be a power of 2. (default: 1024) | No | 1024 |
| Output Token | The prefix used to generate the tokens that will store the keys. Following tokens are generated: [&lt;OutputToken&gt;:PrivateKey], [&lt;OutputToken&gt;:PrivateKeyPem], [&lt;OutputToken&gt;:PublicKey], [&lt;OutputToken&gt;:PublicKeyPem] | No | None |
