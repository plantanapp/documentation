# Stripe Direct Payment

Create a direct payment through you stripe platform. The payment is made directly to the destination account and the platform receives the application fee.
You can use the [Stripe:ChargeId] token if the payment to platform was made successfully.

A refund must be initiated by the destination account.

_API Secret Key_ - Specify your platform's Secret Key.Can contain [My Tokens](/my-tokens/index.html). 

![](assets/9.png)

_Application Fee Percentage_ - Percentage of how much the application will charge based on the amount field. Use dot to separate decimals. (Ex: 2.35).Can contain [My Tokens](/my-tokens/index.html).

_Application Fee Fixed Amount_ - A fixed amount that the application will charge. This amount is added after the Application Fee Percentage. Use dot to separate decimals. (Ex: 0.50).Can contain [My Tokens](/my-tokens/index.html).

_Payee Email_ - Can contain [My Tokens](/my-tokens/index.html).

_Description_ - Description of the payment.Can contain [My Tokens](/my-tokens/index.html).

_Payment To_ - The destination AccountID of the payment. Does not work with the account of the platform. Can contain [My Tokens](/my-tokens/index.html).

It can be configured as a multiple choice dropdown with Stripe Connected Accounts datasource. Underneath Data Source fill in your API Secret Key, which you can find in your Stripe account [https://dashboard.stripe.com/account](https://dashboard.stripe.com/account){:target="_blank"}, under Account Settings > API Keys.

![](assets/10.png)

_Card Number_ - Credit card number. Can contain [My Tokens](/my-tokens/index.html).

_Card CVC/CCV_ - Credit card cvc/ccv. Can contain [My Tokens](/my-tokens/index.html).

_Card Expiration Month_ - Can contain [My Tokens](/my-tokens/index.html).

_Card Expiration Year_ - Can contain [My Tokens](/my-tokens/index.html).

_Card Owner's Name_ - Can contain [My Tokens](/my-tokens/index.html).

_Card Address City_ - Can contain [My Tokens](/my-tokens/index.html).

_Card Address Country_ - Can contain [My Tokens](/my-tokens/index.html).

_Card Address_ - Can contain [My Tokens](/my-tokens/index.html).

_Amount_ - Amount that is going to be transfered (in cents). Can contain [My Tokens](/my-tokens/index.html).

_Currency_ - Can contain [My Tokens](/my-tokens/index.html).

_On Success_ - Define a list of actions that should execute when this action's result is Success.

_On Error_ - Define a list of actions that should execute when this action's result is Error. You can see the error message in [Stripe:ErrorMessage].

![](assets/11.png)