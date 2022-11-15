---
id: automation-settings
title: Settings
sidebar_label: Settings
---

## Settings

### `SQL Dependency`
Enable or disable the use of the SQL Dependency feature. This improves the latency of Database Triggers.

The total number of available threads as well as the busy threads is displayed.

#### How it works

Normally, Plant an App will launch queries at short intervals to check whether a Job needs to run. Enabling the *SQL Dependency* option initializes a listener on the DB. This allows the execution call to come from the DB side. In turn, this will improve the Job trigger latency since it does not rely on launching periodic queries.

:::caution

This is an experimental feature. Use with caution.

:::