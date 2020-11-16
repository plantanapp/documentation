---
id: display-error-message
title: Display Error Message
sidebar_label: Display Error Message
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `HTML`

This action displays a message at the bottom of a Form, at the bottom of a Grid when used on Grid buttons, or inline when used on Grid Item Buttons. It prevents further execution of actions below it in the stack.

## `Typical Use Cases`

- Display a permission error.
- Display an error returned from a Server Request action.
- Use in `On PreInit` or `On Init` form events to conditionally prevent the loading of a form.

## `Don't use it to`

- Debug - Use Log Error or Log Debug Message

## `Related Actions`

| Action Name                                                                        | Description                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Display Toast Message](/docs/actions/display-toast-message)                             | Displays a simple notification/information message to a user in a small popup. Use this to show a message that will timeout automatically and doesn't change the page layout. |
| [Display Message](/docs/actions/display-message) | Displays a postback message after the form is submitted. Use this if you want the page to refresh.                    |

## `Input Parameter Reference`

| Parameter | Description | Supports Tokens | Default | Required |
| -- | -- | -- | -- | -- |
| Message | The content to display. Allows HTML input. Use the `Append Field` dropdown to automatically add specified field names followed by the field token into the message or the `Append All Fields` button to add all fields. Fields are added to the end of any content you may have already entered. | Yes | `empty string` | No |

## `Examples`

### `1. Simple Permission Error Message`

Import this action into the `On PreInit` or `On Init` sections of a form and add a condition to check to see if the logged in user has permission to use the form.

```json
{
    "Title": "Display Error Message",
    "ActionType": "ShowError",
    "Description": "User Permission Error",
    "Parameters": {
        "Message": "<p>You don't have permission to use this form.</p>"
    }
}
```
