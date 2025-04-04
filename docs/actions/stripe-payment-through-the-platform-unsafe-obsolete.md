---
id: stripe-payment-through-the-platform-unsafe-obsolete
title: Stripe Payment through the platform (unsafe  obsolete)
sidebar_label: Stripe Payment through the platform (unsafe  obsolete)
---


Create a payment through your stripe platform. The payment is made to the platform and then automatically to the destination account.A refund must be initiated by the platform. You can use the [Stripe:ChargeId] token if the payment to platform was succesful.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Secret Key | Specify your platform's Secret Key. Can contain Tokens. | No | None |
| Application Fee Percentage | Percentage of how much the application will charge based on the amount field. Use dot to separate decimals. (Ex: 2.35) Can contain Tokens. | No | None |
| Application Fee Fixed Amount | A fixed amount that the application will charge. This amount is added after the Application Fee Percentage. Use dot to separate decimals. (Ex: 0.50) Can contain Tokens. | No | None |
| Payee Email | Can contain Tokens. | No | None |
| Description | Description of the payment. Can contain Tokens. | No | None |
| Payment To | The destination AccountID of the payment. Leave the field empty in case you want the transfer to go directly to your platform. Can contain Tokens. | No | None |
| Card Number | Credit card number. Can contain Tokens. | No | None |
| Card CVC/CCV | Credit card cvc/ccv. Can contain Tokens. | No | None |
| Card Expiration Month |  Can contain Tokens. | No | None |
| Card Expiration Year | Can contain Tokens. | No | None |
| Card Owner's Name | Can contain Tokens. | No | None |
| Card Address City | Can contain Tokens. | No | None |
| Card Address Country | Can contain Tokens. | No | None |
| Card Address | Can contain Tokens. | No | None |
| Amount | Amount that is going to be transfered (in cents). Can contain Tokens. | No | None |
| Currency | Can contain Tokens. | No | None |
| On Success | Define a list of actions that should execute when this action's result is Success. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can see the error message in [Stripe:ErrorMessage]. | No | None |
