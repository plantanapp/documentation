---
id: send-sms-using-twilio
title: Send SMS using Twilio
sidebar_label: Send SMS using Twilio
---


Send a direct SMS using Twilio integration.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Twilio API Connector | Select the Twilio API connector that you want to use. | No | None |
| From Number | Specify a number to send a message from. This must be a purchased number from your Twilio account or a SenderID. The number must be in E.164 format: [+][country code][phone number including area code] . Note that some users in other countries may see a Sender ID instead of your phone number. Read more on Twilio Support Center.Can contain Tokens. | No | None |
| To Number | Specify a number to send a message to! This must be in E.164 formatting: [+][country code][phone number including area code] .Can contain Tokens. | No | None |
| Sms Body | Can contain Tokens. | No | None |
| Status Callback URL | If you have any API (or a DNN API Endpoint) you can configure an URL that will receive an HTTP POST request with the status of the sent message. Possible statuses can be found in Twilio Documentation. Note that the Twilio sends a POST Http request with the tracking data. See more on 'Twilio Track Delivery Status of Messages' page. The status can be found in 'MessageStatus' property. Can contain Tokens. | No | None |
| Output Token MessageId | Define an output token name which will hold the MessageID of the sent SMS. If this field is empty or whitespace, it will default to "Twilio". | No | None |
| Ignore Errors | Pass to the next action execution | No | None |
| On Error | Define a list of actions that should execute when this action's result is Error. You can see the error message in [Twilio:ErrorMessage]. | No | None |
