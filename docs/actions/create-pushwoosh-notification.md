---
id: create-pushwoosh-notification
title: Create PushWoosh Notification
sidebar_label: Create PushWoosh Notification
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Debug | When enabling debug mode, instead of making a request to PushWoosh, the data will be displayed in an error message. | No | None |
| Debug Output |  | No | None |
| API Credentials | This can be found in your PushWoosh control panel, on the API Access page. | No | None |
| Application Code | This can be found in your PushWoosh control panel, on the application page. Supports My Tokens. | Yes | None |
| Campaign name | Campaigns allow you to collect all notifications you send in one place regardless of the source you use. With Campaigns you will be able to see aggregated statistics for the whole campaign with the average conversion trend and detailed stats for each push you send. Supports My Tokens. | Yes | None |
| Message Content | PushWoosh supports user/device localizable content for the same push notification. You can add here as many languages as you need. The missing languages will fallback to the english version. Supports My Tokens. | Yes | None |
| Minimize Link |  | No | Do not minimize (deeplink) |
| Link | This is the link that will open when the notificaton is clicked. Leave empty to open the app on mobile devices. Support for deeplinks is available when the Minimize Link parameter is set to Do not minimize (deeplink). Supports My Tokens. | Yes | None |
| Custom data | This is custom data, in JSON format that will be sent to the app. Leave empty to ignore the parameter. Supports My Tokens. | Yes | None |
| Send Now | If this option is checked the message will be sent immediately. The Send Date field will be ignored. | No | None |
| Ignore user timezone | Check this if you want the notification to be triggered independent to the user/device timezone. | No | None |
| Send date | This is the UTC date and time when the notification will be triggered. | No | None |
| Target type | PushWoosh allows notifications to be sent to specific devices or users. Select the type of target to filter by. | No | All |
| Targets List | The list of user/device ids (specified by the Target type parameter) to send to. Ids are separated by commas (,). The parameter will be ignored if the Target type is set to All. Supports My Tokens. | Yes | None |
| Conditions | The users/devices that will receive the notification will be filtered using equality comparison on string tag values that are set to the subscribed user/device. | No | None |
