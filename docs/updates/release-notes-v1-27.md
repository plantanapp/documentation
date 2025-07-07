---
id: release-notes-v1-27
title: Release Notes v1.27
sidebar_label: Release Notes v1.27
---

Overview:

* [Breaking Change](#breaking-change)
* [Feature](#feature)
* [Enhancement](#enhancement)
* [Bug Fix](#bug-fix)
* [Security](#security)
* [Performance](#performance)
* [Cosmetic](#cosmetic)
* [Obsolete](#obsolete)



> Revised May 27, 2025
 

## Breaking Change

### Minimum DNN Version Requirement Updated to 9.11.2

Starting with version 1.27, Plant an App will require DNN Platform 9.11.2 as the minimum version. For users attempting to install version 1.27 on DNN versions older than 9.11.2, an upgrade will be necessary. Also, the Maximum Supported version has been updated to DNN Platform 9.13.7. Our documentation page will reflect the new minimum required and maximum supported version upon the release of version 1.27.

### Minimum SQL Version Requirement Updated to SQL Server 2016

Starting with version 1.27, Plant an App will require SQL Server 2016 as the minimum version since earlier versions are no longer supported by Microsoft.

### Enhanced Control Over Workflow Outputs Injection into Context

We've improved the Execute Workflow action's output handling. Now, outputs from a workflow are added to the context only if you assign them a token name. Previously, outputs were automatically injected without specified token names. This change prevents unintended context changes, ensuring outputs appear only when explicitly set. Note: This might break workflows relying on the old behavior.

### NavXP Custom CSHTML Template Compatibility Update

We have introduced a breaking change that affects custom cshtml templates which previously used "@inherits DotNetNuke.Web.Razor.DotNetNukeWebPage". If you use custom cshtml templates, update them to use "@inherits DnnWebViewPage" instead.

### Search Boost Custom CSHTML Template Compatibility Update

We have introduced a breaking change that affects custom cshtml templates which previously used "@inherits DotNetNuke.Web.Razor.DotNetNukeWebPage". If you use custom cshtml templates, update them to use "@inherits DnnWebViewPage" instead.

## Feature

### Introducing Workflow Contracts for Dynamic Workflow Management

Experience enhanced flexibility and control with Workflow Contracts. This new feature allows you to group workflows together and dynamically select which one to execute based on your specific business logic. It facilitates a uniform set of input and output parameters across grouped workflows, ensuring consistency and preventing disruptive changes.

### New Licensing Plans - the Starter and Developer Plans

The Starter Plan is a low-cost entry point that is unlocking state-of-art innovation to everyone. In addition, we are launching Developer Plans meant to provide value during application development - from a free Community tier up to Professional and Enterprise that come with support from humans and AI assisted development. Note that these are new licensing options which won't affect existing customers.

### Introducing the Experimental File Manager

We are excited to introduce a new File Manager feature in the Configuration menu of the application. Key functionalities include the ability to create, move, and delete files and folders, with a drag-and-drop feature for folder management. User feedback from this experimental phase will be crucial for refining and enhancing the feature in future updates. Note that user permissions are currently not enforced, so it’s intended for configuration purposes only.

### Action to Dynamically create Connectors

Low-code developers can now programmatically add any type of connector. This action allows for the addition of connectors across forms, APIs, workflows, and automation with dynamic configurations. Connector types are fetched from the Credential Store, and developers can set connector inputs with key-value pairs or expressions. The feature includes a 'Dynamic Properties' section where developers can input JSON objects to configure settings dynamically, overriding predefined properties. Additionally, the EntryId of a newly created connector is stored with a token for further use.

### Easily Replace and Update License

Users can now replace and update their existing Plant an App license directly from the General Settings screen without any manual steps to clear out the underlying structures.

### Ability to Restore Workflows from Versioning (Experimental)

We've made it easy to restore previous Versions of your workflows directly from the interface. Now, for each workflow, you can view a list of all previous versions that you've committed and choose to restore any version with just a click. Additionally, you can either overwrite the existing workflow or create a new one. This is just the first step in the broader topic of restoring the state of an Application.

### New DNN Installer for Plant an App Released

We've launched the Plant an App DNN Installer to streamline the upgrade process of previous DNN Sharp modules to the latest version of Plant an App. This installer automatically checks your instance for compatibility issues and makes it a one-click experience. For more information, refer to our [Upgrading guide](https://learn.plantanapp.com/docs/current/important-notes/upgrading-dnnsharp-to-plant-an-app#upgrade-steps).

## Enhancement

### Enhanced API Authorization Header Support

You can now use both 'Authorization: ' and the more standard 'Authorization: Bearer ' formats when invoking APIs built with API Builder. This enhancement ensures compatibility and ease of use, particularly for those using tools or environments that adhere to the 'Bearer' standard for API authentication.

### Enhanced SQL AI Assistant Integration

The SQL AI Assistant has been promoted from Experimental as is now available on the Professional Dev Seat and higher. The UI has also been updated to allocate more space to the SQL editor.

### Enhanced Error Handling in Version Control Committing Process

The error handling process in the Version Control screen has been improved. Users will now see clearer error messages during the commit process, particularly in cases where issues arise while interacting with MEO (Multi Environment Orchestrator). Additionally, the progress messages displayed during the commit have been refined to accurately convey the current state of the operation. These improvements will help in diagnosing issues and taking appropriate actions, such as retrying a full commit or contacting support if necessary.

### Knowledge AI Assistant Integrated with Chat Widget in Configuration Screens

The Knowledge AI Assistant is now available within the configuration screens as a chat widget for Professional Dev Seats and higher. This enhancement allows users to leverage AI for access to public knowledge, which includes documentation, community insights, and tutorial videos.

### Marketplace Launch

One of the major features in 1.27 is the launch of the Plant an App Marketplace - https://marketplace.plantanapp.com. Whether it is AI capabilities, search features, automation, payment providers, or integration with Salesforce – we have it all. The next phase of the marketplace scheduled for 1.28 will be Application Templates - a feature long asked by our community.

### Removed SSL Toggle in General Settings to Prevent Site Access Issues

The option to enable or disable SSL from the general settings has been removed to prevent potential site access issues. Users reported that toggling this option inadvertently caused the site to become inaccessible. This change ensures the stability of deployed sites and prevents accidental service disruptions. Any necessary SSL configuration should now be managed via the persona bar.

### Compatibility for objectQualifier

Plant an App restored compatibility with the use of objectQualifier, an outdated mechanism to run multiple application configurations in a single database. This has been restored to ensure smooth upgrade from old versions.

### Export Modules with Friendly Names for Versioning

Modules are now exported using their friendly name titles rather than module IDs. This feature addresses the confusion caused by differing module IDs across environments, making it simpler to differentiate and manage modules within the git repository. Now, when you export modules, they use the user-specified title, or if not available, a default friendly name ensuring module files are recognizable and consistent across different environments.

### Improved Consistency and Usability in Settings UI

We've made several enhancements to ensure consistency between the Settings screens across the platform's new UIs. Key changes include: help icons consistently placed and styled, gray background when hovering over parameters, font sizes for labels and fields are standardized for better readability, labels highlighted, the Namespace gear icon is replaced with a default button, and more.

### Introducing Entity Records Source for Dropdowns

The Entity Records Source feature is available in data source option for dropdown fields within forms, or any other feature that accepts a List Source. This replaces the need to use the SQL data source with an easier, no-code mechanism that doesn't require maintenance since it will take into account changes to the related Entity automatically.

### Enhanced UX for Action Parameters

We made several improvements to the user interface for action parameters. Checkboxes are now teal and larger, with labels and tooltip icons appearing in black. The delete button can be accessed easily either on hover or focus in grid and name-value-collection parameters. Additional messages inform you when no actions, values, or files are present. Furthermore, icons are standardized. Enjoy a more aesthetic and intuitive experience!

### Enhanced File Upload Support in Server Requests

Now, the Files settings in the Server Request action will only be visible when the HTTP method is POST, PUT, or PATCH. This update ensures a cleaner interface and prevents configuration errors when using the GET method, which does not support file uploads. Additionally, labels and help texts have been refined for clarity.

### Enhanced Update Process by Downloading All Dependencies First

We have improved the update process to ensure a seamless experience by changing the way minimum dependencies are handled during updates. Now, all necessary packages are downloaded first before any installations begin. This prevents the system from entering a broken state due to partial installs or failed downloads. This change offers a more robust and reliable updating mechanism, especially beneficial for users with slower internet connections where previous issues were observed.

### Enhanced Logging for Minimum Dependency Updates

We've improved our update mechanism by logging Minimum Dependency updates to SystemUpdatesLogs. This enhancement helps in better tracking and investigation of any issues or errors during updates. Users can now see detailed logs of download and installation steps, making troubleshooting more efficient.

### Update Page to Show Marketplace Add-ons

We've updated the Add-ons tab on the Updates page to enhance your experience. Any package that is available via the Marketplace will also be visible in this screen, facilitating discovery of additional value that can be added to your application.

### New Workflow Builder UI Set as Default

The new Workflow Builder UI that has been experimental in 1.26 is is now set as the default interface when accessing the Workflow screen. You can still switch to the Legacy UI, which is scheduled for removal in version 1.28.

### Workflow Import Now Respects Existing Namespaces

The workflow import feature has been improved to respect the namespace defined in the import file. Previously, workflows always imported to the 'Default' namespace.

### Enhanced User Experience in Workflow Builder

The Workflow Builder has received multiple improvements to enhance user experience and align with with the UX in other features. Some key changes include: condition labels now display fully without truncation, buttons for Add/Import/Export are visible only on the Process screen, UI alignment and visual consistency, and others.

### New Settings Tab in Workflow Builder

We've introduced a new Settings tab in the Workflow Builder aimed at simplifying the management of Namespace and Workflow details in one place. It includes sections for Workflow Name, Workflow Description, Namespace selection, and Contract selection.

### Enhanced Change Detection in Workflow Builder

We've improved the change detection functionality in the Workflow Builder to ensure that you are prompted to save your work if there are unsaved changes whenever you attempt to leave the page. This includes all exit routes such as clicking the 'Back' button, navigating away using the left menu, or closing the tab. The popup asking you whether to save your changes will now only appear if actual changes have been made to the workflow, preventing unnecessary interruptions.

### Improved Error Messaging for Workflow Branch Deletion

We've enhanced the error message when attempting to delete branches from a workflow in the Workflow Builder module. Previously, deleting branches could lead to errors with confusing messaging, causing users to be unable to save or recover their work. The new error message clearly indicates that an Exclusive Gateway branch is missing a condition and provides guidance to ensure branches are fully deleted, preventing overlaps and unresolved conditions.

### Enhanced Action Search in Workflow Builder

The action search feature in the Workflow Builder has been enhanced to improve usability. Originally designed to provide a fuzzy search to cover misspellings, some users found the results not as expected as it searched beyond action titles. The update focuses the search on action titles only and aims for better relevancy by sorting results based on score rather than exact string match. While some inconsistencies remain, the search functionality is significantly improved from previous versions, balancing more comprehensive search capabilities with user-friendliness.

### Enhanced Workflow Parameter Requirements with Default Values

In the Workflow Builder, you can now set workflow input parameters as 'Required' while also allowing a default value to be specified. This means that if a required parameter is not provided or is set to null/empty during workflow execution, the specified default value will be used instead.

### Enhanced Workflow Action Editor for Improved Usability

We've made updates to the workflow action editor for a more intuitive user experience. Key improvements include disabling the escape key and clicks outside the pop-up to prevent accidental closure, renaming 'Save' to 'Apply' for clarity, and adding a 'Cancel' button to easily discard changes. Additionally, cancelling will ensure that changes are not accidentally saved to the workflow, preserving your previous setup.

### Workflow Test Input Values Now Save Between Tests

The Workflow Builder's Save and Test pop-up now retains the input values previously submitted, making it easier to retest workflows. This enhancement ensures that values are saved per workflow, and remain consistent even on page reloads. Note that if parameter names are changed, their corresponding values will not reload.

### Enhanced Parameter Descriptions in Workflow Test Run

The Workflow Test Run pop-up now includes descriptions for input and output parameters. This enhancement ensures that users can see the detailed descriptions provided for both types of parameters during the testing of workflows, enhancing the clarity and usability of workflow tests.

### Prevent Saving Actions with Parameter Errors in Workflow Builder

In the new Workflows UI, you will no longer be able to save an action if there are parameter validation errors present. Instead, similar to the Automation module, the system will display an error message at the bottom of the screen if you attempt to save with such errors. This change ensures that you complete all required fields before saving, improving consistency and preventing incomplete actions from being saved.

### Added Token Autocomplete for Workflow Conditions

We've enhanced the token autocomplete feature for conditional gateway conditions in the Workflow Builder. Now you can use token autocomplete without needing to input tokens manually.

### Enhanced Dynamic Workflow Execution with Contract Filter

The Execute Workflow feature now includes a new 'Contracts' field that enhances parameter selection by filtering workflows based on contracts. This update ensures that when you add the Execute Workflow action in various components such as Forms, APIs, and Automation, you will have more control over which parameters are displayed and used, depending on the selected contract. This functionality is contingent on the Enterprise Plan - Workflows Contracts feature.

### Ability to order Workflow Parameters

The Workflow Builder now allows you to manually reorder Input and Output parameters, providing more control over parameter logic and presentation. Parameters are displayed consistently in the Workflow settings and generated actions. Contract parameters appear first and maintain their order from the Contract, while Workflow-specific parameters can be reordered among themselves.

### Enhanced Display for Workflow Parameter Descriptions

Display of workflow parameter descriptions has been enhanced. Now, when adding an Execute Workflow action you will be able to see the parameter descriptions, even if they are defined under a Contract. However, note that for the Execute Workflow Generic action, parameter descriptions will still not be shown because of the dynamicity of it.

### Enhanced Error Logging for Form Validation Issues

We've improved the error logging for form submissions. Now, when there is a validation error due to a syntax issue in a required field, a detailed error message is shown to low-code developers and above, indicating which expression didn't compile and in which field it occurred. This helps to identify and debug issues more efficiently. Additionally, insightful error messages are logged so that admin users have access to detailed information for troubleshooting, while regular users only see a generic error message.

### Enhanced Phone Field with Updated Library and New Features

The Phone Field in the Form Builder module has been enhanced by updating the underlying library. This update includes improved support for US phone number validations with both 7 and 10 digits, addressing previous usability issues with countries like Bermuda and others using +1 country code with a single area code. Additionally, a new feature allows automatic setting of the initial phone field country based on the user's IP address using the ipapi service. This feature is optional and can be enabled in the field settings. Furthermore, the option to specify a list of specific countries is now available, improving customization and functionality.

### Enhanced Inline Help for Passkey Feature

We've added inline help for the 'Create Passkey' function, particularly focusing on actions related to 'ArePasskeysSupported'.

### Improved Error Handling for Stripe Checkout Success and Cancel URLs

We've updated the inline help for the Stripe Checkout action to indicate that the Success URL and Cancel URL fields are required. As a fallback, if these fields are left blank the current page's URL will be used.

### Removal of the TabsPro option from the Module Settings >> Module Container list

We've streamlined our platform by removing the TabsPro container option from the list of Module Containers. This change helps avoid errors related to the non-existing container file. For clients upgrading from older versions where the container was previously enabled, a clean-up process ensures these settings are updated, preventing potential errors related to missing files.

### Complete refactor of User Management Actions

The user management system has been significantly overhauled to eliminate dependencies and providing a more streamlined and independent approach. All related actions are moved to a separate package. Several enhancements have been made, including updated action names and help texts for clarity. Error messages have been refined to improve user understanding during registration and user management tasks.

## Bug Fix

### Add-on Updates Now Visible on Missing Dependency Screen

The Missing Dependency screen now properly displays add-on updates for installed add-ons, appearing only when updates are released as forced updates. Whenever possible, we release hot fixes and avoid forcing updates.

### Help Links Restored on Configuration Pages

The issue with missing Help Links on configuration pages in version 1.27 has been resolved. The Help Links, which provide quick access to guidance and instructions, are now visible and functional as they were in version 1.26.

### Standardize UI for Condition Fields in Workflow Actions

Workflow Builder's action conditions now use static instead of floating labels, similar to labels for other parameters. The font size has been standardized for a consistent user interface.

### Workflow UI Now Supports Common Monitor Resolutions

The Workflow Builder UI has been updated to properly support a range of common monitor resolutions. This fix ensures that options and actions are displayed correctly across different devices, such as mobile, tablets, and desktops.

### Improved Compatibility Between New and Old Workflow UIs

We've resolved an issue where workflows created in the new UI couldn't be smoothly edited in the old UI. This fix ensures seamless editing between the two interfaces, preventing errors when adding branches or editing workflows created under the new UI.

### Resolved Issue with Copy-Paste Functionality in Workflow Actions

The ability to copy and paste actions within a workflow using keyboard shortcuts has been removed to address an issue where the pasted action could not be edited and the workflow could not be saved or tested.

### Fixed Export and Import of Actions in New Workflow UI

We've resolved an issue in the new Workflow UI where importing actions from a form to a workflow was causing errors and losing settings. This fix ensures that all actions are imported correctly without issues in the new UI. Note that similar issues in the old UI will not be addressed as it will be deprecated in version 1.28.

### Consistent Default Value Selection in Workflows UI

The new Workflow UI now consistently shows default values for action parameters like 'Server Request - URL Token Encoding and HTTP Method' and 'Send Email - Format,' similar to Automation and APIs. This update provides consistency across administrative screens.

### Fixed Output Parameter Deletion Error in Workflow Builder

In the Workflow Builder, an issue was fixed where deleting an output parameter with no name and value would result in a validation error. They can now be deleted without errors.

### Prevent Duplicate Parameter Names in Workflow Builder

The Workflow Builder now ensures all output parameter names are unique, preventing errors during saves and updates. The system checks for duplicates and prompts 'Name must be unique' if a duplicate is found.

### Fix for 'Create Autologin Link' Input Parameter Loading Issue

We've fixed an issue in workflows where input parameters were not loaded correctly when using the 'Create Autologin Link' action with the Validity period set to 'Date and Time picker'. The input parameters now load correctly in both the Old and New UI.

### Fixed Import Issue with Server Request Action in Workflows

The issue preventing the Server Request action from importing correctly in the Workflow Builder has been resolved. Now, it imports seamlessly in APIs, Automation Jobs, and Workflows, including all relevant actions.

### Fix for 'ActionId' Errors in Workflow Builder

We've fixed an issue in the Workflow Builder where users would encounter an error stating 'Value cannot be null. Parameter name: actionId' when using exclusive/parallel gateways. This occurred particularly when actions within the workflow were not properly connected. Now, the system will display a clear 'Element not connected' error if actions are not linked correctly.

### Workflow Duplication Caching Issue Resolved

We fixed a caching issue that caused edits in one duplicated workflow to appear in another. This occurred due to the workflow editor not refreshing between workflows.

### Fix for Scrolling Issue in Send Email Action

We've fixed a bug where scrolling was not functioning correctly when adding actions in the OnError section of the Send Email action in the new UI Workflow, Automation, and APIs screens.

### Fix for Unwanted Blank Property Added in Workflow Builder

A bug in the Workflow Builder added a blank property when configuring workflows with additional properties. This happened if Enter was pressed after selecting a dropdown value, creating multiple blank rows.

### Fix for Unsaved Textbox Changes in Workflow Builder

We've resolved a bug in the Workflow Builder where changes made in a textbox (e.g., comments, conditions) were not being saved if you clicked the save button immediately without clicking outside the textbox first. This fix applies to both the old and new UI.

### Fixed JSON Object Value Retention in Workflow Interfaces

Resolved an issue where the value for creating a JSON object was not retained when saving in the old workflow interface. After the fix, the values are consistently saved and maintained between both interfaces, ensuring seamless operation.

### Fix for Workflow Stalling when JSON appears in Output Token

Fixed a Workflow Builder issue where JSON in the Output Token/Store Result field caused infinite loading. JSON can now be used safely without disruptions.

### Improved Performance in Automation Admin Screen

We've optimized the performance of Automation admin screen to enhance the overall responsiveness and stability when managing scheduled jobs.

### Fixed DryIoc Error During Application Restart

A bug that resulted in DryIoc errors being logged from database triggers when the application was restarted has been fixed. Users can now create a database trigger for a job and restart the application without encountering these errors in the logs.

### Fixed Error with Hidden Data/User ID Field in Bootstrap 5

We've resolved an issue with the Hidden Data/User ID field in the Form module causing errors in Bootstrap 5 templates.

### Fix for Adding Actions in User Guides

We resolved an issue in the User Guide Builder where users were unable to add actions to User Guides. You can now search for actions to add to a step, and select them to include in the action list effectively.

### Fixed Inline Edit Save Error in Bootstrap 3

Fixed an error when saving inline edits in Bootstrap 3's Legacy View.

### Fix for Listing Views Migrations to Maintain Legacy View

We've fixed a bug in platform upgrades from older DNNSharp versions to 1.27, where Listing Views were improperly set to DataTable or left empty, causing visibility issues. Now, views are correctly retained as Legacy, ensuring seamless listing visibility.

### Fix for Dynamics CRM Add-on Actions

We've addressed an issue in our Workflow Builder where Dynamics (CRM, 365) actions were failing to retrieve datasource items when added to workflows. With this fix, the actions should now function normally, allowing you to import the action or save the workflow without any errors appearing.

### Fix for Microsoft Login Issue in OIDC Connector

The issue where users experienced login failures when using Microsoft login through the OpenID Connect (OIDC) connector has been resolved. With the new update, users can now log in using their Microsoft accounts without encountering errors, even if their accounts were not previously linked to Microsoft.

### Resolved Action Lock Issue with OIDC and Bootstrap 3

We've fixed a bug where provider actions in OpenID Connect were erroneously locked when using Bootstrap 3 with the PageBuilder theme and default view. You should now be able to add and manage provider actions without issues related to the Bootstrap version. This fix ensures that all necessary actions work seamlessly across supported Bootstrap versions.

### Fix for Multi Portal Licensing Activation Failure

We resolved an activation failure caused by the license file exceeding character limits. A new Exchange Code mechanism ensures smooth activation. Please update to the latest MPL module version and clear the cache, as it may affect the licensing version used.

### Tokens Import Namespace Fix

We've resolved an issue where Tokens failed to import namespaces correctly, which was causing errors during system upgrades. This fix ensures that after upgrading, the namespaces are imported successfully and are part of the appropriate namespace, preventing related errors from being logged.

### Fix for Update Username Action Error

The 'Update Username' action has been improved to handle situations where a user identifier is not provided. Now, if no user identifier is specified, the action defaults to using the context user. If there is no context user available, an error will be thrown. Also, the issue with token values being interpreted as literal text has been resolved.

### Fix for Default Expression Setting in New UI for Update User Profile

We've fixed an issue in the new UI where the 'Update User Profile' action didn't correctly handle Additional User Properties when the Expression checkbox is used.

### Fix for Token Expansion in Update User Profile via Workflow

The issue where tokens were not being expanded correctly when updating a user profile through a workflow has been resolved. Previously, token expansion worked fine when performed from a form, but failed in workflows. This fix ensures that updates done via workflows now process tokens correctly.

## Security

### Security Enhancement for File Downloads in Search Boost

We've addressed a security issue where unauthenticated file downloads could've been performed. For most sites, this change will not affect system usability. In rare cases you may elect to use the obsolete setting. See Search > Content Sources > URL Format for Files.

## Cosmetic

### Updated Help Text for Load User Action

The help text for the Load User actions in the platform has been updated to provide clearer guidance on its usage.

### UI Update: List Name Parameter Now Prioritized in 'Execute Actions for each List Entry'

In the updated UI for executing actions for each list entry, the List Name parameter is now correctly prioritized and appears at the top as the primary input field. This change improves clarity and usability by ensuring that users can easily identify and input the necessary list name, as previously it appeared at the bottom, confusing its significance.

### Improved Inline Help for Send Email Action

The inline help for the 'Attach from Token' parameter in the Send Email action has been updated. The revised help text is now more explicit and specifies all available location types, enhancing clarity for users.

### Improved Help Text for Destination Folder Setting

The help text for the 'DestinationFolderIdentifier' field has been updated to clearly indicate that if the field is left blank, the folder will default to the root directory.

### Improved Help Texts for Pack Folder Action

The help texts for the Pack Folder action parameters have been enhanced for clarity and accuracy.

### Improved Inline Help for Copy Non-Archive Files

We've enhanced the inline help text related to the 'Copy Non-Archives' feature. When enabled, if the specified file is not in archive format, it will be copied to the designated directory. If disabled, non-archive files will be ignored, streamlining the unpacking process for archive files.

### Enhanced Inline Help for Load State Feature

We've improved the inline help for the Load State feature. The updated guidance now clearly explains that the Reports feature is necessary when using the Browser Cookies option.

### Enhanced Save State Inline Help

We've improved the inline help for the Save State feature to provide clearer guidance. It now explains that the Reports feature is necessary for the use the Browser Cookies option.

### Standardize the 'User Guides' Builder

To eliminate naming confusion, all instances of 'Training', 'Onboarding', 'InfoBox', and 'Guides' in the configuration menu and related titles have been renamed to 'User Guides'. In some contexts, such as buttons, the term 'Guide' may be used. This change is aimed at providing a consistent user experience for the User Guide Builder.

### Improved Alignment for Icon-Only Buttons

We've corrected an alignment issue where icon-only buttons had extra spacing, making them look off-center. This change ensures that your icon buttons display correctly and are visually appealing. Check out your buttons now and enjoy a cleaner look!

### Improved Inline Help for Login with Passkey

We've enhanced the inline help for Passkey actions to provide clearer guidance on whether Passkeys are supported (ArePasskeysSupported).

## Obsolete

### Update to Server Request Actions

The Server Request actions have been updated. The existing 'Server Request' action is now labeled as 'Server Request (Obsolete)' while the previous 'Server Request (Experimental)' action is now simply 'Server Request'. This change signifies that the newer implementation is now the primary action to be used. The obsolete version will be removed in a future release.

### Removal of the GitHub Credential Connector Type

The GitHub credential connector type has been discontinued and removed as it was associated with an outdated implementation of Versioning that is no longer in use. Users will no longer be able to add or see existing GitHub connectors in the platform. Note that this does not affect how Versioning works.

### HTTP Request Token Marked as Obsolete

The HTTP Request Token type is now marked as obsolete. Users are encouraged to utilize Workflows with Server Request actions, which offer more flexibility and robustness. Workflows can be exposed as Run Workflow tokens to maintain the same experience.

### Reports action "Save report in the Database" Marked as Obsolete

We have marked the Reports feature in the Form Builder as obsolete. This change is part of our effort to set clear expectations for our users, particularly those transitioning from old DNN Sharp products. As these features are no longer supported, we recommend exploring alternative solutions or reaching out to our support team for guidance.