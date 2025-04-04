---
id: refund-a-transaction
title: Refund a Transaction
sidebar_label: Refund a Transaction
---


Authorize.Net returns the following tokens on success: [AuthorizeTransactionId], [AuthorizeResponseCode], [AuthorizeResponseMessage], [AuthorizeAuthCode]. Tokens created when an error occures are [AuthorizeErrorMessage] and [AuthorizeErrorCode]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Login ID | Required. API Login ID and Transaction Key. These keys will authenticate requests to the payment gateway. Can contain Tokens. | No | None |
| Transaction Key | Required. API Login ID and Transaction Key. These keys will authenticate requests to the payment gateway. Can contain Tokens. | No | None |
| Transaction Amount | Required. Amount of the transaction. This is the total amount and must include tax, shipping, and any other charges. Up to 15 digits with a decimal point (no dollar symbol. For example, 8.95. Can contain Tokens. | No | None |
| Transaction ID | Required. Transaction ID of the original settled transaction. Can contain Tokens. | No | None |
| Go Live | Enable this option to switch to Live Mode. By default, unchecked, Test Mode, the transaction will be posted to the Authorize.Net's test server. | No | None |
| On Success | Define a list of actions that should execute when a transaction is successfully refunded. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can use the [AuthorizeErrorMessage] and [AuthorizeErrorCode] tokens to show more info. | No | None |
