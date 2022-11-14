---
id: automation-overview
title: Overview
sidebar_label: Overview
---

## Automation

In Plant an App, Automation is achieved through `Jobs` which contain `Triggers` and subsequent `Actions`. An Automation is an event that will start executing all the actions assigned to the Job - which is a combination of triggers and actions. In other words, `Actions` determine **what** to execute and `Triggers` determine **when** to execute a job.

With Plant an App you can automate time-based, database event-based, and application event-based tasks.


### Automation in Plant an App
The Automation section allows for an easy way to manage, schedule and execute actions such as: run SQL Queries, executables, PowerShell scripts, manipulate files, folders, and documents, send emails, and execute methods automatically and periodically at specific times/intervals (time triggers, interval triggers, cron triggers), when an event occurs (on application start/end, at the beginning/end of every request) or on a specific database- or user action (creation, login).

The Automation execution is serialized. This means that you can create as many Jobs as you want, and that they can be executed in parallel as long as threads are available. However, we recommend you group your Actions operation-wise, by Job. In other words, group the same type of actions (e.g. SQL actions, Message actions, File Management actions, etc.) in separate Jobs where possible. This will help with the audit trail and reduce CPU load.