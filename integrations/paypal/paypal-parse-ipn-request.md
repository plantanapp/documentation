# PayPal - Parse IPN Request

This action should be used in API Endpoint and will allow you to decode and transform into tokens all [Instant Payment Notifications](https://developer.paypal.com/docs/classic/products/instant-payment-notification/) you receive from Paypal.
![Parse IPN Request](//static.dnnsharp.com/documentation/Parse_IPN_request.png)

The action will automatically generate tokens for each parameter received from Paypal. For Recurring Payments the following tokens will be available:
[recurring_payment_id], [payer_email], [last_name], [first_name], [amount], [product_name], [next_payment_date] and others as described in [Paypal documentation](https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNandPDTVariables/#id091EB080EYK)
