---
id: remove-records
title: Remove Records
sidebar_label: Remove Records
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)

> Skill Prerequisites: `Understanding of Tokens`, `Search Boost Knowledge`

The "Remove Records" action in Plant an App enables users to trigger immediate indexing of a behavior using the Search Boost module. This is particularly useful for scenarios that require real-time updates to indexed data.

## `Typical Use Cases`

- To remove certain indexed records based on specific filters or criteria.
- To ensure the search index reflects the most current data by clearing outdated or unnecessary entries.
- To maintain optimal search performance by managing indexed content efficiently.

## `Related Actions`

| Action Name | Description |
| ----------- | ----------- |
| Perform Search | Executes a search based on specified criteria within a behavior. |
| Index Behavior | Triggers indexing for behaviors to update the search index. |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Behavior ID | This is the Search Boost behavior ID for which records need to be removed. You can find this in Search Boost admin. | Yes | N/A | Yes |
| Filters | Optionally, filter records to be deleted based on properties of the Search index. | Yes | N/A | No |
| Continue On Error | If true, subsequent actions will execute even if this action encounters an error. | No | False | No |
| On Error | Actions that will execute if an error is caught. | No | N/A | No |

## `Output Parameters Reference`

This action does not have direct output parameters but modifies the state of the index by removing specified records.

## `Security`

Care must be taken to ensure that only authorized users can execute this action, as it impacts the search index directly. It's essential to implement appropriate checks and validation to avoid accidental or malicious data removal.

## `Examples`

### `1. Basic Records Removal`

This demonstrates the removal of records from a behavior without applying any filters.

```json
{
    "Title": "Remove Records",
    "ActionType": "RemoveRecords",
    "Parameters": {
        "BehaviorId": "123456",
        "ContinueOnError": false
    }
}
```

### `2. Filtered Records Removal`

This example removes records based on specified filters, targeting specific criteria within the index.

```json
{
    "Title": "Remove Records with Filters",
    "ActionType": "RemoveRecords",
    "Parameters": {
        "BehaviorId": "789012",
        "Filters": [
            {
                "Name": "Status",
                "Value": "Inactive\nArchived"
            }
        ],
        "ContinueOnError": true
    }
}
```

### `3. Handling Errors Gracefully`

Illustrating the use of "On Error" to execute fallback actions if the removal process encounters an error.

```json
{
    "Title": "Remove Records with Error Handling",
    "ActionType": "RemoveRecords",
    "Parameters": {
        "BehaviorId": "345678",
        "ContinueOnError": false,
        "OnError": {
            "Actions": [
                {
                    "Title": "Log Error",
                    "ActionType": "LogMessage",
                    "Parameters": {
                        "Message": "[ExceptionMessage]"
                    }
                }
            ]
        }
    }
}
```

## Conclusion

The "Remove Records" action is a powerful tool for managing and optimizing the Search Boost index in real-time scenarios. By understanding its parameters and security implications, users can effectively control the indexing process and maintain accurate search results.

Revised 09/29/2025