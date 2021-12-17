---
id: apply-tokens
title: Apply Tokens
sidebar_label: Apply Tokens
---


Applies tokens on an expression and stores it in another (or the same) token.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Tokens | Expressions to tokenize. Supports My Tokens. | Yes | None |
| Number of Recursions | Specify how many times to apply tokenization. This is useful when tokens contain other tokens that also need to be replaced. Note that this presents a security risk when the expression has content from untrusted users. Supports My Tokens. | Yes | 1 |
