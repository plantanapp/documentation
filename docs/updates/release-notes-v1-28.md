---
id: release-notes-v1-28
title: Release Notes v1.28
sidebar_label: Release Notes v1.28
---

# `Beta - Release Candidate 3`
>Version 1.28 is currently a Beta Release Candidate (RC) and is not approved for production use. Release notes for beta versions are published publicly to inform beta testers and preview upcoming features. The authoritative release status for installation and production readiness is always indicated in the Plant an App Console and on our [Compatibility](https://learn.plantanapp.com/docs/current/important-notes/compatibility) page.

Plant an App 1.28 is one of our most significant releases yet, delivering major improvements to platform reliability, performance, and long-term scalability. This version introduces several foundational upgrades—including a fully unified Action Engine, a rebuilt Token Engine, and an all-new upgrade experience—designed to make every part of the platform more consistent, predictable, and easier to work with. These enhancements not only streamline daily development but also prepare your applications for the future of Plant an App.

This release also marks the debut of Forms 2.0 as a feature preview—a completely reimagined, modernized form engine built with security, flexibility. Alongside this, version 1.28 includes broad UI refinements, new developer capabilities, and a large collection of stability improvements and bug fixes. The platform is now fully compatible with DNN 10, and this release delivers several critical security fixes, making it an essential upgrade for any production environment.

Whether you're building complex workflows, maintaining large applications, or preparing for future platform transitions, Plant an App 1.28 offers a more polished, powerful, and secure foundation. We strongly encourage all customers to upgrade to this version to take advantage of the new features, improved performance, and strengthened security posture.

## Feature
### Unified Action Engine & Centralized Action Stacks
Plant an App 1.28 introduces a major improvement to how actions work across the entire platform. Until now, different modules—Forms, Workflows, Listings, Automation, and others—handled actions in slightly different ways. With this release, all actions now run through a single, unified Action Engine that ensures they behave consistently no matter where they are used.

This unification brings several benefits. Actions now execute more reliably, nested actions work more predictably, and issues are easier to troubleshoot thanks to clearer and more consistent logging. Modules that previously relied on legacy action storage have been fully migrated to the new Action Stacks system, providing a smoother and more stable experience when building or maintaining apps.

Most importantly, this upgrade is seamless for users. Your existing actions continue to work as before, but behind the scenes they now run on a faster, cleaner, and more future-ready architecture. This unification lays the groundwork for enhanced capabilities across the platform and enables us to deliver new features more consistently in upcoming releases.
### Rebuilt Token Engine for Higher Performance and Consistency
Plant an App 1.28 includes a major overhaul of the Token Engine, resulting in a faster, cleaner, and more predictable token experience across the platform. The new engine consolidates previously scattered logic into a single, unified system that handles token evaluation more efficiently and more accurately than before. This simplifies how tokens behave and significantly improves performance, especially in apps that rely heavily on dynamic content or large datasets.

A key improvement is the clearer separation between token values and formatting. This makes token outputs more reliable and eliminates many of the edge-case inconsistencies users encountered in earlier versions. The new engine also introduces a streamlined token management approach, reducing duplication and making it easier to maintain large libraries of custom tokens.

As part of this cleanup, a few outdated or non-standard token behaviors—such as the legacy “else” format and the Random token source—have been removed to ensure the system remains predictable and maintainable. Where needed, more robust alternatives are now available in their place.

For most users, these changes will feel completely seamless. Existing tokens continue to work as expected, but with improved performance and fewer surprises. The rebuilt Token Engine lays a solid foundation for future enhancements and will enable even more sophisticated token capabilities in upcoming releases.
### A Faster, Clearer, and More Reliable Upgrade Experience
Plant an App 1.28 introduces a completely redesigned upgrade experience that makes updating your instance smoother and more transparent than ever before. Instead of waiting behind a loading screen with limited feedback, you now receive a clear, real-time view of each module being updated, along with progress indicators that show exactly what’s happening during the upgrade.

The new Upgrade screen integrates directly with the Minimum Dependency workflow, so installations now begin immediately after download without unnecessary delays. Any errors that occur during the process are displayed clearly on screen, allowing you to address issues quickly rather than searching through logs or guessing where the process may have stopped.

To maintain stability, upgrades now enforce a safe-mode behavior when a failure occurs, preventing partial updates from leaving the system in an unpredictable state. Regular users will also see a friendly “Maintenance” screen during the update, ensuring a smoother experience for everyone interacting with the site.

This improved upgrade flow makes each version transition more reliable, more informative, and significantly easier to manage—especially for administrators maintaining large or complex environments.
### Introducing Forms 2.0 – Feature Preview
Plant an App 1.28 introduces the first public preview of Forms 2.0, a complete rebuild of our form engine designed to deliver a more modern, secure, and future-ready experience. This release represents a major milestone in the evolution of Plant an App, laying the groundwork for improved performance, cleaner architecture, and the long-term scalability of form-based applications.

Forms 2.0 reimagines how forms are rendered, validated, customized, and executed. It introduces a brand-new front-end experience with a cleaner layout system, more intuitive field behavior, and significantly improved responsiveness. Behind the scenes, the new engine provides stronger security foundations—including improved CSP-compliant script handling—and a more predictable lifecycle for loading, binding, and submitting fields.

While this is an early preview, many fundamentals are already in place: the redesigned field system, improved input handling, the new action-response model, and a modernized rendering pipeline. Additional field types, layout options, and configuration capabilities will continue to roll out over future releases. We encourage early adopters to explore Forms 2.0, experiment with its new capabilities, and share feedback to help shape the final experience.

Forms 2.0 marks the beginning of a new generation of form building in Plant an App—faster, more consistent, more secure, and built for the platform’s long-term future.

## Critical Security Fixes

Plant an App 1.28 includes critical security fixes that have been identified during internal testing. 

It also includes compatibility with DNN 10 which is known to include critical security fixes as well.

It's highly recommended to update to 1.28.

## Enhancement
### Consistent UX Across General Settings Screens
We've improved the user experience across various general settings screens to ensure they all have a consistent look and feel. This enhancement affects Entity General Settings, Workflow General Settings, API General Settings, and Automation General Settings.
### Improved Dropdown Synchronization with Expressions
We have enhanced the UI to provide seamless, two-way synchronization between dropdown and textboxes for actions that support expressions. Now, when you use the checkbox to switch from the dropdown to expression (textbox) mode, the selected option’s underlying value (such as an ID) is automatically displayed in the textbox, making it easier to view and edit exact values.

Conversely, entering a valid ID directly in the textbox and then using the checkbox to switch back to dropdown mode will result in the corresponding option being auto-selected in the dropdown.
### Ensure Parallel Gateway Errors Display Correctly
In workflows utilizing a parallel gateway now results in errors from all threads being reported. Previously, workflows would misleadingly indicate success even if errors occurred. This fix ensures that each thread's errors are visible, allowing users to identify and address issues efficiently.
### Action Context Now Supports Lazy Tokens
The Action Context now supports lazy evaluation for tokens, with File Upload :Base64 and Entity Read :JSON as the first areas to implement this approach. Values for these tokens are only calculated when explicitly needed, improving performance for large or resource-intensive data.

When actions such as Context to JSON encounter unresolved lazy tokens, they will now display a safe "(Content not displayed)" placeholder instead of the actual content.
### Weekly Cumulative Hotfixes
We've streamlined the process so every week there's new cumulative hotfixes that address the hottest topics of the moment, both in terms of bug fixing and enhancements.

You might have already used them in 1.27 experimentally. In 1.28 they become the only way to get hotfixes, with the old Hotfixes tab now gone.
### Enhanced Connector Testing with Output Tokens
We've introduced the ability to retrieve output tokens when testing connectors, making it easier for low-code developers to act on various response types. Key outputs include IsSuccess, ErrorMessage, and Exception details. If a connector doesn't support testing, a specific error message will inform you.
### Logging Error for GetVersionControlChangesCount Resolved
We've resolved an issue where errors from the GetVersionControlChangesCount request were cluttering logs during app restarts, hotfixes, or major upgrades. The error logging for this request has been removed, making your logs cleaner and easier to navigate.
### Upgrade Progress Screen
The new update progress screen includes a detailed list of modules ready to be updated, allowing users to review changes before proceeding. Updates are displayed on the screen in real-time, give a much improved experience compared to the pulsating logo that was showing in previous versions.

Enhancements also include improved error management during upgrades. Note that a failed upgrade would lock you from being able to continue using the instance, in order to ensure a stable environment. If this happens, revert the upgrade and submit a support ticket.

Also, tegular users would get a nice "Maintenance" screen during upgrades.
### UI Improvements in Listing Admin Views
In the listing admin views, headers and toggles have been resized and repositioned for a tidier appearance.
### Removed Error Logging in APIs that Already Handle Errors
When an API endpoint encounters an error, it will no longer automatically log the error if you have configured custom error handling in the On Error section. This change helps to reduce unnecessary clutter in the Admin Log.
### Platform Compatibility with DNN v10
Plant an App Version 1.28 has been tested and is fully compatible with DNN 10.
### Enhanced Logging for Failed Form Actions
We've improved the logging system for the Form module to provide clearer information when actions fail to execute. The logs now include details such as the action index, ID, and name, which will make troubleshooting much easier.
### Improved Input Handling for Large Text Properties in Entity Actions
We've updated the way large text properties are handled in entity actions within the Entity Builder. Instead of generating code editor inputs, which might have been inconsistent with other parts of the product, these properties now render as text area inputs.

### Enhanced Token Import/Export with GUIDs for Run Workflow

The export and import mechanism for Run Workflow tokens has been improved by switching from workflow IDs to GUIDs. This ensures workflows are correctly mapped across environments, preventing issues caused by ID mismatches when moving apps between instances.

### Redirection Actions Hidden in OpenID Connect

All redirection-related actions have been hidden when using OpenID Connect authentication. Due to limited control over redirect behavior in the current implementation, these actions could lead to unpredictable results. For custom redirection logic, use session or cookie variables and handle redirects after login.

### Removed Error Logging in APIs That Already Handle Errors

When an API endpoint includes custom logic in the On Error section, the platform will no longer automatically log the same error. This change reduces duplicate entries and keeps the Admin Log cleaner and more relevant.

## Breaking Change
### For Pro-Code Developers: Updated IAction Interface
As part of the Action Engine unification in Plant an App 1.28, the underlying interfaces for building custom actions have been modernized. Custom actions must now use the updated IAction interface, which has been moved to the new PlantAnApp.Actions.dll and now supports built-in dependency injection for cleaner, more maintainable implementations.

If you have custom modules or actions, you will need to update your references and adjust your implementations accordingly. A full migration guide is available in our documentation and walks through the required updates step-by-step.

This change ensures that custom actions benefit from the same unified execution model as the rest of the platform and prepares the ecosystem for future enhancements.

Read more at https://learn.plantanapp.com/docs/current/general/updating-custom-actions-for-plant-an-app-version-1-28.
### Redirect Toolkit Module Removal
The Redirect Toolkit has reached end-of-life. The module will be automatically removed during the platform upgrade to version 1.28.
### Removal of 'else' syntax support in Token Expressions
The support for 'else' syntax in tokens, such as [My:Token|format|elsepart], has been removed from Token Builder. This change was made to resolve the overlap with the Default Value functionality. While this change enhances consistency, it may affect existing implementations using 'else' syntax. Ensuring compatibility with the removal is recommended.
### Removal of Inline Script Support in Token Builder
The option to enable inline scripts for evaluating razor tokens has been removed. This change is implemented to encourage the use of more robust Razor actions or Tokens instead of having scattered razor snippets.
### Removal of Random Token Source
The random token source, previously utilizing the syntax [Random:Value1,Value2,ValueN], has been removed. This decision was made to ensure consistency and robustness within the platform.
### Recursive token replacement in Parameters needs to be explicit
Tokens used as parameters, default values, or within formatters will now expand only once, rather than recursively expanding nested tokens. This change makes token behavior more consistent and easier to understand.

If your application relies on advanced scenarios where tokens return other tokens in these contexts, please review and test your configurations to ensure everything works as expected after the update. Most users will not be affected, but testing is recommended if you use this feature.

### Razor Token Cache Key Update

The cache key format used for Razor token results has changed in version 1.28. Custom Razor scripts that read directly from the runtime cache must be updated to use the new key prefix:
paa:tokens:results.*
Scripts relying on the previous avt.MyTokens.Token.* format should be reviewed to ensure compatibility.

### BeeFree Email Editor Integration Removed

The BeeFree email editor integration has been fully deprecated and removed from the platform. Customers using BeeFree must migrate to the Markdown editor or another supported email editing option before or after upgrading to 1.28.

### Browse Data from Listing Action Replaced

The obsolete Browse Data from Listing action has been removed and automatically replaced with Pick Item from Listing. The new action currently requires the Data Table view to be enabled. Listings configured exclusively with Card, Calendar, or other views may fail to load until the Data Table view is enabled.

### Removal of “Login if User Already Exists” Registration Option

The option to automatically log in a user if they already exist during registration has been removed. This aligns registration behavior with standard authentication practices and avoids confusion caused by failed login attempts during registration.

### Theme Token Integration Changes

Legacy theme integrations using MyTokens skin objects have been removed. Themes must now use the supported PaaTokens:Apply control to render tokens correctly. Themes not updated before or during the 1.28 upgrade may fail to render and throw errors.

## Bug Fix

### Resolved Issue with Creating Tokens with Spaces in Names
Previously, creating tokens with spaces in their names through the Tokens menu was not allowed, whereas contextual tokens did allow spaces. This update resolves inconsistencies across different modules when creating tokens with spaces in their name.
### Fixed Automation Job Deletion Error with Active Triggers
Resolved an issue where attempting to delete a job with existing triggers would result in a 500 server error. Now, the system automatically handles the removal of any associated triggers without requiring manual cleanup.
### Fix for Imported Action Title Mismatch
When importing actions in the Workflow Builder, the title of the imported action now matches the title of the exported action immediately upon import.
### Automation GetJobs Request Interval Issue Fixed
We've fixed a bug in the Automation platform where the GetJobs request was being triggered too frequently, making the job list appear slow or unresponsive.
### Resolved Duplicate Triggers During Automation Import with Overwrite
We've fixed an issue where importing a job with the 'Overwrite' option was creating duplicate triggers instead of replacing the existing ones. Now, when you import and select 'Overwrite', any triggers not present in the import will be removed, ensuring that only the triggers you've specified are applied.
### Fixed Error with Execute Javascript Returning Null
We've resolved a bug in the Workflow Builder that caused an error when a JavaScript action with 'Execute Javascript (Server)' was set to return 'null'. Previously, this would halt the action and throw an error, preventing the workflow from executing correctly.
### File Extension Handling Improved in 'Send Plain Text as File Download' Action
We have addressed an issue where the '.csv' extension was incorrectly appended to filenames when using the 'Send Plain Text as File Download' action and selecting 'csv (text/csv)' as the file type. Now, if a filename extension is provided, it will be used, ignoring the File Type selection. If no extension is provided, the selected File Type extension will be appended.
### Fix for Error in Inline Add with Number(Decimal) Properties
An issue was resolved where attempting to add a new entry using the Inline Add feature for entities with a Number(Decimal) property set as Display Name would result in an error.
### Fix for Button Stuck in 'Please Wait' State
Resolved an issue where the button in a form would remain in a 'Please wait' state after executing a JavaScript action that triggers errors.
### Fix for Tokens Not Expanding in Default Value
We've fixed an issue where tokens specified in the Default Value parameter in the Token Info section weren't being expanded as expected. Now, if a token returns no result, any tokens defined within the Default Value field will be fully evaluated and expanded.
### Fix for Hidden Tabs Taking Up Space in Full Width Mode
In the Tabs Builder module, when using Full Width mode, hidden tabs were incorrectly taking up space, causing layout gaps. This issue has been resolved, ensuring that hidden tabs no longer occupy space, thereby maintaining a cleaner and more organized layout.

### Low-Code Pages Use Consistent Container Settings

Low-Code system pages such as Users and Pages now consistently use the Page Builder – No Card, No Title container, ensuring predictable layouts and preventing unwanted container overrides.

### Low-Code Users Listing Displays Correct Email Address

The email column in the Low-Code Users listing now correctly displays the user’s email address instead of the username, improving clarity and consistency with expectations.

### Disabled Actions Remain Disabled After Import

Fixed an issue where disabled actions in Automations or APIs were unintentionally re-enabled after import. Disabled actions now retain their state correctly.

### Tokens in Default Value Are Now Fully Expanded

Resolved an issue where tokens inside the Default Value field were not evaluated if the main token returned no result. Default Value tokens are now fully expanded as expected.

### Edit Module iframe z-index Issue Fixed

Fixed a rendering issue where the Edit Module iframe could appear above browser extensions due to an excessively high z-index.

## Maintenance
### Workflow Builder Legacy UI Removed
The new UI has been matured over the past 3 releases providing a much better user experience.
### Angular Updated to Latest Version
We've upgraded Angular to the latest version to harden the security of the platform and provide up-to-date developer experience.