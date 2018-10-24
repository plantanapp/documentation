# Stripe Direct Payment with Token

Create a direct payment through you stripe platform. The payment is made directly to the destination account and the platform receives the application fee.

You can use the [Stripe:ChargeId] token if the payment to platform was made successfully.

A refund must be initiated by the destination account.

_API Secret Key_ - Specify your platform's Secret Key.Can contain [My Tokens](/my-tokens/index.html).

![](assets/6.png)

_Application Fee Percentage_ - Percentage of how much the application will charge based on the amount field. Use dot to separate decimals. (Ex: 2.35).Can contain [My Tokens](/my-tokens/index.html).

_Application Fee Fixed Amount_ - A fixed amount that the application will charge. This amount is added after the Application Fee Percentage. Use dot to separate decimals. (Ex: 0.50).Can contain [My Tokens](/my-tokens/index.html).

_Payee Email_ - Can contain [My Tokens](/my-tokens/index.html).

_Description_ - Description of the payment.Can contain [My Tokens](/my-tokens/index.html).

_Payment To_ - The destination AccountID of the payment. Does not work with the account of the platform. Can contain [My Tokens](/my-tokens/index.html).

It can be configured as a multiple choice dropdown with Stripe Connected Accounts datasource. Underneath Data Source fill in your API Secret Key, which you can find in your Stripe account [https://dashboard.stripe.com/account](https://dashboard.stripe.com/account){:target="_blank"}, under Account Settings > API Keys.

![](assets/7.png)

_Payment Type_ - Stripe supports multiple payment types. Using the Standard Payment, the funds will be credited to the current account (defined by the API Secret Key). The other two methods rely on the Stripe Connect feature to forward the funds to a connected account. The Connected Account must be set using the Payment To parameter below. More information can be found [here](https://stripe.com/docs/connect/charges){:target="_blank"}.

_Payment To_ - **Optional.** Needed when the Payment Type parameter is set to forward the founds to a Connected Account. This is the ID of the Connected Account on behalf of which the payment is made. Does not work with the account of the platform. Can contain [My Tokens](/my-tokens/index.html).

_Card Field_ - This option requires a stripe credit card field type.

The _Stripe Credit Card Field_ is integrated with Stripe Elements; it comes with pre-built UI components to securely collect sensitive card details using Elements. The Publishable key from the stripe [dashboard](https://dashboard.stripe.com/login?redirect=%2Faccount%2Fapikeys){:target="_blank"} should be appended.

![](assets/8.png)

_Amount_ - Amount that is going to be transferred (in cents). Can contain [My Tokens](/my-tokens/index.html).
_Currency_ - Can contain [My Tokens](/my-tokens/index.html).
_On Success_ - Define a list of actions that should execute when this action's result is Success.
_On Error_ - Define a list of actions that should execute when this action's result is Error. You can see the error message in [Stripe:ErrorMessage].