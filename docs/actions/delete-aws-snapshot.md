---
id: delete-aws-snapshot
title: Delete AWS Snapshot
sidebar_label: Delete AWS Snapshot
---


Deletes a snapshot from AWS EC2. Refer to the AWS Delete Snapshot API

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Snapshot ID | Provide the snapshot ID to query the status for. | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here. | No | None |
| Instance Region Endpoint Localization String | Select AWS credentials to run this action | No | None |
| Credentials | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here. | No | None |
| Throw On Error | Always throw the exception if an error occurs, even if you have 'On Snapshot Missing' actions. Otherwise let the 'On Snapshot Missing' treat the error like follows: If you have final actions on 'On Snapshot Missing' the execution is stopped, otherwise it will continue to execute the actions below so be careful to make proper checks. | No | None |
| On Snapshot Missing | Define a list of actions that should execute when this snapshot is missing. You can use the [ErrorMessage] token to show the error message only the context of this event. | No | None |
