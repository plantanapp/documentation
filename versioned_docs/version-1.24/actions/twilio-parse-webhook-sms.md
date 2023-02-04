---
id: twilio-parse-webhook-sms
title: Twilio Parse Webhook SMS
sidebar_label: Twilio Parse Webhook SMS
---


Parse a Twilio SMS webhook when you receive an SMS. This action reads from the current request only.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Output Token | Define an output token name which will hold the information regarding received SMS. If this field is empty or whitespace, it will default to "Twilio".Outputs the following tokens: [&lt;OutputToken&gt;:MessageSid], [&lt;OutputToken&gt;:AccountSid], [&lt;OutputToken&gt;:MessagingServiceSid], [&lt;OutputToken&gt;:From], [&lt;OutputToken&gt;:To], [&lt;OutputToken&gt;:Body], [&lt;OutputToken&gt;:NumMedia], [&lt;OutputToken&gt;:FromCity], [&lt;OutputToken&gt;:FromCountry], [&lt;OutputToken&gt;:FromState], [&lt;OutputToken&gt;:FromZip], [&lt;OutputToken&gt;:ToCity], [&lt;OutputToken&gt;:ToCountry], [&lt;OutputToken&gt;:ToState], [&lt;OutputToken&gt;:ToZip]. Note that the localization tokens may not be available in all countries. Check Twilio documentation for more information. | No | None |
