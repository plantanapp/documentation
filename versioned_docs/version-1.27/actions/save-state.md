---
id: save-state
title: Save State
sidebar_label: Save State
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`, `Actions`, `Form State`

The **Save State** action enables you to preserve form data by saving the user’s input to a specified location: either the server’s session or the user's browser cookies. This is commonly used to allow users to pick up where they left off, to share data between forms, or to implement “Save for Later” and resume functionality. While extremely useful in supporting advanced user experiences, this action is optional for basic form operation.

## `Typical Use Cases`

* Remember form input for multi-step or multi-page forms
* Enable users to quit and return to complete forms later (“Save for Later”)
* Pass data between forms that are part of a larger process by using a shared key
* Allow anonymous or authenticated users to save their form progress independently

## `Related Actions`

| Action Name    | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| Load State     | Loads previously saved form data for a provided key and storage location.  |
| Clear State    | Removes saved state for a specific key and location.                      |
| Auto Save State| Prepares the form for automatic saving in cookies for persistence.         |

## `Input Parameter Reference`

| Parameter      | Description                                                                                                          | Supports Tokens | Default   | Required |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | --------------- | --------- | -------- |
| Key            | Unique identifier for the saved data. Customize with tokens to separate data by user, session, or form as needed.    | Yes            | ―         | Yes      |
| Save Location  | Choose where to save the data: `Session` (server-based, temporary) or `Cookies` (browser-based, longer-term).        | No             | Session   | Yes      |

## `Output Parameters Reference`

**This action does not yield output parameters that can be referenced by subsequent actions.** Its main function is to persist the current form data in the specified storage.

## `Security Considerations`

- **Cookies:** Data is saved on the user's device and persists until the cookie expires or is deleted. This method offers longer retention but should *not* be used for sensitive or confidential information, since cookies can be accessed by scripts or potentially transferred to other devices.
- **Session:** Data is saved securely on the server and is only available for the duration of the user’s session (typically expiring after about 20 minutes of inactivity). Prefer this option for confidential or fleeting data.
- **Key Design:** Always include tokens that uniquely identify the user or session (e.g., `[User:UserID]`) in your key to prevent data collisions between different users or sessions.

## `Examples`

### `1. Save State in Server Session (User-Specific)`

Use a user-specific key to remember progress during a logged-in session.

```json
{
    "Title": "Save State",
    "ActionType": "SaveState",
    "Parameters": {
        "Key": "myFormProgress-[User:UserID]",
        "SaveLocation": "Session"
    }
}
```

### `2. Save State in Browser Cookies (Cross-Session)`

Persist user progress in cookies to support "Resume Later" even after browser restarts.

```json
{
    "Title": "Save State",
    "ActionType": "SaveState",
    "Parameters": {
        "Key": "contactFormData-[User:UserID]",
        "SaveLocation": "Cookies"
    }
}
```

### `3. Save State for Anonymous Session-Based Users`

Separate progress for anonymous users by session.

```json
{
    "Title": "Save State",
    "ActionType": "SaveState",
    "Parameters": {
        "Key": "guestSave-[Session:SessionID]",
        "SaveLocation": "Cookies"
    }
}
```

## `Developer Notes and Behavior`

* If using `Cookies`, the obsolete Reports feature must be enabled on the form and any related fields.
* When a user is logged in, their user ID is automatically appended to the key for further uniqueness.
* Using the same key in multiple forms will cause them to share and overwrite the same saved data. Ensure keys are unique if you want data isolated by context.
* The action itself does not produce tokens or return data for use in later actions.

## `Troubleshooting`

- If state is not being retained, verify that the key is unique for each user or context, and check that you’ve selected the intended storage location.
- If cookie-based storage is not working, ensure that the Reports feature is enabled for the form and associated fields.
- Remember that session-based storage will expire automatically after sufficient inactivity.


## `See Also`

- Load State – retrieve saved data using a key and location  
- Clear State – remove saved form data for a key/location  
- Auto Save State – enable automatic browser cookie saving on form initialization  

**Save State** helps you design more flexible, user-friendly form processes when you need users to pause and resume, or you want to share information across forms and sessions. Use thoughtfully to balance convenience with data security and privacy.