---
id: check-proof-status
title: Check Proof Status
sidebar_label: Check Proof Status
---


This action allows you to check for the proof status on the Chainpoint Nodes where the hash was submitted. If this action is called for a submission with status FullProof it will not call any node for updates, it will only return the existing status (FullProof). It also generates two tokens: [&lt;OutputTokenName&gt;:Status] and [&lt;OutputTokenName&gt;:Proof].

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Submitted Hash Id | The Id returned by the SubmitHash action. Supports tokens, but the value must evaluate to an integer. | No | None |
| Output Token Name |  | No | None |
