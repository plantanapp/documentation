---
id: sanitize-html
title: Sanitize HTML
sidebar_label: Sanitize HTML
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `HTML`

This action recieves HTML input and repairs broken HTML tag syntax, removes specifed HTML tags and attributes, sets the "rel" attribute to "nofollow" on anchor tags and removes scripts, based on the settings that are selected and set by the user.

## `Typical Use Cases`

- Apply to the input of a field in a form before the data is saved to your database.
- Apply to HTML recieved via an API before it is saved to your database.
- Apply to the content of an incoming email before the content is saved to your database.

## `Don't use it to`

- Sanitize multiple inputs at once. Use a separate action for each input.
- To prevent SQL injection. Use Bind Tokens in your [Run SQL Query](/docs/Actions/run-sql) action instead.

## `Related Actions`

| Action Name                                     | Description                                                                        |
| ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Generate PDF](/docs/Actions/generate-pdf.md)   | Form action only, it updates the fields based on the values from the tokens.       |
| [Send Email](/docs/Actions/send-email.md)       | Form action only, shows a message after the executions of set of actions/workflow. |
| [Run SQL Query](/docs/Actions/run-sql-query.md) | Executes an SQL statement and captures the output.                                 |


## `Input Parameter Reference`

| Parameter                 | Description                                                                                                                 | Supports Tokens | Default        | Required |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------- | -------- |
| Html Content | The HTML content to be sanitized. Most often this will be a token from the input source.                                                 | Yes             | `empty string` | No       |
| Convert links to nofollow      | Ensures all anchor tags in the provided HTML content have the "rel" attribute value set to "nofollow". | No             | false              | No       |
| Removable attributes      | The attributes specified here will be stripped off the HTML tags that were allowed in the provided HTML. Enter one at a time and press enter. | No             | `empty string`              | No       |
| Disable scripts      | Removes all script tags and their content from the provided HTML. | No             | false              | No       |
| Toggle between Exclude/Allow HTML tag lists      | Applies to the Excluded Tags option below. When this option is checked Allow Mode is in effect.   | No             | Exclude             | No       |
| Excluded Tags      | HTML tags specified here will be removed from the provided content. All other tags will remain in place. Content between the removed tags will also remain   | No             | `empty string`               | No       |
| Allowed Tags      | Only HTML tags specified here will be preserved. All other tags will be deleted and their content processed recursively. | No             | `empty string`               | No       |
| Allowed Tags      | Only HTML tags specified here will be preserved. All other tags will be deleted and their content processed recursively. | No             | `empty string`               | No       |

## `Output Parameters Reference`

| Parameter         | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| Output Token Name | The token name in which the response is to be stored for further use. |

## `Examples`

### `1. Remove Scripts and Common Mouse Event Attributes`

This example is set to remove scripts from HTML and some common mouse event attributes that could contain javascript. The list of attributes is not intended to be comprehensive, but suggests the type of attributes you could include.

```json

{
    "Title": "Sanitize Html",
    "ActionType": "Parsing.SanitizeHtml",
    "Description": "Example Sanitize HTML Action Import",
    "Condition": null,
    "Parameters": {
        "HtmlContent": "[YourInputToken]",
        "ForceAnchorNoFollow": false,
        "RemovableAttributes": [
            "onclick",
            "onmouseover",
            "onmouseout"
        ],
        "DisableScripts": true,
        "IsAllowedMode": false,
        "TagsList": [],
        "RemovableTags": [],
        "OutputTokenName": "[YourOutputToken]"
    }
}
​
```

### `2. Restrict users ability to submit complex HTML`

This example also disables scripts. In addition it adds the "rel=nofollow" attribute to all links, restricts the user to a limited list of very basic HTML tags, and prevents them from using inline styles.

```json

{
    "Title": "Sanitize Html",
    "ActionType": "Parsing.SanitizeHtml",
    "Description": "Example Sanitize HTML Action Import",
    "Condition": null,
    "Parameters": {
        "HtmlContent": "[YourInputToken]",
        "ForceAnchorNoFollow": true,
        "RemovableAttributes": [
            "style"
        ],
        "DisableScripts": true,
        "IsAllowedMode": true,
        "TagsList": [
            "h2",
            "h3",
            "h4",
            "p",
            "hr",
            "a",
            "ul",
            "ol",
            "li",
            "span"
        ],
        "RemovableTags": [],
        "OutputTokenName": "[YourOutputToken]"
    }
}

```