---
id: verify-full-proof
title: Verify Full Proof
sidebar_label: Verify Full Proof
---


This action calls one of the Chainpoint Nodes to verify a Full Proof. It also generates the following tokens: [&lt;OutputTokenName&gt;] - which contains the JSON response from the Node, [&lt;OutputTokenName&gt;:IsValid] - the true/false result of the case insensitive comparison of the hash from the response with the provided hash in SHA256 Hash to validate, [&lt;OutputTokenName&gt;:Hash], [&lt;OutputTokenName&gt;:NodeSubmitAt], [&lt;OutputTokenName&gt;:CoreSubmitAt] and [&lt;OutputTokenName&gt;:HashStatus]. If you try to verify a submission that is not in the FullProof state, the action will throw an error.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Submitted Hash Id | The Id returned by the SubmitHash action. Supports tokens, but the value must evaluate to an integer. | No | None |
| SHA256 Hash to validate |  | No | None |
| Output Token Name |  | No | None |
