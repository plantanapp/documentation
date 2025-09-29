---
id: index-behavior
title: Index Behavior
sidebar_label: Index Behavior
---

# Index Behavior

> Audience: [`Developers`](/audience.md#developers)
> 
> Skill Prerequisites: `Familiarity with Search Engine and Indexing`

The "Index Behavior" action is designed to trigger an immediate indexing of behavior within the Searchboost Module. This action is particularly useful in scenarios where real-time indexing is necessary to ensure that newly imported content is available for search without the typical 30-minute delay.

## Feature Introduction

The feature was introduced in Search version 05.25.21.

## Typical Use Cases

- Trigger immediate indexing after importing new content to improve search results quality in real-time.
- Ensure that dynamic changes in content are immediately reflected in search results.



## Input Parameter Reference

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Behavior ID | This is the Search Boost behavior ID. You can find this in Search Boost admin. | Yes | None | Yes |
| Scope | Select the indexing scope type. Options are Incremental or Full Reindex. | No | Incremental | Yes |
| Bypass Queue | Selecting this option indexes content immediately, bypassing the queue. Use with care. | No | False | No |
| Restart If Already Running | If the behavior is already under indexing, selecting this restarts the indexing. | No | False | No |

## Security

Care should be exercised when using the "Bypass Queue" parameter to avoid running too many processes in parallel, which could impact application performance.

## Examples

### Triggering Immediate Incremental Indexing

This example demonstrates how to trigger an immediate incremental indexing of a specific behavior using its Behavior ID.

```json
{
    "Title": "Index Behavior",
    "ActionType": "SearchBoost.IndexBehavior",
    "Parameters": {
        "BehaviorId": "12345",
        "ScopeType": "incremental",
        "BypassQueue": true
    }
}
```

### Full Reindex and Restart If Already Running

In some cases, you might want to perform a full reindex and ensure that indexing restarts if it is already running.

```json
{
    "Title": "Index Behavior",
    "ActionType": "SearchBoost.IndexBehavior",
    "Parameters": {
        "BehaviorId": "12345",
        "ScopeType": "full-reindex",
        "BypassQueue": false,
        "RestartIfAlreadyRunning": true
    }
}
```

The examples above demonstrate how to utilize the "Index Behavior" action in various scenarios, providing flexibility and control over search indexing operations.

****  
Revised 09/29/2025