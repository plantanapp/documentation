---
id: index-rule
title: Index Rule
sidebar_label: Index Rule
---

# Index Rule

> Audience: [Platform Developers](audience.md#platform-developers)
>
> Skill Prerequisites: `Understanding of Search Engine Indexing`, `Familiarity with Tokens`, `Basic Knowledge of Background Processes`

The "Index Rule" action is designed to trigger an immediate indexing of a rule used by the SearchBoost Module. This is particularly useful in scenarios where new content has been added and an up-to-date index is necessary for optimal search results. The action operates asynchronously, meaning that the reindexing process happens in the background, allowing for uninterrupted operation.

## Typical Use Cases

- Immediate indexing after adding new training data to ensure users receive up-to-date search results.
- Triggering a background reindex process without manual intervention, especially during content import scenarios.


## Input Parameter Reference

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Behavior ID | The Search Boost behavior ID. You can find this in Search Boost admin. | Yes | N/A | Yes |
| Rule ID | The Search Boost rule ID. You can find this in Search Boost admin. | Yes | N/A | Yes |
| Scope | Select the indexing scope type (Incremental or Full Reindex). | No | Incremental | Yes |

## Output Parameters Reference

This action does not produce any direct output parameters as it operates in the background and returns immediately.

## Security

Ensure that the Behavior ID and Rule ID are validated inputs to prevent unauthorized access or manipulation. Only users with administrative access to the SearchBoost admin interface should have the capability to trigger this action.

## What is Indexing Scope?

The indexing scope determines how much of the data is reindexed:

- **Incremental**: Only new or updated content is indexed. This is the default option and is typically faster.
- **Full Reindex**: Clears existing index data and completely reindexes all content associated with the rule. This is more time-consuming and resource-intensive but ensures the index is fully up-to-date.

## Example

### Triggering a Full Reindex on a Specific Behavior and Rule

This example demonstrates how to use the **Index Rule** action to perform a full reindex on a specific behavior and rule.

```json
{
    "Title": "Index Rule",
    "ActionType": "SearchBoost.IndexRule",
    "Parameters": {
        "BehaviorId": "[Behavior:UniqueID]",
        "RuleId": "[Rule:UniqueID]",
        "ScopeType": "full-reindex"
    }
}
```

By executing this configuration, the specified SearchBoost behavior and rule will undergo a full reindex, ensuring all data is freshly indexed.

****

Revised 09/29/2025