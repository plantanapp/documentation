---
id: filter-action-grid
title: Filter Action Grid
sidebar_label: Filter Action Grid
---


Refreshes an Action Grid module without page reload (if it's on same page) with the option to change sorting, pagination and filtering.

## Parameter Reference
| Parameter | Description | Supports Tokens | Default |
| -- | -- | -- | -- |
| Action Grid Module | This is the grid module that will update. | No | None |
| Current Page | Leave empty to keep current page. Supports My Tokens. | Yes | None |
| Page Size | Leave empty to keep existing page size. Supports My Tokens. | Yes | None |
| Sort By | Note that currently Action Grid allos sorting by a single field. Leave empty to keep existing sorting. | No | None |
| Sort Descending | By default, fields are sorted ascending. Leave empty to keep existing sorting direction. | No | None |
| Search Terms | Supports My Tokens. | Yes | None |
| Filters | Action Grid can be filtered by multiple criteria. Both the field name and value support My Tokens. | Yes | None |
| Replace Filters | By default, filters are merged with existing filtering, if any. Use this option to replace all filters instead. | No | None |
| Additional Data | Provide additional values that will be passed the grid via query string. You can reference them using [$] syntax. Both the field name and value support My Tokens. | Yes | None |
| Store Absolute URL | Optionally provide a token name where to Store Absolute URL. The token can be used in next actions down the stack. | No | None |
| Store Relative URL | Optionally provide a token name where to Store Relative URL. The token can be used in next actions down the stack. | No | None |
