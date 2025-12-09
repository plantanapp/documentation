---
id: delete-connector
title: Delete Connector
sidebar_label: Delete Connector
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Working with Connectors`, `Tokens`

The **Delete Connector** action offers a streamlined method to securely remove an existing entry from the Credential Store. This is particularly relevant in scenarios where entries, such as API credentials or other sensitive information, need to be managed efficiently.

## `Typical Use Cases`

* Remove outdated or inactive API credentials or connectors from the Credential Store.
* Handle credential lifecycle management by deleting temporary or deprecated entries.
* Automate cleanup processes within workflows to ensure data hygiene.

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Entry Id | The Entry Id of the connector entry you want to delete. Can contain form tokens (for example [FirstName]) and Tokens. | Yes | `empty string` | Yes |

## `Output Parameters Reference`

This action does not produce any output parameters.

## `Security`

**Caution:** Ensure that only trusted processes and authenticated users can initiate this action. Deleting a connector entry will permanently remove it from the Credential Store and is irreversible.

## `Implementation Details`

The action utilizes the `ConnectorStoreService` within its implementation to execute the deletion of the connector entry based on the provided Entry Id. It throws an exception if the deletion fails, ensuring that issues can be caught and addressed effectively.

## `Examples`

### `1. Delete a Connector Entry by Entry Id`

In this example, an entry with a specific Entry Id is deleted from the Credential Store.

```json
{
    "ActionType": "CredStore.DeleteEntry",
    "Parameters": {
        "EntryId": "[SpecificEntryId]"
    }
}
```

Ensure `[SpecificEntryId]` is correctly set to identify the entry you wish to remove. This can be a static value or a dynamic token evaluated during the execution.

## `Best Practices & Tips`

* Always validate the `Entry Id` to ensure it refers to the correct entry intended for deletion.
* Implement logging or notifications if needed, to track deletion activities for auditing purposes.
* In workflows that involve deleting entries, consider adding confirmation steps or conditions to prevent accidental deletions.

## `Troubleshooting`

- **Error: Invalid Entry Id?** Double-check that the Entry Id exists and is correctly formatted. Ensure the entry is not already deleted.
- **Entry still appears after deletion?** Validate the workflow execution path and ensure no errors occurred during the transaction.

****

Revised 07/31/2025