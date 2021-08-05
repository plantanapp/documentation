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


## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Select Module | Select the Grid Module you wish to refresh| Yes | Empty String | No |


## `Related Actions`

| Action Name | Description|
|-------------|------------|
| [Filter Action Grid](docs/actions/filter-action-grid) | Refresh an Action Grid module without page reload with the option to change sorting, pagination and filtering. |
| [Data Source Refresh](docs/actions/datasource-refresh) | Enable Auto-Refresh for the Action Grid datasource at a specified interval |

## `Alternate Method`

### `Javascript`
  
This action can be accomplished directly from Javascript by calling:

- dnnsf.api.actionGrid.refresh(1234) - when you just want to refresh the grid with module id 1234
  

