---
id: vies-vat-number-validator
title: VIES VAT Number Validator
sidebar_label: VIES VAT Number Validator
---


This action will validate a VAT Number based on the country code and VAT number. It will also generate the following tokens: [&lt;OutputTokenName&gt;] - which contains the JSON response from the VIES EU API, [&lt;OutputTokenName&gt;:IsValid] - the true/false result of the verification, [&lt;OutputTokenName&gt;:TraderName] - the name of the trader that was verified, [&lt;OutputTokenName&gt;:TraderAddress] - the address of the trader that was verified. 

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Trader Country Code | Required. The Country Code of the trader that is verified. Supports My Tokens. | Yes | None |
| Vat Number | Required. The VAT Number of the trader that is verified. Supports My Tokens. | Yes | None |
| Output Token | Output Token Name | No | None |
