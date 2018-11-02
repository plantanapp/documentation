# Create Customer

> Available starting with Stripe Add-on version 5.0.25

This action will allow you to create a customer in your stripe account. It does nothing more than just to securely save the client/customer and the payment method (credit card) on the Stripe platform which will then allow you to perform recurring charges with the help of the [Create Subscription](/integrations/stripe/recurring-payments/stripe-create-subscription.html) action.

In order to work, the action needs to:
* be linked to a [Stripe Credit Card field](/integrations/stripe/stripe-credit-card-field.html) in Action Form
* have the customer/payee email and description fields filled in
* be given an output token name where it will save the response from Stripe (customer ID)

![Stripe Create Customer](https://static.dnnsharp.com/documentation/stripe-create-customer.png "Stripe Create Customer")