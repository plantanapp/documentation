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

- **Old Format:** `avt.MyTokens.Token.mytok.*`
- **New Format:** `paa:tokens:results.*`

### Token Values Wrapped in `TokenValue` Objects

- Previously, the `.ToString()` method returned the actual token value.
- Now, the value resides within the `Value` property of the cached object.
- Scripts need to access the `.Value` property instead of relying on `.ToString()` for retrieving values.


****

## Before / After Code Example

### Before (v1.27)

```csharp
// Old key prefix
string key = cacheItem.Key.ToString();
if (key.StartsWith("avt.MyTokens.Token.mytok."))
{
    // Old method: value returned directly
    string value = cacheItem.Value.ToString();
}
```

### After (v1.28)

```csharp
// New key prefix
string key = cacheItem.Key != null ? cacheItem.Key.ToString() : "";
if (key.StartsWith("paa:tokens:results"))
{
    string value = "";

    // Access the Value property of TokenValue
    object rawValue = cacheItem.Value;
    if (rawValue != null)
    {
        var prop = rawValue.GetType().GetProperty("Value");
        if (prop != null)
        {
            var val = prop.GetValue(rawValue, null);
            if (val != null)
            {
                value = val.ToString();
            }
        }
    }
}
```

****

## Summary for Clients

- **Update all Razor scripts** reading cache items by:
  - Replacing old key prefixes with `paa:tokens:results`.
  - Switching from `.ToString()` to `.Value` property access for cache items.

Implementing these changes will ensure scripts continue to function correctly after upgrading from **v1.27 to v1.28**.

Revised 12/05/2025