---
id: generate-csr
title: Generate CSR
sidebar_label: Generate CSR
---


This action will generate CSR which you can use to obtain a SSL certificate from a CA. Use the following tokens: [&lt;OutputTokenName&gt;:Csr], [&lt;OutputTokenName&gt;:PrivateKey], [&lt;OutputTokenName&gt;:PublicKey]

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Common Name | Specify a certificate Common Name. For example, to secure https://www.example.com, your common name must be www.example.com or *.example.com for a wildcard certificate. | No | None |
| Country | Specify a country. | No | None |
| State | Specify the state | No | None |
| City | Specify the city where your organization is legally located. | No | None |
| Company | Specify the company. The exact legal name of your organization, (e.g: MyCompany, Inc.) If you do not have a legal registered organization name, you should enter your own full name here. | No | None |
| Organizational Unit | Specify the Organizational Unit. You can leave this field blank. This is the department within your organization that you want to appear on the certificate. It will be listed in the certificate's subject as Organizational Unit, or "OU". Common examples: Web Administration, Web Security, or Marketing | No | None |
| Email Address | Specify an Email address. | No | None |
| Output Token Name | Specify an output token which will hold the information. | No | None |
