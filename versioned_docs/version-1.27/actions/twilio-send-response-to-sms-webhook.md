---
id: twilio-send-response-to-sms-webhook
title: Twilio Send Response to SMS Webhook
sidebar_label: Twilio Send Response to SMS Webhook
---


Send a response back to a Twilio SMS webhook when you receive an SMS in their TwiML XML format. You can leave everything empty just to respond properly to Twilio Webhooks without sending a SMS back to the sender and not trigger an alarm in Twilio Debugger.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| SMS Response Body | The SMS response body to the sender. Leave empty if you do not want to send a message back.Can contain Tokens | No | None |
| Status Callback URL | If you have any API (or a DNN API Endpoint) you can configure an URL that will receive an HTTP POST request with the status of a message sent in response to an inbound message. Possible statuses can be found in Twilio Documentation. Note that the Twilio sends a POST Http request with the tracking data. See more on 'Twilio Track Delivery Status of Messages' page. The status can be found in 'MessageStatus' property.Note that the redirect is unreachable if this URL is set. In this case, SMS session flow continues with the Twilio response to this URL request.Can contain Tokens. | No | None |
| Use Redirect | For further instructions, you can redirect the response to a different TwiML document (It can be another API that uses this same action) for further processing. Using this way, you can chain multiple actions if needed, based on some SMS inputs. See more at their developer documentation. Note that the redirect is always put after the response message, so the SMS response is always sent, then the redirect occurs. | No | None |
| URL To Redirect To | For further instructions, you can redirect the response to a different TwiML document (It can be another API that uses this same action) for further processing. This way, you can chain multiple actions if needed, based on some SMS inputs. See more at their developer documentation.Can contain Tokens | No | None |
| Use POST Http Method | By default, the redirects are done using GET http method. If your URL requires a POST http method then check this checkbox. | No | None |
