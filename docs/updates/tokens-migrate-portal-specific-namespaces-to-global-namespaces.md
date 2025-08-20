---
id: tokens-migrate-portal-specific-namespaces-to-global-namespaces
title: Tokens - Migrate Portal Specific Namespaces to Global Namespaces
sidebar_label: Tokens - Migrate Portal Specific Namespaces to Global Namespaces
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`, `Namespaces`

# How to Migrate Portal Specific Namespaces to Global Namespaces in Plant an App

**Release: 1.27 — Portal specific Namespaces are Obsolete and will be removed in a future version**  
[Watch the video demonstration here](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EXyE4sVH6SlPqz6CDJsLyv4Bc57k0whPp8cUAxSlFThYxg?e=1Zxb2Y&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

****

## Overview

Starting in Plant an App release 1.27, you may notice a **warning in configuration tokens**:  
> “Portal specific namespaces are obsolete and will be removed in a future version.”

This article will walk you through:
- Why this change is happening
- How to identify affected namespaces
- How to migrate portal-specific namespaces to global


****

## Why are Portal Specific Namespaces Obsolete?

Portal-specific namespaces were originally available for DNN Sharp / DNN sites, which allows multiple "portals" (sites) on a single installation, each potentially with unique tokens. In the unified Plant an App environment, the assumption is "one system" where **all tokens are available globally** for consistency and predictability.

If you previously used the feature where the same token name exists differently in separate portals, you will need to update your setup.

****

## Identifying Portal-Specific Namespaces

When you open the **Tokens > Namespaces** screen, any portal-specific namespace will show a warning. Global namespaces will not display this message.


****

## How to Migrate: Step-by-Step

### 1. Navigate to Namespaces Settings

1. Go to **Configuration** > **Tokens** 
2. Locate namespaces with the **portal-specific warning message**.

<img src="/img/v127_tokens_namespace_warning_message.PNG" alt="v127 tokens namespace warning message"></img>

****

### 2. Open the Namespace for Editing

1. Click the **View Namespace** button, then click  the **Edit** button in the top right of the Namespace.
2. In the edit window, look for the "**Available on all portals**" switch.

<img src="/img/v127_tokens_view_namespace.PNG" alt="View the NameSpace"></img>

<img src="/img/v127_tokens_namespace_switch.PNG" alt="View the NameSpace"></img>

****

### 3. Enable Global Availability

1. **Turn ON** the "Available on all portals" switch.
2. Click **Update** or **Save**.

This action makes all contained tokens **global**, removing the warning.

****

### 4. Repeat for Each Portal-Specific Namespace

If multiple namespaces have the warning, repeat Steps 2-3 for each one.

Once updated, **editing the namespace again will no longer let you revert to portal-specific**—this behavior is being retired.

****

## Key Considerations

- **Conflict Risk:** If you previously had tokens with the same name but different values in multiple portals, you must consolidate or rename as necessary.
- **One System:** All tokens/namespaces will be available everywhere, including in tokens, workflows, and entities.

****

## FAQ

**Q: What happens if I do nothing?**  
A: In the future, portal-specific namespaces will stop working. Tokens may not resolve as expected, leading to possible application errors.

**Q: Is this change reversible?**  
A: No, after making a namespace global, you cannot convert it back to portal-specific.

****

## Summary

Transitioning to global namespaces ensures consistency and aligns with Plant an App's unified system vision.  
**Enable “Available on all portals” for all namespaces with warnings to future-proof your configuration!**

****

For more details, [see the video walkthrough](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EXyE4sVH6SlPqz6CDJsLyv4Bc57k0whPp8cUAxSlFThYxg?e=1Zxb2Y&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)