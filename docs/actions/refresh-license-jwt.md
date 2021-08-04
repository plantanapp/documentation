---
id: refresh-license-jwt
title: Refresh License JWT
sidebar_label: Refresh License JWT
---


This will refresh the license JWT based on the provided license payload, signing it using the latest published Signing Key.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| License Payload | The existing license JWT payload. | No | None |
| Output Token Name | Contains the license payload in JWT format, base64 encoded, 3 dot-delimited segments.If an error occurs the [&lt;OutputTokenName&gt;:ErrorCode] and [&lt;OutputTokenName&gt;:ErrorMessage] will be available.Known ErrorCodes: 1 - Invalid LicenseCode provided. 2 - Provided License is not Active. 3 - Expired License provided. 100 - Too soon. The interval between refresh requests was too small. 101 - Invalid license payload. 102 - Unexpected error occurred while refreshing the license. Please contact support if problem persists. | No | None |
