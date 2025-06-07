---
id: create-subscription
title: Create Subscription
sidebar_label: Create Subscription
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers), [`Pro Developer`](/audience.md#pro-developers)
>
> Skill Prerequisites: `APIs`, `Payment Gateway Integrations`, `Tokens`

The **Create Subscription** action is used to create a recurring payment subscription through Authorize.Net. This powerful integration enables your application to charge customers' credit cards on a schedule you define—perfect for memberships, product subscriptions, or any recurring billing need.

It supports both Live and Test (Sandbox) modes, making it suitable for development, staging, or production environments. The action collects customer details, payment schedule, and subscription properties, then communicates securely with Authorize.Net’s API to initiate the subscription.

You can configure this action for complex scenarios, including trial periods, dynamic data via tokens, and downstream actions for webhook notifications (e.g., when a subscription is created, updated, cancelled, or expires).

## `Typical Use Cases`

* Creating monthly or yearly recurring billing for membership sites.
* Automating payment collection for subscription-based services and SaaS platforms.
* Handling introductory trial pricing and then converting to a regular payment plan.
* Storing subscription and customer profile IDs for future API operations or record-keeping.
* Responding to Authorize.Net webhook events (such as subscription renewal, suspension, or expiration) by executing custom logic in your app.

## `Related Actions`

| Action Name | Description |
| ----------- | ----------- |
| [Run SQL Query](/actions/run-sql-query.md) | Use to log payments or update subscription records in your database. |
| Display Message | Provide feedback to users after subscription creation. |
| Apply Tokens | Populate input fields dynamically with user data, form entries, or computed values. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| API Login ID | Your Authorize.Net API Login ID. | Yes | | Yes |
| Transaction Key | Your Authorize.Net Transaction Key. | Yes | | Yes |
| Go Live | Switch between Authorize.Net Sandbox (unchecked) and Production (checked). | Yes | `false` | No |
| Subscription Name | Name of the subscription. | Yes | | No |
| Subscription Amount | Amount to bill each cycle. No $ sign (e.g., 8.95). | Yes | | Yes |
| Subscription Trial Amount | Amount for the trial period, if any. | Yes | | No |
| Card Number | Customer’s credit card number. | Yes | | Yes |
| Card CCV | Card security code (CVV/CCV). | Yes | | Yes |
| Expiration Month | Credit card expiration month (e.g., 07). | Yes | | Yes |
| Expiration Year | Credit card expiration year (e.g., 2025 or 25). | Yes | | Yes |
| First Name | Customer’s first name. | Yes | | Yes |
| Last Name | Customer’s last name. | Yes | | Yes |
| Address | Optional - Billing address. | Yes | | No |
| City | Optional - Billing city. | Yes | | No |
| State | Optional - Billing state/province. | Yes | | No |
| Country | Optional - Billing country. | Yes | | No |
| Postal Code | Optional - Billing postal/ZIP code. | Yes | | No |
| Company | Optional - Company name. | Yes | | No |
| Interval Length | How often to charge (e.g., every 1 month). | Yes | | Yes |
| Interval Unit | Interval type: 0 = Days, 1 = Months. | Yes | 0 | Yes |
| Total Occurrences | Total number of billing cycles (use 9999 for unlimited/ongoing). | Yes | | Yes |
| Trial Occurrences | Number of billing cycles at trial amount. | Yes | | No |
| Response Result Code TokenName | Token to store the response result code from Authorize.Net. | Yes | | No |
| Response Message TokenName | Token to store the response message from Authorize.Net. | Yes | | No |
| Response SubscriptionId TokenName | Token to store the subscription ID from Authorize.Net. | Yes | | No |
| Response Customer ProfileId TokenName | Token to store the customer profile ID. | Yes | | No |
| Response Customer PaymentProfileId TokenName | Token to store the customer payment profile ID. | Yes | | No |
| Response Customer Address Id TokenName | Token to store the customer address ID. | Yes | | No |
| Response Ref Id TokenName | Token to store the ref ID. | Yes | | No |
| Response SessionToken TokenName | Token to store the session token. | Yes | | No |
| On Success | Actions to execute when the subscription is successfully created. | N/A | | No |
| On Error | Actions to execute if the subscription creation fails. | N/A | | No |
| On Subscription Payment Created | Actions to execute when notified that a subscription payment was created. | N/A | | No |
| On Subscription Payment Updated | Actions to execute when a subscription payment is updated. | N/A | | No |
| On Subscription Payment Suspended | Actions to execute when a subscription payment is suspended. | N/A | | No |
| On Subscription Payment Terminated | Actions to execute when a subscription payment is terminated. | N/A | | No |
| On Subscription Payment Cancelled | Actions to execute when a subscription payment is cancelled. | N/A | | No |
| On Subscription Payment Expiring | Actions to execute when a subscription payment is near expiration. | N/A | | No |

## `Output Parameters Reference`

| Parameter | Description |
| --------- | ----------- |
| Response Result Code TokenName | Token containing the Authorize.Net result code (`Ok` for success) |
| Response Message TokenName | Token containing the detailed text response or error message |
| Response SubscriptionId TokenName | Token containing the subscription's unique ID |
| Response Customer ProfileId TokenName | Token containing the created customer profile ID |
| Response Customer PaymentProfileId TokenName | Token containing the payment profile ID |
| Response Customer Address Id TokenName | Token containing the address ID |
| Response Ref Id TokenName | Token containing the Authorize.Net ref ID |
| Response SessionToken TokenName | Token containing a session token for client-side integrations |

## `Webhook Support`

You can configure Authorize.Net to send notifications (webhooks) to your site on subscription events. The endpoint for your notifications will be:

```
{YourSiteUrl}/DesktopModules/DnnSharp/Common/WebHandlers/AuthorizeCreateSubscriptionHandler.ashx
```

Assign custom actions for each event (Created, Updated, Suspended, etc.) using the relevant On Subscription... parameters.

## `Security`

* Always use secure (HTTPS) endpoints for API keys and credit card data transmission.
* Never store plain text credit card info.
* Limit access to this action to trusted users and system roles.
* Protect and rotate your Authorize.Net credentials regularly.

## `Examples`

### `1. Create a Basic Monthly Subscription`

Create a $10/month membership subscription for a user, store the result in tokens, and display a message on success or error.

```json
{
  "Title": "Create Monthly Subscription",
  "ActionType": "CreateSubscription",
  "Parameters": {
    "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetAPILoginID]",
    "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetTransactionKey]",
    "AuthorizeNetLiveMode": "false",
    "AuthorizeNetAmount": "10.00",
    "AuthorizeNetCardNumber": "[Form:CardNumber]",
    "AuthorizeNetCCV": "[Form:CardCCV]",
    "AuthorizeNetExpirationMonth": "[Form:CardExpMonth]",
    "AuthorizeNetExpirationYear": "[Form:CardExpYear]",
    "AuthorizeNetFirstName": "[User:FirstName]",
    "AuthorizeNetLastName": "[User:LastName]",
    "AuthorizeNetIntervalLength": "1",
    "AuthorizeNetIntervalUnit": "1",
    "TotalOccurrences": "9999",
    "AuthorizeNetSubscriptionName": "Monthly Membership",
    "AuthorizeNetResponseResultCodeTokenName": "ANetResultCode",
    "AuthorizeNetResponseMessageTokenName": "ANetMsg",
    "AuthorizeNetResponseSubscriptionIdTokenName": "ANetSubID",
    "OnSuccess": [
      {
        "Title": "Display Message",
        "ActionType": "DisplayMessage",
        "Parameters": {
          "Message": "Subscription was successfully created! ID: [ANetSubID]"
        }
      }
    ],
    "OnError": [
      {
        "Title": "Display Message",
        "ActionType": "DisplayMessage",
        "Parameters": {
          "Message": "Subscription failed: [ANetMsg]"
        }
      }
    ]
  }
}
```

### `2. Create a Subscription with a Trial Period`

Charge $1 for the first month, then $20/month thereafter, for a total of 13 months.

```json
{
  "Title": "Create Subscription With Trial",
  "ActionType": "CreateSubscription",
  "Parameters": {
    "AuthorizeNetAPILoginID": "[Settings:AuthorizeNetAPILoginID]",
    "AuthorizeNetTransactionKey": "[Settings:AuthorizeNetTransactionKey]",
    "AuthorizeNetLiveMode": "true",
    "AuthorizeNetAmount": "20.00",
    "AuthorizeNetTrialAmount": "1.00",
    "AuthorizeNetIntervalLength": "1",
    "AuthorizeNetIntervalUnit": "1",
    "TotalOccurrences": "13",
    "TrialOccurrences": "1",
    "AuthorizeNetCardNumber": "[Form:CardNumber]",
   