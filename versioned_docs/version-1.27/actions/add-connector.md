---
id: add-connector
title: Add Connector
sidebar_label: Add Connector
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Working with Connectors`, `Tokens`, `JSON`

This action allows you to securely add a new entry (credential or connector) to the Credential Store for later usage, referencing it by connector or group and capturing the new entry’s ID in a named token for downstream actions. It is especially relevant when storing secrets, API keys, or other sensitive connection information in a secure and structured way.

## `Typical Use Cases`

* Store new API credentials securely for use with connector actions.
* Save third-party integration details at runtime for dynamic access.
* Capture and reference the identifier of a newly added connector for later updates or querying.
* Enhance automation scenarios where secrets must be generated and securely persisted via workflow.


## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
|------------------------|------------------------------------------------------------------------------------------------------------------|-----------------|---------------------------|----------|
| Connector Type | The type of connector/credential being saved. Dynamic list based on available connector types. | Yes | *empty string* | Yes |
| Connector Name | The display name for the entry. | Yes | *empty string* | Yes |
| Properties | List of additional name-value pairs to store as connector details/properties. | Yes | *empty set* | No |
| Dynamic Properties | JSON-formatted object of property values (overrides properties with the same name as in above Properties field). | Yes | *empty string* | No |
| EntryId Token Name | Token name to save the EntryId returned after the entry is created. Access via `[YourTokenName]`. | Yes | *empty string* | No |

### Parameter Details

- **Connector Type**: Select (or use a token/expression) for the type of credential. E.g., API Key, OAuth, etc. Required.
- **Connector Name**: Human-readable display name for this entry.
- **Properties**: Add one or more property name/value pairs as additional data for the connector type (can be used multiple times for multi-field credentials).
- **Dynamic Properties**: If provided, this JSON object should contain any property name/value pairs to add/override above. E.g. `{ "ApiKey": "123", "Region": "us-east" }`
- **EntryId Token Name**: Give a token name to capture the resulting entry’s ID, for downstream lookup or linking.

## `Output Parameters Reference`

| Parameter | Description |
|----------------------|------------------------------------------------------------------------------------------------|
| EntryId Token Name | The token in which the newly created connector's unique ID will be stored for further use. |

## `Security`

**Sensitive information:** Keep in mind that credentials and secrets stored using this action are persisted in the Credential Store, encrypted at rest—but always ensure only trusted processes and users can initiate such actions. Avoid exposing credential-entry IDs or their contents to unauthenticated interfaces.

## `How property merging works`

If you fill in both `Properties` (the name/value grid) and `Dynamic Properties` (JSON), any property defined in `Dynamic Properties` will override any property with the same name set in the grid.

**Example:**

- `Properties` grid: APIKey = valueA, Region = us
- `Dynamic Properties`: `{ "APIKey": "valueB", "Other": "xyz" }`

Result:
- APIKey = valueB
- Region = us
- Other = xyz

## `Examples`

### `1. Add a new API Key Credential`

This creates a connector entry named "Stripe Integration" in the Credential Store, provides an API key, and stores the entry's ID in token `[StripeCredentialId]`.

```json
{
"ActionType": "CredStore.AddConnectorEntry",
"Parameters": {
"TypeName": "Custom.APIKey",
"EntryName": "Stripe Integration",
"Properties": [
{
"PropertyName": "APIKey",
"PropertyValue": "sk_live_***********************"
}
],
"EntryIdTokenName": "StripeCredentialId"
}
}
```

### `2. Add OAuth connector with extra fields from JSON and dynamic tokenization`

Here, `Properties` sets basics, but `Dynamic Properties` (JSON) overrides/adds detail fields. The `[User:UserId]` token is used in the connector name.

```json
{
"ActionType": "CredStore.AddConnectorEntry",
"Parameters": {
"TypeName": "OAuth",
"EntryName": "AppAuth-[User:UserId]",
"Properties": [
{
"PropertyName": "ClientId",
"PropertyValue": "client123"
},
{
"PropertyName": "ClientSecret",
"PropertyValue": "secret456"
}
],
"PropertiesJson": "{ \"Scope\": \"read_write\", \"ClientSecret\": \"tokenOverride\" }",
"EntryIdTokenName": "OAuthEntryId"
}
}
```
*In the above: `ClientSecret` in JSON will replace value set in the grid.*

### `3. Add with only JSON Properties`

You can skip the Properties grid and use only JSON.

```json
{
"ActionType": "CredStore.AddConnectorEntry",
"Parameters": {
"TypeName": "BasicAuth",
"EntryName": "Test User Auth",
"PropertiesJson": "{ \"Username\": \"tester\", \"Password\": \"supersecure\" }",
"EntryIdTokenName": "BasicAuthId"
}
}
```

## `Best Practices & Tips`

* Store the entry ID into a sensible token for further workflow steps (e.g., `[MyApiCredentialId]`).
* Use expressions and tokens to generate entry names uniquely (e.g., include user IDs or timestamps if needed).
* Prefer using a JSON object if you have many dynamic or computed fields, for easier maintenance and clarity.
* Remember: sensitive data (keys, secrets, etc) only goes in the Credential Store, not in logs or plain tokens.

## `Troubleshooting`

- **Entry not saved/Invalid GroupId?** Ensure the connector group/type exists and the user has permission.
- **Properties missing?** Double-check for naming mismatches between grid and JSON.
- **Token not set?** The `EntryId Token Name` must be provided and referenced without square brackets for storage (e.g., `StripeCredentialId`, not `[StripeCredentialId]`, but referenced as `[StripeCredentialId]` later).

****
Revised 06/16/2025