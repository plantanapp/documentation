---
id: firebase-send-push-notification
title: Firebase  Send push notification
sidebar_label: Firebase  Send push notification
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Credential Key | The key defined in the AppSettings section in web.config. The value of the key must be the file path to the credential file generated in the Firebase Console (docs for generating a private key file). Supports tokens. | No | None |
| Message Audience | Select how the message will be sent | No | None |
| Topic Name | Set the topic that the message will be sent to. Supports tokens. | No | None |
| Device Token | Set the device registration token that the message will be sent to. Supports tokens. | No | None |
| Device Tokens | A comma separated list of device registration tokens that the message will be sent to. Supports tokens. | No | None |
| Message Title | A value for the fallback message title. It will be used if no specific device message is provided. Supports tokens. | No | None |
| Message Body | A value for the fallback message body. It will be used if no specific device message is provided. Supports tokens. | No | None |
| Data Input Type |  | No | None |
| Data |  | No | None |
| Data Entity Name |  | No | None |
| Android Specific Notification Json | A JSON value defining the Android specific properties of the notification. The JSON can be easily generated using the Firebase - Create Android message action. Supports tokens. | No | None |
| iOS Specific Notification Json | A JSON value defining the iOS specific properties of the notification. The JSON can be easily generated using the Firebase - Create iOS message action. Supports tokens. | No | None |
| WebPush Specific Notification Json | A JSON value defining the WebPush specific properties of the notification. The JSON can be easily generated using the Firebase - Create WebPush message action. Supports tokens. | No | None |
