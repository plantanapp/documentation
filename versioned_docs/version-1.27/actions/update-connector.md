---
id: update-connector
title: Update Connector
sidebar_label: Update Connector
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>  
> Skill Prerequisites: `Working with Connectors`, `Tokens`, `JSON`

This action updates an existing connector entry in the Credential Store with new or modified properties securely and efficiently. This is significantly useful when maintaining dynamic credentials, API keys, or any other sensitive connection details that require periodic updates without altering their identity in workflows.

## `Typical Use Cases`

* Refresh API credentials or tokens without disrupting workflow setups.
* Modify connection settings for third-party integrations in runtime.
* Update secure details dynamically in response to trigger events.
* Enhance workflow scenarios requiring credential updates without identifier change.

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
|-----------|-------------|-----------------|---------|----------|
| Connector | Reference to the connector or credential to be updated. Select from the list of existing connectors. | Yes | *empty string* | Yes |
| Properties | Set of updated name-value pairs representing details to be modified. | Yes | *empty set* | No |
| Dynamic Properties | JSON-format object containing property names and values. JSON values override properties specified in the Properties field. | Yes | *empty string* | No |

### Parameter Details

- **Connector**: Choose (or use a token/expression) for identifying the connector requiring updates. 
- **Properties**: Define or update existing connector details through name-value pairs (use multiple times if necessary).
- **Dynamic Properties**: Provide a JSON object for directly updating connector properties, with override precedence over identical names in the Properties field.

## `Output Parameters Reference`

No output parameters. The action assimilates updates directly to the specified connector.

## `Security`

**Sensitive operation:** As with all manipulations of credentials or secure data, ensure that access to this action is limited to trusted processes and users. Safeguard against unauthorized access to avoid credential breaches.

## `How property merging works`

When utilizing both `Properties` and `Dynamic Properties`, any property name present in the JSON object will take precedence over those defined in the Properties name-value grid.

**Example:**

- `Properties` grid: APIKey = oldValue, Endpoint = endpoint1
- `Dynamic Properties`: `{ "APIKey": "newValue", "Timeout": "60s" }`

Result:
- APIKey = newValue
- Endpoint = endpoint1
- Timeout = 60s

## `Examples`

### `1. Update an API Connector's Key and Timeout`

This example updates an existing API connector named "Twitter API" to refresh its API key and adjust the timeout duration.

```json
{
"ActionType": "Connectors.Update",
"Parameters": {
"EntryId": "twitterConnectorId",
"Properties": [
{
"PropertyName": "APIKey",
"PropertyValue": "new_api_key_123"
}
],
"PropertiesJson": "{ \"Timeout\": \"30s\" }"
}
}
```

### `2. Use Dynamic Properties for Comprehensive Updates`

In this example, only the `Dynamic Properties` are used to overhaul existing connector settings of an OAuth connection.

```json
{
"ActionType": "Connectors.Update",
"Parameters": {
"EntryId": "oauthConnectorId",
"PropertiesJson": "{ \"ClientId\": \"updatedClientId\", \"RetryAttempts\": \"5\" }"
}
}
```

## `Best Practices & Tips`

* Regularly update credentials as needed while maintaining their ID for smooth workflow operation.
* Leverage JSON for bulk or computed property updates for ease and clarity.
* Cross-check properties for precise updates, preventing inadvertent data overrides during activation.
* Implement stringent access controls to secure credential-related actions from unauthorized parties.

## `Troubleshooting`

- **Connector not updated?** Confirm provided `Connector` reference exists and user has update permissions.
- **Mismatched Properties?** Verify consistent naming between `Properties` and JSON entries.
- **Unexpected behavior?** Validate both Properties and Dynamic Properties for potential overrides or misconfigurations.

****
Revised 07/31/2025