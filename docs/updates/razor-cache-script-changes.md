---
id: razor-cache-script-changes
title: Razor Cache Script Changes
sidebar_label: Razor Cache Script Changes
---

# Razor Cache Script Changes – v1.28 Upgrade

> Audience: [`Developers`](/audience.md#developers)  
>
> Skill Prerequisites: `C#`, `Razor Scripts`, `Caching`

## What Changed

### Cache Key Format Alteration

- **Old Format (v1.27):** `avt.MyTokens.Token.mytok.*`
- **Current Format (v1.28):** `paa:tokens:results.*`


****

## Before / After Code Example

### Before (v1.27)

```csharp
// Old key prefix
string key = cacheItem.Key.ToString();
if (key.StartsWith("avt.MyTokens.Token.mytok."))
{
    // Value returned directly
    string value = cacheItem.Value.ToString();
}
```

### After (v1.28)


```csharp
// New key prefix
string key = cacheItem.Key != null ? cacheItem.Key.ToString() : "";
if (key.StartsWith("paa:tokens:results"))
{
    // Value is stored directly again
    string value = cacheItem.Value != null
        ? cacheItem.Value.ToString()
        : "";
}
```

## Summary for Clients

- Update all Razor scripts reading cache items by:

  - Replacing old key prefixes with paa:tokens:results.
  - Continuing to use .ToString() to retrieve token values.

These changes ensure Razor scripts remain compatible with the current v1.28 behavior.

Revised 12/29/2025