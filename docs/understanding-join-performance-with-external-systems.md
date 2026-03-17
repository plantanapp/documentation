---
id: understanding-join-performance-with-external-systems
title: Understanding Join Performance with External Systems
sidebar_label: Understanding Join Performance with External Systems
---

# Understanding Join Performance with External Systems

**Audience**
Plant an App Administrators, Developers, and SQL-savvy Implementers

**Skill Prerequisites**
Basic SQL knowledge, familiarity with Plant an App entities, understanding of joins and indexing concepts

**Applies To**
Plant an App applications integrating with external SQL-based systems

**Purpose**
To explain how data type differences impact join performance and to provide a reliable pattern for maintaining consistent query performance when integrating external data

* * * *

## Overview

A common pattern in Plant an App solutions is integrating with external systems such as CRMs, donor platforms, or ERP databases.

In these scenarios:

* The external system stores core records (e.g., contacts)
* Plant an App stores related activity (e.g., contact history)
* Both systems share a common identifier

In many cases, this identifier is a short, fixed-length string such as a 12-character alphanumeric `ContactId`.

While this appears straightforward, differences in how these fields are defined can significantly impact query performance.

* * * *

## Scenario

Consider a system where:

* An external CRM stores contact records
* A Plant an App application stores contact interaction history

Both systems use a shared identifier:

**ContactId (12-character alphanumeric)**

### External CRM Table

```text
dbo.CRM_Contacts
- ContactId (nchar(12))   ← indexed
- FirstName
- LastName
- Status
```

### Plant an App Entity

```text
app.ContactHistory
- Id (int)
- ContactId (nvarchar(450))   ← standard Plant an App text field
- InteractionDate
- Notes
```

* * * *

## Typical Query Pattern

A common requirement is to combine interaction history with CRM data:

```sql
SELECT
    ch.InteractionDate,
    ch.Notes,
    c.FirstName,
    c.LastName
FROM app.ContactHistory ch
JOIN dbo.CRM_Contacts c
    ON ch.ContactId = c.ContactId
```

* * * *

## The Hidden Issue

Although both fields represent the same value, they are not defined the same:

* `nvarchar(450)` (Plant an App)
* `nchar(12)` (external system)

This mismatch introduces:

* implicit data type conversion
* reduced ability to use indexes efficiently
* non-sargable join conditions
* inconsistent execution plans

As a result, SQL Server may not be able to perform efficient index seeks on the external table.

* * * *

## Observed Behavior

Performance varies depending on how many rows participate in the query.

### Small Result Sets

* Query performs well
* Uses repeated lookups (nested loops)
* Index may still provide partial benefit

### Moderate Result Sets

* Performance becomes inconsistent
* Increased logical reads due to repeated lookups
* Execution time grows non-linearly

### Large Result Sets

* SQL Server may abandon the index
* Query shifts to full table scans and hash joins
* Performance degrades significantly

* * * *

## Recommended Pattern: Join Through a Mapping Table

To ensure consistent and scalable performance, introduce a mapping table that aligns data types.

### Example Mapping Table

```text
dbo.ContactId_Map
- ContactId (nchar(12))   ← primary key, indexed
- ContactHistoryId (int)
```

This table stores the relationship between the external identifier and the internal record.

* * * *

## Revised Query Pattern

```sql
SELECT
    ch.InteractionDate,
    ch.Notes,
    c.FirstName,
    c.LastName
FROM app.ContactHistory ch
JOIN dbo.ContactId_Map m
    ON ch.ContactId = m.ContactId
JOIN dbo.CRM_Contacts c
    ON m.ContactId = c.ContactId
```

* * * *

## Why This Approach Works

* Aligns data types (`nchar(12)` ↔ `nchar(12)`)
* Enables efficient index seeks on the external table
* Eliminates implicit conversions in the join predicate
* Produces more stable and predictable execution plans

* * * *

## When to Use This Pattern

This approach is most beneficial when:

* Joining Plant an App data to external systems using short identifiers
* External tables are large and indexed
* Queries return a moderate subset of data (e.g., filtered reports, dashboards)
* Query performance is inconsistent or degrades as data grows

* * * *

## When It May Not Be Necessary

This pattern may provide limited benefit when:

* Queries always return nearly all rows (full scans dominate regardless)
* Result sets are consistently very small
* Performance is already acceptable and stable

* * * *

## Summary

When integrating Plant an App entities with external systems:

* Text fields are stored as `nvarchar(450)` and cannot be resized
* External systems often use narrower, indexed key types
* Direct joins between these fields can lead to inefficient execution

Introducing a mapping (join) table:

* aligns data types
* improves index utilization
* and delivers more consistent performance across varying workloads

See the `Creating and Maintaining a Mapping Table` topic for practical examples.

* * * *

**Revision Date:** 2026-03-17
