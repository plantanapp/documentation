---
id: refund-a-transaction
title: Refund a Transaction
sidebar_label: Refund a Transaction
---


> Audience: `Citizen Developer`
>
> Skill Prerequisites: `Tokens`

The **Refund a Transaction** action integrates with Authorize.Net to refund a previously settled payment transaction. Use this when a customer requests a refund for an order, or you need to reverse a charge after it has been finalized. You must provide the transaction details and API credentials.

## `Typical Use Cases`

* Refund a customer’s credit card or bank account payment via Authorize.Net.
* Automate refunds in response to form submissions or workflow triggers.
* Add refund capabilities to custom admin interfaces.

## `Related Actions`

| Action Name                       | Description                                                                                 |
| --------------------------------- | -------------------------------------------------------------------------------------------|
| Charge a Transaction              | Processes a payment transaction via Authorize.Net.                                          |
| Void a Transaction                | Voids a payment that has not yet been settled.                                              |
| Display Message                   | Shows a message based on the result of the Authorize.Net transaction.                       |
| Send Email                        | Notifies users when a refund is processed.                                                  |

## `Input Parameter Reference`

| Parameter              | Description                                                                                                  | Supports Tokens | Default         | Required |
|------------------------|--------------------------------------------------------------------------------------------------------------|-----------------|-----------------|----------|
| API Login ID           | Your Authorize.Net API Login ID. This authenticates requests.                                                | Yes             | `empty string`  | Yes      |
| Transaction Key        | Authorize.Net Transaction Key. This authenticates requests.                                                  | Yes             | `empty string`  | Yes      |
| Transaction Amount     | The amount to refund. Must be the total, including all charges (no $ symbol, e.g., `8.95`).                  | Yes             | `empty string`  | Yes      |
| Transaction ID         | The ID of the original, settled transaction to refund.                                                       | Yes             | `empty string`  | Yes      |
| Go Live                | If checked, uses Authorize.Net live mode. By default, false (sends requests to the sandbox/test server).      | No              | `false`         | No       |
| On Success             | Action list to execute if the refund is successful. Useful for workflows, notifications, logging, etc.        | —               | —               | No       |
| On Error               | Action list to execute if the refund fails. You can access `[AuthorizeErrorMessage]` and `[AuthorizeErrorCode]`. | —               | —               | No       |

### Example Input Parameter JSON

```json
{
    "Title": "Refund a Transaction",
    "ActionType": "RefundTransaction",
    "Parameters": {
        "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetLoginId]",
        "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetTransactionKey]",
        "AuthorizeNetTransactionAmount": "50.00",
        "AuthorizeNetTransactionId": "[Order:TransactionId]",
        "AuthorizeNetLiveMode": false
    }
}
```

## `Output Parameters Reference`

| Parameter                | Description                                                        |
|--------------------------|--------------------------------------------------------------------|
| AuthorizeTransactionId   | The Authorize.Net transaction ID created for the refund.           |
| AuthorizeResponseCode    | Authorize.Net gateway response code.                               |
| AuthorizeResponseMessage | Message returned by Authorize.Net regarding the refund outcome.    |
| AuthorizeAuthCode        | Authorization code for the refund transaction.                     |
| AuthorizeErrorMessage    | Error message, if any. Only available if the refund fails.         |
| AuthorizeErrorCode       | Error code, if any. Only available if the refund fails.            |

## `Security`

> **Important:**  
> Protect your API Login ID and Transaction Key—do *not* share these with untrusted users.  
> Limit user input for the `Transaction Amount` and `Transaction ID` fields to trusted values to avoid fraudulent refund attempts.

## `Examples`

### `1. Basic Refund with Error Handling`

Refund a transaction and send an email on success or error.

```json
{
    "Title": "Refund a Transaction",
    "ActionType": "RefundTransaction",
    "Parameters": {
        "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetLoginId]",
        "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetTransactionKey]",
        "AuthorizeNetTransactionAmount": "[Form:RefundAmount]",
        "AuthorizeNetTransactionId": "[Form:OriginalTransactionId]",
        "AuthorizeNetLiveMode": true,
        "OnSuccess": [
            {
                "Title": "Send Email",
                "ActionType": "SendEmail",
                "Parameters": {
                    "To": "[User:Email]",
                    "Subject": "Refund issued",
                    "Body": "Your refund of $[Form:RefundAmount] has been processed. Refund ID: [AuthorizeTransactionId]"
                }
            }
        ],
        "OnError": [
            {
                "Title": "Display Message",
                "ActionType": "DisplayMessage",
                "Parameters": {
                    "Message": "Refund failed with error: [AuthorizeErrorMessage] ([AuthorizeErrorCode])"
                }
            }
        ]
    }
}
```

### `2. Test Mode Refund`

Process a refund in the Authorize.Net sandbox for testing purposes.

```json
{
    "Title": "Refund a Transaction (Test Mode)",
    "ActionType": "RefundTransaction",
    "Parameters": {
        "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetSandboxLoginId]",
        "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetSandboxKey]",
        "AuthorizeNetTransactionAmount": "100.00",
        "AuthorizeNetTransactionId": "[Form:TransactionId]",
        "AuthorizeNetLiveMode": false
    }
}
```

## `Troubleshooting and Notes`

* **Ensure the Transaction ID is from a *settled* transaction. Pending or voided payments cannot be refunded.**
* Confirm that the refund amount does not exceed the original transaction amount.
* For testing, use sandbox credentials and set `Go Live` to `false`.
* Tokens in parameter fields are supported, so you may use dynamic values.

## `See Also`

* Charge a Transaction
* Void a Transaction
* Send Email
* Display Message
