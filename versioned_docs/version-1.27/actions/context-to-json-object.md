---
id: context-to-json-object
title: Context to JSON Object
sidebar_label: Context to JSON Object
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

The **Context to JSON Object** action exports all—or a filtered set—of tokens from the current context to a flat (or nested) JSON object. This provides direct "field: value" mapping, useful for integrations, storage, advanced debugging, or dynamic API payloads.

## `Typical Use Cases`

* Easily export current context as a JSON object for API requests or webhooks.
* Debug and inspect available context tokens and their current values as a single structured object.
* Store the entire app/workflow state as a single object in a database or log.
* Create structured variables to pass between actions or send to external systems (especially when nested objects are required).

## `Related Actions`

| Action Name                  | Description                                                               |
|------------------------------|---------------------------------------------------------------------------|
| Context to JSON Array | Outputs context as an array of Name/Value pairs (instead of object).  |
  |

## `Input Parameter Reference`

| Parameter        | Description                                                                                                                                    | Supports Tokens | Default                | Required |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------|----------|
| Store Result     | Token name to store the resulting JSON object.                                                                                                 | Yes             |                        | Yes      |
| Include Prefixes | Newline-separated prefixes—only tokens starting with these will be included. Leave empty to include all.                                       | Yes             | (empty)                | No       |
| Exclude Prefixes | Newline-separated prefixes—tokens starting with these will be excluded. Use to filter out internal/sensitive/system tokens.                    | Yes             | `_` <br/> `$` <br/> `QueryString` | No       |
| Generate Nested Object | If enabled, subtokens (like `foo.bar`) become nested properties within the JSON. If not, all fields are flat.                            | No              | `false`                | No       |

## `Output Parameters Reference`

| Parameter   | Description                                                        |
|-------------|--------------------------------------------------------------------|
| Store Result| The specified token name will hold the serialized JSON object.      |

The output token contains a JSON string such as:
```json
{
  "FirstName": "Jane",
  "LastName": "Doe",
  "SendToDepartment": "SLS"
}
```
If "Generate Nested Object" is enabled:
```json
{
  "Customer": {
    "FirstName": "Dale",
    "LastName": "Warner"
  },
  "SendToDepartment": "SLS"
}
```

## `Security`

**Caution:** The output might contain sensitive, user-provided, or system-level tokens. Avoid exposing the JSON directly to end-users in production or public logs. Use exclusion prefixes to filter out confidential information as needed.

## `How It Works`

The action reviews current tokens in context, applies any inclusions/exclusions, and builds a flat (or nested) JSON object. This object is then stored as a JSON string in the token name you specify.

- **Flat** mode (default): All tokens are top-level properties, e.g., `"FirstName": "Dale"`.
- **Nested** mode: Tokens named `customer.firstName` become `{ "customer": { "firstName": ... } }`.

This makes it easy to prepare payloads for APIs or view app-wide state at any moment.

## `Examples`

### `1. Debug: Output All Tokens as a JSON Object`

Quickly visualize all context tokens and their values.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "AllTokensObj"
  }
}
```

Add a Display Message or Log Event with `[AllTokensObj]` to inspect the output.

---

### `2. Include/Exclude: Only Export Customer Fields, Omit Internals`

Export only user-facing tokens for external use.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "CustomerData",
    "IncludePrefixes": "customer",
    "ExcludePrefixes": "_\n$"
  }
}
```

---

### `3. Generate Nested Object for Structured Output`

Enable nested object output for more advanced API payloads.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "StructuredData",
    "NestedObject": true
  }
}
```

This turns `customer.firstName`, `customer.lastName` into:
```json
{
  "customer": {
    "firstName": "Dale",
    "lastName": "Warner"
  }
}
```

---

### `4. Output All Context Fields, Including System Tokens (Debug Only)`

For advanced debugging, remove all prefixes from Exclude Prefixes:
```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "Everything",
    "ExcludePrefixes": ""
  }
}
```
You’ll see internal tokens, such as `_TimezoneOffset`, `QueryString`, etc.

---

## `Comparison: Context to JSON Array vs. Context to JSON Object`

- **Use JSON Object:** When a "field: value" structure is needed (APIs, databases, flat UI).
- **Use JSON Array:** When you need to iterate all pairs in sequence, or for APIs expecting arrays.

If you need nested data structures, enable "Generate Nested Object".

## `Troubleshooting and Tips`

- Paste the output of `[YourToken]` into [https://codebeautify.org/jsonviewer](https://codebeautify.org/jsonviewer) for readable and inspectable JSON.
- Use **Include Prefixes** and **Exclude Prefixes** for precise filtering.
- "Generate Nested Object" is especially useful for RESTful APIs that require nested JSON payloads.
- Use the default exclusions to avoid unnecessary or sensitive technical fields.

---

For more advanced scenarios or questions, [Plant an App Support](https://plantanapp.com/support/) is available to help.


---

---
id: context-to-json-object
title: Context to JSON Object
sidebar_label: Context to JSON Object
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

The **Context to JSON Object** action exports all—or a filtered set—of tokens from the current context to a flat (or nested) JSON object. This provides direct "field: value" mapping, useful for integrations, storage, advanced debugging, or dynamic API payloads.

## `Typical Use Cases`

* Easily export current context as a JSON object for API requests or webhooks.
* Debug and inspect available context tokens and their current values as a single structured object.
* Store the entire app/workflow state as a single object in a database or log.
* Create structured variables to pass between actions or send to external systems (especially when nested objects are required).

## `Related Actions`

| Action Name                  | Description                                                               |
|------------------------------|---------------------------------------------------------------------------|
| Context to JSON Array | Outputs context as an array of Name/Value pairs (instead of object).  |
  |

## `Input Parameter Reference`

| Parameter        | Description                                                                                                                                    | Supports Tokens | Default                | Required |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------|----------|
| Store Result     | Token name to store the resulting JSON object.                                                                                                 | Yes             |                        | Yes      |
| Include Prefixes | Newline-separated prefixes—only tokens starting with these will be included. Leave empty to include all.                                       | Yes             | (empty)                | No       |
| Exclude Prefixes | Newline-separated prefixes—tokens starting with these will be excluded. Use to filter out internal/sensitive/system tokens.                    | Yes             | `_` <br/> `$` <br/> `QueryString` | No       |
| Generate Nested Object | If enabled, subtokens (like `foo.bar`) become nested properties within the JSON. If not, all fields are flat.                            | No              | `false`                | No       |

## `Output Parameters Reference`

| Parameter   | Description                                                        |
|-------------|--------------------------------------------------------------------|
| Store Result| The specified token name will hold the serialized JSON object.      |

The output token contains a JSON string such as:
```json
{
  "FirstName": "Jane",
  "LastName": "Doe",
  "SendToDepartment": "SLS"
}
```
If "Generate Nested Object" is enabled:
```json
{
  "Customer": {
    "FirstName": "Dale",
    "LastName": "Warner"
  },
  "SendToDepartment": "SLS"
}
```

## `Security`

**Caution:** The output might contain sensitive, user-provided, or system-level tokens. Avoid exposing the JSON directly to end-users in production or public logs. Use exclusion prefixes to filter out confidential information as needed.

## `How It Works`

The action reviews current tokens in context, applies any inclusions/exclusions, and builds a flat (or nested) JSON object. This object is then stored as a JSON string in the token name you specify.

- **Flat** mode (default): All tokens are top-level properties, e.g., `"FirstName": "Dale"`.
- **Nested** mode: Tokens named `customer.firstName` become `{ "customer": { "firstName": ... } }`.

This makes it easy to prepare payloads for APIs or view app-wide state at any moment.

## `Examples`

### `1. Debug: Output All Tokens as a JSON Object`

Quickly visualize all context tokens and their values.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "AllTokensObj"
  }
}
```

Add a Display Message or Log Event with `[AllTokensObj]` to inspect the output.

---

### `2. Include/Exclude: Only Export Customer Fields, Omit Internals`

Export only user-facing tokens for external use.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "CustomerData",
    "IncludePrefixes": "customer",
    "ExcludePrefixes": "_\n$"
  }
}
```

---

### `3. Generate Nested Object for Structured Output`

Enable nested object output for more advanced API payloads.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "StructuredData",
    "NestedObject": true
  }
}
```

This turns `customer.firstName`, `customer.lastName` into:
```json
{
  "customer": {
    "firstName": "Dale",
    "lastName": "Warner"
  }
}
```

---

### `4. Output All Context Fields, Including System Tokens (Debug Only)`

For advanced debugging, remove all prefixes from Exclude Prefixes:
```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "Everything",
    "ExcludePrefixes": ""
  }
}
```
You’ll see internal tokens, such as `_TimezoneOffset`, `QueryString`, etc.

---

## `Comparison: Context to JSON Array vs. Context to JSON Object`

- **Use JSON Object:** When a "field: value" structure is needed (APIs, databases, flat UI).
- **Use JSON Array:** When you need to iterate all pairs in sequence, or for APIs expecting arrays.

If you need nested data structures, enable "Generate Nested Object".

## `Troubleshooting and Tips`

- Paste the output of `[YourToken]` into [https://codebeautify.org/jsonviewer](https://codebeautify.org/jsonviewer) for readable and inspectable JSON.
- Use **Include Prefixes** and **Exclude Prefixes** for precise filtering.
- "Generate Nested Object" is especially useful for RESTful APIs that require nested JSON payloads.
- Use the default exclusions to avoid unnecessary or sensitive technical fields.

---

---
id: context-to-json-object
title: Context to JSON Object
sidebar_label: Context to JSON Object
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

The **Context to JSON Object** action exports all—or a filtered set—of tokens from the current context to a flat (or nested) JSON object. This provides direct "field: value" mapping, useful for integrations, storage, advanced debugging, or dynamic API payloads.

## `Typical Use Cases`

* Easily export current context as a JSON object for API requests or webhooks.
* Debug and inspect available context tokens and their current values as a single structured object.
* Store the entire app/workflow state as a single object in a database or log.
* Create structured variables to pass between actions or send to external systems (especially when nested objects are required).

## `Related Actions`

| Action Name                  | Description                                                               |
|------------------------------|---------------------------------------------------------------------------|
| Context to JSON Array | Outputs context as an array of Name/Value pairs (instead of object).  |
  |

## `Input Parameter Reference`

| Parameter        | Description                                                                                                                                    | Supports Tokens | Default                | Required |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------|----------|
| Store Result     | Token name to store the resulting JSON object.                                                                                                 | Yes             |                        | Yes      |
| Include Prefixes | Newline-separated prefixes—only tokens starting with these will be included. Leave empty to include all.                                       | Yes             | (empty)                | No       |
| Exclude Prefixes | Newline-separated prefixes—tokens starting with these will be excluded. Use to filter out internal/sensitive/system tokens.                    | Yes             | `_` <br/> `$` <br/> `QueryString` | No       |
| Generate Nested Object | If enabled, subtokens (like `foo.bar`) become nested properties within the JSON. If not, all fields are flat.                            | No              | `false`                | No       |

## `Output Parameters Reference`

| Parameter   | Description                                                        |
|-------------|--------------------------------------------------------------------|
| Store Result| The specified token name will hold the serialized JSON object.      |

The output token contains a JSON string such as:
```json
{
  "FirstName": "Jane",
  "LastName": "Doe",
  "SendToDepartment": "SLS"
}
```
If "Generate Nested Object" is enabled:
```json
{
  "Customer": {
    "FirstName": "Dale",
    "LastName": "Warner"
  },
  "SendToDepartment": "SLS"
}
```

## `Security`

**Caution:** The output might contain sensitive, user-provided, or system-level tokens. Avoid exposing the JSON directly to end-users in production or public logs. Use exclusion prefixes to filter out confidential information as needed.

## `How It Works`

The action reviews current tokens in context, applies any inclusions/exclusions, and builds a flat (or nested) JSON object. This object is then stored as a JSON string in the token name you specify.

- **Flat** mode (default): All tokens are top-level properties, e.g., `"FirstName": "Dale"`.
- **Nested** mode: Tokens named `customer.firstName` become `{ "customer": { "firstName": ... } }`.

This makes it easy to prepare payloads for APIs or view app-wide state at any moment.

## `Examples`

### `1. Debug: Output All Tokens as a JSON Object`

Quickly visualize all context tokens and their values.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "AllTokensObj"
  }
}
```

Add a Display Message or Log Event with `[AllTokensObj]` to inspect the output.

---

### `2. Include/Exclude: Only Export Customer Fields, Omit Internals`

Export only user-facing tokens for external use.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "CustomerData",
    "IncludePrefixes": "customer",
    "ExcludePrefixes": "_\n$"
  }
}
```

---

### `3. Generate Nested Object for Structured Output`

Enable nested object output for more advanced API payloads.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "StructuredData",
    "NestedObject": true
  }
}
```

This turns `customer.firstName`, `customer.lastName` into:
```json
{
  "customer": {
    "firstName": "Dale",
    "lastName": "Warner"
  }
}
```

---

### `4. Output All Context Fields, Including System Tokens (Debug Only)`

For advanced debugging, remove all prefixes from Exclude Prefixes:
```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "Everything",
    "ExcludePrefixes": ""
  }
}
```
You’ll see internal tokens, such as `_TimezoneOffset`, `QueryString`, etc.

---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

The **Context to JSON Object** action exports all—or a filtered set—of tokens from the current context to a flat (or nested) JSON object. This provides direct "field: value" mapping, useful for integrations, storage, advanced debugging, or dynamic API payloads.

## `Typical Use Cases`

* Easily export current context as a JSON object for API requests or webhooks.
* Debug and inspect available context tokens and their current values as a single structured object.
* Store the entire app/workflow state as a single object in a database or log.
* Create structured variables to pass between actions or send to external systems (especially when nested objects are required).

## `Related Actions`

| Action Name                  | Description                                                               |
|------------------------------|---------------------------------------------------------------------------|
| Context to JSON Array | Outputs context as an array of Name/Value pairs (instead of object).  |
  |

## `Input Parameter Reference`

| Parameter        | Description                                                                                                                                    | Supports Tokens | Default                | Required |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------------|----------|
| Include Prefixes | Newline-separated prefixes—only tokens starting with these will be included. Leave empty to include all.                                       | Yes             | (empty)                | No       |
| Exclude Prefixes | Newline-separated prefixes—tokens starting with these will be excluded. Use to filter out internal/sensitive/system tokens.                    | Yes             | `_` <br/> `$` <br/> `QueryString` | No       |
| Generate Nested Object | If enabled, subtokens (like `foo.bar`) become nested properties within the JSON. If not, all fields are flat.                            | No              | `false`                | No       |

## `Output Parameters Reference`

| Parameter   | Description                                                        |
|-------------|--------------------------------------------------------------------|
| Store Result| The specified token name will hold the serialized JSON object.      |

The output token contains a JSON string such as:
```json
{
  "FirstName": "Jane",
  "LastName": "Doe",
  "SendToDepartment": "SLS"
}
```
If "Generate Nested Object" is enabled:
```json
{
  "Customer": {
    "FirstName": "Dale",
    "LastName": "Warner"
  },
  "SendToDepartment": "SLS"
}
```

## `Security`

**Caution:** The output might contain sensitive, user-provided, or system-level tokens. Avoid exposing the JSON directly to end-users in production or public logs. Use exclusion prefixes to filter out confidential information as needed.

## `How It Works`

The action reviews current tokens in context, applies any inclusions/exclusions, and builds a flat (or nested) JSON object. This object is then stored as a JSON string in the token name you specify.

- **Flat** mode (default): All tokens are top-level properties, e.g., `"FirstName": "Dale"`.
- **Nested** mode: Tokens named `customer.firstName` become `{ "customer": { "firstName": ... } }`.

This makes it easy to prepare payloads for APIs or view app-wide state at any moment.

## `Examples`
The following examples can be imported anywhere action Import is available.

### `1. Debug: Output All Tokens as a JSON Object`

Quickly visualize all context tokens and their values.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "AllTokensObj"
  }
}
```

Add a Display Message or Log Event with `[AllTokensObj]` to inspect the output.



### `2. Include/Exclude: Only Export Customer Fields, Omit Internals`

Export only user-facing tokens for external use.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "CustomerData",
    "IncludePrefixes": "customer",
    "ExcludePrefixes": "_\n$"
  }
}
```



### `3. Generate Nested Object for Structured Output`

Enable nested object output for more advanced API payloads.

```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "StructuredData",
    "NestedObject": true
  }
}
```

This turns `customer.firstName`, `customer.lastName` into:
```json
{
  "customer": {
    "firstName": "Dale",
    "lastName": "Warner"
  }
}
```



### `4. Output All Context Fields, Including System Tokens (Debug Only)`

For advanced debugging, remove all prefixes from Exclude Prefixes:
```json
{
  "Title": "Context to JSON Object",
  "ActionType": "ContextToJSONObject",
  "Parameters": {
    "StoreResultName": "Everything",
    "ExcludePrefixes": ""
  }
}
```
You’ll see internal tokens, such as `_TimezoneOffset`, `QueryString`, etc.



## `Comparison: Context to JSON Array vs. Context to JSON Object`

- **Use JSON Object:** When a "field: value" structure is needed (APIs, databases, flat UI).
- **Use JSON Array:** When you need to iterate all pairs in sequence, or for APIs expecting arrays.

If you need nested data structures, enable "Generate Nested Object".

## `Troubleshooting and Tips`

- Paste the output of `[YourToken]` into [https://codebeautify.org/jsonviewer](https://codebeautify.org/jsonviewer) for readable and inspectable JSON.
- Use **Include Prefixes** and **Exclude Prefixes** for precise filtering.
- "Generate Nested Object" is especially useful for RESTful APIs that require nested JSON payloads.
- Use the default exclusions to avoid unnecessary or sensitive technical fields.

