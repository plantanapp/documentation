---
id: release-notes-v1-26
title: Release Notes v1.26
sidebar_label: Release Notes v1.26
---

Overview:

- [Breaking Change](#breaking-change)
- [Feature](#feature)
- [Enhancement](#enhancement)
- [Bug Fix](#bug-fix)
- [Security](#security)
- [Performance](#performance)
- [Cosmetic](#cosmetic)
- [Obsolete](#obsolete)

## Breaking Change

### Migration of Old API Endpoint UI to Configuration/API Screen

The old API Endpoint UI has been removed in version 1.26 as part of our efforts to reduce technical debt. All APIs have been migrated to the Configuration/API screen. Key actions that have been taken include: 1. Creation of namespaces for individual modules following the pattern 'Import APIs from module #123'. 2. Removal of the banner for switching between UIs. 3. Elimination of legacy code to prevent duplicate entries in the Updates screen. 4. Reflection of changes in multiple areas to ensure seamless integration and functionality.

### Removal of Legacy Endpoint from API Builder UI

The Legacy Endpoint in the API Builder UI has been removed due to security concerns, as it exposed too much of the underlying system. Users who have published endpoints using the Legacy name will need to update their configurations and communicate these changes to those who rely on these endpoints. Using the legacy endpoints will return an error.

### Removal of 'Open in Separate Page' Option for Forms

We have removed the 'Open in Separate Page' option from the Form settings list as it was no longer functioning effectively since version 1.23. The code and form control associated with this feature have also been eliminated. Please ensure to select 'Initially Visible' as the default setting since it may appear blank currently.

## Feature

### New Action: Context to JSON Array Available

We've introduced a new action that allows you to convert current context tokens into a JSON array. This is great for low-coders to debug, record, and restore context. Key features include storing results, handling prefixes (case insensitive), and excluding specific tokens by default, making it easier to manage context data.

### New Action: Context to JSON Object

Introducing the new 'Context to JSON Object' action! This feature enables you to send the current Context Tokens to a JSON object, aiding low-coders both in debugging, and simplifying the process of recording and restoring context. Users can choose between a flat structure or a nested structure for the output JSON. The configuration parameters and information selection options are consistent with previous actions, but now the output is an object instead of an array. This update enhances your ability to process the JSON using JavaScript and provides greater flexibility in handling context information.

### Custom URL for API Endpoints

You can now define custom URLs for API endpoints, allowing for better format flexibility such as /v1/object and /v2/object. This enhancement, accessible through the settings section of the new API interface (ignoring the old interface), will address several issues with dynamic API calls and improve sync between the Endpoint Name field and Endpoint URL Path field. Note that if the URL field is left empty, the system will default to using the Endpoint Name as the URL.

### New Experimental Workflow Builder Interface

The new interface features an updated action editor that is faster along with intellisense/autocomplete, action validation, and various other improvements.

### Install Unpublished Hotfixes from URL

You can now install unpublished hotfixes directly from a URL provided by our support team. Simply navigate to the Updates > Hotfixes tab, click the 'Install from URL' button, and paste the provided URLs. You can add multiple packages and manage them easily. Please note the new functionalities include URL addition and removal, as well as improved installation progress reporting.

### Experimental Parallel Gateway for Improved Workflow Efficiency

We've added a new feature that allows builders to run actions in parallel. This enhancement speeds up application processes by executing multiple actions simultaneously and waiting for all to complete before continuing. Note that this action merges contexts from all threads back into the main context. This feature is available through special rhombus elements in the Workflow Editor elements and not through the traditional action menu. The feature is release as experimental in 1.26. It will become stable in 1.27 as an Enterprise feature.

### Module Settings Now Display Revision and User Information

In Forms, Listings, and Tabs modules, you will now see revision details, including the revision number, last saved date, and the username of the person who last updated the module. This information appears at the bottom of the settings tab in a non-distracting font, helping both support teams and users track changes more effectively. Every time a module is saved, the revision number auto-increments, and the latest user and timestamp are updated. Additionally, this revision information is included in module exports and is updated upon import or module upgrade.

## Enhancement

### New 'On Error' Event in 'Execute Actions'

The 'Execute Actions' feature now includes an 'On Error' event. This allows actions to be defined that will execute when an error occurs during the action stack run.

### Enhanced Error Handling for Send Email Actions

The 'Send Email' action now includes improved error handling capabilities. Users can define a set of actions to execute if an error occurs, using error-specific tokens such as [Exception], [ExceptionType], [ExceptionMessage], and [ExceptionStack]. The 'Ignore Errors' checkbox, previously available only in Forms, is now accessible across all modules including Forms, Listings, Infobox (Training), APIs, and Automation Scheduler. This enhancement ensures consistent behavior and better control over error handling in all scenarios where the 'Send Email' action is used.

### Option to Enable or Disable API Generation for Entities

We've added a new feature that allows you to enable or disable API generation for each entity. By default, newly created entities will have this setting turned off to avoid unnecessary API creation and screen clutter. However, on upgrade, all existing entities will have the setting turned on to maintain backward compatibility. You can toggle the API Access setting on the Entity General screen. Turning off this setting for an existing entity will remove all previously generated APIs associated with it.

### Improvement in Upgrade Process for Enhanced Stability

The upgrade process has been updated to better handle various stages of the upgrade and concurrent access of the application by users during the upgrade. This fix is applied across all current versions, ensuring fewer disruptions when installing hotfixes or upgrading.

### Improved Condition Writing in Workflow Exclusive Gateways

We've enhanced the Workflow Builder to make it easier to write conditions on exclusive gateways. Now, instead of using a small textbox, a user-friendly pop-up appears, allowing you to enter both a label and expression. The label is optional and, if provided, will display on the arrow instead of the expression. Expressions will stay on a single line, and long expressions will show with an ellipsis, revealing the full text on hover. This enhancement aims to reduce errors and provide a clearer view of when each branch executes. Note that this improvement is available on the new UI only.

### Proper Alignment of Rich Elements in Listing Table View

We have improved the alignment of rich elements (like lists and preformatted text) in the table view of listings. You will notice that columns formatted as text now align correctly, providing a tidier and more visually appealing display.

### Default Values Auto-Populated in Workflow Test Runs

You can now see default values filled directly in the input fields when running a test in the Workflow Builder. This makes it easier to test by just changing the values instead of copying and pasting them. There's also an info icon next to each field that shows the input parameter description, similar to the look and feel from Connectors.

### Enhanced Search and Filter in Version History

You can now easily search and filter within the Version History. The new enhancements include the ability to search by Id, Title, and Details, and filter results by Committer Name and Committer Email. Additionally, you can sort the entries by Commit Date for a more streamlined experience. These updates will help you navigate and manage your version history more effectively.

### Enhanced Workflow Import Logic

The workflow import functionality has been improved to better handle cases with matching Global IDs and names. Now, importing workflows will overwrite existing ones if they share the same Global ID and name, ensuring smoother updates from one environment to another. Additionally, importing a workflow with a matching Global ID but a different name will no longer create unnecessary copies.

### Configure All Connector Types from a Single Screen

You can now configure all types of connectors directly from the Connector screen, making it more convenient to manage your integrations. This feature supports the addition, update, and testing of various connectors ensuring proper error messaging and credential management.

### Highlight Duplicate API Group Upon Upgrade

In the version 1.26 upgrade, API groups that include duplicate APIs will now be highlighted. This improvement helps users easily identify and manage duplicate APIs after Migration.

### Enhanced Browser Tab Titles for App Builder Pages

Enjoy a more meaningful browsing experience with improved tab titles in the App Builder. Now, when you hover over your browser tabs, you'll see more descriptive titles of the specific object you are editing instead of generic page names. This change applies across all main sections and editing pages, providing you with clearer information at a glance.

### Improved UI for Individual Jobs/APIs with Separated Sections

The interface for individual jobs/APIs now features a clearer and more organized view, separated into four distinct tabs: Triggers, Actions, On Error, and Settings. The default tab upon editing is Actions, ensuring a streamlined user experience. Additionally, the 'Edit Namespace' option has been moved to the Settings tab to alleviate clutter in the Job Title section. Users can also enjoy a cleaner Save button design, maintaining its size and wording but incorporating an underline animation for a polished appearance. Missing parameter messages now highlight issues both on save and when errors are detected.

### Short URL Form Allowed in Default Entity Properties

We have updated the default value handling for URL properties in entities to now allow short form URLs (e.g., www.abc.com) without needing the protocol (e.g., https://). This improvement makes it easier to input URLs and ensures a more intuitive user experience.

### Improved API Endpoint Display and Naming Consistency

The UI for API endpoints has been updated to enhance clarity and reduce confusion. In the listing view, the display now includes the 'Name', 'Method', and 'URL'. In the expanded listing details view, the labels have been renamed for better understanding: 'Endpoint' is now 'Endpoint Name' and displays the endpoint's name, while 'Url Path Endpoint' is now 'Endpoint URL'. Additionally, when an endpoint is not defined, the built-in pattern (e.g., /api/Customers) is used, and this is indicated with the phrase 'Not defined (Endpoint URL is the same as the API Name)'. Immediate removal of old APIs is necessary as they are no longer functional. These changes aim to streamline API management and ensure consistent behavior across all API methods (get, put, delete, post).

### Easier Access to Hotfixes with New On-Demand Button

We've improved the hotfix experience by adding a button to the hotfixes screen so you can get updates on demand. The app will now check for updates once a day instead of every five minutes, which helps improve server performance.

### Mandatory Installation of All Hotfixes Before Major Upgrades

To ensure a smoother upgrade process and reduce issues, all users must install available hotfixes before upgrading to a new major version. This enhancement will check for any pending hotfixes and require their installation before continuing with the upgrade. If no hotfixes are pending, the upgrade process proceeds as usual.

### Improved Handling for Expired Personal Access Tokens in Version Control

We have enhanced the Version Control feature to better manage expired Personal Access Tokens (PATs). Users will now have the ability to update and store a new PAT directly within the AppBuilder interface. This update includes a new button that users can easily access to reset and input a new PAT. The system will guide users by displaying a clear message prompting them to update the PAT if it has expired, thereby ensuring uninterrupted access to the Version Control functionality.

### Improved API Search by Endpoint URL

You can now search for APIs using the Endpoint URL in addition to the Endpoint Name. This enhancement makes it easier to find the specific API you're looking for based on its URL.

### Improved Default Value Field Type Handling in Workflow Input Parameters

We have enhanced the Workflow Builder to make the Default Value field of input parameters reflect the selected property type. This change addresses the limitations of the previous textbox-only input, enabling better formatting and validation for various data types (such as date-time and boolean). Additionally, input fields now have fixed sizes, and descriptions have been added to output parameters.

### Add Description Field for Workflow Input and Output Parameters

You can now add descriptions to both input and output parameters within the Workflow Builder. This enhancement allows you to provide detailed information about each parameter, assisting both you and others in understanding what data should be passed in and what will be returned. These descriptions are displayed as help text in the workflow actions, ensuring clear documentation and easier use of workflows.

### Improved Performance with Caching for Read All Actions

You can now enable caching for 'Read All' entity record actions, making your application more performant! Enable the caching option through a new boolean property 'Cache' and configure 'Cache Key' and 'Expiration' settings to suit your needs. Be mindful to use unique cache keys to avoid conflicts and ensure consistent performance. Adjusting expiration times may require a cache clear for the changes to take effect.

### Enhanced Action Importing in API Builder

The API Builder now supports importing an array of actions efficiently. This enhancement simplifies the process of moving multiple actions by creating an array if there are more than two actions selected for export. Importing already configured actions will also bring in the settings along with the actions correctly.

### Enhanced Support for Importing Multiple Actions

API Builder now supports importing an array of actions. This update simplifies the process of moving multiple actions by automatically creating an array if more than two actions are selected for export. Previously configured settings and actions will also be imported correctly, ensuring a seamless configuration transfer.

### Track User Modifications in Versioning

You can now see who made modifications to a low-code object and when these changes occurred. This new enhancement replaces the 'Last Changed Date' column with 'Last Changed' and lists users from newest to oldest. Each record will be updated with the user's ID and the timestamp of the modification. System changes will be marked as 'System' if no user is associated with the change. Deleted users will be marked as 'Deleted user'. This feature ensures transparency and easy tracking, elevating your overall experience.

### Improved Search Function for Actions List

The search function in the actions list has been enhanced to use word search instead of string search. This improves the accuracy of search results by showing only those actions that contain all the individual words entered into the search field. Users will now find it easier to locate specific actions without sifting through unrelated results.

### Expand Nodes with Selections by Default in Hierarchical Checkbox List

In the hierarchical checkbox list, nodes that contain selected items will now automatically expand upon loading. This change ensures that users can easily see their selected items, even if they are children of unselected parent items.

### Obsolete Field Types Hidden in Forms

We have updated our form builder to hide field types that are marked as obsolete. This change helps prevent users from selecting outdated field types, reducing support questions and reducing the risk of breaking changes. Please note that existing forms using these obsolete field types will continue to function as the code remains in place.

### Login and Forgot Password Pages Now Accessible Without Licensing

You can now use the login and forgot password pages (/paa-login, /login, and /forgot-password) even if your application is not activated. However, the registration form will still require an active license. This enhancement ensures that users can regain access to their accounts more easily.

### Location Update for ActionForm Localization Files

To avoid confusion, we've added a readme file indicating that the resx files for ActionForm have been moved to a new directory: DesktopModules\MVC\DnnSharp\ActionForm\App_LocalResources. This change is applicable for new BS5 templates.

### Bootstrap 5 Now Default Template for New Forms

When adding a new form to your page, the default template is now set to Bootstrap 5. You no longer need to switch from the outdated 'Material' template. This update ensures a more modern and consistent design for your forms right out of the box.

### New Search Functionality in Checkbox List and Dropdown within Forms

You can now search within checkbox lists and dropdowns in forms! This feature enhances user experience by adding a search box above the checkbox list and limiting the visible size of the list. On scrolling, more elements matching the search term will be displayed. Localization support for this text has also been added for broader accessibility.

### Expand Hierarchical Checkbox List to Show Selected Items on Load

The hierarchical checkbox list will now automatically expand nodes to display any selected items when the field loads. This enhancement makes it easier to identify selected items that might otherwise be hidden under unselected parent nodes.

### Improved Accessibility for Listing Buttons in Narrower Layouts

The visibility and accessibility of listing buttons have been enhanced for intermediate sizes. Note that this is regarding the actual width available for the listing, not the total screen size. If there are too many buttons to fit, they will wrap to display in multiple rows. Additionally, on narrower windows, the buttons will switch to a hamburger menu to ensure they remain accessible.

### Enhanced PDF to Plain Text Extraction by Pages

You can now extract and process text from large PDF files page by page, making the information more manageable. The Plain Text to PDF action has been updated to include an 'On Process Page' section, allowing you to specify actions for each page of extracted content. New tokens available are [PDF:PagesCount], [PDF:PageNumber], and [PDF:PageText]. The Help Text of the 'Store Plain Text' output token has also been updated.

### Page Size in Perform Search Action Now Supports Tokens

The Page Size parameter in the Perform Search action has been enhanced to support tokens. This allows you to control the page size programmatically, enabling greater flexibility and performance optimization. For example, you can specify the exact number of results to display by dynamically adjusting the page size based on your needs.

### Enhanced DateTime:Relative Token with Optional RelativeTo Parameter

We've enhanced the DateTime:Relative token to include an optional parameter called RelativeTo. This allows you to specify a date to make it relative to, rather than always defaulting to DateTime:Now. If you don't set the RelativeTo parameter, it will still default to DateTime:Now for backward compatibility. This update simplifies date calculations and adds more flexibility to how you can use the DateTime:Relative token.

## Bug Fix

### Experimental Server Request Action Error Fixed

We have resolved an issue that caused errors when handling large payloads with the Experimental Server Request action. This fix ensures that the correct data is returned without any errors. The older Server Request action remains unaffected and continues to work as expected.

### Ignore Errors Option Now Prevents Logging in Server Requests

When the Ignore Errors option is enabled in Server Request actions, errors will no longer be logged. This improvement is aimed at preventing log file flooding. The developer can handle errors through custom logic specified in the 'On Error' action. If no 'On Error' logic is provided, and the Ignore Errors flag is checked, errors will simply not be logged.

### Fixed Issue with Server Request Action Not Decompressing G-Zip Responses

An issue preventing the Server Request action from decompressing g-zip responses has been resolved. This fix ensures that messages are displayed correctly when using g-zip compression.

### Fix for CORS Issue Blocking API POST Requests

Resolved an issue where CORS checks were blocking public API POST methods. Now, when an OPTIONS request is made, the system will properly check if the request headers properties are present, ensuring smooth execution of POST APIs.

### Dropdown Text Visibility for API Key Selection

Previously, when selecting an API key, the dropdown menu did not display any text if no value was selected. This issue has now been resolved, and the dropdown will show placeholder text to guide you on the selection.

### Fix for Database Triggers in Automation Jobs

Resolved an issue where creating an Automation Job and adding any Database triggers would result in an error and an empty list of tables/columns. This fix ensures that Database triggers can now be added, edited, and deleted properly. Additionally, the specific events will trigger the job as expected. Note: The 'Save' function now works correctly along with 'Save and Close'.

### Action Parameter Validation Issue Fixed for API Automation

A bug affecting parameter validation in the APIs and Automation module has been fixed. Previously, attempting to save a job without filling in required action parameters did not trigger a validation error, which allowed the save to proceed incorrectly. This issue has now been resolved, ensuring that the validation error message is displayed and the save operation is prevented when required parameters are missing.

### Action Search Fixed in Legacy Workflow View

Searching for actions within another action in the legacy workflow view now returns results as expected.

### Fixed Issue with Entity Actions in Execute Actions

Resolved a bug where Entity Actions (Create, Delete) within Execute Actions could not be expanded and displayed incorrectly when edited. Users can now properly view and interact with Entity Actions.

### UI Enhancements and Bug Fixes in API Management

We've addressed several UI issues and made enhancements in the API management section. Key changes include adding a loading animation and disabling the 'Get Response' button while an API call is running. Additionally, we resolved display issues with the API description at higher resolutions and applied a consistent margin for better navigation between settings and input parameters. The 'Untitled Action' placeholder has been replaced with more meaningful indicators ('No Description' or 'Description') based on the context.

### API Method Detection Issue After Migration

During API migrations, configurations using the 'execute api method' action may face issues detecting the correct API method to call due to the removal of module ID filtering. Now, all methods in an API module are shown, leading to potential conflicts if there are multiple methods with the same name and HTTP method. This has been resolved by marking the action as obsolete and switching previous dropdown settings to textboxes. Users should note that IDs/GUIDs will now be visible in the action configuration, and the 'Execute API Method' action will no longer appear in action menus for new instances.

### Upgrade Stability - Clear page cache when deploying Configuration pages

The issue most commonly encountered would after upgrade were broken screens such as the Update or SQL Console. This fix addressed that, ensuring the Configuration screens always gets updated.

### Fixed Error Message for Duplicate API/Entity Names

When importing an entity with the same name as an existing API, users will now see a proper warning error instead of an empty error pop-up. This ensures you are correctly informed about naming conflicts during the import process.

### Filters Not Refreshing After Selection

We have fixed an issue where filters were not refreshing when selecting options in the Listing module. Previously, when you chose a filter, other filters wouldn't update properly, causing all values to appear in the filter box. The filters now refresh as expected, ensuring a smoother and more intuitive user experience.

### Fix Job Execution Timeout for App Builder Updates

We've resolved an issue where the job for 'Get App Builder Updates' was encountering execution timeout errors. This fix ensures that the job runs successfully without timing out, improving overall system performance. Users should now experience more reliable updates without disruptions.

### Fix for Entity Creation Overriding Custom API Methods

Resolved an issue where creating an entity with the same name as an existing custom API method would override the API. Now, if an API method with the same name, URL, and HTTP method (POST, GET, PUT, DELETE) already exists, an error message will be shown, preventing the entity creation. This ensures that custom API methods are not unintentionally overwritten.

### Fix for Invalid Workflow Action Export

We have resolved an issue where exporting actions from Workflows resulted in invalid imports when used in other products such as APIs, Automation, Forms, and Listings. The Workflow export action now correctly imports into APIs and other modules. This fix has been tested in both the old and new UI versions of Workflows, ensuring a smooth and error-free import experience. For more details, please visit our [community forum](https://community.plantanapp.com).

### Fix for Rich Text Parameter Visibility in Automation Actions

Resolved an issue where the Rich text parameter content would become invisible when switching between tabs in automation actions. This fix ensures that your notes remain visible and intact while navigating different tabs, preventing potential user confusion.

### Support for Negative Amounts in Money Property for Workflows

You can now create workflows that accept negative amounts in the Money input. This is especially useful for handling financial data where negative amounts represent debits. Previously, using a negative amount would result in an error message saying the input value needs to be a decimal number.

### Fixed Numeric Fields Initialization with "0" values

We fixed an issue where numeric fields (like integer, decimal, and money) were not being initialized correctly when they were marked as required and provided a default value of 0. Now, the required attribute is set correctly, and the default value is saved as expected.

### Fix for Required Property Default Value Error

Resolved an issue where the 'Required' checkbox of entity properties would remain stuck in a spinning state if the pop-up is closed without providing values or if there are validation errors. The update ensures the checkbox no longer remains stuck and works correctly across various property types like Boolean, Money, Number (Decimal), and Number (Integer).

### Fix for Remove List Entries Action Not Producing Correct Output

The 'Remove List Entries' action has been updated to work correctly. Previously, it was not removing the correct entries, sometimes producing unexpected results or no output at all. We've corrected its functionality to ensure it removes entries based on the specified criteria, making it case-insensitive where possible. The action now supports removing entries if any of the criteria are met, ensuring better usability. We've also updated the help text for clarity.

### Fix for Checkout Button action Integration and Visibility

The 'Add a simple checkout to a button' action has been hidden in the Automation, Workflows, and API modules as it should only appear in Forms and Grids. Additionally, issues with the checkout redirect leading to a blank page have been resolved, ensuring proper functionality with Authorize.net across versions 1.22 to 1.26.

### Fix for Deleting Multiple Users in Workflow Step

Resolved the issue where attempting to delete multiple users in a workflow would fail after the first entry. The workflow now correctly executes the delete action for each user in the list without throwing errors.

### Fixed Parameter Validation for Send Email Action

Previously, when attempting to save a job with a Send Email action, the system would save even if required parameters were not filled in. This issue has been resolved. Now, validation checks will correctly prevent saving until all required fields, such as the 'To' field, are completed.

### Fix for Reference Error in 'Convert from HTML to Word' Action

We have resolved an issue where using the 'Convert from HTML to Word' action resulted in a reference error. This error was caused by incorrect folder references in the web.config file and a conflict between actions. The fix ensures that the necessary assemblies are properly referenced and resolves the conflict, allowing the action to function correctly.

### Conditional Token Evaluation Fix in Listings and Forms

We've resolved an issue where tokens in template fields and computed fields were being evaluated even when the specified conditions returned false. Now, in Listings and Forms, tokens will only be evaluated if the conditions are met, ensuring accurate data representation and improved performance. If your application relied on tokens being evaluated even when the field is disabled by a condition, a potential solution is to move the token to a hidden field or column.

### Autocomplete Dropdown Now Displays Correctly on Text Boxes

We have addressed an issue where the autocomplete dropdown did not display correctly on text boxes. Previously, a specific CSS class was required to render the autocomplete suggestions correctly. This has now been fixed, and the autocomplete feature should work as expected without any manual CSS adjustments.

### Fix for 'Username is Available' Field Validation Error

The 'Username is Available' field validator in forms was generating an error, causing users to be unable to proceed. This issue has been resolved by updating the configurations to use parameterized queries, making it safer and ensuring the validator works correctly like it does in listings.

### Missing Close Button on Pop-up Windows Fixed

We've fixed an issue where the close button was missing on pop-up windows. Now, when you open a pop-up from both Forms and Listings, you will see a close button to easily dismiss the window.

### Support Added for 'Module' Core Token in Initialization Script

We have resolved an issue where the Initialization Script in the Form Builder did not support the 'Module' core token. This fix ensures that the 'Module' token now returns accurate values, enabling more dynamic and context-aware forms.

### Short Description Now Correctly Implemented for Date/Time Picker

We've fixed an issue where the short description was not displaying correctly for the DateTime, Date and Time fields.

### Correct [Tab:TabId] Value in Form JavaScript

We've fixed an issue where [Tab:TabId] was reporting incorrect values when accessed in form JavaScript. You will now get the correct value in various scenarios such as field initial value, settings, initialization scripts, Bind expression, on change/click events, and execute JavaScript actions.

### Display Image Field Now Renders Correctly with Token URLs

We have fixed an issue where the display image field was not rendering correctly when the image URL was specified as a token. Previously, the token itself was displayed as the source instead of the expanded URL. With this fix, the images will display correctly when using tokens for the image URLs.

### Resolved Module Upgrade Error in Listing Builder

Fixed an issue in the Listing Builder where a module upgrade would fail with a crash in the MigrateDefaultModuleViews or Migrate_RootButtonEnableSelection method.

### Field Validation Fixed for Inline Edit/Add in Listings

We've fixed an issue where field validation only worked for the first item when using the inline add feature. Now, error messages will correctly display for invalid values in all fields during both the edit and add processes.

### Menu Builder Access Issue Fixed

The issue that caused the Menu Builder to show an error screen upon access has been resolved. Admins can now access the Menu Builder, create, select, and apply new profiles. Note that there might be issues with saving Profile Items with Metadata.

## Security

### Upgrade to Angular 15 for Better Security, Performance and Compatibility

We've updated our front-end applications to Angular 15 to ensure better security, compatibility and performance. Note that the the calendar library used in Listing was also updated to a new major version, so please pay special attention to the calendar view when testing the listing application.

### Enhanced security around Entity Records

This update adds extra checks to ensure that unauthorized users cannot access entity records, enhancing data security and privacy.

### Cleanup of AngularJS and Bootstrap 3

We have updated our system to remove outdated files related to AngularJS 1.5.0 and Bootstrap 3. Additionally, we migrated necessary Bootstrap CSS to version 3.4.1 and deleted old directories containing obsolete files. This cleanup ensures our platform remains current and efficient. Please verify that everything continues to work properly, especially for legacy administrators, where there could be potential UI glitches.

## Performance

### Improved Performance When Saving Workflows

We have addressed a major issue where saving a workflow caused high CPU usage. Significant performance improvements have been implemented, resulting in faster saves and better overall performance. This also ensures that the changes done when creating or editing a workflow are correctly reflected across the platform.

### Optimized Workflow Deletion Speed

We have optimized the deletion process for workflows, drastically reducing the completion time. This improvement ensures a more efficient and responsive experience when managing your workflows.

## Cosmetic

### Updated Help Text for Execute API Method Action

The help-texts for the 'Execute API Method' action have been updated to reflect the latest changes in version 1.26. This includes modifications to the API Endpoint Module, API Method, and HTTP Method descriptions. These improvements ensure that the labels denote the exact and correct behavior of the current 'Execute API Method' action/datasource. The obsolete actions and datasources have been updated accordingly.

### Links to outdated Tokens Documentation removed from Help Texts

We've updated our help texts to remove all outdated links to the My Tokens documentation.

### Improved Listing Display for Updates Page

The Updates page has been improved to display all rows for Overview, Hotfixes, Changelog, and Add-Ons, instead of just the first 10 or 20. This change eliminates the need for pagination, making it easier for you to select and install updates without adjusting the page size manually.

### Tooltip on Hover for Long Action Names

When working with actions in Automation, if an action name is longer than what can be displayed, you will now see the full name by simply hovering over it. This enhancement addresses the confusion caused by truncated action names.

### Standardized Loading Animation Across All Configuration Pages

We have standardized the loading animation across all configuration tabs to ensure a consistent user experience. The familiar pulsing logo used during the saving of entities will now appear on all related pages, including the update installation process. This eliminates the previous inconsistency in loading animations and ensures a seamless visual experience wherever a similar animation is used.

### Fixed Spacing Issues in Action Buttons in API Builder

We've resolved the spacing issues in the action buttons within the API Builder. Previously, there was a large gap between the buttons, and they were misaligned. The spacing has now been corrected to match the original design, and buttons have been repositioned to align perfectly with the actions. The fix also ensures the buttons display correctly on responsive layouts.

### Output Value Field No Longer Truncated in Workflows

Resolved an issue where the output value in workflow parameters was being truncated. The field now adjusts its width appropriately, allowing for larger displays and better readability. Text wrapping is also supported, ensuring that all content is visible.

### Fixed Search Box in Entity Property Type Picker

The search box within the Entity Builder's entity type picker pop-up is now fixed while scrolling. This update ensures consistent usability, mimicking the behavior and style of the Action Picker found in workflows. Enjoy a smoother and more consistent user experience when searching for entity types.

### Updated Help Text for Capturing PowerShell Output

The help text for the 'Run Powershell Script' action has been updated. It now clarifies that the output captured by the script uses Write-Output statements. Other Write-* commands, such as Write-Host and Write-Information, are not captured.

### Updated Message for Automation Job API Removal

The message received when attempting to run automation jobs through APIs has been updated for clarity. The new message instructs users to (1) move the automation logic to a workflow and call the workflow from the automation, and (2) create an API endpoint to call the workflow. This change ensures users are correctly guided on how to proceed with automation tasks.

### Updated Description for Clear User Cache Action

The description for the 'Clear User Cache' action has been updated to accurately reflect what it does. This action clears the user-level cache for users loaded into the current context when the action is called. By default, this will be the currently logged-in user unless a different user or list of users has been loaded into context. For more details, check the documentation.

### Updated Help Text for 'Import List into Database' Action

The inline help text for the 'Import List into Database' action has been updated to provide clearer guidance. The new help text is: 'For Plant an App Entities, use the "app" schema. Leave empty for the default database schema.' This should make it easier to understand how to use the Prefix Database Schema parameter.

### Updated Help Text for Form TextBox Autocomplete URL

We've improved the help text for the TextBox Autocomplete URL in the Form Builder. This enhancement aims to provide clearer guidance and improve your form-building experience.

### Improved Help Text for Server Request Actions Data Parameter

We've updated the help text for the Data parameter in both the Server Request and Server Request (experimental) actions to make it more clear. Now, when using the GET method, you can add parameters directly to the URL or insert key-value pairs in the 'Data' field. For POST and PUT methods, the Data should match the format specified by the Content-Type header. This enhancement aims to save you time and reduce confusion.

### Corrected Inline Documentation for Image Editor

The inline documentation for the Image Editor has been updated to correctly identify the Base64 output token. Previously, it referred to 'Content' which was incorrect. It now accurately states that the token '[:Base64]' contains the base64 string, ensuring clarity for users.

### Mark BS3 Template as Obsolete

To encourage our clients to transition to BS5, we've updated the template. The title has been changed from 'BS3' to 'BS3 (Obsolete)'. This change should help users identify the outdated template and move towards using the currently supported BS5 version.

### Enhanced Inline Documentation for Listing Actions

We've updated the inline documentation for the 'Per Item Actions' and 'Actions' fields in the Listing Builder to better explain their behavior. Now, it's clear that 'Per Item Actions' operates on all selected records, regardless of filters or paging, but search results will impact processing. For 'Actions,' the updated documentation explains how to handle user-selected items and iterate through lists, giving you a better understanding of the execution flow when a button is clicked. These updates aim to reduce confusion and help you use these features more effectively.

### Search Boost Cosmetic Update

We've made some visual enhancements to the Search module's functionality to improve your overall experience. Check out the updated design that includes more intuitive and aesthetically pleasing elements.

### Improved Help Text for Stripe Credit Card Field

The help text for the Stripe Credit Card field has been updated to clearly indicate that the publishable key is required for the field to load properly. This change prevents the field from partially loading without showing an error and helps avoid confusion.

## Obsolete

### LinkClick Marked as Obsolete

We've identified that the LinkClick token can cause issues when used with unsecured folders, leading to HTTP/HTTPS conflicts. As a result, we've marked LinkClick as obsolete and recommend using RelativeUrl or AbsoluteUrl tokens instead. These will automatically generate the correct URL based on the folder's security settings, ensuring a more predictable and secure behavior. This change affects fields such as Multi File Upload and various actions such as HTML to Word, Generate QR Code, or Convert from HTML to Word actions.

### Obsolete Forms Features

We've marked obsolete functionality within the Forms module of our platform. This update includes enhancements and corrections for several components such as 'Reports', 'Connected Forms', 'Manual Layout', and 'Group Validator'. This reflects features that will not be ported into the new Form Builder that is under development but corresponding features will exist to achieve the same outcome.