---
id: clean-html
title: Clean HTML
sidebar_label: Clean HTML
---

> Audience: [`Citizen Developers`](audience.md#developers)
>
> Skill Prerequisites: `Tokens`

This action extracts a clean HTML structure with just the content part from the given raw HTML.

## `Typical Use Cases`

- Clean up raw HTML content before processing or displaying it
- Extract the main content of an HTML page for further analysis

## `Don't use it to`

- Parse non-HTML content
- Modify the original HTML structure

## `Related Actions`

_None_

## `Input Parameter Reference`

| Parameter        | Description                                     | Supports Tokens | Default        | Required |
| ---------------- | ----------------------------------------------- | --------------- | -------------- | -------- |
| Raw HTML | The raw HTML content to be cleaned. | Yes             | `empty string` | Yes       |

## `Output Parameters Reference`

| Parameter         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| Store Clean HTML | The cleaned HTML content. |

## `Examples`

### `1. Clean Raw HTML`

This example demonstrates how to clean raw HTML content and store the result in an output token.

```json
[
  {
    "Id": -1,
    "ActionErrorMessage": null,
    "ActionType": "Custom.Actions.CleanHtml",
    "Condition": null,
    "Description": null,
    "IsDeleted": false,
    "Parameters": {
      "RawHtml": "<html><head><title>Sample Page</title></head><body><nav>Navigation</nav><article><h1>Title</h1><p>Content</p></article><footer>Footer</footer></body></html>",
      "StoreCleanHtml": "CleanedHtml"
    }
  }
]
```

After executing this action, the `[CleanedHtml]` token will contain the following cleaned HTML content:

```html
<h1>Title</h1><p>Content</p>
```

For example, you can import this JSON content into a workflow using the "Import Actions" button.