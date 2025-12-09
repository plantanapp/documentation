---
id: load-state
title: Load State
sidebar_label: Load State
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`, `Actions`, `Form State`

The `Load State` action allows you to restore previously saved form data into your form fields. It retrieves data from either the server session or browser cookies, making it possible for users to pick up where they left off, transfer values across different forms, or streamline editing processes.

This action is ideal for improving user experience with features like "Resume Later." While powerful, it's not required for simple form workflows.

## `Typical Use Cases`

* Let users resume and complete a partially filled-out form (after navigating away, refreshing, or coming back later)
* Pre-populate a form with data saved from another form, such as in multi-step workflows
* Restore specific user states (like saved filter choices, form defaults, or preferences)
* Implement “Save for Later” and “Resume” capabilities

## `Related Actions`

| Action Name   | Description                                              |
| ------------- | ------------------------------------------------------- |
| Save State    | Persists form data to a unique key in the session or cookies for later retrieval |
| Clear State   | Removes saved state from session or cookies for a specified key |
| Auto Save State | Sets up data for automatic persistent saving to browser cookies |

## `Input Parameter Reference`

| Parameter           | Description                                                                                                                                                                                       | Supports Tokens | Default | Required |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------|----------|
| Key                 | Unique identifier used to locate previously saved data. Accepts tokens (e.g., `[User:UserID]`). For security and isolation, always include user/session-specific tokens if possible.              | Yes             | –       | Yes      |
| Storage Location    | Where to look for saved data. Choose `Session` (server-side, temporary), `Browser Cookies` (browser, persistent), or `Any` (try Session first, fall back to Cookies).                              | No              | Any     | No       |
| Save data in Reports| If enabled, also copies loaded data into Reports storage (for legacy features using Reports).                                                                                                      | No              | True    | No       |

## `Output Parameters Reference`

This action does not produce output or tokens. It loads the matched state and merges it directly into the form’s data.

## `Security Considerations`

- Ensure your `Key` parameter includes unique identifiers such as `[User:UserID]` to prevent users from accessing each other’s data.
- Use the `Save data in Reports` option only if your project relies on Reports-based exports or features; Reports is a legacy mechanism.

## `Examples`

### `1. Restore State from Server Session (User-Specific)`

Retrieve form data saved for a specific user in the server-side session.

```json
{
    "ActionType": "LoadState",
    "Title": "Load State",
    "Parameters": {
        "Key": "myFormData-[User:UserID]",
        "SaveLocation": "Session",
        "SerilazeToReports": false
    }
}
```

### `2. Restore State from Browser Cookies (Resume Later)`

Let a user resume filling out a form after returning to the site, with data persisted in their browser.

```json
{
    "ActionType": "LoadState",
    "Title": "Load State",
    "Parameters": {
        "Key": "contactFormProgress-[User:UserID]",
        "SaveLocation": "Cookies",
        "SerilazeToReports": false
    }
}
```

### `3. Restore State, Trying Both (Session then Cookies)`

Provide fallback: try session first and use cookies if nothing is found, ensuring the most robust solution.

```json
{
    "ActionType": "LoadState",
    "Title": "Load State",
    "Parameters": {
        "Key": "anonymousProgress-[Session:SessionID]",
        "SaveLocation": "Any",
        "SerilazeToReports": false
    }
}
```

### `4. Load State and Copy into Reports (Legacy Support)`

Ensure loaded data is also available in Reports (legacy compatibility feature).

```json
{
    "ActionType": "LoadState",
    "Title": "Load State",
    "Parameters": {
        "Key": "legacyFormKey-[User:UserID]",
        "SaveLocation": "Any",
        "SerilazeToReports": true
    }
}
```

## `Developer Notes and Behavior`

* Forms or actions with the same key will access the same data.
* For cookies, enable the Reports feature on your form and fields to load or save data from browser storage.
* Merged data from the loaded state may overwrite current field values.
* Enabling `Save data in Reports` is for legacy compatibility only; required only if using the Reports feature for storage or export.

## `Troubleshooting`

- Not seeing expected loaded data? Check the `Key` and `Storage Location` match between the save and load steps.
- When using cookies, confirm the Reports feature is enabled on the form.
- If both session and cookies have data and you choose "Any," session takes priority.
- Session data will expire after about 20 minutes of inactivity; use cookies if longer persistence is required.


## `See Also`

- Save State: Store a form’s data for later retrieval.
- Clear State: Remove stored data from a given key.
- Auto Save State: Automatically prepare form data for saving in cookies.

The `Load State` action is a powerful tool to enhance user journeys, offer seamless continuity across sessions, and let users interact more flexibly with your forms. Combine it with `Save State` and related actions to support advanced, user-friendly, and persistent forms.