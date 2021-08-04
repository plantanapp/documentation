---
id: stripe-get-event-details
title: Stripe Get Event Details
sidebar_label: Stripe Get Event Details
---


This action automatically verifies and outputs the event received by API Endpoint in a JSON format, for further actions you can either use the [RawInput] token which API Endpoint generates and represents the full data sent by Stripe, or the event JSON token that the action will populate and represents the event object. You must send back a 200 OK response in order to signal to Stripe that the event was received. Read the Stripe documentation and our action documentation.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Raw Json Input | The raw input received by API Endpoint. Can contain My Tokens. | Yes | None |
| Event Type Output Token | The name of the token in which the event type will be stored. | No | None |
| Event JSON Output Token | The name of the token in which the event JSON will be stored. | No | None |
