---
id: stripe-checkout
title: Stripe Checkout
sidebar_label: Stripe Checkout
---

Available in: Form, Listing.


Create a payment through your Stripe platform using the Checkout feature. Read the documentation.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Credentials | Select the Stripe API credential that you want to use. | No | None |
| Publishable API Key | Input the publishable API key obtained from your stripe platform. This is used on the client side to initiate requests. Can contain My Tokens. | Yes | None |
| Entity Name | Name of an entity that contains the items for the checkout. Can contain My Tokens. | Yes | None |
| Reference Id | A unique string to reference the Checkout Session. This can be a customer ID, a cart ID, or similar. It is included in the webhook call and can be used to fulfill the purchase.If you leave this empty, the action will generate a unique key to correctly identify the transaction webhook.Can contain My Tokens. | Yes | None |
| Customer Email | The email address used to create the customer object. If you already know your customer’s email address, use this attribute to prefill it on Checkout. Can contain My Tokens. | Yes | None |
| Payment Type | Set the payment type to one time payments, which will charge the client directly. Find more about payment types in our documentation. | No | None |
| Allow Promotion Codes | Allow promotional codes to be used. | No | None |
| Locale | Set the locale in which the checkout will be displayed to the user, defaults to 'en'. For other locales you can check the Stripe documentation. Can contain My Tokens. | Yes | None |
| Payment Description | Optional. Provide a payment description to easily identify what the payment is for. Can contain My Tokens. | Yes | None |
| Customer ID | ID of the customer this Checkout Session is for if one exists. May only be used with Direct Payments. Usage with Subscriptions is not yet available. Can contain My Tokens. | Yes | None |
| Trial Period Days | Optional. Integer representing the number of trial period days before the customer is charged for the first time. Leave empty or 0 to charge immediately. Can contain My Tokens. | Yes | None |
| Transfer Destination | Optional. The account (if any) the payment will be attributed to for tax reporting, and where funds from the payment will be transferred to upon payment success. Can contain My Tokens. | Yes | None |
| Application Fee Amount | Optional. To be used in conjunction with Transfer Destination. Integer representing the amount of the application fee (if any) requested for the resulting payment. Can contain My Tokens. | Yes | None |
| Success Url | The URL where the user will be redirected when the payment is successful. Typically, this is a page on your website that informs your customer that their payment was successful.Do not rely on the redirect to the Success URL alone for fulfilling purchases as malicious users could directly access the Success URL without paying and gain access to your goods or services.Also, customers may not always reach the Success URL after a successful payment. It is possible they close their browser tab before the redirect occurs.Use the On Success action list to define the actions that will occur when the payment succeeds.Can contain My Tokens. Read more in the documentation. | Yes | None |
| Cancel Url | The URL where the user will be redirected when the payment is canceled. Can contain My Tokens. | Yes | None |
| On Webhook Call | Define a list of actions that will execute when Stripe raises the event 'checkout.session.completed'. These actions will fulfill the payment, meaning you can issue an email and/or start processing the order (eg. shipping items or activating the subscription). Generates the following tokens: [Stripe:SessionRawResponse] and [Stripe:SessionId] . Read the documentation | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can see the error message in [Stripe:ErrorMessage]. | No | None |
