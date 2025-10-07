---
id: root-buttons
title: Root Buttons
sidebar_label: Root Buttons
---

# Utilizing Root Buttons in Plant an App

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)

> Skill Prerequisites: `Tokens`

Root buttons in Plant an App provide robust functionality for executing actions that affect multiple items in a listing, as opposed to individual row actions. These buttons can handle actions on all selected or visible items, making operations on bulk data seamless and efficient.

## Typical Use Cases

- Batch update the status of multiple entries in one action.
- Execute a complex workflow across all listed items.
- Export or manipulate data in bulk based on user selections.

## Related Resources
Watch a [video](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EUIHP_5oDihBnhg7fQmh_Y8BquB84pIUsTH1ymVH9WyHeQ?e=F9wCKj&amp;nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D) that demonstrates the powerful capabilities of Buttons in Listings.

## Input Parameter Reference

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Title | The label that appears on the button. If left empty, only the icon (if any) will show. | No | none | No |
| Help | Brief text to guide users on the button's functionality, shown on hover. | No | none | No |
| Condition | Expression to determine when to display the button. Allows programmatic visibility control. | Yes | always visible | No |
| Enable Conditionally | Expression to determine when the button is clickable, useful for context-sensitive actions. | Yes | always enabled | No |
| Vertical Position | Placement of the button relative to the listing (Top or Bottom). | No | Top | No |
| Horizontal Position | Alignment of the button (Left, Center, Right). | No | Left | No |
| Style | Visual style of the button, following Bootstrap button classes (e.g., `primary`, `danger`). | No | `default` | No |
| CSS Class | Additional CSS classes to apply for custom styling. | Yes | none | No |
| Font Awesome Icon Css Class | Optional. Add icons to buttons using Font Awesome 6 classes. | No | none | No |
| Enable Selection | Activates checkboxes for item selection, enabling per-item actions. | No | off | No |
| Requires Selection | Ensures the button executes only when items are selected. | No | off | No |
| Show Count | Displays a count of selected items on the button itself. | No | off | No |
| Ask For Confirmation | Prompts for user confirmation before executing actions, adding a safeguard for mass operations. | No | off | No |
| Button Permissions | Assigns button visibility to specific user roles to ensure proper access control. | No | all users | No |
| Client Button | Configures button to execute only client-side actions (no server request). | No | off | No |
| JavaScript Code | Allows for custom scripts with access to `settings` context; returning `false` halts action execution. | Yes | none | No |

## Key Features

1. **Convenient Bulk Operations:** Root buttons allow for bulk actions to seamlessly manipulate or process multiple data entries.

2. **Robust Control with Conditions:** Use conditions and permissions to control when and how buttons are displayed and executed.

3. **Integrated Selection Mechanism:** Provides 'Enable Selection' to act on chosen items, allowing tailored executions.

4. **Dynamic and Flexible UI Customization:** Customize the appearance with styles, icons, and CSS classes to match the application's design.

5. **Structured Actions Execution:** Through per-item actions, actions are executed for each selected item, ensuring precision in operations.

<img src="/img/Root_Button_example_configuration.png" alt="config_menu_getting_started.png">

## Security

Security is paramount. Always configure root buttons with appropriate condition checks and role-based permissions to prevent unauthorized access. Use confirmations to safeguard against accidental bulk operations.

## Examples

### Scenario: Bulk Status Update

You have a list of applicants and wish to update their status to "Reviewed" in bulk using a root button.

**Button Configuration:**
- **Title:** "Mark as Reviewed"
- **Help:** "Set status of selected applicants to Reviewed"
- **Condition:** `[HasRole:Editor|true]`
- **Style:** `outline-success`

**Execution Logic:**
1. Users select multiple applicants using checkboxes.
2. The "Mark as Reviewed" button is clicked.
3. Each selected applicant's status is updated to "Reviewed".

<img src="/img/Root_Button_example_illustration.png" alt="config_menu_getting_started.png">

## Special Lists and Tokens Available

The following are available in the Actions, Per Item Actions, and Final Actions:

- A built-in token named `[Ids:CommaDelimited]` provides the IDs of ALL selected items. For example: `74,54`.
- A built-in token named `[Ids:JsonArray]` also provides the IDs of ALL selected items. For example: `["74","54"]`.
- A built-in List named **ActionGridEntry** includes all records from the listing after Search and Filters are applied.
- A built-in List named **ActionGridEntry:Selected** includes only the selected items from **ActionGridEntry**.

## Considerations

- **Performance:** Large datasets might slow down UI responsiveness, so fine-tune the condition expressions for efficiency.
- **UI Consistency:** Ensure button styles align with overall application aesthetics to enhance user experience.

Root buttons are an advanced feature, offering control and flexibility in handling actions that affect multiple data items. They are an essential tool for efficient data operations in Plant an App.

**** 

Revised 10/07/2025