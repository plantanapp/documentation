---
id: get-multiple-aws-snapshots
title: Get Multiple AWS Snapshots
sidebar_label: Get Multiple AWS Snapshots
---


Gets multiple AWS Volume Snapshots. The filters apply only to specified Snapshot IDs. If you don't specify any snapshot id, then all the snapshots are returned based on the filters. OutputTokens are [YourNameHere:Progress], [YourNameHere:StartTime], [YourNameHere:State], [YourNameHere:StateMessage], [YourNameHere:VolumeId], [YourNameHere:VolumeSize]. Refer to the AWS Snapshot API

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Snapshot IDs | If you specify one or more snapshot IDs, only snapshots that have the specified IDs are returned. If you specify an invalid snapshot ID, an error is returned. If you specify a snapshot ID for which you do not have access, it is not included in the returned results. Insert one ID per line!  | No | None |
| Instance Region Endpoint Localization | The Region Endpoint for the EC2 Instance. The list of endpoints can be found here. | No | None |
| Credentials | Select AWS credentials to run this action | No | None |
| Filters | Select filters to use when bringing the snapshots. You can add all the filters and put tokens for them. The empty tokens are ignored Refer to the AWS Filters Documentation for more info. | No | None |
| Name the entity which stores the snapshots | Provide a name to entity that holds the snapshots retrieved. It can be later accessed using the token syntax. OutputTokens are [EntityName:Count] and for each object in the entity list: [EntityName:Progress], [EntityName:StartTime], [EntityName:State], [EntityName:StateMessage], [EntityName:VolumeId], [EntityName:VolumeSize]. Refer to the AWS Snapshot API | No | None |
