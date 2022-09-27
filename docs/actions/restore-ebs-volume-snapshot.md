---
id: restore-ebs-volume-snapshot
title: Restore EBS Volume Snapshot
sidebar_label: Restore EBS Volume Snapshot
---


Creates a new EBS Volume from a snapshot. See AWS Delete Snapshot API

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Snapshot ID | Provide the snapshot ID to query the status for. | No | None |
| VolumeType | Choose a type of volume to create. Gp2 is recommended. | No | None |
| Wait for completion | Wait for the volume to be available before going to further actions. | No | None |
| AvailabilityZone | Provide the AvailabilityZone where to restore the volume. | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here. | No | None |
| Credentials | Select AWS credentials to run this action. If no credentials are specified, then the instance profile from EC2 is used. | No | None |
| Output Token Name | Provide the a name for a token to hold the results. Available tokens are [OutputTokenName:VolumeId], [OutputTokenName:VolumeId], [OutputTokenName:VolumeType], [OutputTokenName:State], [OutputTokenName:CreateTime] | No | None |
