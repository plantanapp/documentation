---
id: install-certificate
title: Install Certificate
sidebar_label: Install Certificate
---

Not available in: Automation.


This action will install a SSL certificate from a CA. Can be either a PFX file, or crt file, with an associated private key and it's CA certificates. This will output [&lt;OutputTokenName&gt;:Subject] which is the name of the certificate and [&lt;OutputTokenName&gt;:Thumbprint] which is an unique identifier for the PFX file. Also, you can use [&lt;OutputTokenName&gt;:FriendlyName], [&lt;OutputTokenName&gt;:NotAfter], [&lt;OutputTokenName&gt;:NotBefore], [&lt;OutputTokenName&gt;:Issuer], [&lt;OutputTokenName&gt;:SAN]. All times are displayed in UTC times!

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Certificate File Identifier | Specify a file ID or a portal relative path for the uploaded certificate. Once this is used, it will be deleted by this action. Can contain form tokens (for example [FirstName]) and My Tokens | Yes | None |
| Certificate Password | Specify a password if any, or leave this empty. PFX files are usually secured with a password. For CRT files this password is not required, but will be used to create a PFX from it and secure it. Can contain form tokens (for example [FirstName]) and My Tokens | Yes | None |
| CA Certificate | For "CRT" certificates, specify the content of the CA certificates files. This may look like "-----BEGIN CERTIFICATE----- etc. -----END CERTIFICATE----- -----BEGIN CERTIFICATE----- etc. -----END CERTIFICATE-----". Can contain form tokens (for example [FirstName]) and My Tokens | Yes | None |
| Certificate Private Key | Specify the private key of the certificate used when the CSR was generated. This is used only for other certificate types than ".pfx" (like ".crt" files) and looks like "-----BEGIN RSA PRIVATE KEY----- etc. -----END RSA PRIVATE KEY-----". Can contain form tokens (for example [FirstName]) and My Tokens | Yes | None |
| Output Token Name | Give a base name to the tokens that will hold the information outputted by this action. | No | None |
