---
id: recheck-receipt-tierion-
title: Recheck Receipt (Tierion)
sidebar_label: Recheck Receipt (Tierion)
---


Verify the integrity of your receipt by checking the hash from Tierion API. The statuses in the database are: INIT = 0, CREATED = 1, VERIFIED = 2, FAILED = 3.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials |  | No | None |
| ReceiptId | The Id of the receipt for the HashApi. Can be found in the {objectQualifier}DnnSharp_BlockchainSecurity_Receipts database table. | No | None |
| Hash To Check | The hash to be compared with the the one stored online. | No | None |
| Result Token Name | The token name where the result of the hash check will be stored. (returns true/false) | No | None |
