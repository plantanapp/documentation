---
id: stripe-create-plan
title: Stripe Create Plan
sidebar_label: Stripe Create Plan
---


Create a plan for subscriptions in your Stripe platform. This uses the per_unit billing scheme, which indicates that the fixed amount (specified in the amount field) will be charged per unit (not "per group of") at the start of each billing period. This action generates [Stripe:PlanId] and [Stripe:ProductId] tokens

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Credentials | Select the Stripe API credential that you want to use. | No | None |
| Amount | A positive integer in cents (or 0 for a free plan) representing how much to charge on a recurring basis. Can contain My Tokens. | Yes | None |
| Currency | Three-letter ISO currency code. Must be a supported currency. Can contain My Tokens. | Yes | None |
| Interval | Specifies billing frequency. Either day, week, month or year. Can contain My Tokens. | Yes | None |
| Nickname | A brief description of the plan, hidden from customers. Can contain My Tokens. | Yes | None |
| Interval Count | Optional. Defaults to 1. The number of intervals between subscription billings. For example, Interval=month and Interval Count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks) Can contain My Tokens. | Yes | None |
| Use Existing Product | If you already have a product of type service check this and use your Stripe Product ID, otherwise, leave it unechecked and a new service product will be created with each subscription. | No | None |
| Product ID | Specify your Product ID from Stripe platform. Can contain My Tokens. | Yes | None |
| Product Name | Required. Specify a Product Name for your new product. Can contain My Tokens. | Yes | None |
| Statement Descriptor | Optional. An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. The statement description will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all. It must contain at least one letter. Can contain My Tokens. | Yes | None |
| Product Metadata | Set of key-value pairs that you can attach to a product. This can be useful for storing additional information about the product in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by passing a single key named "DeleteMetadata" with an empty value. Can contain other context tokens, for example [Name], and My Tokens. | Yes | None |
| Default Trial Period Days | Optional. Default number of trial days when subscribing a customer to this plan using the subscription Trial Period Days setting. This setting is overriden by setting a Trial End on the subscription. Can contain My Tokens. | Yes | None |
| On Success | Define a list of actions that should execute when this action's result is Success. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can see the error message in [Stripe:ErrorMessage]. | No | None |
