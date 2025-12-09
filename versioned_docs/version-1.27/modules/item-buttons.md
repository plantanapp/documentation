---
id: item-buttons
title: Item Buttons
sidebar_label: Item Buttons
---

# Utilizing Item Buttons in Plant an App

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)

> Skill Prerequisites: `Tokens`

Item buttons in Plant an App stand out as a powerful feature, elevating user interactions and enabling actions tailored to each data row within a listing. These buttons empower users to perform specific actions on individual items, utilizing the data from the row as context for these actions. Importantly, all fields in the data row are available as context tokens. For instance, if there is a field named "Status" in the data, during the Actions, the `[Status]` token holds the row's current status value.

## Typical Use Cases

* Update the status of an entry directly from the listing.
* Implement quick edits or modifications on particular data fields.
* Trigger complex workflows or processes based on specific row data.

## Related Resources
Watch a [video](https://plantanapp-my.sharepoint.com/:v:/p/dale_warner/EUIHP_5oDihBnhg7fQmh_Y8BquB84pIUsTH1ymVH9WyHeQ?e=F9wCKj&amp;nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D) that focuses on creating and configuring buttons Buttons in Listings.

## Input Parameter Reference

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Title | The label that appears on the button. If left empty, only the icon (if any) will show. | No | none | No |
| Help | Brief text to guide users on the button's functionality, shown on hover. | No | none | No |
| Condition | Expression to determine when to display the button. For instance, `[HasRole:Administrators] == true` to show only for admins. | Yes | always visible | No |
| Enable Conditionally | Expression to determine when the button is clickable, such as `[Status] == "Active"`. | Yes | always enabled | No |
| Style | Visual style of the button, following Bootstrap button classes (e.g., `primary`, `warning`). | No | `default` | No |
| CSS Class | Additional CSS classes to apply for custom styling. | Yes | none | No |
| Font Awesome Icon CSS Class | Add icons to buttons using Font Awesome 6 classes. | No | none | No |
| Ask For Confirmation | Prompts for user confirmation before executing actions. | No | off | No |
| Button Permissions | Assigns button visibility to specific user roles. | No | all users | No |
| Client Button | Configures button to execute only client-side actions (no server request). | No | off | No |
| JavaScript Code | Custom scripts to execute with access to `settings` and `row` contexts. Returning `false` stops action execution. | Yes | none | No |

## Security

**Note:** Proper security measures should be taken into account when configuring item buttons to prevent unauthorized access or actions. Carefully utilize conditions and permissions to manage who can see and interact with each button.

## Examples

### Scenario: Update Status Button

You have a list of applicants with statuses like New, Considering, and Rejected. You want to add an item button to quickly update the status to "Considering".

**Action Configuration:**
- **Title:** "Considering"
- **Condition:** `[Status] == "New"`
- **Style:** `outline-primary`


<img src="/img/Item_Button_example_configuration.png" alt="config_menu_getting_started.png"></img>

**Execution Steps:**
1. Configure the item button with parameters as shown above.
2. When the button is clicked, the status field for the row is updated to "Considering".

## Detailed Usage

Each data field in a row becomes accessible as a token, allowing for flexibility and power when defining actions. For example, if your data includes a `Status` field, you can use the `[Status]` token within the item's actions to access or update its value accordingly.

<img src="/img/Item_Button_data_in_context.png" alt="config_menu_getting_started.png"></img>

## Considerations

- **Performance:** While using multiple conditions and tokens, ensure that they are efficient to avoid slowing down or creating performance issues, especially with large data sets.
- **Styling:** Align your button's visuals with the rest of the application design to maintain consistency and enhance usability.

By leveraging item buttons, you can significantly improve the interactivity and efficiency of data management in applications using Plant an App.

**** 

Revised 10/06/2025