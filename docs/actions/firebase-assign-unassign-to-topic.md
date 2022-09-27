---
id: firebase-assign-unassign-to-topic
title: Firebase  Assign/Unassign to Topic
sidebar_label: Firebase  Assign/Unassign to Topic
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credential Key | The key defined in the AppSettings section in web.config. The value of the key must be the file path to the credential file generated in the Firebase Console (docs for generating a private key file). Supports tokens. | No | None |
| Unassign Devices | Check this to use this action to unsubscribe devices from the topic. | No | None |
| Topic Name | The name of the topic to assign the devices to. Supports tokens. | No | None |
| Device Ids | Comma separated device tokens that will be added to the topic. Supports tokens. | No | None |
| Output Entity Name | This is used to return the errors from the firebase API. It will create an entity list with the errors. The entity properties are: Index, Reason, DeviceToken. A [&lt;OutputTokenName&gt;:HasErrors] token with boolean value will also be created. | No | None |
