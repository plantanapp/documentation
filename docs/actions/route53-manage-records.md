---
id: route53-manage-records
title: Route53 Manage Records
sidebar_label: Route53 Manage Records
---


Changes multiple records in an AWS Route53 domain. OutputTokens are [YourNameHere:Progress], [YourNameHere:StartTime], [YourNameHere:State], [YourNameHere:StateMessage], [YourNameHere:VolumeId], [YourNameHere:VolumeSize]. Refer to the AWS Snapshot API

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Hosted Zone Id | Provide the Hosted Zone Id for the domain. | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here, eg. us-east-1. | No | None |
| Credentials | Select AWS credentials to run this action | No | None |
| Record Changes | Set the records you want to manage. | No | None |
| Throw On Error | Always throw the exception if an error occurs, even if you have 'On Error' actions. Otherwise let the 'On Error' treat the error like follows: If you have final actions on 'On Error' the execution is stopped, otherwise it will continue to execute the actions below so be careful to make proper checks. | No | None |
| On Error | Define a list of actions that should execute when an error occurs. You can use the [ErrorMessage] token to show the error message only the context of this event. | No | None |
