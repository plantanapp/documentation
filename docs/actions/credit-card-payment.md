---
id: credit-card-payment
title: Credit Card Payment
sidebar_label: Credit Card Payment
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Is Test |  | No | None |
| Credential Name | Credentials for Plati Online are stored in web.config, in the platiOnline/credentials section. Please provide the name of the credential to use here. Supports tokens. | No | None |
| Website | Required. Supports tokens. | No | None |
| Language | Supports tokens (value must be the language code: RO, EN, HU, IT, FR, DE, ES). | No | None |
| Order Number | Required. Supports tokens. | No | None |
| Order Description | Supports tokens. | No | None |
| Currency | Supports tokens (value must be the currency code: RON, EUR, USD). | No | None |
| Amount | Required. Amount in USD cents. Supports tokens. | No | None |
| Email | Supports tokens. | No | None |
| Phone | Supports tokens. | No | None |
| First Name | Supports tokens. | No | None |
| Last Name | Supports tokens. | No | None |
| Company | Supports tokens. | No | None |
| ZIP | Supports tokens. | No | None |
| Country | Supports tokens. | No | None |
| State | Supports tokens. | No | None |
| City | Supports tokens. | No | None |
| Address | Supports tokens. | No | None |
| Tax Number | Supports tokens. | No | None |
| Item name | Supports tokens. | No | None |
| Item description | Supports tokens. | No | None |
| Quantity | Supports tokens. | No | None |
| Item Price | Per item price in USD cents. Supports tokens. | No | None |
| Vat Amount | Vat amount in USD cents. Supports tokens. | No | None |
| Output TransactionId TokenName |  | No | None |
| On Authorized | List of actions to execute when the transaction is successful. TransactionId can be found in Output TransactionId TokenName. | No | None |
| On Hold | List of actions to execute when the transaction is on hold. TransactionId can be found in Output TransactionId TokenName. | No | None |
| On Declined | List of actions to execute when the transaction is declined. TransactionId can be found in Output TransactionId TokenName. | No | None |
| On Error | List of actions to execute when there is an error. If the communication with the server to retrieve the transaction status fails, the Output TransactionId TokenName value will be 'Fatal'. | No | None |
