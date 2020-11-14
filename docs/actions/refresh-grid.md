---
id: refresh-grid
title: Refresh Action Grid
sidebar_label: Refresh Action Grid
---

> Audience: [`Citizen Developers`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `Using Action Grid`

This action is usually used to refresh the grid after executing another action.

## `Typical Use Cases`

- Refresh Action Grid with updated data without reloading the entire page

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Refresh Action Grid | Refresh an Action Grid module without reloading the page |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Grid Module you wish to refresh| Yes | Empty String | No |

## `Javascript method`

Using the javascript API you can refresh the grid by calling the javascript method

`dnnsf.api.actionGrid.refresh(1234)`

First parameter is required and is the module id of the Action Grid to be refreshed

## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Filter Action Grid](docs/actions/filter-action-grid) | Refresh an Action Grid module without page reload with the option to change sorting, pagination and filtering. |
| [Data Source Refresh](docs/actions/datasource-refresh) | Enable Auto-Refresh for the Action Grid datasource at a specified interval |

[//]: # (Will need to verify the links once the documentation for filter and data source refersh are completed.)
