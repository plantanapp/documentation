---
id: filter-listing
title: Filter Listing
sidebar_label: Filter Listing
---

> Audience: [`Citizen Developers`](/audience.md#citizen-developers)
> 
> Skill Prerequisites: `Using Listing`

This action refreshes a Listing module without page reload (if it’s on the same page) with the option to change sorting, pagination, and filtering.

## `Typical Use Cases`

* Use a Form to filter and/or sort a Listing

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| --------- | ----------- | --------------- | ------- | -------- |
| Select Module | Select the Listing Module you wish to filter | No | None Selected | No |
| Current Page | Leave empty to keep the current page | Yes | Empty String | No |
| Page Size | Select the number of elements(rows) that will be shown in the Listing | Yes | None | No |
| Sort By | Select the field to sort by. Ascending is the default but you can select Descending using the checkbox | Yes | Ascending | No |
| Search Terms | The listing will automatically search for the characters passed by this field | Yes | Unchecked | No |
| Filters | Allows the grid to be filtered using multiple criteria | Yes | None | No |
| Replace Filters | By default, filters are merged with existing filtering, if any. Use this option to replace all filters | No | Unchecked | No |
| Additional Data | Provide additional values that will be passed to the grid via query string. You can reference them using [$] syntax. | Yes | None | No |

## `Output Parameter Reference`

| Parameter | Description |
| --------- | ----------- |
| Store Absolute URL | Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack. |
|Store Relative URL| Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack. |

## `Related Actions`

| Action Name | Description |
| ----------- | ----------- |
| [Refresh Listing ](/actions/refresh-listing.md) | Refresh a Listing module without page reload with the option to change sorting, pagination, and filtering. |

\[//\]: \# \(Will need to verify the links once the documentation for filter and data source refresh are completed\.\)