---
id: post-hash-item-tierion-
title: Post Hash Item (Tierion)
sidebar_label: Post Hash Item (Tierion)
---


Create a Subscription Block using the Tierion Hash API. Various data is stored in the {objectQualifier}DnnSharp_BlockchainSecurity_Receipts database table. The statuses in the database are: INIT = 0, CREATED = 1, VERIFIED = 2, FAILED = 3.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials |  | No | None |
| Data | Your SHA-256 hash that will be stored in the Tierion Hash API. | No | None |
| Label | An optional label for this Block Subscription. | No | None |
| ReceiptId Token Name | Token name where to store the ReceiptId from the API. | No | None |
| Created On Token Name | Token name where to store the time when the receipt was made from the API. | No | None |
| On Subscription Block Created | Define a list of actions that will be executed on a successful callback. Besides the tokens in the context you will also have access to the following tokens: [Receipt:ReceiptId], [Receipt:CreatedOn], [Receipt:Label], [Receipt:MerkleRoot], [Receipt:Status], [Receipt:TransactionId], [Receipt:PortalId], [Receipt:UserId], [Receipt:ReceiptContent]. | No | None |
