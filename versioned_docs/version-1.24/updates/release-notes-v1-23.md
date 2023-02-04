---
id: release-notes-v1-23
title: Release Notes v1.23
sidebar_label: Release Notes v1.23
---

## What's new?

### **Version Control** and **Multi-Environment Orchestrator**

- Introduction of the *Multi Environment Orchestrator* (MEO) - a tool that allows the management, backup and audit of your different Plant an App instances/environments by leveraging the use of a GIT-based Version Control System such as GitHub. With MEO you can push and pull changes in an environment, move them to another environment (e.g. development, QA, Prod, etc.).

The MEO implementation differs according to your Plant an App hosting. As such, for the *On Premise deployment* (that is, in your own infrastructure), before using Version Control, you will need to install and configure MEO as a Docker package. 

For the Plant an App *SaaS version*, MEO is built-in and you only need to configure and use the **Version Control**. Both scenarios' procedures are detailed in the new **`Version Control`** section of the documentation.

Please note that this feature is currently marked as experimental and in the 1.23 release it can only perform a (clean) push from your environment to GIT. Other features will follow in subsequent releases.

- The `Version Control` section has been improved and changed in order to be able to do manual commits of changes. The interface has been rebuilt in Low Code, and individual changes can now be committed to GIT. The new interface has been built around the features of the Multi-Environment Orchestrator (see above).

### **Automation**

- The `Automation` section now supports grouping jobs in Namespaces.
- Actions  can now be Copy/Pasted. *Note that while this enhancement applies just for the `Automation` section for now, the feature will be extended to other sections in subsequent releases.*
- You can now drag-and-drop Actions from parent to child and child to parent. *Note that while this enhancement applies just for the `Automation` section for now, the feature will be extended to other sections in subsequent releases.*
- There is now a validation for the missing "*required*" parameters in Actions. *Note that while this enhancement applies just for the `Automation` section for now, the feature will be extended to other sections in subsequent releases.*
- Implementation of the Multi Tab in order to prevent overwriting the work of others (or oneself in another window/tab).
- Implementation `Save` & `Save and close` buttons just like in the "Workflows" section.

### **IntelliSense**

A feature that will help you write your custom tokens in (default) value or condition textboxes by autocompleting elements of your syntax. More precisely, when you start typing a “`[`“, a list of namespace(s)/token(s) is automatically populated and proposed for selection. This feature supports MyToken Tokens and DNN/Default tokens (contextual tokens will follow in a next release).

*Note that while this enhancement applies just for the `Automation` section for now, the feature will be extended to other sections in subsequent releases.*

## Other improvements and features

- The `Save file` Action now has an "Allowed extensions" option for the files it handles.
- User interface: *Font Awesome* upgrade to  <a href="https://fontawesome.com/v6/icons" target="_blank">version 6.2</a> (for Forms and Listings).

## Bug Fixes

Fixed missing material icons in Entity > Detail page and edit-module buttons.