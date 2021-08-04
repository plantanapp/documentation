---
id: get-fedex-tracking-info
title: Get Fedex Tracking Info
sidebar_label: Get Fedex Tracking Info
---




## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Test Mode | This will enable you to send requests to the test API (https://wsbeta.fedex.com:443/web-services/track). | No | None |
| Credentials |  | No | None |
| Account Number | Your FedEx account number. | No | None |
| Meter Number | The associated meter number for your FedEx account number. Maximum of 9 characters. | No | None |
| Customer Transaction Id | Maximum of 40 characters. This element allows you to assign a unique identifier to your transaction. This element is returned in the reply and helps you match requests to replies | No | None |
| Package Identifier Type |  | No | TRACKING_NUMBER_OR_DOORTAG |
| Package Identifier | Required. The value to be used to retrieve tracking information for a package. | No | None |
| Include Detailed Scans | A boolean value indication if detailed data is retrieved.If FALSE (the default), the reply will contain summary/profile data including current status.If TRUE, the reply will contain profile and detailed scan activity (multiple TrackDetail objects) for each package. | No | None |
| Output Base Token Name | The base name of the tokens that will be created. Tokens will be generated from the Fedex replay object. Their format is [&lt;OutputBaseTokenName&gt;:property.subproperty].The [&lt;OutputBaseTokenName&gt;] token will contain the JSON string of the entire Fedex replay object and can be used to identify the tokens that will be generated.Note: The arrays in the reply object will not be expanded. Additional calls to 'Parse JSON into tokens' action must be made to expand them. | No | None |
