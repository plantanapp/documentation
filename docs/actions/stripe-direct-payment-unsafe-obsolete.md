---
id: stripe-direct-payment-unsafe-obsolete
title: Stripe Direct Payment (unsafe  obsolete)
sidebar_label: Stripe Direct Payment (unsafe  obsolete)
---


Create a direct payment through you stripe platform. The payment is made directly to the destination account and the platform receives the application fee.A refund must be initiated by the destination account. You can use the [Stripe:ChargeId] token if the payment to platform was succesful.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Secret Key | Specify your platform's Secret Key. Can contain My Tokens. | Yes | None |
| Application Fee Percentage | Percentage of how much the application will charge based on the amount field. Use dot to separate decimals. (Ex: 2.35) Can contain My Tokens. | Yes | None |
| Application Fee Fixed Amount | A fixed amount that the application will charge. This amount is added after the Application Fee Percentage. Use dot to separate decimals. (Ex: 0.50) Can contain My Tokens. | Yes | None |
| Payee Email | Can contain My Tokens. | Yes | None |
| Description | Description of the payment. Can contain My Tokens. | Yes | None |
| Payment To | The destination AccountID of the payment. Does not work with the account of the platform. Can contain My Tokens. | Yes | None |
| Card Number | Credit card number. Can contain My Tokens. | Yes | None |
| Card CVC/CCV | Credit card cvc/ccv. Can contain My Tokens. | Yes | None |
| Card Expiration Month |  Can contain My Tokens. | Yes | None |
| Card Expiration Year | Can contain My Tokens. | Yes | None |
| Card Owner's Name | Can contain My Tokens. | Yes | None |
| Card Address City | Can contain My Tokens. | Yes | None |
| Card Address Country | Can contain My Tokens. | Yes | None |
| Card Address | Can contain My Tokens. | Yes | None |
| Amount | Amount that is going to be transfered (in cents). Can contain My Tokens. | Yes | None |
| Currency | Can contain My Tokens. | Yes | None |
| On Success | Define a list of actions that should execute when this action's result is Success. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can see the error message in [Stripe:ErrorMessage]. | No | None |
