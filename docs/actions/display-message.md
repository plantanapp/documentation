---
id: display-message
title: Display Message
sidebar_label: Display Message
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `HTML`

This action displays a postback message after a form is submitted or before it initializes if used in the `On PreInit` or `On Init` settings.

## `Typical Use Cases`

- Display a confirmation message to the user.
- Use field tokens to show the user the data submitted.
- Show the user information on further action they can take.

## `Don't use it to`

- Debug - Use Log Error or Log Debug Message

## `Related Actions`

| Action Name                                                                        | Description                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Display Toast Message](/docs/actions/display-toast-message)                             | Displays a simple notification/information message to a user in a small popup. Use this when you don't want the page to postback.                     |

## `Input Parameter Reference`

| Parameter                  | Description                                                                                                                                                                                                                                                               | Supports Tokens | Default                                  | Required |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------- | -------- |
| Message                       | The content to display. Allows HTML input. Use the `Append Field` dropdown to automatically add specified field names followed by the field token into the message or the `Append All Fields` button to add all fields. Fields are added to the end of any content you may have already entered.   | Yes             | `empty string`                           | No       |
| Action Buttons                    | Optionally, you can bind one or more buttons from the form. For example, you can add a button and set an action on it to redirect to another page or to download a file.                                                                                                                                                                                                                                      | No             | Unset                                    | No       |

## `Examples`

### `1. Simple Confirmation Message`

Shows a simple confirmation message addressing the logged in user by name.

```json
{
    "Title": "Display Message",
    "ActionType": "ShowMessage",
    "Description": "Show confirmation to user after submission",
    "Condition": null,
    "Parameters": {
        "Message": "<p>Thank you [User:FirstName] [User:LastName]! Your response has been submitted.&nbsp;</p>",
        "ButtonsList": {
            "Expression": "",
            "Value": [],
            "IsExpression": false
        }
    }
}
```
