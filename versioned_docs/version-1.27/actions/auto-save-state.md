---
id: auto-save-state
title: Auto Save State
sidebar_label: Auto Save State
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`, `Form Events`

The **Auto Save State** action prepares your form to automatically save user input in browser cookies using a specified key. Typically, you add this action to the **Form’s ON INIT event**, enabling the form to “remember” user data—even if the user closes the browser or navigates away. When paired with the **Load State** action (set to load from cookies), users can effortlessly continue filling out the form later with their previously entered information restored.

## `Typical Use Cases`

* Let users resume partially completed forms after closing and reopening their browser.
* Share form progress across different forms or steps by using a consistent key.
* Improve user experience by automatically saving drafts of long forms or multi-step wizards in the browser.

## `Related Actions`

| Action Name          | Description                                                                                   |
|----------------------|-----------------------------------------------------------------------------------------------|
| Save State           | Explicitly saves form data to the server session or browser cookies during submission.         |
| Load State           | Retrieves saved form data from the server session or browser cookies and repopulates the form. |
| Clear State          | Removes previously saved data from session or cookies, clearing drafts or resetting progress.  |

## `Input Parameter Reference`

| Parameter     | Description                                                                                                                                      | Supports Tokens | Default        | Required |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------|----------|
| Key           | A unique identifier used to save and retrieve form data. Supports tokens for dynamic keys (e.g., including `[User:UserID]`).                     | Yes            | (none)        | Yes      |

## `Output Parameters Reference`

This action does **not** produce output parameters.

## `How it Works`

When you add the **Auto Save State** action to the **ON INIT** event of a form, it marks the form so that as users fill in fields, their data is automatically saved in the browser’s cookies. The specific Cookie key is defined by the **Key** parameter. No data is immediately visible or output—this simply enables persistent saving for the user session.

To restore saved data:

1. Place **Load State** later in your workflow (for example, on form load or a button click).
2. Set **Storage Location** on **Load State** to **Browser Cookies** and use the same key.
3. The form will repopulate with previously saved values.

## `Security and Data Expiry`

* Data stored in browser cookies is accessible only to the user on that browser but may persist for extended periods unless manually cleared or expired.
* Avoid storing sensitive or confidential data, as browser cookie storage is less secure than server session storage.

## `Examples`

### `1. Automatically Save Form Progress in Browser Cookies`

Automatically enable saving for a form draft, using the user’s ID to keep form data separate per user.

```json
{
  "Title": "Auto Save State",
  "ActionType": "AutoSaveState",
  "Parameters": {
    "Key": "myFormDraft-[User:UserID]"
  }
}
```

**How to use:**  
- Add this action to the **ON INIT** event of your form.
- Later, to restore the data, add a **Load State** action with `Key` set to `myFormDraft-[User:UserID]` and `Storage Location` to `Browser Cookies`.

### `2. Enable Drafts for Anonymous Users`

For anonymous (not logged-in) users, save state per browser (without using tokens):

```json
{
  "Title": "Auto Save State",
  "ActionType": "AutoSaveState",
  "Parameters": {
    "Key": "anonymousFormDraft"
  }
}
```

**How to use:**  
- Data will be saved and restored for anyone using the same browser but not shared between different browsers or devices.

## `See Also`

- Save State
- Load State
- Clear State

## `Frequently Asked Questions`

**Q: When is the data actually saved?**  
A: The data is saved automatically as the user fills out the form and any change occurs. No extra actions are needed after adding **Auto Save State**.

**Q: How long is the data kept?**  
A: Typically, browser cookies persist until they expire (which may be set to a lengthy duration) or until the user manually clears their cookies.

**Q: What if I want to clear the saved draft?**  
A: Use the **Clear State** action with the same key and set **Storage Location** to **Browser Cookies** or **Any**.

## `Troubleshooting`

* If data is not persisting, ensure your form has the obsolete Reports feature enabled if required, and check browser cookie policies or privacy settings.
* Using tokens in the key (such as user ID) helps avoid users overwriting each other’s data.


**Summary**:  
**Auto Save State** enables smooth draft-saving for your users, letting them leave and return to forms with their input restored. Pair it with **Load State** for a seamless user experience.