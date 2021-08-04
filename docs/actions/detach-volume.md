---
id: detach-volume
title: Detach Volume
sidebar_label: Detach Volume
---


Detach a volume from a specified instance. It is set up to throw an error after 15 minutes in detaching state. This operation is not async!

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Volume ID | Provide the AWS Volume ID to detach. | No | None |
| Instance ID | Provide the AWS Instance ID to attach from. | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here. | No | None |
| Credentials | Select AWS credentials to run this action | No | None |
