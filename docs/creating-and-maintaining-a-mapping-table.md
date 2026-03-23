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
Plant an App applications integrating with external SQL-based systems using shared identifiers

**Purpose**
To provide a practical and reliable approach for creating and maintaining a mapping table that supports efficient and flexible joins between Plant an App entities and external systems

* * * *

## Overview

As discussed in *Understanding Join Performance with External Systems*, differences in data types between Plant an App and external systems can lead to inefficient joins and inconsistent performance.

A mapping table resolves this by:

* aligning data types with the external system
* enabling index-friendly joins
* providing a stable and predictable execution path

This article focuses on:

* designing the mapping table
* populating it from a Plant an App entity
* maintaining it over time as data changes

Unlike simplified approaches that store a single representative row per identifier, this pattern maintains a **complete mapping** between external identifiers and all related Plant an App records.

* * * *

## Mapping Table Design

### Table Structure

```sql
CREATE TABLE dbo.ContactId_Map (
    ContactId nchar(12) NOT NULL,
    ContactHistoryId int NOT NULL,
    CONSTRAINT PK_ContactId_Map 
        PRIMARY KEY CLUSTERED (ContactId, ContactHistoryId)
);
```

### Key Design Points

* `ContactId` uses `nchar(12)` to match the external system exactly
* `ContactHistoryId` references the Plant an App entity record
* The table contains **one row per ContactHistory record**
* The composite primary key enforces uniqueness and supports efficient joins

### Indexing Strategy

* Clustered Primary Key on `(ContactId, ContactHistoryId)`
* Optional: nonclustered index on `ContactHistoryId` if reverse lookups are required

### Data Type Alignment

It is critical that:

* the mapping table uses the **same data type and length** as the external system
* joins between mapping and external tables remain fully sargable

* * * *

## Initial Population from ContactHistory

The mapping table should include **every ContactHistory record**, not a representative subset.

### Insert All Mappings

```sql
INSERT INTO dbo.ContactId_Map (ContactId, ContactHistoryId)
SELECT
    CAST(ch.ContactId AS nchar(12)),
    ch.Id
FROM app.ContactHistory ch
WHERE ch.ContactId IS NOT NULL;
```

### Notes

* Each ContactHistory row produces one mapping row
* `CAST` ensures alignment with `nchar(12)`
* No aggregation is performed—this preserves the full relationship

* * * *

## Ongoing Maintenance Pattern (Recommended)

To keep the mapping table synchronized with the source data, use a **rebuild-and-sync pattern**.

This ensures the table reflects all inserts, updates, and deletes without complex per-row logic.

### Step 1: Rebuild a Staging Set

```sql
SELECT
    CAST(ch.ContactId AS nchar(12)) AS ContactId,
    ch.Id AS ContactHistoryId
INTO #ContactId_Stage
FROM app.ContactHistory ch
WHERE ch.ContactId IS NOT NULL;
```

### Step 2: Synchronize Mapping Table

```sql
MERGE dbo.ContactId_Map AS target
USING #ContactId_Stage AS source
ON target.ContactId = source.ContactId
   AND target.ContactHistoryId = source.ContactHistoryId

WHEN NOT MATCHED BY TARGET THEN
    INSERT (ContactId, ContactHistoryId)
    VALUES (source.ContactId, source.ContactHistoryId)

WHEN NOT MATCHED BY SOURCE THEN
    DELETE;
```

### Why This Pattern Works

* Maintains a **complete one-to-many mapping**
* Handles inserts and deletes in a single operation
* Avoids drift over time
* Keeps logic simple and predictable

* * * *

## Automation Strategy

The synchronization process should be executed automatically.

### General Approach

Run the synchronization as a batch operation when data changes occur, such as:

* inserts into `app.ContactHistory`
* updates to `ContactId`
* deletes of records

### Implementation Guidance

* Trigger via scheduled job or workflow
* Avoid per-row execution; use batch processing
* Run frequently enough to keep mappings current

This ensures:

* minimal impact on user operations
* consistent performance
* reliable alignment between systems

* * * *

## Performance Considerations

### Expected Size

* One row per ContactHistory record
* Similar in size to the source table

### Efficiency

* Narrow fixed-length key (`nchar(12)`) supports efficient indexing
* Joins through the mapping table remain predictable and scalable

### Stability

* Eliminates implicit conversions in join predicates
* Produces consistent execution plans across workloads

* * * *

## Validation and Troubleshooting

### Verify Population

```sql
SELECT COUNT(*) FROM app.ContactHistory WHERE ContactId IS NOT NULL;
SELECT COUNT(*) FROM dbo.ContactId_Map;
```

Counts should closely align.

### Identify Missing Entries

```sql
SELECT ch.Id, ch.ContactId
FROM app.ContactHistory ch
LEFT JOIN dbo.ContactId_Map m
    ON ch.Id = m.ContactHistoryId
WHERE ch.ContactId IS NOT NULL
  AND m.ContactHistoryId IS NULL;
```

### Detect Duplicates (Should Not Exist)

```sql
SELECT ContactId, ContactHistoryId, COUNT(*)
FROM dbo.ContactId_Map
GROUP BY ContactId, ContactHistoryId
HAVING COUNT(*) > 1;
```

* * * *

## Example End-to-End Flow

1. A ContactHistory record is created, updated, or deleted
2. The synchronization job runs
3. The mapping table is rebuilt and synchronized
4. Queries join through `ContactId_Map`
5. External data is retrieved efficiently and consistently

* * * *

## Summary

A mapping table provides a reliable way to maintain performant joins between Plant an App entities and external systems.

By:

* storing a complete mapping of all related records
* aligning data types with the external system
* synchronizing using a rebuild-and-sync pattern

you ensure:

* correct one-to-many relationships
* predictable query performance
* scalability as data volumes grow

* * * *

**Revision Date:** 2026-03-23
