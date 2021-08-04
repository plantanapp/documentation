---
id: generate-license-jwt
title: Generate License JWT
sidebar_label: Generate License JWT
---


This will generate the license JWT for the provided &lt;License Code, Portal (Sub)Domain&gt; pair, signing it using the latest published Signing Key. In the process it will also consume a new license activation for the pair, if one does not already exist. This can also be used to re-generate the license JWT in case of: re-licensing of the same domain (maybe on a different machine), license expiration period extension.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| License Code | The license code to use to generate the license. | No | None |
| Domain | The (sub)domain to generate the license for. | No | None |
| Offline Activation | Boolean value specifying the type of activation to perform. | No | None |
| License Expiration Override | Strictly positive integer value. This is the amount, in minutes, when the license will expire. This can be used to override the normal behavior of the expiration logic. | No | None |
| Output Token Name | Contains the license payload in JWT format, base64 encoded, 3 dot-delimited segments.If an error occurs the [&lt;OutputTokenName&gt;:ErrorCode] and [&lt;OutputTokenName&gt;:ErrorMessage] will be available.Known ErrorCodes: 1 - Invalid LicenseCode provided. 2 - Provided License is not Active. 3 - Expired License provided. 4 - No more activations left for the License. | No | None |
