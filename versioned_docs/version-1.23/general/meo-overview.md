---
id: meo-overview
title: What is MEO? (Multi-Environment Orchestrator)
sidebar_label: What is MEO? (Multi-Environment Orchestrator)
---

> Audience: Citizen devs [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

## Overview and Description

The Multi-Environment Orchestrator (MEO) is a tool that allows the management, backup and audit of your different Plant an App instances or environments by leveraging the use of a <a href="https://git-scm.com/" target="_blank">**GIT**</a>-based <a href="https://en.wikipedia.org/wiki/Version_control" target="_blank">Version Control System</a> such as <a href="https://github.com/" target="_blank">GitHub</a>.

MEO has two components: the **`Environment Orchestrator`** itself, and an **`Identity Provider`**.
- The `Environment Orchestrator` is the main component and acts like a link between your Plant an App instances or environments and your VCS repository and is responsible with the environment orchestration (see [`Functional Architecture`](#functional-architecture), below).
- The `Identity Provider` that handles the authentication between your Plant an App instances or environments and the Environment Orchestrator. 

## Techincal Architecture

MEO is a Windows application that runs in a <a href="https://www.docker.com/resources/what-container/" target="_blank">Docker container</a>.  

The `Environment Orchestrator` component is connected and communicates with your Plant an App instance(s) on one side, and with your Version Control System on the other. The connection and configuration of the VSC repository is stored on a dedicated MEO Database.

## Functional architecture

The Multi-Environment Orchestrator takes snapshots of your Plant an App instance(s) structure and pushes them to the Version Control System that you have defined. This brings easy backup and audit capabilities to Plant an App. MEO uses its Database to store the <a href="https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html" target="_blank">PAT (Personal Access Token)</a> for the VCS access. The PAT is encrypted and decrypted from the database using a symmetric key built from a string that is passed as an environment variable to Docker.

The authentication component of the MEO, the *Identity Provider* acts as an authentication server between your Plant an App instance(s) and the *Environment Orchestrator*. The *Identity Provider* is an authentication manager built upon the <a href="https://documentation.openiddict.com/guides/index.html" target="_blank">OpenIddict framework</a>.