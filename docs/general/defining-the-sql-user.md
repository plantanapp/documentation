---
id: defining-the-sql-user
title: Defining the SQL User
sidebar_label: Defining the SQL User
---

> **Audience:** System / Security Administrators  
> **Skill Prerequisites:** DNN administration, IIS, and SQL Server fundamentals  
> **Applies To:** DNN installations running Plant an App  
> **Purpose:** Define the supported SQL user permission models required for reliable Plant an App runtime and upgrades

# Defining the SQL User for DNN + Plant an App

This article describes how to create and configure the **SQL user** used by DNN and Plant an App.
Plant an App **always runs on DNN**, and therefore uses the **same SQL user and connection** defined for DNN.

Two supported permission models are provided:

* **Simple (Maximum Privileges)** — fastest, least restrictive
* **Safe (Least-Privilege)** — recommended for security-conscious environments

****

## Where the SQL User Is Defined

### Web.config (DNN Application)

The SQL user credentials are defined in the **DNN connection string** located in:

* `web.config`
* or `web.config` plus environment-specific transforms (Azure / IIS)

Example (simplified):

```xml
<connectionStrings>
  <add name="SiteSqlServer"
       connectionString="Data Source=SERVER;
                         Initial Catalog=DNN_DATABASE;
                         User ID=SQL_USER;
                         Password=PASSWORD;"
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

This **same SQL user** is used by:

* DNN
* Plant an App
* Plant an App upgrades and migrations

****

## Where the SQL User Must Exist in SQL Server

The SQL user must be:

1. A **login** under

   * SQL Server → Security → Logins
2. A **database user** mapped to that login under

   * Database → Security → Users
3. Granted permissions **inside the DNN database**

If the SQL login exists but the database user does not, runtime operations and upgrades will fail.

****

## Permission Models

### Option 1: Simple Setup (Maximum Privileges)

**Use when:**

* Speed and simplicity matter more than restriction
* You control the database environment
* Full permissions are acceptable

**Configuration:**

* SQL user is a member of **db_owner** in the DNN database

**Result:**

* Guaranteed to work for:

  * DNN
  * Plant an App
  * All installs and upgrades
* Simplest model to support
* Highest privilege level

****

### Option 2: Safe Setup (Least-Privilege — Recommended)

**Use when:**

* db_owner cannot be granted
* Least-privilege policies are enforced
* Reliable upgrades are still required

This approach allows Plant an App to:

* Create the `paa` schema
* Create and modify tables within that schema
* Perform required schema and table changes during upgrades

****

### Prerequisite

You must have access to:

* A **temporary or secondary SQL account** that is **db_owner**

  * Used only to grant permissions
  * Not used by the application

****

### Step 1: Create or Identify the SQL User

* Ensure the SQL login exists at the SQL Server level
* Ensure the SQL user exists in the **DNN database**
* Confirm this is the same SQL user referenced in `web.config`

****

### Step 2: Grant Required Permissions

Using the **db_owner** account, grant the following to the application SQL user:

1. Add the SQL user to the **db_ddladmin** role
2. Explicitly grant schema creation rights:

```sql
GRANT CREATE SCHEMA TO [SQL_USER];
```

****

### What This Allows

After this setup:

* The SQL user can:

  * Create the `paa` schema
  * Fully manage objects inside schemas it creates
* Because of **db_ddladmin**, the SQL user can:

  * Alter tables required during upgrades
  * Modify database objects as required by migrations

****

### Important Note on Permissions

There is a **significant difference** between:

* **db_ddladmin**

  * Can change database structure
  * Cannot manage security or database-wide ownership
* **db_owner**

  * Full control over the database

The **Safe setup avoids db_owner** while still meeting Plant an App upgrade requirements.

****

## Relationship to DNN Requirements

* DNN documentation commonly references **db_owner** as a requirement
* In practice:

  * DNN itself may function with fewer permissions
  * **Plant an App upgrades require additional capabilities**, specifically:

    * Schema creation
    * Schema-owned object management

This document reflects **Plant an App operational requirements**, not just baseline DNN guidance.

****

## Summary

You must ensure that the SQL user defined in `web.config`:

* Exists as a SQL login and database user
* Has permissions sufficient for:

  * DNN runtime
  * Plant an App runtime
  * Plant an App installs and upgrades

You may choose:

* **Simple** — db_owner (fastest, broadest access)
* **Safe** — db_ddladmin + CREATE SCHEMA (recommended)

****

**Revision Date:** 01/16/2026
