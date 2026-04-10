---
id: database-transaction-standardization-and-deadlock-guidance
title: Database Transaction Standardization and Deadlock Guidance
sidebar_label: Database Transaction Standardization and Deadlock Guidance
---


# Database Transaction Standardization and Deadlock Guidance (v1.27.425+)

> **Audience:** Administrators, Solution Builders, Workflow Designers
>**Skill Prerequisites:** Basic SQL, understanding of workflows and Run SQL actions
>**Applies To:** Plant an App v1.27.425 and later (including v1.28+)
>**Purpose:** Explain the transaction handling changes introduced in v1.27.425+, clarify real-world concurrency impacts, and provide best practices and mitigation strategies.

* * * *

## Why This Change Matters

Prior to v1.27.425, some database connections could unintentionally retain a **SERIALIZABLE** isolation level due to ADO.NET connection pooling combined with `TransactionScope` usage.

This resulted in:

* Intermittent and difficult-to-reproduce deadlocks
* Inconsistent behavior across identical operations

Starting with v1.27.425, Plant an App standardizes transaction handling to ensure all operations execute consistently using **READ COMMITTED** isolation.

👉 This is a **correctness and consistency improvement**, not a change in the intended concurrency model.

* * * *

## Who Should Care

This change is especially important for:

* High-concurrency environments (APIs, webhooks, heavy user activity)
* Applications using **Run SQL actions extensively**
* Systems integrating with **external databases via ODBC** (e.g., Sage 300)
* Workflows that perform frequent read/write operations on shared data

If your system processes many concurrent operations or interacts with external data sources, this change may have a noticeable impact.

* * * *

## TL;DR

* The platform now runs **all database operations inside transactions**
* Behavior is now **consistent and predictable**
* Some existing issues may now show up as **repeatable deadlocks**
* These are **not new problems**—they were previously hidden
* ⚠️ Some external systems (like certain ODBC connections) **will no longer work**
* ❗ There is **no workaround** for those systems—remaining on older versions may be required

* * * *

## Overview

Starting with version **1.27.425**, Plant an App standardizes database transaction handling across all operations.

Key changes include:

* All SQL execution is wrapped in an explicit transaction
* All transactions use **READ COMMITTED** isolation
* All `TransactionScope` usage explicitly enforces **READ COMMITTED**

This eliminates prior inconsistencies caused by connection pooling and ensures deterministic execution behavior.

* * * *

## What Changed

### Before v1.27.425

* SQL connections were reused via ADO.NET connection pooling
* Some operations (e.g., form save/load) used `TransactionScope` **without explicitly enforcing READ COMMITTED**
* This could elevate isolation level (e.g., SERIALIZABLE)
* Elevated isolation levels could **persist across pooled connections**
* Subsequent queries might unknowingly run under stricter rules

👉 Result:

* Inconsistent behavior
* Intermittent and hard-to-diagnose deadlocks

* * * *

### After v1.27.425

* All SQL execution is explicitly wrapped in a transaction
* Isolation level is consistently **READ COMMITTED**
* `TransactionScope` is still used, but now explicitly controlled
* Connection pooling no longer leaks isolation levels
* Execution behavior is deterministic and predictable

👉 Result:

* Improved consistency and correctness
* Previously hidden concurrency conflicts may now surface as **repeatable deadlocks**

* * * *

## External System Compatibility (Important)

Some external systems—particularly those accessed via ODBC (such as Sage 300)—do **not support explicit transactions**.

Because Plant an App now always executes SQL within a transaction:

* These integrations may fail with errors such as:
  **“Transactions are not supported”**

❗ Important:

* There is **no configuration or workaround** to disable transactions
* Autocommit cannot be enabled
* This behavior cannot be reverted

👉 The only option for affected systems is to remain on a version **prior to 1.27.425**

* * * *

## Important Clarifications

### This Is Not a New Concurrency Model

This change does **not introduce new concurrency behavior**.

Instead, it:

* Removes unintended SERIALIZABLE isolation behavior
* Applies consistent transactional boundaries
* Makes concurrency behavior predictable
* Surfaces conflicts that were previously intermittent or hidden

* * * *

### Deadlocks Are Not New

Deadlocks observed after upgrading are **not newly introduced**.

👉 These conflicts already existed but were:

* Inconsistent
* Difficult to reproduce
* Sometimes hidden by unintended isolation behavior

Now they are:

* Consistent
* Repeatable
* Easier to diagnose and fix

* * * *

## How Deadlocks Occur (Simplified)

When operations run inside transactions, they interact with data in a defined sequence.

Deadlocks occur when:

* One operation accesses data in one order (e.g., Table A → Table B)
* Another operation accesses the same data in a different order (e.g., Table B → Table A)

👉 Each operation ends up waiting on the other, creating a circular dependency.

In high-concurrency environments:

* More operations run at the same time
* More overlapping access occurs
* The likelihood of conflicting sequences increases

* * * *

## Why Deadlocks May Increase After Upgrade

After v1.27.425:

* More operations are consistently transactional
* Execution order is now predictable
* Overlapping operations are more clearly exposed

👉 As a result:

* Existing concurrency conflicts now appear as **repeatable deadlocks**

These deadlocks are not new—they are now surfaced consistently because reads and writes participate in the same transactional model.

* * * *

## High-Concurrency Environments (Important)

Systems with high request volume may observe more frequent deadlocks after upgrading.

This typically indicates:

* Competing updates to shared data
* Inconsistent update ordering
* Overlapping operations across workflows

👉 The benefit:

* These issues are now easier to identify and correct

* * * *

## Platform Constraints

In v1.27.425 and later:

* Transactions are always enabled
* Isolation level is fixed to **READ COMMITTED**
* Transaction behavior is not configurable
* Autocommit cannot be enabled

👉 Deadlock mitigation must be handled at:

* Workflow design level
* SQL design level
* Database schema/indexing level

* * * *

## Common Low-Code Patterns That Cause Deadlocks

### 1. Inconsistent Update Order Across Workflows

```
-- Workflow A
UPDATE Contacts ...
UPDATE Visits ...

-- Workflow B
UPDATE Visits ...
UPDATE Contacts ...
```

👉 Conflicting order increases deadlock risk

* * * *

### 2. Long-Running Run SQL Actions

```
SELECT ...
-- processing
UPDATE ...
```

👉 Longer operations increase overlap between concurrent executions

* * * *

### 3. Bulk Operations and Batch Processing

* Entity imports
* Loop-based updates
* Bulk inserts

👉 Larger operations increase contention

* * * *

### 4. Read-Then-Write Patterns

```
SELECT * FROM Table WHERE Id = X
-- logic
UPDATE Table SET ... WHERE Id = X
```

👉 Multiple processes may collide after reading the same data

* * * *

### 5. Missing or Inefficient Indexing

* Table scans increase scope of data access
* More data is touched than necessary

👉 Increases likelihood of conflicting operations

* * * *

### 6. Parallel Workflow Execution

* Multiple users submitting forms
* Scheduled jobs running simultaneously
* API/webhook triggers

👉 Increased concurrency leads to higher conflict probability

* * * *

## Best Practices to Prevent Deadlocks

### ✔️ 1. Enforce Consistent Update Order

Define and follow a standard order across all workflows.

* * * *

### ✔️ 2. Keep Transactions Short

* Avoid long multi-step SQL scripts
* Minimize processing inside Run SQL

* * * *

### ✔️ 3. Optimize Indexing

Ensure indexes support:

* WHERE clauses
* JOIN conditions
* Frequently updated fields

* * * *

### ✔️ 4. Reduce Batch Sizes

* Break large operations into smaller chunks

* * * *

### ✔️ 5. Avoid Read-Then-Write Patterns

Prefer single-statement updates when possible.

* * * *

### ✔️ 6. Control Concurrency

* Avoid overlapping scheduled jobs
* Throttle API-triggered workflows
* Consider queue-based processing

* * * *

### ✔️ 7. Isolate High-Contention Operations

* Separate critical updates into focused workflows

* * * *

### ✔️ 8. Implement Retry Logic (Advanced)

* Deadlocks are transient (SQL error 1205)
* Retrying often succeeds

* * * *

## Optional Database-Level Mitigation: READ_COMMITTED_SNAPSHOT (RCSI)

RCSI enables row-versioning for reads instead of blocking behavior.

### Benefits

* Reduces read/write contention
* Can lower deadlock frequency involving reads

### Limitations

Does NOT resolve:

* Update-update conflicts
* Ordering issues
* Long transactions

### Recommendation

* Test in staging before enabling
* Use alongside proper workflow design

* * * *

## Summary

Version **1.27.425+** improves database reliability by enforcing consistent transaction handling using READ COMMITTED isolation.

This change:

* Eliminates unintended behavior
* Makes execution deterministic
* Surfaces existing concurrency conflicts

Deadlocks observed after upgrading are:

* Not new
* Now consistent and diagnosable

⚠️ Some external systems that do not support transactions are incompatible with this model, and no workaround exists.

By applying strong workflow design practices—especially around update ordering, indexing, and concurrency control—these issues can be effectively mitigated.

* * * *
**Revision Date:** 2026-04-10
