---
id: filter-action-grid
title: Filter Action Grid
sidebar_label: Filter Action Grid
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Action Grid`
> 
This action refreshes an Action Grid module without page reload (if it’s on same page) with the option to change sorting, pagination and filtering.

## `Typical Use Cases`

- Use an Action Form to filter and/or sort an Action Grid


## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Grid Module you wish to filter| Yes | None Selected| No |
| Page Size | Select the number of elements(rows) that will be shown in grid| No | None | No |
| Sort By | Select the field to sort by. Ascending is the default but you can select Descending using the checkbox| Yes | Ascending | No |
| Search Terms| Grid will automatically search for the characters passed by this field| Yes | Unchecked | No |



## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Refresh Action Grid](docs/actions/refresh-grid) | Refresh an Action Grid module without page reload with the option to change sorting, pagination and filtering. |


[//]: # (Will need to verify the links once the documentation for filter and data source refersh are completed.)