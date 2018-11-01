# Create Plan

This action will create a **recurring payment** plan/profile in your Stripe account to which you can subscribe your customers in order to repeatedly collect payments (e.g. weekly/monthly/yearly subscription, offer trial periods,...)

The action generates a ```[Stripe:PlanId]``` token which can be then referenced in other actions (like the [Create Subscription](/integrations/stripe/recurring-payments/stripe-create-subscription.html) one where you need to link a customer to a plan)

![Stripe Create Plan](https://static.dnnsharp.com/documentation/stripe-create-plan.png "Stripe Create Plan")