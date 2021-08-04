---
id: subscribe-to-a-topic-by-sms-
title: Subscribe to a topic (by SMS)
sidebar_label: Subscribe to a topic (by SMS)
---


Send a SMS to a specified topic. It outputs the following tokens: [&lt;OutputTokenName&gt;:RequestId], [&lt;OutputTokenName&gt;:SubscriptionArn]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credentials | Select AWS Credentials to use for this action | No | None |
| SNS Region Endpoint | The Region Endpoint for the Simple Notifications Service. The list of endpoints can be found here. | No | None |
| SNS Topic Arn | Specify a topic ARN to subscribe to. | No | None |
| Subscription Type | The subscription types you want to use. Supported types are: HTTP – delivery of JSON-encoded message via HTTP POST HTTPS – delivery of JSON-encoded message via HTTPS POST Email – delivery of message via SMTP EmailJson – delivery of JSON-encoded message via SMTP SMS – delivery of message via SMS SQS – delivery of JSON-encoded message to an Amazon SQS queue Application – delivery of JSON-encoded message to an EndpointArn for a mobile app and device. LambdaFunction – delivery of JSON-encoded message to an AWS Lambda function.  | No | None |
| Endpoint | The endpoint that you want to receive notifications. Endpoints vary by subscription type: For the HTTP subscription type, the endpoint is an URL beginning with "http://" For the HTTPS subscription type, the endpoint is a URL beginning with "https://" For the Email subscription type, the endpoint is an email address For the EmailJson subscription type, the endpoint is an email address For the SMS subscription type, the endpoint is a phone number of an SMS-enabled device For the SQS subscription type, the endpoint is the ARN of an Amazon SQS queue For the Application subscription type, the endpoint is the EndpointArn of a mobile app and device. For the LambdaFunction subscription type, the endpoint is the ARN of an AWS Lambda function.  | No | None |
| Specify a token name to save the output of this action. |  | No | None |
