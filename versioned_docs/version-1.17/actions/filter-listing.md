---
id: filter-listing
title: Filter Listing
sidebar_label: Filter Listing
---

> Audience: [`Citizen Developers`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Using Listing`

This action refreshes an Listing module without page reload (if it’s on same page) with the option to change sorting, pagination and filtering.

## `Typical Use Cases`

- Use an Form to filter and/or sort an Listing


## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Grid Module you wish to filter| No | None Selected| No |
| Current Page | Leave empty to keep current page | Yes | Empty String | No |
| Page Size | Select the number of elements(rows) that will be shown in grid| Yes | None | No |
| Sort By | Select the field to sort by. Ascending is the default but you can select Descending using the checkbox| Yes | Ascending | No |
| Search Terms| Grid will automatically search for the characters passed by this field| Yes | Unchecked | No |
| Filters | Allows the grid to be filtered using multiple criteria | Yes | None | No |
| Replace Filters | By default, filters are merged with existing filtering, if any. Use this option to replace all filters | No | Unchecked| No |
| Additional Data | Provide additional values that will be passed to the grid via query string. You can reference them using [$] syntax.  | Yes | None | No |




## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Refresh Listing ](/actions/refresh-listing.md) | Refresh an Listing module without page reload with the option to change sorting, pagination and filtering. |


[//]: # (Will need to verify the links once the documentation for filter and data source refersh are completed.)
