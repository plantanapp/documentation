---
id: pick-item-from-listing
title: Pick Item from Listing
sidebar_label: Pick Item from Listing
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
> 
> Skill Prerequisites: `Actions`, `Forms`

The `Pick Item from Listing` action allows you to open a listing in a popup to select a row and pull its information into form fields. This action is useful when you need to select an item from a list and automatically populate certain fields in your form based on the selection.

## `Typical Use Cases`

* Quickly populate form fields with details from a selected listing item
* Utilize existing listings to gather user input efficiently
* Replace the need for dropdowns and autocomplete fields when multiple values are required



## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Listing Module | The listing from which you want to select a row. The grid opens in a popup. | No | N/A | Yes |
| Display Listing Buttons | Toggle to show or hide buttons within the listing popup. | No | `Unchecked` | No |
| Mappings | Define how the listing fields are mapped to the form fields. Each form field will receive the value from an associated listing field. | No | N/A | No |

## `Output Parameters Reference`

This action does not have direct output parameters. Instead, selected listing values are directly mapped to specified form fields.

## `Examples`

### `Example 1: Selecting a Contribution`

Imagine you have a list of contributions, each with fields like Contribution ID, Name, Description, Link, Comment, and Category. You want to populate a form with the ID and Name of a contribution when selected. 

Here is how the example configuration might look:

1. Add an action form on the page with fields for Name and ID.
2. Configure a button labeled "Choose Contribution" to trigger the `Pick Item from Listing` action.
3. In the action setup:
   - Select the listing module named "Contributions."
   - Map the "Name" field from the listing to the form's "Name" field.
   - Map the "ID" field from the listing to the form's "ID" field.

### `Example 2: Enhanced Search and Filter`

Assume you want a seamless way to filter and search through contributions. The listing allows for search and filtering capabilities. Upon selecting an item:

- Open the listing to search by category or other filters.
- Select a contribution, and your predefined mappings automatically fill in necessary form fields for further processing or submission.

By facilitating easy selection from a listing, this method ensures data is complete and user-friendly.

Revised 08/08/2025