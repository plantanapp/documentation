---
id: display-toast-message
title: Display Toast Message
sidebar_label: Display Toast Message
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `HTML`

This action displays a simple notification/information message to a user in a small popup. It only fills the amount of space required for the message to be displayed, and other elements on the page remain visible and interactive. Toast messages automatically disappear after a set timeout. Depending on the Action selected, the remaining actions will also execute.

## `Actions Covered by this Document`

| Action | Purpose |
| -- | -- |
| Display Toast Message And Continue Execution | Displays the Toast Message and then continues to subsequent actions on the button and submission. |
| Display Toast Message And Stop Execution | Displays the Toast Message and then stops further execution of both subsequent actions and HTTP post submission. |

## `Typical Use Cases`

- Display a confirmation message to the user.
- Use field tokens to show the user the data submitted.
- Show the user information on further action they can take.

## `Don't use it to`

- Debug - Use Log Error or Log Debug Message

## `Related Actions`

| Action Name                                                                        | Description                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Display Message](/docs/actions/display-message)                             | Displays a postback message after the form is submitted. Use this if you want a message with significant detail shown to the user and don't mind a page refresh.                    |

## `Input Parameter Reference`

| Parameter                  | Description                                                                                                                                                                                                                                                               | Supports Tokens | Default                                  | Required |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------- | -------- |
| Heading                       | Optional heading to be shown on the toast.   | Yes             | `empty string`                           | No       |
| Message                     | The text contained by the Toast Message. Allows HTML input. Use the `Append Field` dropdown to automatically add specified field names followed by the field token into the message or the `Append All Fields` button to add all fields. Fields are added to the end of any content you may have already entered.| Yes| `empty string` | No|
| Type| Select from the following types of messages: default, warning, success, error, and info. These will impact the styling of the message. Default does not include an icon while the others have a left justified icon specific to the type. | No | `Default`| No |
| Background Color | The  background color of the displayed message. Enter a standard color name, hex color value or rgb color value (eg., `red` or `#ff0000` or `rgb(255,0,0)`).  Leave this option unset to use the default for the Toast Type you selected. | Yes | `empty string`| No |
| Transition | Select the type of transition animation for the Toast Message entry and exit. Options are: fade, slide, plain | No | `Fade`| No |
| Allow Toast Close | Enable `(x)` in upper right corner to allow user to close the toast at will. | No | `false` | No |
| Javascript | Specify javascript code that will run when the Toast Message closes. | Yes | `empty string` | No |
| Hide (with transition^) after (ms) | Amount of time in milliseconds after which the Toast Message will close with the specified transition. | Yes | `1000` | No |
| Stack Length | Specify the maximum number of Toasts to be shown at a time. They will appear below the previous Toast in the order they are called. | Yes | `1` | No |
| Toast Position | Select where the Toast Message should appear in the browser. Options are: Bottom (Left, Right, or Center), Top (Left, Right, or Center), and Middle Center. | No | `Bottom Center` | No |
| Text Alignment | Select how the text of the message should be aligned. Options are: Left, Right, or Center. | No | `Left` | No |
| Show Loader | Displays a progress bar at the top of the message representing the time left until the Toast closes. | No | `false` | No |
| Loader Color | The color of the progress bar. Enter a standard color name, hex color value or rgb color value (eg., `red` or `#ff0000` or `rgb(255,0,0)`). | No | `empty string` | No |

## `Examples`

### `1. Simple Confirmation Message`

Shows a simple confirmation Toast Message addressing the logged in user by name.

```json
{
    "Title": "Display Toast Message And Continue Execution",
    "ActionType": "ShowToastAndContinue",
    "Description": "Show confirmation to user after submission",
    "Parameters": {
        "Heading": "Your Response has been Submitted!",
        "Message": "<p>Thank you [User:FirstName] [User:LastName]! Your response has been submitted.&nbsp;</p>",
        "Icon": {
            "Expression": "",
            "Value": "success",
            "IsExpression": false,
            "Parameters": {}
        },
        "BgColor": "",
        "Transition": {
            "Expression": "",
            "Value": "fade",
            "IsExpression": false,
            "Parameters": {}
        },
        "AllowToastClose": true,
        "CallBackJsCode": "",
        "HideTime": "10000",
        "Stack": "1",
        "ToastPosition": {
            "Expression": "",
            "Value": "top-center",
            "IsExpression": false,
            "Parameters": {}
        },
        "TextAlignment": {
            "Expression": "",
            "Value": "left",
            "IsExpression": false,
            "Parameters": {}
        },
        "ShowLoader": true,
        "LoaderColor": "#FFFF00"
    }
}
```
