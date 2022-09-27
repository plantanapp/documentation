---
id: send-sms
title: Send SMS
sidebar_label: Send SMS
---


Send a SMS to a specified topic. It outputs the following tokens: [&lt;OutputTokenName&gt;:MessageId]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials | Select AWS Credentials to use for this action | No | None |
| SNS Region Endpoint | The Region Endpoint for the Simple Notifications Service. The list of endpoints can be found here. | No | None |
| Subject | Input a subject for the message. | No | None |
| Body | Input a body for the message. | No | None |
| Topic ARN | Set a topic ARN to publish the message to. | No | None |
| Sender ID | Set a Sender ID. This will be shown on the mobile devices. Eg. PlantAnApp  | No | None |
| Output Token Name | Specify a token name to save the output of this action. | No | None |
