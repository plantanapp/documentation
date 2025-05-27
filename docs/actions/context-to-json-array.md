---
id: context-to-json-array
title: Context to JSON Array
sidebar_label: Context to JSON Array
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

The **Context to JSON Array** action allows you to export all—or a filtered subset—of the current context (tokens available at execution time) into a Name/Value array in JSON format. This is especially useful for debugging, logging, or sending structured data to APIs.

## `Typical Use Cases`

* Debugging and inspecting which values are currently available in context ("Show me all my current tokens and their values").
* Preparing a payload for JSON-based APIs that expects arrays of Name/Value pairs.
* Auditing or logging the entire state of a workflow at a particular moment.
* Revealing "hidden" tokens you might not know are present to uncover context issues.

## `Related Actions`

| Action Name             | Description                                                       |
|------------------------ |-------------------------------------------------------------------|
| Context to JSON Object | Outputs context as a flat JSON object instead of an array. |

## `Input Parameter Reference`

| Parameter        | Description                                                                                                                                | Supports Tokens | Default                       | Required |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------------------------|----------|
| Store Result     | Token name to store the resulting array.                                                                                                   | Yes             |                               | Yes      |
| Include Prefixes | Enter a list of prefixes (one per line). Only tokens with names **starting with** these prefixes will be included. Leave empty for all.    | Yes             | (empty)                       | No       |
| Exclude Prefixes | Enter a list of prefixes (one per line). Tokens with names **starting with** these prefixes will be excluded. (eg. `_`, `$`, `QueryString`)| Yes             | `_` <br/> `$` <br/> `QueryString`| No       |

> **Tip:** Both Include and Exclude Prefixes support tokens and multiline values. Exclusion occurs after inclusion filtering.

## `Output Parameters Reference`

| Parameter   | Description                                                 |
|-------------|-------------------------------------------------------------|
| Store Result| The specified token name will contain the JSON array output.|

The output will be an array of objects like:
```json
[
  {"Name": "FirstName", "Value": "John"},
  {"Name": "LastName", "Value": "Doe"},
  ...
]
```

## `Security`

While primarily a debugging tool, exporting context may expose sensitive tokens. Avoid dumping context in production UIs or logs that end-users can access. Carefully use exclusion prefixes to avoid exposing session-specific, personally identifiable, or privileged tokens.

## `How It Works`

Upon execution, the action examines the form/workflow's context—all tokens and their current values. It applies inclusion/exclusion filters based on provided prefixes, then outputs an array of objects, each representing a token (its name and current value), serialized as JSON. This array is then stored in a token of your choosing.

## `Examples`

### `1. Debug: Display All Tokens as JSON Array`

Display all tokens from the current context after a button click on a form.

- **Steps:**
  1. Add the **Context to JSON Array** action to your button.
  2. Store the result in a token, eg: `AllTokens`.
  3. Add a Display Message action using `[AllTokens]` to show the raw JSON.

```json
{
  "Title": "Context to JSON Array",
  "ActionType": "ContextToJSONArray",
  "Parameters": {
    "StoreResultName": "AllTokens"
  }
}
```

The resulting message will show all names and their values as a JSON array.

---

### `2. Filter: Only Include Specific Fields, Exclude Internal Tokens`

Suppose you only care about tokens that start with `customer` and want to omit tokens used internally.

```json
{
  "Title": "Context to JSON Array",
  "ActionType": "ContextToJSONArray",
  "Parameters": {
    "StoreResultName": "CustomerTokensArray",
    "IncludePrefixes": "customer",
    "ExcludePrefixes": "_\n$"
  }
}
```

This will return only tokens like `customerName`, `customerEmail`, etc., ignoring internal/system tokens.

---

### `3. Inspect All Available Tokens for Debugging`

To see everything in context—even tokens you might not know about—temporarily remove all values from `Exclude Prefixes`.

```json
{
  "StoreResultName": "AllTokensUnfiltered",
  "ExcludePrefixes": "" // or omit parameter
}
```
You may find fields like `_TimezoneOffset` or `QueryString` variables become visible, revealing internal context structure.

---

## `Practical Debugging Example`

Suppose you add a dropdown field called `SendToDepartment` to a form. Using this action will show you not only `SendToDepartment`, but also `SendToDepartmentText`, `SendToDepartmentValue`, and `SendToDepartmentPath`—extra tokens generated by Action Form—but not always obvious or documented.

This helps you:
  * Understand what data is available for logic, calculations, or external API calls.
  * Quickly discover discrepancies between the tokens you expect and what is actually present.

## `Comparison: Context to JSON Array vs Context to JSON Object`

- **JSON Array:** Recommended if you want to loop through Name/Value pairs (useful when sending lists or for direct human inspection).
- **JSON Object:** Simpler for direct field lookups or when sending structured payloads to APIs expecting flat objects.

Choose the one most compatible with your target usage.

## `Troubleshooting and Tips`

- Paste the JSON into an online tool (e.g., [https://codebeautify.org/jsonviewer](https://codebeautify.org/jsonviewer)) to view it more clearly.
- Use **Include Prefixes** and **Exclude Prefixes** together for fine-grained filtering.
- Standard exclusions (`_`, `$`, `QueryString`) omit internal Action Form tokens and browser-supplied query strings.

---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

The **Context to JSON Array** action allows you to export all—or a filtered subset—of the current context (tokens available at execution time) into a Name/Value array in JSON format. This is especially useful for debugging, logging, or sending structured data to APIs.

## `Typical Use Cases`

* Debugging and inspecting which values are currently available in context ("Show me all my current tokens and their values").
* Preparing a payload for JSON-based APIs that expects arrays of Name/Value pairs.
* Auditing or logging the entire state of a workflow at a particular moment.
* Revealing "hidden" tokens you might not know are present to uncover context issues.

## `Related Actions`

| Action Name             | Description                                                       |
|------------------------ |-------------------------------------------------------------------|
| Context to JSON Object | Outputs context as a flat JSON object instead of an array. |

## `Input Parameter Reference`

| Parameter        | Description                                                                                                                                | Supports Tokens | Default                       | Required |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-------------------------------|----------|
| Include Prefixes | Enter a list of prefixes (one per line). Only tokens with names **starting with** these prefixes will be included. Leave empty for all.    | Yes             | (empty)                       | No       |
| Exclude Prefixes | Enter a list of prefixes (one per line). Tokens with names **starting with** these prefixes will be excluded. (eg. `_`, `$`, `QueryString`)| Yes             | `_` <br/> `$` <br/> `QueryString`| No       |

> **Tip:** Both Include and Exclude Prefixes support tokens and multiline values. Exclusion occurs after inclusion filtering.

## `Output Parameters Reference`

| Parameter   | Description                                                 |
|-------------|-------------------------------------------------------------|
| Store Result| The specified token name will contain the JSON array output.|

The output will be an array of objects like:
```json
[
  {"Name": "FirstName", "Value": "John"},
  {"Name": "LastName", "Value": "Doe"},
  ...
]
```

## `Security`

While primarily a debugging tool, exporting context may expose sensitive tokens. Avoid dumping context in production UIs or logs that end-users can access. Carefully use exclusion prefixes to avoid exposing session-specific, personally identifiable, or privileged tokens.

## `How It Works`

Upon execution, the action examines the form/workflow's context—all tokens and their current values. It applies inclusion/exclusion filters based on provided prefixes, then outputs an array of objects, each representing a token (its name and current value), serialized as JSON. This array is then stored in a token of your choosing.

## `Examples`
The following examples can be imported anywhere action Import is available.

### `1. Debug: Display All Tokens as JSON Array`

Display all tokens from the current context after a button click on a form.

- **Steps:**
  1. Add the **Context to JSON Array** action to your button.
  2. Store the result in a token, eg: `AllTokens`.
  3. Add a Display Message action using `[AllTokens]` to show the raw JSON.

```json
{
  "Title": "Context to JSON Array",
  "ActionType": "ContextToJSONArray",
  "Parameters": {
    "StoreResultName": "AllTokens"
  }
}
```

The resulting message will show all names and their values as a JSON array.



### `2. Filter: Only Include Specific Fields, Exclude Internal Tokens`

Suppose you only care about tokens that start with `customer` and want to omit tokens used internally.

```json
{
  "Title": "Context to JSON Array",
  "ActionType": "ContextToJSONArray",
  "Parameters": {
    "StoreResultName": "CustomerTokensArray",
    "IncludePrefixes": "customer",
    "ExcludePrefixes": "_\n$"
  }
}
```

This will return only tokens like `customerName`, `customerEmail`, etc., ignoring internal/system tokens.



### `3. Inspect All Available Tokens for Debugging`

To see everything in context—even tokens you might not know about—temporarily remove all values from `Exclude Prefixes`.

```json
{
  "StoreResultName": "AllTokensUnfiltered",
  "ExcludePrefixes": "" // or omit parameter
}
```
You may find fields like `_TimezoneOffset` or `QueryString` variables become visible, revealing internal context structure.



## `Practical Debugging Example`

Suppose you add a dropdown field called `SendToDepartment` to a form. Using this action will show you not only `SendToDepartment`, but also `SendToDepartment:Text`, `SendToDepartment:Value`, and `SendToDepartment:Path`—extra tokens generated by Action Form—but not always obvious or visible.

This helps you:
  * Understand what data is available for logic, calculations, or external API calls.
  * Quickly discover discrepancies between the tokens you expect and what is actually present.

## `Comparison: Context to JSON Array vs Context to JSON Object`

- **JSON Array:** Recommended if you want to loop through Name/Value pairs (useful when sending lists or for direct human inspection).
- **JSON Object:** Simpler for direct field lookups or when sending structured payloads to APIs expecting flat objects.

Choose the one most compatible with your target usage.

## `Troubleshooting and Tips`

- Paste the JSON into an online tool (e.g., [https://codebeautify.org/jsonviewer](https://codebeautify.org/jsonviewer)) to view it more clearly.
- Use **Include Prefixes** and **Exclude Prefixes** together for fine-grained filtering.
- Standard exclusions (`_`, `$`, `QueryString`) omit internal Action Form tokens and browser-supplied query strings.



For questions or advanced uses, contact [Plant an App Support](https://plantanapp.com/support/).