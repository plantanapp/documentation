---
id: stripe-payment-with-token-not-sca-compliant
title: Stripe Payment with Token (not SCA compliant)
sidebar_label: Stripe Payment with Token (not SCA compliant)
---

Available in: Form.


Create a payment through you stripe platform, using a one-time token generated by the 'Stripe Credit Card' field. You can use the [Stripe:ChargeId] token if the payment to platform was succesful.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| API Connector | Select the Stripe API connector that you want to use. | No | None |
| Application Fee Percentage | Percentage of how much the application will charge based on the amount field. Use dot to separate decimals. (Ex: 2.35) Can contain Tokens. | No | None |
| Application Fee Fixed Amount | A fixed amount that the application will charge. This amount is added after the Application Fee Percentage. Use dot to separate decimals. (Ex: 0.50) Can contain Tokens. | No | None |
| Payee Email | Can contain Tokens. | No | None |
| Description | Description of the payment. Can contain Tokens. | No | None |
| Payment Type | Stripe supports multiple payment types. Using the Standard Payment, the funds will be credited to the current account (defined by the API Secret Key). The other two methods rely on the Stripe Connect feature to forward the funds to a connected account. The Connected Account must be set using the Payment To parameter below. More information can be found here. | No | None |
| Payment To | Optional. Needed when the Payment Type parameter is set to forward the founds to a Connected Account. This is the ID of the Connected Account on behalf of which the payment is made. Does not work with the account of the platform. Can contain Tokens. | No | None |
| Card Field | The Stripe Credit card field. | No | None |
| Amount | Amount that is going to be transfered (in cents). Can contain Tokens. | No | None |
| Currency | Can contain Tokens. | No | None |
| On Success | Define a list of actions that should execute when this action's result is Success. | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can see the error message in [Stripe:ErrorMessage]. | No | None |
