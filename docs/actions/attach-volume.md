---
id: attach-volume
title: Attach Volume
sidebar_label: Attach Volume
---


Attach a volume to a specified instance. It is set up to throw an error after 15 minutes in detaching state. This operation is not async!

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Volume ID | Provide the AWS Volume ID to attach. | No | None |
| Instance ID | Provide the AWS Instance ID to attach to. | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here. | No | None |
| Credentials | Select AWS credentials to run this action | No | None |
