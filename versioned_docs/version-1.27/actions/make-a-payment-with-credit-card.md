---
id: make-a-payment-with-credit-card
title: Make a payment with Credit Card
sidebar_label: Make a payment with Credit Card
---


> Audience: `Citizen Developer`
>
> Skill Prerequisites: `API Key Management`, `Tokens`, `Payment Gateway Basics`

The **Make a payment with Credit Card** action integrates with Authorize.Net to process payments directly from your workflows. It supports both authorization and capture transactions, allowing you to collect payments securely using the customer’s credit card information.

## `Typical Use Cases`

* Charge a customer for an online purchase immediately after form submission.
* Integrate payment collection into a registration or order process.
* Programmatically handle on-approval, on-decline, on-error, or held-for-review outcomes in your workflow.

## `Related Actions`

| Action Name                | Description                                                                      |
|----------------------------|----------------------------------------------------------------------------------|
| Make a payment with Electronic Check | Process payments using eChecks instead of credit cards.               |
| Add a Simple Checkout to a button    | Generates a checkout button for single-click payments.                |

## `Input Parameter Reference`

| Parameter                                    | Description                                                                                   | Supports Tokens | Default      | Required |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------|-----------------|--------------|----------|
| API Login ID                                 | API Login ID and Transaction Key combo to authenticate with Authorize.Net                     | Yes             | *empty*      | Yes      |
| Transaction Key                              | The Authorize.Net transaction key                                                             | Yes             | *empty*      | Yes      |
| Go Live                                      | Enable to send actual transaction to the live gateway (otherwise goes to sandbox)             | Yes             | `false`      | No       |
| Payment description                          | A short description for the payment (can appear in receipts)                                 | Yes             | *empty*      | No       |
| Transaction's currency                       | Three-letter currency code (e.g. USD, EUR)                                                   | Yes             | *empty*      | Yes      |
| Amount - total to pay                        | Total charge amount                                                                          | Yes             | *empty*      | Yes      |
| Credit Card Transaction Type                 | Type of transaction: AUTH_CAPTURE, AUTH_ONLY, etc.                                            | Yes             | AUTH_CAPTURE | No       |
| Credit Card Number                           | Customer’s credit card number (formatted as digits only)                                     | Yes             | *empty*      | Yes      |
| Credit Card CCV                              | 3- or 4-digit card security code                                                             | Yes             | *empty*      | Yes      |
| Expiration Month                             | Two-digit expiration month                                                                   | Yes             | *empty*      | Yes      |
| Expiration Year                              | Two-digit expiration year                                                                    | Yes             | *empty*      | Yes      |
| First Name                                   | Cardholder’s first name                                                                     | Yes             | *empty*      | Yes      |
| Last Name                                    | Cardholder’s last name                                                                      | Yes             | *empty*      | Yes      |
| Address                                      | Cardholder’s billing address                                                                | Yes             | *empty*      | Yes      |
| City                                         | Billing city                                                                                | Yes             | *empty*      | Yes      |
| State                                        | Billing state or province                                                                   | Yes             | *empty*      | Yes      |
| Country                                      | Billing country                                                                             | Yes             | *empty*      | Yes      |
| Postal Code                                  | Billing postal/ZIP code                                                                     | Yes             | *empty*      | Yes      |
| Fields                                       | Additional name-value pairs to pass to Authorize.Net as extended data                       | Yes             | none         | No       |
| Output Authorize.Net Response Code Token Name | Where to store the Authorize.Net response code                                              | Yes             | *empty*      | No       |
| Output Authorize.Net Response Reason Code Token Name | Where to store the Authorize.Net response reason code                                 | Yes             | *empty*      | No       |
| Output Authorize.Net Response Reason Text Token Name | Where to store the Authorize.Net response reason text                                 | Yes             | *empty*      | No       |
| Output Authorize.Net Response Authorization Code Token Name | Where to store the Authorization code result                                  | Yes             | *empty*      | No       |
| Output Authorize.Net Response Transaction ID Token Name | Where to store the transaction ID                                                  | Yes             | *empty*      | No       |
| On Approved                                  | Actions to execute when the payment is approved                                             | Action List     | none         | No       |
| On Declined                                  | Actions to execute when the payment is declined                                             | Action List     | none         | No       |
| On Error                                     | Actions to execute when an error occurs                                                     | Action List     | none         | No       |
| On Held For Review                           | Actions to execute if payment is held for manual review                                     | Action List     | none         | No       |

## `Output Parameters Reference`

| Parameter                                                      | Description                                      |
|----------------------------------------------------------------|--------------------------------------------------|
| Output Authorize.Net Response Code Token Name                  | Stores the primary response code from Authorize.Net|
| Output Authorize.Net Response Reason Code Token Name           | Stores the reason code for the transaction result |
| Output Authorize.Net Response Reason Text Token Name           | Stores the human-readable description of the result|
| Output Authorize.Net Response Authorization Code Token Name    | Stores the approval code if transaction succeeded |
| Output Authorize.Net Response Transaction ID Token Name        | Stores the unique transaction ID from Authorize.Net|

## `Security`

**Warning:**
- Always ensure sensitive fields such as card numbers and transaction keys are stored and handled securely. Do not expose these to untrusted user inputs.
- Use secure HTTPS endpoints and comply with PCI DSS standards for storing, processing, or transmitting credit card data.

## `Events`

- **On Approved**: Run a set of actions only when payment is successful.
- **On Declined**: Handle scenarios such as displaying an error message or logging for failed payments.
- **On Error**: Catch gateway or communication errors.
- **On Held For Review**: Implement manual review or notification flows if payment is flagged by Authorize.Net.

## `Examples`

### `1. Minimal Payment (Test Mode)`

Process a $20 test payment using tokens filled from a form.

```json
{
  "Title": "Make a payment with Credit Card",
  "ActionType": "Pay with Credit Card",
  "Parameters": {
    "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetAPILoginID]",
    "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetTransactionKey]",
    "AuthorizeNetLiveMode": false,
    "AuthorizeNetTitle": "Online Purchase",
    "AuthorizeNetCurrency": "USD",
    "AuthorizeNetAmount": "20.00",
    "AuthorizeNetTransactionType": "AUTH_CAPTURE",
    "AuthorizeNetCardNumber": "[Form:CardNumber]",
    "AuthorizeNetCCV": "[Form:CardCCV]",
    "AuthorizeNetExpirationMonth": "[Form:CardExpMonth]",
    "AuthorizeNetExpirationYear": "[Form:CardExpYear]",
    "AuthorizeNetFirstName": "[Form:FirstName]",
    "AuthorizeNetLastName": "[Form:LastName]",
    "AuthorizeNetAddress": "[Form:Address]",
    "AuthorizeNetCity": "[Form:City]",
    "AuthorizeNetState": "[Form:State]",
    "AuthorizeNetCountry": "[Form:Country]",
    "AuthorizeNetPostalCode": "[Form:PostalCode]"
  }
}
```

### `2. Capture Response in Tokens & Custom Workflow on Approval`

Store key Authorize.Net output fields in tokens and run other actions if payment is approved.

```json
{
  "Title": "Make a payment with Credit Card",
  "ActionType": "Pay with Credit Card",
  "Parameters": {
    "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetAPILoginID]",
    "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetTransactionKey]",
    "AuthorizeNetLiveMode": true,
    "AuthorizeNetTitle": "Conference Ticket",
    "AuthorizeNetCurrency": "USD",
    "AuthorizeNetAmount": "[Form:TotalPrice]",
    "AuthorizeNetTransactionType": "AUTH_CAPTURE",
    "AuthorizeNetCardNumber": "[Form:CardNumber]",
    "AuthorizeNetCCV": "[Form:CardCCV]",
    "AuthorizeNetExpirationMonth": "[Form:ExpMonth]",
    "AuthorizeNetExpirationYear": "[Form:ExpYear]",
    "AuthorizeNetFirstName": "[Form:FirstName]",
    "AuthorizeNetLastName": "[Form:LastName]",
    "AuthorizeNetAddress": "[Form:Address]",
    "AuthorizeNetCity": "[Form:City]",
    "AuthorizeNetState": "[Form:State]",
    "AuthorizeNetCountry": "[Form:Country]",
    "AuthorizeNetPostalCode": "[Form:PostalCode]",
    "AuthorizeNetResponseCodeTokenName": "ANet_ResponseCode",
    "AuthorizeNetResponseReasonCodeTokenName": "ANet_ReasonCode",
    "AuthorizeNetResponseReasonTextTokenName": "ANet_ReasonText",
    "AuthorizeNetResponseAuthorizationCodeTokenName": "ANet_AuthCode",
    "AuthorizeNetResponseTransactionIDTokenName": "ANet_TransactionID",
    "OnApproved": [
      {
        "Title": "Display Success Message",
        "ActionType": "DisplayMessage",
        "Parameters": {
          "Message": "Payment successful! Transaction ID: [ANet_TransactionID]"
        }
      }
    ],
    "OnDeclined": [
      {
        "Title": "Display Declined",
        "ActionType": "DisplayMessage",
        "Parameters": {
          "Message": "Payment declined: [ANet_ReasonText]"
        }
      }
    ],
    "OnError": [
      {
        "Title": "Display Error",
       