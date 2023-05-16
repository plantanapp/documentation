---
id: version-control-on-prem
title: Version Control (on-prem)
sidebar_label: Version Control (on-prem)
---

> Audience: [`System/Security Administrators`](/docs/audience#systemsecurity-administrators)
> 
> Skill Prerequisites: `System Administration and Maintenance`

This section covers the setup and usage of the **`Version Control`** feature for the **self-hosted version** of Plant an App.

## `Version Control` through the **Multi-Environment Orchestrator**

For the on-prem/self-hosted deployment type of Plant an App, the `Version Control` feature requires the installation of the **MEO** (<em>Multi-Environment Orchestrator</em>) server as a prerequisite.

MEO allows you to push and pull changes in an environment or move them to a second environment (e.g. development or QA) by leveraging the use of a <strong><a href="https://git-scm.com/">GIT</a></strong>-based <a href="https://en.wikipedia.org/wiki/Version_control">Version Control System</a> such as <a href="https://github.com/">GitHub</a>.

:::note

Installing MEO for the SaaS version of Plant an App is not necessary, as it comes directly integrated into the platform; you can directly start using the `Version Control` feature. See the "<a href="https://learn.plantanapp.com/docs/general/configuration-and-usage-saas" target="_blank">Version Control (SaaS) - Configuration and Usage</a>" page.

:::

The Multi-Environment Orchestrator is currently marked as experimental and in the 1.24 release it can only do a (clean) push from your environment to GIT. Other features will follow in upcoming releases.

To use Version Control, you will also need to setup a GIT or [GitHub account](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account).

## Setup

We have devised the following documentation sections to describe how to install and use MEO as part of the **`Version Control`** function of Pant an App:

1. [**What is MEO? (Multi-Environment Orchestrator)**](/general/meo-overview.md) - a general description and overview of the server.
2. <a href="https://learn.plantanapp.com/docs/general/meo-prerequisites-and-setup" target="_blank">**MEO Prerequisites and Setup**</a> - a list of technical prerequisites for deploying the server.
3. <a href="https://learn.plantanapp.com/docs/general/meo-installation" target="_blank">**MEO Server Setup and Installation**</a> - covers the installation steps of the server.
4. <a href="https://learn.plantanapp.com/docs/general/meo-configuration" target="_blank">**MEO Server Configuration**</a> - provides details on how to configure the server.
5. <a href="https://learn.plantanapp.com/docs/modules/using-meo" target="_blank">**Using MEO**</a> - a guide on how to use MEO within the Plant an App **`Version Control`** interface.