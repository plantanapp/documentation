---
id: refund-a-transaction
title: Refund a Transaction
sidebar_label: Refund a Transaction
---


Bluefin returns the following tokens on success: [BluefinTransactionId], [BluefinOriginalTransactionId], [BluefinResponseCode], [BluefinResponseMessage], [BluefinAuthorizationCode]. When an error is received the ResponseCode and ResponseMessage will have the error details.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Bluefin Account Id | Required. Account Id and Api AccessKey. These keys will authenticate requests to the payment gateway. Can contain My Tokens. | Yes | None |
| Bluefin API AccessKey | Required. Account Id and Api AccessKey. These keys will authenticate requests to the payment gateway. Can contain My Tokens. | Yes | None |
| Go Live | Enable this option to switch to Live Mode. By default, unchecked, Test Mode, the transaction will be posted to the Bluefin's test server. | No | None |
| Token ID | Required. Transaction ID of the original settled transaction. Can contain My Tokens. | Yes | None |
| Refund Amount | Optional. This is the total amount and must include tax, shipping, and any other charges. Up to 15 digits with a decimal point (no dollar symbol). For example, 8.95. Can contain My Tokens. | Yes | None |
| On Success | Define a list of actions that should execute when a transaction is successfully refunded. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can use the [BluefinResponseCode] and [BluefinResponseMessage] tokens to show more info. | No | None |
