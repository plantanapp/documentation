---
id: hotfix-notes-v1-26
title: Hotfix Notes v1.26
sidebar_label: Hotfix Notes v1.26
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

## Breaking Change

### Security Enhancement for File Downloads in Search Boost

We've addressed a security issue where unauthenticated file downloads could've been performed. For most sites, this change will not affect system usability. In rare cases you may elect to use the obsolete setting. See Search > Content Sources > URL Format for Files.

## Feature

### Tooltip Descriptions Now Support Tokens Across Various Fields

We've improved the form builder experience by ensuring that tooltip descriptions now support tokens across several field types including Currency, Phone, Static Text, and Title. This update enhances the user experience by providing evaluated token information directly within tooltips. The tooltips will appear consistently regardless of the Label Align setting. In same cases enabling the Show Tooltip option from the Form's Advanced Settings is required.

### Introducing Secure Passkey Authentication for Enhanced User Security

We are excited to introduce Passkey Authentication, a modern and secure method for logging into applications and websites. Passkey Authentication leverages facial recognition, fingerprint, and unlock codes on your device to provide a seamless and secure login experience. This new feature offers better security and convenience compared to traditional passwords and is compatible with most modern devices. Our implementation includes: 1. **Create Passkey Action**: Users can create a passkey via Forms and Listings. Once created, the passkey's public key is securely stored, and users can specify actions on success or failure of passkey creation. 2. **Login with Passkey Action**: Users can log in with their passkey through Forms. Similar to passkey creation, successful or failed login attempts can trigger specified actions. 3. **Pass Key Management**: A Listing Data source is available for managing all passkeys associated with a user, with the option to delete passkeys. Please note: - Some browser-specific limitations may apply (e.g., compatibility with Firefox). - Certain actions are not supported in OnSuccess/OnError workflows, such as Display Message or Refresh Listing. For more detailed information and guidance on setting up passkeys, please refer to our new documentation and the [web.dev articles](https://web.dev/articles/passkey-registration) linked above.

### New Action to Export Page

We have added a new action, Export Page, that allows low-code developers to export a page easily. This action generates a token containing the export data of the specified page. Users can specify the page using various identifiers such as TabId, TabPath, and Tab Name.

### Introducing 'Remove Records' Action for SearchBoost

A new 'Remove Records' action is now available for SearchBoost, allowing developers to efficiently remove specific indexed records. This enhances the ability to keep search behaviors in sync with database changes. The action resides in the Search category of the Plant An App action menu and supports configuration of parameters such as Behavior Id and Filter Records. These fields can accept tokens, and multiple values can be specified in the Value field. Additionally, an 'On Error' section is included to manage any exceptions according to the latest pattern.

## Enhancement

### Enhanced Entity Input Search by ID in Workflow Test Run

You can now search for records by their ID using Entity Input Parameters in the Workflow Test Run. This enhancement allows developers to efficiently locate records by ID, improving the search functionality. Searches will display both the ID and the name of the entities, with long names truncated for better readability. The search handles both exact ID matches and partial matches in the name, providing a robust search experience.

### Version History Grid - 'CommitDate' Updated to 'Commit Date'

The Version History grid has been updated to improve readability. The 'CommitDate' column has been renamed to 'Commit Date'. This change makes the date format clearer and more user-friendly.

### Changed 'Variable' to 'Token' in Change Grids

We've made an enhancement to the change grids by renaming the 'Variable' item type to 'Token' when adding or editing a token. This update ensures consistency and clarity in naming conventions used within our application.

### Character Limit Added for App Name in General Settings

The App Name field in General Settings now has a character limit of 128. If the name exceeds this limit, an error message 'Application name must be shorter than 128 characters' will be shown, and the settings will not be saved. This prevents SQL errors and ensures clarity on input limits.

### Enhanced Default Expression for Actions with Datasource

We've updated various actions to have expressions enabled by default and removed the dropdown when not in an ActionForm. This enhancement impacts the following actions: create autologin link, send user reset password email, update user profile, user login, and user registration. The defaulting to expressions applies to fields across different modules like Automation, APIs, Workflows, and Listings, ensuring a more consistent and streamlined experience.

### Immediate Action Configuration Updates

Changes made to an action's configuration file are now instantly reflected on the site without needing to clear the site cache.

### Added OnError section Execute Workflow actions

You can now manage exceptions in Execute Workflow actions more effectively. This update introduces new settings: 'Continue on Error' and 'On Error'. 'Continue on Error' allows workflow execution to proceed even if an error occurs. The 'On Error' section lets you specify actions to handle errors, providing exception details through tokens like [Exception], [ExceptionType], [ExceptionMessage], and [ExceptionStack]. This enhancement ensures your workflows are more robust and can handle errors gracefully.

### Fixed Workflow Save Loop Issue with Parallel Gateway

Resolved an issue where a Parallel Gateway with only one action would cause the workflow to enter a save loop. Now, an appropriate error message will display.

### Enhanced Logging for AB UpgradeController and Configuration Initialization

We've improved the logging system within the AB UpgradeController to help identify issues with Low Code page updates. The new logs provide detailed information on when a Low Code page is found, as well as the start and end of the deletion process. This update also ensure customers are getting the latest versions of Low Code pages.

### Improved Compatibility Between 2sxc and Plant an App

Addressing multiple issues stemming from shared DLL dependencies between 2sxc and Plant an App, which have been causing difficulties for many users.

### Enhanced Reindexing with Automation Jobs

Incremental Reindexing is now triggered by Automation Jobs. Previously, Reindexing was triggered automatically EVERY 10 MINUTES. After upgrade, reindexing will change to ONCE PER DAY. Automation jobs are created for each search behavior and can be adjusted to set the reindexing time and frequency to suit your needs. They also can be configured to run one-at-a-time in a single queue or to bypass the queue and run on separate threads. Find these new jobs in Automation after the upgrade. Requires Search 05.26.32.

### Enhanced Dropdown Action with 'Title When No Selection'

We've improved the 'Add Dropdown' action in the Form Builder by introducing a new parameter called 'Title When No Selection'. This enhancement allows you to set a default title for dynamically added dropdowns when no option is selected, providing better guidance for end-users.

### Enhanced Styling for File Upload Fields

We've improved the styling of both the Single and Multi-file upload Fields in our Form Builder. While drag and drop uploading has always been supported, this hotfix updates the UI to show users they can use this option.

### Enhanced Control Over Dynamic Fields That Are Hidden

A new setting, 'Submit Hidden Fields', is now available in the Dynamic Field Container for forms, giving users control over whether hidden fields submit their values upon form submission. By default, this option is disabled for new forms, meaning hidden fields will not submit data and associated validations are skipped. For existing form configurations, the option remains enabled by default to maintain current behaviors.

### Default Expressions Enabled in Various Actions

We've made enhancements to several actions to streamline your workflow. Now, expressions are enabled by default for key form fields in the following actions: Create Autologin Link, Send User Reset Password Email, Update User Profile, User Login, and User Registration. The dropdown selection will only appear when using an ActionForm, providing a more intuitive setup experience. Additionally, the issue with Additional User Properties in the Update User Profile action has been resolved.

### Dropdown with Autocomplete Now Displays All Configured Items Correctly

We've fixed an issue where the dropdown with autocomplete was cutting off the last item due to incorrect height computation.

### Updated Documentation Link for Form Life Cycle

The Form module now points to the latest version of the documentation for the Form Life Cycle.

### Improved CNP Validation in Form Builder

We've improved the validation for CNP (Numeric Personal Code). The validator now accurately checks CNPs, ensuring no invalid county codes slip through.

### Lifted Item Limit in Hierarchical View

We've removed the arbitrary limit of 100 items per level in the Listing Hierarchical view. Now, you can set the maximum number of items per level through the new 'Maximum Results per Level' option in Data Settings. This enhancement ensures that all items, including those exceeding the previous limit, will be displayed according to your configured settings.

### Access Current Query Details through New Tokens

We've added new tokens to enhance your ability to interact with data in listings. For more details, refer to the updated documentation: https://learn.plantanapp.com/docs/current/modules/listings-tokens.

### Enhancement to Inline Add in Listings: Cancel Option

Added ability to cancel individual rows while in Inline Add mode. If you change your mind about adding a particular row, you can easily discard it before saving.

### Enhanced Calendar View: Calendar Selection Event Trigger

Added the option to select dates or hours by either clicking or clicking and dragging. When enabled you can trigger custom actions with JavaScript by using the new selection event JS objects: start, end and isFullDay. This enhancement allows for more interactive and dynamic behavior in your calendar applications. Two new properties were added to the Calendar View Settings: Allow Selection (boolean) and On Selection (text for script to run).

### Enhanced Calendar View with Event Item OnClick Custom JS

When selecting events in the calendar view you now have the option to trigger custom actions with JavaScript by using the new select event JS object: item. A new property was added to the Calendar View Settings: On Item Click (text for script to run). If no custom code is provided, the default behavior will still be to display the event detail view.

### Improved Menu Behavior for Desktop and Mobile

We've made several enhancements to the menu system to improve the user experience by making the menus more user-friendly and visually appealing.:

Desktop: Dropdown arrows for root menu items are now hidden but are visible for subitems, providing a cleaner look.
Mobile: Clicking on items without a link will now show or hide subitems, making navigation more intuitive. Note that clicking on active items will still open the page.


### Add Custom Modules to Top User Menu

You can now add custom modules to the top user menu via the Page Builder skin. This allows you to incorporate specific functionalities like showing alerts, forms, or other modules directly in the user menu.

### New Panes Added to Page Builder Theme

We've added three new panes to the Page Builder theme to enhance its functionality. These include a 'Menu Bar Right' pane which appears at the top right of the page, and two new panes 'P4_50_1' and 'P4_50_2', designed for dividing content into two equal sections within a row. Additionally, the visibility and layout issues have been addressed to ensure a consistent design across different resolutions.

### Unified HTML Service Actions for Improved Functionality

We've merged and streamlined the HTML Service actions into a single implementation for better performance and ease of use. The actions now follow a consistent naming convention, ending with '(Microservice)', and include the ability to generate HTML from a URL and create PDFs from HTML as microservices. These changes ensure a simpler and more efficient process for managing HTML-related tasks.

### BotId Now Available as Token in Azure Bot Trigger

As a low-code developer, you can now access the BotId (Microsoft App Id) as a token in the Azure Bot Message Received trigger context. This enhancement allows you to create conditional logic based on the BotId, offering greater flexibility for automation and customization in your bot-related workflows.

### Improved Performance for Crawl Next Batch Action

We have enhanced the 'Crawl Next Batch' action in the WebCrawler module to significantly reduce CPU utilization. Previously, executing this action led to high CPU usage, often spiking to 85-90%. After our improvements, the CPU utilization now mostly stays between 20-30% with only occasional short spikes up to 55%. This will lead to more efficient resource usage and smoother performance when running automations that include this action.

### Unified WebCrawler Actions in Platform

We have unified our WebCrawler actions into a single streamlined implementation in version 1.26. This update includes renaming actions to follow a new naming convention with '(Microservice)' at the end, appending '.microservice.' to file names, and combining configuration files. The update also ensures that the following actions are included: Add Site, Remove Site, and Crawl Batch. Please note that these new microservice-based actions will not be exposed in the build zip.

### Enhanced Debugging with New Columns in WebCrawler_Page Table

The paa.WebCrawler_Page table now includes four new properties to aid in the debugging process:

SourcePageId: Points to the entry in the paa.WebCrawler_Page table from which the URL for the current page was extracted (INT).
CreatedAt: Indicates when the entry was added (DATETIME).
LastSourcePageId: References the last entry in the paa.WebCrawler_Page table from which the URL for the current page was extracted (INT).
LastFoundAt: Indicates the last time the entry was found on the page specified by the LastSourcePageId property (DATETIME).
These enhancements will streamline querying, filtering, and sorting operations, making the debugging process more efficient.



### Chat Widget Now Compatible with Assistant ID on *.app.bazinga.ai

The chat widget has been updated to support both deployment and assistant methods. Now, the widget will only function with the assistant method if the referrer is *.app.bazinga.ai. The initialization API will return default settings for the assistant method, eliminating the need for a deployment. This enhancement also removes the outdated 'assistant-id' parameter, replacing it with just 'assistant'. Please ensure you are using the latest version (v20) of the widget.

### Connector Type Added to AI Providers

We have introduced a new 'ConnectorType' column in the AI Providers table. This addition helps in identifying which AI Connector corresponds to each AI Provider. Please note that the connector types are derived from the 'Name' property of the Credential Store Type table. This improves the clarity and management of AI connectors within the system.

### Merged VectorDb Actions and Implementations

We've consolidated the VectorDb actions and implementation files to streamline operations. The action names now follow the naming conventions, with '(Microservice)' appended at the end. Additionally, the file names now have '.microservice.' between the name and '.json.config'. Note that these new microservice-based actions will not be exposed in the build zip. The following actions are included: Collection exists, Add Collection, Delete Collection, Delete Collection Entry, Store Vectors, and Search Similar.

### Enhanced AI Module with JSON Schema Support

We've introduced support for JSON Schema in the AI module. Now, models can respond with a specified JSON schema format, offering more structured responses. This update requires manual input of the JSON schema for ensuring the correct output format. Notably, there's added flexibility as the 'Response Format' parameter now supports expressions, including 'text', 'json_object', or 'json_schema'. Additionally, the JSON Schema input field is always visible to facilitate easier configurations. For comprehensive guidance on supported models and schema definitions, please refer to OpenAI's [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs).

### Improved Handling of NULL Dates in SearchBoost Incremental Indexing

We've enhanced the incremental indexing feature in SearchBoost to better handle scenarios where the Last Modified Date is NULL. A new parameter, 'Created Date Column', has been added to ensure records are not left unindexed due to NULL values. This parameter serves as a fallback, using the Created Date when the Last Modified Date is unavailable. Additionally, updates have been made to improve the logic at query time, ensuring entries are always indexed if neither date is set or is NULL. The changes also include updated help texts for better clarity and understanding.

### Enhanced UI with 'Configure Indexing Schedule' Link

We have added a new feature to the user interface under the 'Current Behavior' section. Now, when you hit 'reindex content' and experience any delay, you will find a link titled 'Configure Indexing Schedule' that takes you directly to the corresponding Automation Job page. This should help provide clarity and a direct path to adjust indexing schedules if needed. Requires Automation 05.26.38.

### Enhanced Automation for Search Indexing

Incremental Reindexing is now triggered by Automation Jobs. Previously, Reindexing was triggered automatically EVERY 10 MINUTES. After upgrade, reindexing will change to ONCE PER DAY. Automation jobs are created for each search behavior and can be adjusted to set the reindexing time and frequency to suit your needs. They also can be configured to run one-at-a-time in a single queue or to bypass the queue and run on separate threads. Find these new jobs in Automation after the upgrade. Requires Automation 05.26.38.

### Enhanced File Indexing Performance

The procedure responsible for real-time indexing of files has been optimized to reduce CPU usage significantly.

### Improved Help Text for DateTime Tokens

The help text for DateTime tokens has been updated to include the optional 'RelativeTo' parameter in the 'DateTime:Relative' function. This enhancement provides users with clearer guidance on using the 'RelativeTo' option with specific date calculations.

## Bug Fix

### Workflow Actions Failing to Retrieve Datasource Items Error Fixed

We've resolved issues in the Workflow Builder where certain actions such as 'Import list into Database' and 'Send DNN Message' would fail with a 'Failed to retrieve datasource items' error. These actions now properly retrieve datasource items.

### Changed Download File Response action so it will set content-type header based on file extension.

The issue where the API for saving files was incorrectly identifying the file extension as '.bin' instead of the actual file extension has been resolved. Now, the API accurately identifies and saves files with the correct extensions (e.g., .jpg, .png, .pdf) based on the expected content type.

### Fixed Virtual Directory Path Issues in App Builder

We addressed a bug where virtual directory paths were not being constructed correctly in the App Builder. This issue affected functionalities like the email body editor, SQL query editor, and API testing, causing errors such as 404 or 500. With this fix, all resources now load correctly by ensuring that necessary virtual directory paths are included in URLs. Users should no longer experience these loading errors.

### Improved AI Assistant Functionality for Run SQL Query Action

We have resolved several issues related to the AI Assistant's ability to populate Bind Tokens in the Run SQL Query action. The AI Assistant now correctly populates the Bind Tokens field, ensuring more consistent behavior when constructing SQL queries. Additionally, certain improvements have been made to enhance query generation, such as adjusting prompts to prioritize certain tables over others and ensuring consistent output formats.

### API URLs using Virtual Directories Corrected

Resolved an uncommon issue where API screens were not displaying due to incorrect URL formatting when using virtual directories.

### Fix for Conversation Feedback in Run SQL Query Action

The issue with conversation feedback not working when using the 'Run SQL Query' action has been resolved. Users can now successfully provide feedback using the thumbs up/down icons, and all feedback logs are recorded as expected.

### Fixed Infinite Redirect Loop in Calendar View Navigation

We've resolved an issue where users navigating between the calendar view and data table view using the browser back button would experience an infinite redirect loop. Now, when you transition between these views and use the back button, you will be properly redirected to the previous view without being stuck in a loop.

### Fix for Empty Dropdowns in Listing Filters

We've addressed an issue where filter dropdowns in listings became empty when multiple values were selected from another filter. This issue was prevalent for listings using Entity datasources but not for SQL datasources. We've updated the query logic to ensure correct grouping with 'AND' and 'OR', enabling dropdowns to display all available options based on the currently filtered records.

### Fixed Filtering Functionality in Calendar View

The Calendar View now properly applies filters directly within the view. Previously, users had to filter in another view first as the Calendar View would reset to a default state upon any filtering attempt. This fix resolves that issue, ensuring the selected filters are maintained and applied accurately to display the correct filtered events. Users can now expect the filter dropdown to preserve their selections. Needs to be installed along with Listings 05.26.87.

### Checkbox List Field Displays HTML Correctly Again

The Checkbox List field now properly renders HTML in the text of each item. Users can now include HTML in their checkbox list fields' text, and it will be displayed as entered.

### Fix for Drag and Drop Issue in Listing Builder

We've resolved a problem where the drag and drop functionality in the Listing Builder module was not working correctly in version 1.26.

### New Workflow UI: Fix for Action Import/Export Issue

Resolved an issue in the new Workflow UI where exporting and importing actions did not function correctly. This problem has been addressed, ensuring that actions now import as expected.

### Schema Disappearing from DB Table List Bug Fixed in SQL Console

We have resolved an issue in the SQL Console where clicking the "+" sign for the first item in the database table list resulted in the entire schema node disappearing. Now, the dropdown remains visible, and the columns of the selected table are shown as expected.



### Fixed Issue with Cloned Actions Affecting Original Actions

We have resolved an issue in the API Builder where changes made to cloned 'Execute actions' were inadvertently affecting the original 'Execute actions'. Moving forward, changes will only apply to the specific action being edited, whether it is the cloned or original action, ensuring that your configurations remain accurate.

### Fix for Missing Hotfixes During Software Update

We've resolved an issue where certain hotfixes were not being displayed. We recommend you to install this in order to receive additional hotfixes.

### Improved Reliability for SQL AI Assistant

We've enhanced the SQL AI Assistant to better handle large database schemas and improved its reliability. Users should experience more consistent and accurate SQL generation when using the assistant across Automations, APIs, and Workflows.

### Workflow Actions Failing to Retrieve Datasource Items Error Fixed

We've resolved issues in the Workflow Builder where certain actions such as 'Import list into Database' and 'Send DNN Message' would fail with a 'Failed to retrieve datasource items' error. These actions now properly retrieve datasource items.

### Workflow Conditions Focus Issue Fixed

We've resolved an issue where workflow conditions couldn't be edited. The focus was lost when moving the cursor outside the condition's borders.

### Fix for License Error During Paa Upgrade with DNN

Resolved an issue where a Jwt error would occur when returning from the Activation screen to configuration after upgrading Paa to version 1.26 and updating DNN. The issue was caused by an incorrect dependentAssembly entry in the site's web.config.

### User Password Validation Action Fixed

The issue causing the 'User/Password Validation' action to throw an error in version 1.26 has been resolved. This action will now correctly validate user passwords. Please note that role validation in this action is not affected by this fix and will be addressed separately.

### Fixed Console Errors When Hovering Over Email and URL Inputs in Workflow Testing

We resolved an issue where hovering over email and URL input fields in the 'Prepare test' screen of workflows caused regex errors to be logged in the console. Your workflow testing experience should now be smoother, without unnecessary error messages cluttering the console.

### Execute Workflow Action Now Displays Input Parameters Correctly in New View

We've fixed an issue where input parameters for the 'Execute Workflow' action were not visible when using the new view. Now, you can seamlessly add and configure your workflows with their respective input parameters visible, ensuring consistent functionality regardless of the view you choose.

### Fixed Issue with Exclusive Gateway Conditions Causing Save Loop

We fixed a bug where adding a space at the end of a condition (e.g., 'true ') in an exclusive gateway within a workflow would cause the workflow to enter a save loop. This issue only occurred when a trailing space was present.

### Fix for 'Fail to Retrieve Datasource Items' Error in Workflow Actions

Resolved an issue where certain workflow actions would return a 'fail to retrieve datasource items' error due to missing configuration files on disk. This fix ensures that all necessary configuration files are present, allowing the actions including adding, deleting, and updating modules and pages to function correctly in Workflows, APIs, and Automation.

### Database Connector Test Fixed

The issue causing the database connector to fail during testing has been resolved. Users should now see the correct responses when testing database connectors.

### Fix for Token Corruption on Multiple Save and Test

We've addressed an issue where tokens could become corrupted if the 'Save' and 'Save & Test' buttons were clicked multiple times in quick succession.

### Fix Incorrect Display of 'Recommended Hotfixes' Banner

Resolved an issue where the 'Recommended Hotfixes' banner was incorrectly displayed. The banner now accurately considers the installed version when determining if a hotfix is required.

### Fix for Missing URL and Data Fields in Server Request Action Import

We've resolved an issue in the API Builder where importing a Server Request Action was causing the URL and Data fields to lose the filled in values. Now, when you export and re-import these actions, all fields, including URL and Data, are preserved as expected.

### Improved Error Handling in Execute Workflow

The 'Execute Workflow' action in the Workflow Builder now correctly handles errors when expressions are enabled for the Workflow selection parameter, but the Workflow GUID is left blank.

### Workflow Actions Failing to Retrieve Datasource Items Error Fixed

We've resolved issues in the Workflow Builder where certain actions such as 'Import list into Database' and 'Send DNN Message' would fail with a 'Failed to retrieve datasource items' error. These actions now properly retrieve datasource items.

### Enhanced Reindexing with Automation Jobs

Incremental Reindexing is now triggered by Automation Jobs. Previously, Reindexing was triggered automatically EVERY 10 MINUTES. After upgrade, reindexing will change to ONCE PER DAY. Automation jobs are created for each search behavior and can be adjusted to set the reindexing time and frequency to suit your needs. They also can be configured to run one-at-a-time in a single queue or to bypass the queue and run on separate threads. Find these new jobs in Automation after the upgrade. Requires Search 05.26.33.

### Fix for Automation Migration Issue during Upgrade to 1.26

We've addressed a migration issue that occurred during the upgrade from version 1.25 to 1.26. This resolves an incomplete upgrade of Automation.

### IMAP Trigger Now Handles Empty Email Bodies

The issue where the IMAP trigger would get stuck in 'running' when receiving an email with an empty body has been resolved. The trigger will now handle emails with empty bodies gracefully without getting stuck.

### Predefined Fields Now Load Full Settings in Form Builder

We've resolved an issue where predefined fields in the Form Builder would only load the field type and title/ID without any other configured settings.

### Fix for Redirect to Portal Page Action Not Working Correctly

The 'Redirect to Portal Page' action now correctly redirects to the current page if no page is selected in the configuration.

### Display Image Now Updates Correctly with AJAX Refresh

Fixed an issue where the Display Image field in forms was not updating its value via AJAX refresh when the Image URL was linked to a text box input. Now, when you submit the form with a new URL, the Display Image will properly reflect the updated image.

### Form Labels Not Updating with Bind Expressions Fixed

We've resolved an issue where after updating to version 1.26, labels in forms weren't updating correctly when using bind expressions. This issue was causing the label to only update when the script was run from the console and not directly within the form module. This fix ensures that labels update as intended when selecting a value from a dropdown, consistent with previous behavior in version 1.25.

### Fixed Default Connector Issue in SQL Actions

We've resolved an issue where adding a new database connector was causing the default connection for SQL actions to change unintentionally, leading to unexpected errors. Now, SQL actions will maintain their original database connector settings unless manually updated by the user.

### Fixed Issue with Dropdown Exceeding Maximum Number of Selections

Resolved a problem in the Form Builder where the 'Dropdown with checkboxes' field type allowed users to select more options than the set Maximum Number of Selections. Now, users cannot exceed the maximum limit of selections as configured.

### Workflow Actions Failing to Retrieve Datasource Items Error Fixed

We've resolved issues in the Workflow Builder where certain actions such as 'Import list into Database' and 'Send DNN Message' would fail with a 'Failed to retrieve datasource items' error. These actions now properly retrieve datasource items.

### Root Buttons Display Correctly in Pop-Up Listings

Fixed an issue where root buttons in a listing were incorrectly grouped as if in responsive/mobile mode when the listing was set to display in a pop-up. Buttons now display correctly according to screen resolution. Tested various scenarios, including different placement and execution methods, ensuring consistent behavior.

### Buttons Display Correctly When Switching Tabs

We've resolved an issue where buttons in listings were getting grouped together when switching between tabs, as if they were being shown on a mobile device. Now, the buttons will display correctly according to the screen resolution.

### Fix for 'Create Excel from List' Action Error

The 'Create Excel from List' action, which was producing an 'Object reference not set to an instance of an object' error following the latest hotfixes, has been fixed. Users can now use this action without encountering errors. The fix is confirmed to work on Listing versions starting from 5.26.70.

### Fixed Navigation and Listing Filter Issues on Pages Management

We've resolved a critical issue where navigating to sub-pages in the Pages Management section would not display the correct values.

### Hierarchy View Nodes Fixed in Listings

The issue where nodes in the hierarchy view were not expanding has been resolved.

### Fixed Errors with Listing Item Buttons in Groups

We resolved an issue where clicking a button in an item button group within a listing caused an error, regardless of whether the button had an action or not.

### Listing Filters Now Update Correctly with Querystring

We have fixed a bug where changing filters through query strings did not update the listing results correctly. Now the listings will reflect the updated filters as expected.

### Automatic Refresh for Listings with Query String Prefix Fixed

We've fixed an issue where listings were not automatically refreshing when a custom Query String Prefix was used. Previously, users had to manually refresh the page to see the updated filters applied. Now, listings correctly refresh and display the expected results upon selection, matching the behavior of using a default prefix.

### Fixed Infinite Redirect Loop in Calendar View Navigation

We've resolved an issue where users navigating between the calendar view and data table view using the browser back button would experience an infinite redirect loop. Now, when you transition between these views and use the back button, you will be properly redirected to the previous view without being stuck in a loop.

### HTTP Method Default Set to 'GET' in Server Request Action

We've improved the Server Request action configuration experience by ensuring the HTTP Method defaults to 'GET'. Now, 'GET' is applied by default, making the action configuration smoother and avoiding errors due to unspecified methods.

### Fixed Filtering Functionality in Calendar View

The Calendar View now properly applies filters directly within the view. Previously, users had to filter in another view first as the Calendar View would reset to a default state upon any filtering attempt. This fix resolves that issue, ensuring the selected filters are maintained and applied accurately to display the correct filtered events. Users can now expect the filter dropdown to preserve their selections. Needs to be installed along with App Builder 01.26.298.

### Firefox Compatibility Fixed for Listing Hierarchies

We've resolved an issue where the 'Expand All' and 'Collapse All' functions in the Listing Hierarchy were throwing errors in Firefox. This fix ensures that users can now seamlessly use these features without encountering errors when working with hierarchical data, regardless of whether some subcategories contain items or not.

### Clarified Inline Edit and Inline Add Save Functionality

Removed the individual row save buttons for inline edit and inline add features. The save functionality applies to the entire set of changes simultaneously and the UI better reflects this.

### Schema Disappearing from DB Table List Bug Fixed in SQL Console

We have resolved an issue in the SQL Console where clicking the "+" sign for the first item in the database table list resulted in the entire schema node disappearing. Now, the dropdown remains visible, and the columns of the selected table are shown as expected.

### Fix for Drag and Drop Issue in Listing Builder

We've resolved a problem where the drag and drop functionality in the Listing Builder module was not working correctly in version 1.26.

### Debugging Enhancement for Open ID Connector

The new enhancement will allow tracking of additional details necessary for effective debugging.

### Sub-menu Chevrons Now Visible Across All Widths

We fixed an issue where sub-menu chevrons did not appear and sub-menus were inaccessible when the page width was set between 768px and 991px. This update ensures that chevrons are visible and sub-menus are navigable across all responsive widths, including mobile devices.

### Sub-menu Items Rendering Issue Resolved on Mobile Devices

We've fixed an issue where sub-menu items were not rendering properly on mobile devices when using the default-BS5 layout in certain page builder scenarios. This update ensures that sub-menus display correctly without overlapping content, making it easier for users to navigate menus on their mobile devices.

### Support for Tokens in Page Titles and Meta Tags Added

We've updated the Page Builder theme to support the use of tokens in page titles and meta tags. This enhancement allows dynamic content to be automatically inserted without the need for manual theme edits.

### Fixed Search Functionality in Bootstrap 5 Templates

Now, clicking the search icon on the search input module or menu bar will correctly focus the search. Additionally, search icons are hidden when using live search and the search button does not trigger other unintended search boxes. The change ensures smoother and more intuitive search interactions across PageBuilder and Default Bootstrap 5 templates.

### Resolved: Passkey Authentication Issues on Firefox

The issue with creating and logging in using passkeys on Firefox has been resolved. Users can now successfully create new passkeys and login without encountering console errors.

### Fix SQL Error During WebCrawler Module Upgrade

Resolved an issue that caused a SQL error when attempting to upgrade the WebCrawler module from version 1.26 to 1.27. The error occurred because an index named 'IX_WebCrawler_Page_Url_SiteId' already existed on the 'paa.WebCrawler_Page' table. Modifications have been made to ensure proper handling of indices during the upgrade process, preventing this conflict.

### Web Crawler Now Generates Relevant and Consistent URLs

The Web Crawler has been updated to solve the issue of generating irrelevant and lengthy URLs due to parameter concatenation. URLs are now decoded, and query parameters are ordered by key to prevent duplicate entries. This ensures that URLs are parsed and stored correctly, improving the consistency and relevance of the web crawling results.

### Fixed issue with Add Site to Crawl action when using empty tokens

Resolved a bug where using empty tokens for RestrictPaths and ExcludePaths in the Add Site to Crawl action didn't create the necessary entries in the Pages table. Now, when executed, the workflow correctly adds entries both in the WebCrawler_Site and WebCrawler_Page tables, with path values set to NULL.

### Resolved Error with Azure OpenAI Chat Model gpt-4o

The issue where the Azure OpenAI Chat action failed when using the model 'gpt-4o' has been resolved. The error message indicated that the model was not found, which was corrected by linking the model to the Azure provider and updating the SQL script for consistency across instances. Now, the gpt-4o model should operate correctly without producing the previous error message.

### Fix for Missing OpenAI Connector Type in Connectors Page

We've fixed an issue where the OpenAI Connection Connector Type was not appearing in the dropdown list on the Connectors configuration page after installing the OpenAI add-on. With this update, users should now be able to see and select the OpenAI Connection Connector Type as expected.

### Fix for OpenAI Summarize Content Error

We've resolved an issue where the OpenAI Summarize Content action was throwing an error when processing VTT content. The error was caused by an unhandled null reference when the provider or model was not set. The fix now ensures that more specific, helpful error messages are thrown when these settings are not configured correctly, aiding low-code developers in identifying and resolving the issue promptly.

### Special Characters Included During Streaming

Fixed an issue where special characters, such as newline characters (\n), were not included in the streamed chunks. This caused markdown content not to render correctly until after streaming ended. With this fix, special characters are now properly handled and rendered during streaming, improving the user experience.

### Fix for Glitchy Chat Widget During Streaming

We have resolved an issue where the chat widget would repeat parts of the content during streaming and then correct itself once streaming ended. This fix ensures that the responses are streamed smoothly without displaying duplicate content, improving the overall user experience. Additionally, the 'AbortError' issue that appeared in the console during streaming has also been addressed.

### Improved handling of corrupted indexes

Resolved various issues with corrupted Lucene indexes that were triggering App Pool recycles.

### Fixed Incorrect User Sort Order in Search Results

We fixed an issue affecting the sorting functionality across different fields such as 'Title' and custom fields like dates within the search results. Users can now sort search outcomes accurately according to their preferences.

### Enhanced Automation for Search Indexing

Incremental Reindexing is now triggered by Automation Jobs. Previously, Reindexing was triggered automatically EVERY 10 MINUTES. After upgrade, reindexing will change to ONCE PER DAY. Automation jobs are created for each search behavior and can be adjusted to set the reindexing time and frequency to suit your needs. They also can be configured to run one-at-a-time in a single queue or to bypass the queue and run on separate threads. Find these new jobs in Automation after the upgrade. Requires Automation 05.26.39.

### Fixed SearchBoost Errors During Indexing Content

We have resolved issues where SearchBoost encountered certain errors while indexing content.

### Fixed Search Functionality in Bootstrap 5 Templates

Now, clicking the search icon on the search input module or menu bar will correctly focus the search. Additionally, search icons are hidden when using live search and the search button does not trigger other unintended search boxes. The change ensures smoother and more intuitive search interactions across PageBuilder and Default Bootstrap 5 templates.

### Fix for Duplicate Tokens When Changing Namespace

Resolved an issue where changing the namespace of a token would incorrectly result in the token appearing in both the old and new namespaces. Now, when updating a token's namespace, it will only be shown in the new namespace, and will be removed from the old one.

### Version Control Page Now Handles Corrupt Tokens

We have fixed an issue where the Version Control page would fail to load if there was a corrupted token in the system. Now, the 'Changes' listing will properly load even when some tokens are corrupted, ensuring the page remains usable.

### Fixed URL Adapter Issues

We've resolved a major issue where enabling the URL Adapter would disrupt the Configuration Menu and prevent correct URL redirection. Note that SSL must be activated for the low code pages to work properly. A restart of the application might be needed after enabling URL Adapter and SSL.

## Security

### Security Enhancement for File Downloads in Search Boost

We've addressed a security issue where unauthenticated file downloads could've been performed.

## Performance

### Improved Performance when Saving Workflows and Entities

We've significantly enhanced the performance for fetching action definitions in multiple modules. This update includes changes to prevent the constant reloading of configuration files during application changes. Instead, configurations are now efficiently managed through a caching mechanism that updates only when necessary. This results in a drastic reduction in time taken to update configurations when altering workflows or entities, ensuring a smoother and quicker user experience.

## Cosmetic

### Improved Clarity for Entity Save Message

The message displayed when saving an entity has been updated for better clarity. The message now reads: 'Do you want to apply your changes to all entity related components? (pages, forms, grids, APIs, permissions and tabs)'. Additionally, the 'Override' button has been changed to 'Merge changes'. This update aims to provide a clearer understanding of the actions you are taking.

### Adjusted Autocomplete Drop-Down Width in Workflows and Entities

We've improved the user experience in the Workflow Builder by making the autocomplete drop-down width in the Entity Input Parameter sections consistent with other parameters. Additionally, in Entities, the autocomplete dropdown now has a minimum width of 360px to ensure better visibility and usability.

### Improved Visibility for Singular Name Field

The 'Singular Name' field in the Entities screen has been enlarged to enhance readability, ensuring that information is clearly visible and easily accessible.

### Typo Correction in 'Get Connector' Action

We have corrected a typo in the 'Get Connector' action. The field 'Connectr Entry' has been updated to 'Connector Entry' to ensure accurate labeling.

### Settings Tab Now Opens by Default for New and Edited Jobs and APIs

We've made a change to improve consistency across the platform. Now, when you create or edit an automation job or API, the Settings Tab will open by default, aligning with the standard behavior across other admin sections. This is designed to reduce confusion and enhance usability, making it easier for you to manage and configure your settings effectively.

### Updated URL and Tab Title for Getting Started

We've made some changes to the Getting Started section in the App Builder. The URL has been updated from '~/Configuration/started' to '~/Configuration/start'. Additionally, the tab title will now display as 'App Builder | ' instead of 'Started | '. These updates help streamline navigation and clarify the section's purpose.

### Default Label Position on New Forms Updated to Top

The default label position for newly created forms is now set to 'top' instead of 'right'. This change enhances the form's appearance, especially in popups, mobile views, and non-full-width vertical layouts, providing a more consistent and user-friendly display. Existing forms will retain their current label positions unless manually adjusted.

### Default Label Position Updated to Top for New Forms

The default label position for newly created forms is now set to 'top' instead of 'right'. This change enhances the form's appearance, especially in popups, mobile views, and non-full-width vertical layouts, providing a more consistent and user-friendly display. Existing forms will retain their current label positions unless manually adjusted.
