---
id: update-subscription
title: Update Subscription
sidebar_label: Update Subscription
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Payment Integrations`, `Tokens`

The **Update Subscription** action updates a recurring subscription in Authorize.Net using new or changed profile and payment information. It can modify subscription details such as the subscription amount, card details, billing address, and more. This action is commonly used to enable users to update their payment method, change billing details, or otherwise make adjustments to their recurring payments without interrupting the subscription.

## `Typical Use Cases`

* Update the credit card or billing address on an active recurring subscription.
* Change the recurring payment amount for a customer’s subscription.
* Modify customer's personal or company information attached to a recurring plan.
* Switch between sandbox (test) and live environment when updating subscriptions.

## `Related Actions`

| Action Name             | Description                                          |
| ----------------------- | ----------------------------------------------------|
| Create Subscription     | Creates a new recurring subscription in Authorize.Net.|
| Cancel Subscription     | Cancels an existing recurring subscription.         |
| Apply Tokens    | Dynamically insert or update parameter values using tokens. |

## `Input Parameter Reference`

| Parameter                                   | Description                                                                                                          | Supports Tokens | Required |
| ---------------------------------------------| -------------------------------------------------------------------------------------------------------------------- | --------------- | -------- |
| API Login ID                                | API Login ID for Authorize.Net.                                                                                      | Yes             | Yes      |
| Transaction Key                             | Transaction key for Authorize.Net.                                                                                   | Yes             | Yes      |
| Go Live                                     | Enable to use live (production) mode; disable for sandbox/test.                                                      | Yes             | No       |
| Subscription Id                             | The subscription id to update.                                                                                       | Yes             | Yes      |
| Card Number                                 | Credit card number.                                                                                                  | Yes             | Yes      |
| Card CCV                                    | Credit card security code.                                                                                           | Yes             | Yes      |
| Expiration Month                            | Credit card expiration month.                                                                                        | Yes             | Yes      |
| Expiration Year                             | Credit card expiration year.                                                                                         | Yes             | Yes      |
| Subscription Name                           | Human-readable name for this subscription.                                                                           | Yes             | No       |
| Subscription Amount                         | Amount to be billed per cycle (total, including tax/shipping, no $ symbol).                                          | Yes             | Yes      |
| Subscription Trial Amount                   | Trial subscription amount (if any).                                                                                  | Yes             | No       |
| Total Occurrences                           | Total number of payments/occurrences. Use `9999` for unlimited/indefinite.                                           | Yes             | Yes      |
| Trial Occurrences                           | Number of trial occurrences (if using a trial period).                                                               | Yes             | No       |
| First Name                                  | First name of the subscriber.                                                                                        | Yes             | Yes      |
| Last Name                                   | Last name of the subscriber.                                                                                         | Yes             | Yes      |
| Country                                     | Optional. Subscriber's country.                                                                                      | Yes             | No       |
| State                                       | Optional. Subscriber's state.                                                                                        | Yes             | No       |
| City                                        | Optional. Subscriber's city.                                                                                         | Yes             | No       |
| Address                                     | Optional. Subscriber's street address.                                                                               | Yes             | No       |
| Postal Code                                 | Optional. Subscriber's postal code.                                                                                  | Yes             | No       |
| Company                                     | Optional. Subscriber's company name.                                                                                 | Yes             | No       |
| Response Result Code TokenName              | Name of token to store result code (e.g., "Ok", "Error").                                                            |                | No       |
| Response Message TokenName                  | Name of token to store the API response message.                                                                     |                | No       |
| Response Customer ProfileId TokenName       | Name of token to store customer profile ID.                                                                          |                | No       |
| Response Customer PaymentProfileId TokenName| Name of token to store payment profile ID.                                                                           |                | No       |
| Response Customer Address Id TokenName      | Name of token to store address ID.                                                                                   |                | No       |
| Response Ref Id TokenName                   | Name of token to store reference ID from response.                                                                   |                | No       |
| Response SessionToken TokenName             | Name of token to store session token from response.                                                                  |                | No       |
| On Success                                 | Action list to execute if update is successful.                                                                      |                | No       |
| On Error                                   | Action list to execute if update fails.                                                                              |                | No       |

## `Output Parameters Reference`

| Parameter                       | Description                                                |
| ------------------------------- | ----------------------------------------------------------|
| Response Result Code TokenName  | The result code ("Ok", "Error", etc.), if provided.        |
| Response Message TokenName      | The full response message, if provided.                    |
| Response Customer ProfileId TokenName       | The returned customer profile ID from Authorize.Net.     |
| Response Customer PaymentProfileId TokenName| The returned payment profile ID from Authorize.Net.      |
| Response Customer Address Id TokenName      | The returned address ID from Authorize.Net.              |
| Response Ref Id TokenName                  | The returned ref ID from Authorize.Net.                  |
| Response SessionToken TokenName            | The session token for the transaction.                   |

## `Security`

**Important:** Sensitive information such as credit card numbers and keys should always be handled securely and should never be exposed to untrusted end users. All data should be passed over secured (HTTPS) connections, and access to configuration values should be restricted according to the principle of least privilege.

## `Examples`

### `1. Basic Subscription Update (Test Mode)`

This example will update a test subscription with new card and address details. Only required fields are provided for brevity.

```json
{
    "Title": "Update Subscription",
    "ActionType": "UpdateSubscription",
    "Parameters": {
        "AuthorizeNetAPILoginID": "[Settings:ApiLoginId]",
        "AuthorizeNetTransactionKey": "[Settings:TransactionKey]",
        "AuthorizeNetLiveMode": false,
        "AuthorizeNetSubscriptionId": "[Form:SubscriptionId]",
        "AuthorizeNetCardNumber": "[Form:CardNumber]",
        "AuthorizeNetCCV": "[Form:CCV]",
        "AuthorizeNetExpirationMonth": "[Form:ExpMonth]",
        "AuthorizeNetExpirationYear": "[Form:ExpYear]",
        "AuthorizeNetFirstName": "[Form:FirstName]",
        "AuthorizeNetLastName": "[Form:LastName]",
        "AuthorizeNetAmount": "[Form:Amount]",
        "TotalOccurrences": "12",
        "AuthorizeNetResponseResultCodeTokenName": "SubscriptionUpdateResult",
        "AuthorizeNetResponseMessageTokenName": "SubscriptionUpdateResponse",
        "OnSuccess": [
            {
                "Title": "Display Message",
                "ActionType": "DisplayMessage",
                "Parameters": {
                    "Message": "Subscription updated successfully!"
                }
            }
        ],
        "OnError": [
            {
                "Title": "Display Message",
                "ActionType": "DisplayMessage",
                "Parameters": {
                    "Message": "Failed to update subscription."
                }
            }
        ]
    }
}