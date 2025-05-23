---
id: paypal-express-checkout
title: PayPal  Express Checkout
sidebar_label: PayPal  Express Checkout
---


Make a payment with PayPal Express.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Username | Required. API Username and Transaction Key. These keys will authenticate requests to the payment gateway. | No | None |
| API Password | Required. API Username and Password. These keys will authenticate requests to the payment gateway. | No | None |
| API Signature | Required. Signature is required for transaction. | No | None |
| Go Live | Enable this option to switch to Live Mode. By default, unchecked, Test Mode, the transaction will be posted to the PayPal's test server for developer accounts: https://test.PayPal/gateway/transact.dll. | No | None |
| Payment Description | Tells what the transaction is about, for example a service name. This will appear in statements, receipts, etc. | No | None |
| Item Title | Item title. Can contain other context tokens, for example [TotalAmount] and Tokens. | No | None |
| Transaction currency | The list of accepted currency is in the AIM documentation. If the currency is other than USD the transaction will be put on pending. | No | None |
| Amount | Amount - the total to pay in the selected currency. Amount(recurring) - Billing amount for each billing cycle during this payment period. Can contain other context tokens, for example [TotalAmount] and Tokens. | No | None |
| Recurring Billing Period | Unit for billing during this subscription period. For SemiMonth, billing is done on the 1st and 15th of each month.Note: The combination of BillingPeriod and BillingFrequency cannot exceed one year. | No | None |
| Recurring Billing Frequency | Number of billing periods that make up one billing cycle.The combination of billing frequency and billing period must be less than or equal to one year. For example, if the billing cycle is Month, the maximum value for billing frequency is 12. Similarly, if the billing cycle is Week, the maximum value for billing frequency is 52.Note: If the billing period is SemiMonth, the billing frequency must be 1.Example: Billing Period = Month; Billing Frequency = 3; means every 3 months or quarterly | No | None |
| Recurring Billing Cycles | Number of billing cycles for payment period. For the regular payment period, if no value is specified or the value is 0, the regular payment period continues until the profile is canceled or deactivated. For the regular payment period, if the value is greater than 0, the regular payment period will expire after the trial period is finished and continue at the billing frequency for the specified number of cycles Example: Billing Period = Month; Billing Frequency = 1; Cycles = 10 means every months for the next 10 months | No | None |
| Trial Amount | Amount - Billing amount for each billing cycle during this payment period. Can contain other context tokens, for example [TotalAmount] and Tokens. | No | None |
| Recurring Trial Billing Period | Unit for billing during this subscription period. For SemiMonth, billing is done on the 1st and 15th of each month.Note: The combination of BillingPeriod and BillingFrequency cannot exceed one year. | No | None |
| Recurring Trial Billing Frequency | Number of billing periods that make up one billing cycle.The combination of billing frequency and billing period must be less than or equal to one year. For example, if the billing cycle is Month, the maximum value for billing frequency is 12. Similarly, if the billing cycle is Week, the maximum value for billing frequency is 52.Note: If the billing period is SemiMonth, the billing frequency must be 1.Example: Billing Period = Month; Billing Frequency = 3; means every 3 months or quarterly | No | None |
| Recurring Trial Billing Cycles | Number of billing cycles for trial payment period. If left empty it will be automatically set to 1. The standard payment will start after the trial period is over. | No | None |
| Recurring Initial Amount | Initial non-recurring payment amount due immediately upon profile creation for recurring payments. Use an initial amount for enrolment or set-up fees. Can contain other context tokens, for example [TotalAmount] and Tokens. | No | None |
| Recurring Description | Description for recurring. Can contain other context tokens, for example [TotalAmount] and Tokens. | No | None |
| Output PayPal Transaction Id Token Name | Optionally provide a token name where to store the PayPal Transaction Id generated by the transaction. | No | None |
| Output PayPal Response Payment Type Token Name | Optionally provide a token name where to store the PayPal Response Payment Type generated by the transaction. | No | None |
| Output PayPal Response Payment Status Token Name | Optionally provide a token name where to store the PayPal Response Payment Status generated by the transaction. | No | None |
| Output PayPal Response Pending Reason Token Name | Optionally provide a token name where to store the PayPal Response Pending Reason generated by the transaction. | No | None |
| Output PayPal Response Reason Code Token Name | Optionally provide a token name where to store the PayPal Response Reason Code generated by the transaction. | No | None |
| Output recurring Profile Id Token Name | A unique identifier for future reference to the details of this recurring payment. | No | None |
| Output recurring Profile Status Token Name | Status of the recurring payment profile. ActiveProfile - The recurring payment profile has been successfully created and activated for scheduled payments according the billing instructions from the recurring payments profile. PendingProfile - The system is in the process of creating the recurring payment profile. Please check your IPN messages for an update. | No | None |
| Output Error Code Token Name | Optionally provide a token name where to store the PayPal Response Error Code generated by the transaction. | No | None |
| Output Short Message Token Name | Optionally provide a token name where to store the PayPal Response Error Short Message generated by the transaction. | No | None |
| Output recurring Long Message Token Name | Optionally provide a token name where to store the PayPal Response Error Long Message generated by the transaction. | No | None |
| On Success | Define a list of actions that should execute when this action's result is Success. If the transaction currency is other than USD the actions will not be executed, instead the OnPending actions will be executed. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. | No | None |
| On Pending | Define a list of actions that should execute when paypal can't send back an instant response. | No | None |
| On Cancel | Define a list of actions that should execute when the user cancels the pruchase/subscription. | No | None |
| On Subscription Payment Received | Define a list of actions that should execute when a subscription payment is received. In order for paypal to send notifications back the Instant Payment Notification Url must be set manunally as described here: For live: https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNSetup/ For sandbox: https://www.sandbox.paypal.com/us/cgi-bin/webscr?cmd=_profile-ipn-notify The IPN Url: {YourSiteUrl}/DesktopModules/DnnSharp/Common/WebHandlers/PayPalExpressCheckoutHandler.ashx/Ipn?DnnSharpPaymentType=Recurring | No | None |
| On Subscription Canceled | Define a list of actions that should execute when a subscription is canceled. | No | None |
| On Subscription Suspended | Define a list of actions that should execute when a subscription is suspended. Common reasons for the suspension of a payment are: insufficient funds or card expiration. | No | None |
