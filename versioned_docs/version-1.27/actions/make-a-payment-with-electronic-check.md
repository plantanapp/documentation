---
id: make-a-payment-with-electronic-check
title: Make a payment with Electronic Check
sidebar_label: Make a payment with Electronic Check
---


> Audience: `Citizen Developer`
>
> Skill Prerequisites: `Tokens`, `Payment Integration`

The **Pay with Electronic Check** action allows your application to initiate and process payments through an electronic check (eCheck) using Authorize.Net. This action supports both _Authorization and Capture_ transaction types and can be utilized for dynamic payment scenarios where traditional credit card processing is not preferred.

## `Typical Use Cases`

* Accepting payments from users using bank accounts (ACH/eCheck) instead of credit/debit cards
* Automating regular bill payments or large transactions easily and securely
* Reducing processing fees compared to credit card transactions

## `Related Actions`

| Action Name      | Description                                                                      |
|------------------|----------------------------------------------------------------------------------|
| Pay with Credit Card | Process a payment using a credit card with Authorize.Net.                        |
| Simple Checkout      | Redirect users to a hosted payment page using Authorize.Net Simple Checkout.     |

## `Input Parameter Reference`

| Parameter                                  | Description                                                                                                      | Supports Tokens | Default      | Required |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------------|-----------------|--------------|----------|
| API Login ID                               | Required. API Login ID and Transaction Key. Authenticates requests to the gateway.                               | Yes             | _empty_      | Yes      |
| Transaction Key                            | Required. API Login ID and Transaction Key. Authenticates requests to the gateway.                               | Yes             | _empty_      | Yes      |
| Credit Card Transaction Type                | Credit Card Transaction Type. Determines how the payment is processed (e.g., AUTH_CAPTURE, AUTH_ONLY, etc.).     | Yes             | AUTH_CAPTURE | No       |
| Go Live                                    | Enable to post the transaction to Authorize.Net's live server, otherwise the test server is used.                | Yes             | False        | No       |
| Payment Description                         | Description that will appear in payment statements or receipts.                                                  | Yes             | _empty_      | No       |
| Transaction's currency                      | The currency for the transaction (AUD, USD, CAD, GBP, NZD, EUR).                                                | Yes             | USD          | No       |
| Amount - total to pay                       | Amount to pay in selected currency. Can contain other tokens or expressions.                                     | Yes             | _empty_      | Yes      |
| Bank Aba Code                               | Bank's routing number.                                                                                            | Yes             | _empty_      | Yes      |
| Bank Acct Num                               | Bank account number.                                                                                            | Yes             | _empty_      | Yes      |
| Bank Acct Type                              | Bank account type (checking, savings, etc.).                                                                    | Yes             | _empty_      | Yes      |
| Bank Name                                   | Name of the bank that holds the account.                                                                        | Yes             | _empty_      | Yes      |
| Bank Acct Name                              | Name associated with the bank account.                                                                          | Yes             | _empty_      | Yes      |
| eCheck Type                                 | Type of electronic check transaction (ARC, BOC, CCD, PPD, TEL, WEB).                                            | No              | _empty_      | Yes      |
| Bank Check Number                           | Check number on customer's check. Required for ARC or BOC eCheck types.                                         | Yes             | _empty_      | No       |
| First Name                                  | Customer's first name.                                                                                          | Yes             | _empty_      | Yes      |
| Last Name                                   | Customer's last name.                                                                                           | Yes             | _empty_      | Yes      |
| Address                                     | Customer's address.                                                                                             | Yes             | _empty_      | Yes      |
| City                                        | Customer's city.                                                                                                | Yes             | _empty_      | Yes      |
| State                                       | Customer's state.                                                                                               | Yes             | _empty_      | Yes      |
| Country                                     | Customer's country.                                                                                             | Yes             | _empty_      | Yes      |
| Postal Code                                 | Customer's ZIP/postal code.                                                                                     | Yes             | _empty_      | Yes      |
| Fields                                      | (Optional) Additional fields to pass to Authorize.Net. Map field names/values or expressions.                   | Yes             | _empty_      | No       |

## `Output Parameters Reference`

| Parameter                                           | Description                                                   |
|-----------------------------------------------------|---------------------------------------------------------------|
| Output Authorize.Net Response Code Token Name        | Token name for the response code from Authorize.Net.          |
| Output Authorize.Net Response Reason Code Token Name | Token name for the response reason code.                      |
| Output Authorize.Net Response Reason Text Token Name | Token name for the response reason text.                      |
| Output Authorize.Net Response Authorization Code Token Name | Token name for the authorization code provided by Authorize.Net. |
| Output Authorize.Net Response Transaction ID Token Name     | Token name for the transaction ID assigned by Authorize.Net.         |

## `Events (Action Lists)`

After the transaction, different action lists can be triggered based on the gateway's response:

- **On Approved**: Executed if the payment is approved.
- **On Declined**: Executed if the payment is declined.
- **On Error**: Executed if there is a processing error.
- **On Held For Review**: Executed if the transaction is held by Authorize.Net for review.

## `Security`

Make sure all sensitive information (bank account numbers, personal data) are collected securely and comply with PCI DSS and NACHA rules.

Sensitive output values must be stored in secure tokens, and logs should avoid outputting this information. Do not expose unencrypted values in UI.

## `Examples`

### `1. Basic Electronic Check Payment`

This example processes a $100.00 payment via eCheck in test mode for the user:

```json
{
  "Title": "Pay with Electronic Check",
  "ActionType": "PayWithElectronicCheck",
  "Parameters": {
    "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetApiLogin]",
    "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetApiKey]",
    "AuthorizeNetTransactionType": "AUTH_CAPTURE",
    "AuthorizeNetLiveMode": false,
    "AuthorizeNetTitle": "Subscription Fee",
    "AuthorizeNetCurrency": "USD",
    "AuthorizeNetAmount": "100.00",
    "AuthorizeNetBankAbaCode": "[Form:RoutingNumber]",
    "AuthorizeNetBankAcctNum": "[Form:BankAccountNumber]",
    "AuthorizeNetBankAcctType": "checking",
    "AuthorizeNetBankName": "[Form:BankName]",
    "AuthorizeNetBankAcctName": "[User:DisplayName]",
    "AuthorizeNetECheckType": "WEB",
    "AuthorizeNetBankCheckNumber": "[Form:CheckNumber]",
    "AuthorizeNetFirstName": "[Form:FirstName]",
    "AuthorizeNetLastName": "[Form:LastName]",
    "AuthorizeNetAddress": "[Form:Address]",
    "AuthorizeNetCity": "[Form:City]",
    "AuthorizeNetState": "[Form:State]",
    "AuthorizeNetCountry": "[Form:Country]",
    "AuthorizeNetPostalCode": "[Form:PostalCode]",
    "AuthorizeNetFields": {},
    "AuthorizeNetResponseCodeTokenName": "eCheckResponseCode",
    "AuthorizeNetResponseReasonCodeTokenName": "eCheckReasonCode",
    "AuthorizeNetResponseReasonTextTokenName": "eCheckReasonText",
    "AuthorizeNetResponseAuthorizationCodeTokenName": "eCheckAuthCode",
    "AuthorizeNetResponseTransactionIDTokenName": "eCheckTransactionId",
    "OnApproved": [],
    "OnDeclined": [],
    "OnError": [],
    "OnHeldForReview": []
  }
}
```

### `2. Handling Success or Decline with Action Events`

Often, you want to notify the user or perform additional actions after processing.

```json
{
  "Title": "Pay with Electronic Check",
  "ActionType": "PayWithElectronicCheck",
  "Parameters": {
    // ... parameters as above ...
    "OnApproved": [
      {
        "Title": "Display Success Message",
        "ActionType": "DisplayMessage",
        "Parameters": {
          "Message": "Payment successfully processed! Transaction ID: [eCheckTransactionId]"
        }
      }
    ],
    "OnDeclined": [
      {
        "Title": "Display Decline Message",
        "ActionType": "DisplayMessage",
        "Parameters": {
          "Message": "Your payment was declined. Reason: [eCheckReasonText]"
        }
      }
    ],
    "OnError": [],
    "OnHeldForReview": []
  }
}
```

## `See Also`

* Pay with Credit Card
* Simple Checkout

