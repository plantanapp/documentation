---
id: delete-ec2-volume
title: Delete EC2 Volume
sidebar_label: Delete EC2 Volume
---


Delete a volume from AWS EC2. This operation is async!

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Volume ID | Provide the AWS Volume ID to delete. | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance(eg. us-east-1, eu-west-2). The list of endpoints can be found here. | No | None |
| IAM Credentials | Select AWS credentials to run this action. If no credentials are specified, then the instance profile from EC2 is used. | No | None |
