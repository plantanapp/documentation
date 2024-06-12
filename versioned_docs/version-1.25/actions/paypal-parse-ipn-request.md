---
id: paypal-parse-ipn-request
title: PayPal  Parse IPN Request
sidebar_label: PayPal  Parse IPN Request
---


Parse a PayPal Instant Payment Notification and return the data into tokens. Generated tokens will be: [{TokenPrefix}recurring_payment_id], [{TokenPrefix}profile_status], [{TokenPrefix}payer_id], [{TokenPrefix}payer_email], [{TokenPrefix}payer_status], [{TokenPrefix}last_name], [{TokenPrefix}first_name], [{TokenPrefix}initial_payment_amount], [{TokenPrefix}amount], [{TokenPrefix}product_name], [{TokenPrefix}product_type], [{TokenPrefix}payment_cycle], [{TokenPrefix}amount_per_cycle], [{TokenPrefix}next_payment_date], [{TokenPrefix}period_type], [{TokenPrefix}receiver_email], [{TokenPrefix}time_created], [{TokenPrefix}currency_code], [{TokenPrefix}residence_country], [{TokenPrefix}verify_sign], [{TokenPrefix}test_ipn], [{TokenPrefix}tax], [{TokenPrefix}txn_type], [{TokenPrefix}shipping], [{TokenPrefix}charset], [{TokenPrefix}notify_version], [{TokenPrefix}outstanding_balance], [{TokenPrefix}ipn_track_id] Profile statuses are: Created, Updated, Active, Suspended, Cancelled.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Request Data | The request data received from PayPal. Example: recurring_payment_id=I-DF3S35GWL16Y&profile_status=Active&...Or leave empty so that DnnApiEndpoint will parse the request from PayPal automatically. | No | None |
| TokenPrefix | The prefix of the tokens that will be generated. Can be left empty. | No | None |
