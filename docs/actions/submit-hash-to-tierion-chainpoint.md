---
id: submit-hash-to-tierion-chainpoint
title: Submit hash to Tierion Chainpoint
sidebar_label: Submit hash to Tierion Chainpoint
---


This action submits the provided hash to three random Tierion Chainpoint Nodes and saves the results in the database with a Submitted state. It returns the submission id in the [&lt;OutputTokenName&gt;] token, which can then be used in the Check Proof Status to check for updates or in the Verify Full Proof to verify the proof.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| SHA256 String |  | No | None |
| Output Token Name |  | No | None |
