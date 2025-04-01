---
id: get-transaction-details
title: Get Transaction Details
sidebar_label: Get Transaction Details
---


Gets the Details of a PayPal Transaction and returns the data as a JSON in a token.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Username | Required. API Username and Transaction Key. These keys will authenticate requests to the payment gateway. | No | None |
| API Password | Required. API Username and Password. These keys will authenticate requests to the payment gateway. | No | None |
| API Signature | Required. Signature is required for transaction. | No | None |
| Go Live | Enable this option to switch to Live Mode. By default, unchecked, Test Mode, the transaction will be posted to the PayPal's test server for developer accounts: https://test.PayPal/gateway/transact.dll. | No | None |
| Transaction Id | The Id of the transaction you want to get the details of. | No | None |
| JSON Token | Provide a token name to store the JSON in. | No | None |
