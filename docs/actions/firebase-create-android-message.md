---
id: firebase-create-android-message
title: Firebase  Create Android message
sidebar_label: Firebase  Create Android message
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Priority | Sets the priority of the message | No | None |
| Collapse Key | Sets a collapse key for the message. Collapse key serves as an identifier for a group of messages that can be collapsed, so that only the last message gets sent when delivery can be resumed. A maximum of 4 different collapse keys may be active at any given time. Supports tokens. | No | None |
| Time to live | Sets the time-to-live duration of the message. Format: &lt;days&gt;.&lt;hours&gt;:&lt;minutes&gt;:&lt;seconds&gt;. Supports tokens. | No | None |
| Title localization key | Sets the key of the title string in the app's string resources to use to localize the title text. Supports tokens. | No | None |
| Title localization args | Sets the collection of resource key strings that will be used in place of the format specifiers in Title localization key. Supports tokens. | No | None |
| Message Title | Sets the title of the Android notification. When provided, overrides the title set via the Title parameter of the Firebase - Send push notification action. Supports tokens. | No | None |
| Body localization key | Sets the key of the body string in the app's string resources to use to localize the body text. Supports tokens. | No | None |
| Body localization args | Sets the collection of resource key strings that will be used in place of the format specifiers in Body localization key. Supports tokens. | No | None |
| Message Body | Sets the body of the Android notification. When provided, overrides the body set via the Body parameter of the Firebase - Send push notification action. Supports tokens. | No | None |
| Message Icon | Sets the icon of the Android notification. Supports tokens. | No | None |
| Message Color | Sets the notification icon color. Supports tokens. | No | None |
| Message Sound | Sets the sound to be played when the device receives the notification. Supports tokens. | No | None |
| Message Click Action | Sets the action associated with a user click on the notification. Supports tokens. | No | None |
| Data Input Type |  | No | None |
| Data |  | No | None |
| Data Entity Name |  | No | None |
| Output Token |  | No | None |
