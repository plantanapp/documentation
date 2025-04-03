---
id: update-subscription
title: Update Subscription
sidebar_label: Update Subscription
---


Authorize.Net create a recurring subscription.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Login ID | API Login ID and Transaction Key. These keys will authenticate requests to the payment gateway. Can contain Tokens. | No | None |
| Transaction Key | API Login ID and Transaction Key. These keys will authenticate requests to the payment gateway. Can contain Tokens. | No | None |
| Go Live | Enable this option to switch to Live Mode. By default, unchecked, Test Mode, the transaction will be posted to the Authorize.Net's test server. | No | None |
| Subscription Id | The subscription id you want to update. Can contain Tokens. | No | None |
| Card Number | Credit card number. Can contain Tokens. | No | None |
| Card CCV | Credit card CCV. Can contain Tokens. | No | None |
| Subscription Name | Name of the subscription. Can contain Tokens. | No | None |
| Subscription Amount | Amount of the subscription. This is the total amount and must include tax, shipping, and any other charges. Up to 15 digits with a decimal point (no dollar symbol. For example, 8.95. Can contain Tokens. | No | None |
| Subscription Trial Amount | Optional. Amount of the trial subscription. This is the total amount and must include tax, shipping, and any other charges. Up to 15 digits with a decimal point (no dollar symbol. For example, 8.95. Can contain Tokens. | No | None |
| Expiration Month | Credit card expiration month. Can contain Tokens. | No | None |
| Expiration Year | Credit card expiration Year. Can contain Tokens. | No | None |
| Total Occurrences | Total number of occurrences of the subscription. Number of billing occurrences or payments for the subscription. To submit a subscription with no end date (an ongoing subscription), this field must be submitted with a value of 9999. If a trial period is specified, this number should include the trial occurrences. Can contain Tokens. | No | None |
| Trial Occurrences | Number of occurrences for the trial period of the subscription. If a trial period is specified, this number should include the trial occurrences. Can contain Tokens. | No | None |
| First Name | First name of the subscription profile. Can contain Tokens. | No | None |
| Last Name | Last name of the subscription profile. Can contain Tokens. | No | None |
| Country | Optional. Country of the subscription profile. Can contain Tokens. | No | None |
| State | Optional. State of the subscription profile. Can contain Tokens. | No | None |
| City | Optional. City of the subscription profile. Can contain Tokens. | No | None |
| Address | Optional. Address of the subscription profile. Can contain Tokens. | No | None |
| Postal Code | Optional. Postal Code of the subscription profile. Can contain Tokens. | No | None |
| Company | Optional. Company of the subscription profile. Can contain Tokens. | No | None |
| Response Result Code TokenName | Optionally provide a token name where to store the result code. | No | None |
| Response Message TokenName | Optionally provide a token name where to store the response message. | No | None |
| Response Customer ProfileId TokenName | Optionally provide a token name where to store the customer profile id. | No | None |
| Response Customer PaymentProfileId TokenName | Optionally provide a token name where to store the customer payment profile id. | No | None |
| Response Customer Address Id TokenName | Optionally provide a token name where to store the customer address id. | No | None |
| Response Ref Id TokenName | Optionally provide a token name where to store the ref Id. | No | None |
| Response SessionToken TokenName | Optionally provide a token name where to store the session token. | No | None |
| On Success | Define a list of actions that should execute when a subscription is successfully updated. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. | No | None |
