---
id: creating-and-maintaining-a-mapping-table
title: Creating and Maintaining a Mapping Table
sidebar_label: Creating and Maintaining a Mapping Table
---

# Creating and Maintaining a Mapping Table

**Audience**
Plant an App Administrators, Developers, and SQL-savvy Implementers

**Skill Prerequisites**
Basic SQL knowledge, familiarity with Plant an App entities, understanding of joins and indexing concepts

**Applies To**
Plant an App applications integrating with external CRM systems using shared identifiers

**Purpose**
To provide a practical, reliable approach for creating and maintaining a mapping table that enables efficient joins between Plant an App entities and external systems

* * * *

## Overview

When integrating Plant an App with an external CRM, a mapping table can be introduced to align data types and enable efficient joins.

This article focuses on:

* How to design the mapping table
* How to populate it from a Plant an App entity
* How to maintain it over time as data changes

The goal is to ensure the mapping table remains accurate and performant as records are added, updated, or removed.

* * * *

## Mapping Table Design

### Table Structure

```sql
CREATE TABLE dbo.ContactId_Map (
    ContactId nchar(12) NOT NULL,
    ContactHistoryId int NOT NULL,
    CONSTRAINT PK_ContactId_Map PRIMARY KEY CLUSTERED (ContactId)
);
```

### Key Design Points

* `ContactId` uses `nchar(12)` to match the external CRM
* This column is the **primary key** and is indexed
* `ContactHistoryId` provides a reference back to the Plant an App entity

### Indexing Strategy

* Clustered Primary Key on `ContactId`
* Optional: nonclustered index on `ContactHistoryId` if reverse lookups are required

### Data Type Alignment

It is critical that:

* The mapping table uses the **same data type and length** as the external system
* This ensures joins remain fully sargable and index-friendly

* * * *

## Initial Population from ContactHistory

The mapping table should be populated using data from the Plant an App entity.

### Insert Distinct ContactIds

```sql
INSERT INTO dbo.ContactId_Map (ContactId, ContactHistoryId)
SELECT DISTINCT
    CAST(ch.ContactId AS nchar(12)),
    MIN(ch.Id)
FROM app.ContactHistory ch
WHERE ch.ContactId IS NOT NULL
GROUP BY CAST(ch.ContactId AS nchar(12));
```

### Notes

* `CAST` ensures alignment with `nchar(12)`
* `MIN(ch.Id)` selects a representative record per ContactId
* `DISTINCT` / `GROUP BY` prevents duplicates

* * * *

## Ongoing Maintenance Pattern (Recommended)

To handle inserts, updates, and deletes reliably, use a **rebuild-and-sync pattern**.

This avoids complexity and ensures consistency.

### Step 1: Rebuild a Staging Set

```sql
SELECT
    CAST(ch.ContactId AS nchar(12)) AS ContactId,
    MIN(ch.Id) AS ContactHistoryId
INTO #ContactId_Stage
FROM app.ContactHistory ch
WHERE ch.ContactId IS NOT NULL
GROUP BY CAST(ch.ContactId AS nchar(12));
```

### Step 2: Synchronize Mapping Table

```sql
MERGE dbo.ContactId_Map AS target
USING #ContactId_Stage AS source
ON target.ContactId = source.ContactId

WHEN MATCHED AND target.ContactHistoryId <> source.ContactHistoryId THEN
    UPDATE SET ContactHistoryId = source.ContactHistoryId

WHEN NOT MATCHED BY TARGET THEN
    INSERT (ContactId, ContactHistoryId)
    VALUES (source.ContactId, source.ContactHistoryId)

WHEN NOT MATCHED BY SOURCE THEN
    DELETE;
```

### Why This Pattern Works

* Handles **adds, changes, and deletes** in one operation
* Keeps mapping table fully synchronized with source data
* Avoids incremental drift over time
* Simplifies logic compared to per-row maintenance

* * * *

## Automation Strategy

The synchronization process should be executed automatically.

### General Approach

Configure an automation job that runs when database changes occur, such as:

* Inserts into `app.ContactHistory`
* Updates to `ContactId`
* Deletes of records

### Implementation Guidance

* Trigger the synchronization process based on database activity (A/C/D events)
* Ensure the job runs frequently enough to keep the mapping table current
* Avoid running per-row; instead, execute as a batch operation

This ensures:

* Consistent performance
* Minimal overhead during user operations
* Reliable alignment between tables

* * * *

## Performance Considerations

### Expected Size

* One row per unique `ContactId`
* Typically much smaller than the source table

### Efficiency

* Narrow fixed-length key (`nchar(12)`) improves index performance
* Joins through the mapping table remain efficient even as data grows

### Stability

* Eliminates variability caused by data type mismatches
* Produces consistent execution plans

* * * *

## Validation and Troubleshooting

### Verify Population

```sql
SELECT COUNT(DISTINCT ContactId) FROM app.ContactHistory;
SELECT COUNT(*) FROM dbo.ContactId_Map;
```

These values should closely align.

### Identify Missing Entries

```sql
SELECT ch.ContactId
FROM app.ContactHistory ch
LEFT JOIN dbo.ContactId_Map m
    ON CAST(ch.ContactId AS nchar(12)) = m.ContactId
WHERE m.ContactId IS NULL;
```

### Detect Duplicates (Should Not Exist)

```sql
SELECT ContactId, COUNT(*)
FROM dbo.ContactId_Map
GROUP BY ContactId
HAVING COUNT(*) > 1;
```

* * * *

## Example End-to-End Flow

1. A new ContactHistory record is created
2. The automation job runs
3. The mapping table is synchronized
4. Queries join through `ContactId_Map`
5. CRM data is retrieved efficiently

* * * *

## Summary

A mapping table provides a simple and effective way to maintain performant joins between Plant an App entities and external systems.

By:

* aligning data types
* rebuilding and synchronizing consistently
* and automating maintenance

you ensure:

* predictable performance
* accurate data relationships
* and scalability as your system grows

* * * *

**Revision Date:** 2026-03-17
