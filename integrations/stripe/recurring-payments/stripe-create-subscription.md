# Create Subscription

The action will link an existing customer to an existing recurring payment plan; customers  and the plan .

In order to work, the actions needs to be given:
* a customer ID which can be created with the [Create Customer](/integrations/stripe/recurring-payments/stripe-create-customer.html) action
* a plan ID which can be created with the help of the [Create Plan](/integrations/stripe/recurring-payments/stripe-create-plan.html) action
* billing type
* tax percentage which represents the percentage of the subscription invoice subtotal that will be calculated and **added** as tax to the final amount in each billing period

![Stripe Create Subscription](https://static.dnnsharp.com/documentation/stripe-create-subscription.png "Stripe Create Subscription")