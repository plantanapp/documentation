---
id: tokens-migrate-portal-specific-namespaces-to-global-namespaces
title: Tokens - Migrate Portal Specific Namespaces to Global Namespaces
sidebar_label: Tokens - Migrate Portal Specific Namespaces to Global Namespaces
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`, `Namespaces`

# How to Resolve Namespace Conflicts and Migrate to Global Namespaces in Plant an App

**Release: 1.27 — Portal specific Namespaces are Obsolete and will be removed in a future version.**  
[Watch the video demonstration here](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EXyE4sVH6SlPqz6CDJsLyv4Bc57k0whPp8cUAxSlFThYxg?e=1Zxb2Y&amp;nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

****

## Overview

In Plant an App release 1.27, you may observe the following warning in configuration tokens:  
> “Portal specific namespaces are obsolete and will be removed in a future version. Read more.”

This message indicates a need to transition from portal-specific namespaces to global namespaces. This article will guide you through:
- Why this change is necessary
- How to resolve namespace conflicts
- How to migrate to global namespaces when no conflicts exist

****

## Why are Portal Specific Namespaces Obsolete?

Originally designed for DNN Sharp / DNN sites, portal-specific namespaces allowed for multiple "portals" in a single installation, each with potentially unique tokens. With the unified Plant an App environment, the expectation is a cohesive system where **all tokens are globally available** for consistency and predictability.

If you previously utilized tokens with the same name but different definitions across portals, you'll need to reconcile these setups.

****

## Identifying Portal-Specific Namespaces and Conflicts

Navigate to **Configuration > Tokens** to inspect your namespaces. Portal-specific namespaces display a warning:

> Portal specific Namespaces are Obsolete and will be removed in a future version. Read more.

![v127 tokens namespace warning message](/img/v127_tokens_namespace_warning_message.PNG)

For each marked namespace, investigate for conflicts. Conflicting cases arise when tokens with the same name contain different definitions across portals.

****

## Resolving Namespace Conflicts: Step-by-Step

### 1. Open the Namespace for Editing

- Go to Configuration > Tokens
- Identify namespaces with warnings
- Click the **View Namespace** button, followed by **Edit**

![v127 tokens view namespace](/img/v127_tokens_view_namespace.PNG)

### 2. Evaluate Token Definitions Across Portals

- Examine token definitions within the namespace across all portals
- **If definitions match** across portals:
  - Proceed to delete redundant token entries on sub-portals
  - Ensure the main portal contains the correct definition

### 3. Enable Global Availability

- On the main portal, turn on the "Available on all portals" switch
- Click **Update** to complete the migration to a global namespace.

![v127 tokens namespace switch](/img/v127_tokens_namespace_switch.PNG)

### 4. Different Definitions

**If definitions differ**:
- Rename tokens on one or multiple portals to resolve conflicts
- Ensure the main portal holds the primary token definition
- Repeat until all conflicts are eliminated

### 5. Consolidate and Delete

- After resolving definitions, 
  - Merge unique tokens into a single global namespace
  - Delete old portal-specific namespaces

Once updated, portal-specific setup can no longer be configured, aligning with Plant an App's goal of a unified namespace environment.

****

## Key Considerations

- **Conflict Resolution:** If conflicting token definitions exist, reconcile these by renaming and reconfiguring as necessary.
- **Unified System:** All tokens/namespaces must be available everywhere, ensuring consistent functionality.

****

## FAQ

**Q: What happens if I take no action?**  
A: Future updates will render portal-specific namespaces non-functional, potentially causing application errors where tokens don't resolve correctly.

**Q: Is this change reversible?**  
A: No, once a namespace is global, it cannot be returned to a portal-specific state.

****

## Summary

Moving to global namespaces ensures Uniformity and aligns Plant an App with a single-system vision.  
Resolve namespace conflicts and migrate to global namespaces to secure your configuration against future platform updates.  

For more details, [see the video walkthrough](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EXyE4sVH6SlPqz6CDJsLyv4Bc57k0whPp8cUAxSlFThYxg?e=1Zxb2Y&amp;nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

****
Revised 09/12/2025