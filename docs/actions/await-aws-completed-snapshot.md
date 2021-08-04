---
id: await-aws-completed-snapshot
title: Await AWS Completed Snapshot
sidebar_label: Await AWS Completed Snapshot
---


Waits an AWS Volume Snapshot until it is completed. Polling time is set to 2 seconds.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Snapshot Id | Provide the snapshot Id to await completed status for. | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here. | No | None |
| Credentials | Select AWS credentials to run this action | No | None |
