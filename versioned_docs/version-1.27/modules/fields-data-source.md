---
id: fields-data-source
title: Fields - Data Source
sidebar_label: Fields - Data Source
---

# Data Sources in Plant an App

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)

> Skill Prerequisites: `Data Handling`

Data sources in Plant an App are vital components that can greatly enhance the dynamic capabilities of your forms. They allow fields to pull data from various sources and present it to users. This article will guide you through the available data source options, explain the concept of `fieldname:Text` and `fieldname:Value`, and discuss field types that support data sources.

## `Typical Use Cases`

- Creating dynamic dropdowns, radio boxes, and checkboxes
- Pulling data from external or internal sources for form field population


## `Standard Data Source Pattern`

A characteristic pattern for data sources in Plant an App is the presence of two main components:
- **fieldname:Text**: The text presented to the end user.
- **fieldname:Value**: The value actually processed or sent by the system when a selection is made.

This distinction allows for user-friendly displays while maintaining the necessary data backend processes, ensuring that users see helpful labels, yet relevant IDs or codes are utilized for operations.

## `Available Data Sources`

Here's an overview of some of the available data sources you can utilize in Plant an App:

- **Entity Records**: Displays entries from a specified entity. The visible text is the Entity Display Name, while the value is the entity ID.
- **Country Data Source**: Provides a list of countries, with the country name as the text and a country code (like "AF" for Afghanistan) as the value.
- **Currency Data Source**: Lists currencies along with their codes, e.g., "AUD" for Australian Dollar.
- **DNN Users**: Fetches a list of users filtered by roles, showing names by default and user IDs as values.
- **Namespace**: Lists configured namespaces within your application ecosystem.
- **Portal Folder List**: Displays folders from your system, useful for file management features.
- **Roles**: Lists roles, with an option to include global roles, displaying role names and using role IDs.
- **Server Request (JSON)**: Allows API queries to populate fields dynamically.
- **SQL Query**: Executes an SQL command to fetch data, requiring a text and a value column in the returned dataset.
- **Year Range**: Generates a list of years within a specified range from the current year.

## `Field Types with Data Source Support`

Certain field types in Plant an App have the option to use a data source. Here are a few of them:

- Drop Down
- Radio Buttons
- Drop Down with Auto Complete
- Item Picker (Tree View)
- Checkbox List
- Drop Down with Checkboxes
- Sortable Input

These fields can render differently based on the data source configuration but retain the common pattern of `fieldname:Text` and `fieldname:Value`.

## `Security Considerations`

While data sources are powerful, ensure they do not expose sensitive information. Verify that users cannot inadvertently access secure data or functions through poorly configured data sources.



## Conclusion

Data sources greatly enhance the form dynamicity and user interactivity in Plant an App. By understanding the types of data sources and how to implement them, you can create more responsive and data-driven applications.

Revised 10/01/2025