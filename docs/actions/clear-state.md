---
id: clear-state
title: Clear State
sidebar_label: Clear State
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

The **Clear State** action removes any previously stored form data associated with a specific key from the configured storage location(s) — server session, browser cookies, or both. This is useful for scenarios where you want to reset saved form data, ensuring users start with a fresh form, or to clear up resources after processing is complete.

## `Typical Use Cases`

* Completely reset a user's saved form data so they start fresh on their next visit.
* Allow users to abandon or cancel a multi-step form process and remove partial data.
* Clear out stored data after it’s been re-used in a later process or by a different form.
* Remove potentially sensitive information from the user's session or device after submission.

## `Related Actions`

| Action Name  | Description                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| [Save State](/actions/save-state.md) | Saves current form data for later retrieval.                                       |
| [Load State](/actions/load-state.md) | Loads previously saved data from session or cookies into the form.                  |
| [Auto Save State](/actions/auto-save-state.md) | Prepares form data for automatic saving in browser cookies during OnInit.           |

## `Input Parameter Reference`

| Parameter         | Description                                                                                                                                                                      | Supports Tokens | Default          | Required |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|------------------|----------|
| Key               | The identifier for the saved state to clear. Supports tokens for dynamic and user-specific keys (e.g., `wizard-[User:UserID]`).                                                 | Yes             | (empty string)   | Yes      |
| Storage Location  | Select where the saved state should be cleared: <ul><li>**Server Session** – clears only session storage</li><li>**Browser Cookies** – clears only cookies</li><li>**Any** – removes the data from both session and cookies for the given key</li></ul> | No              | Any              | Yes      |

## `Output Parameters Reference`

| Parameter | Description          |
|-----------|---------------------|
| *(None)*  | This action does not output any parameters. |

## `Security`

* When using tokens to compose the **Key**, use user- or session-specific information (e.g., `[User:UserID]`) to avoid accidentally clearing data for other users.
* Be aware that cookie-based data may persist beyond the active browsing session unless it is manually cleared with this action or expires.

## `Examples`

### `1. Clear session data for a user on logout`

To ensure that no sensitive data persists after a user logs out, add this action to your form/workflow:

```json
{
    "Title": "Clear State",
    "ActionType": "ClearState",
    "Parameters": {
        "Key": "cart-[User:UserID]",
        "Storage Location": "Server Session"
    }
}
```

### `2. Clear all sources of saved state (session and cookies) for a multi-step process`

If you want to force a clean slate (regardless of how data was stored previously):

```json
{
    "Title": "Clear State",
    "ActionType": "ClearState",
    "Parameters": {
        "Key": "wizard-progress-[User:UserID]",
        "Storage Location": "Any"
    }
}
```

### `3. Clear browser cookies for guest forms`

When using cookies for unauthenticated users:

```json
{
    "Title": "Clear State",
    "ActionType": "ClearState",
    "Parameters": {
        "Key": "guest-form-temp",
        "Storage Location": "Browser Cookies"
    }
}
```

## `Notes`

* The **Key** is critical — only data saved using the exact same key will be affected.
* "Any" mode is recommended when you're unsure whether data was stored in the session or cookies, or if you want to be thorough.
* Clearing state does not trigger any form resets or UI refreshes by default; add additional actions if you need a visible effect.

## `Troubleshooting & Best Practices`

* If your data does not seem to clear, double-check the exact value used for the **Key** — mismatched or missing tokens may result in the wrong state being unaffected.
* Consider privacy: clearing state after sensitive submissions is a good practice.
* When using "Browser Cookies", ensure users are informed if they're using shared or public computers.



This action helps ensure a reliable, clean user workflow by letting you explicitly remove saved form data when needed.