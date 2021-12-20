---
id: get-data-query
title: Get Data Query
sidebar_label: Get Data Query
---


Gets the query as it's setup in the data source. Note that the query is specific to each data source.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Store Query in Token | Provide a name for the token that will hold the data query from the datasource. | No | None |
| Store Filters in Token | Provide a name for the token that will hold the filters (such as search or pagination). | No | None |
| Store Filtered Query in Token | Provide a name for the token that will hold the data query filtered by current user options. Note that for some data sources it's not possible to properly represent the filtered query since some operations happen in memory after the datasource retrieves the data. | No | None |
