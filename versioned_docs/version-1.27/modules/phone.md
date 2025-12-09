---
id: phone
title: Phone
sidebar_label: Phone
---

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: None

# Phone Field: International Phone Input Field with Auto Country Detection

The Phone field allows users to input a phone number in forms, while automatically detecting the country, displaying the relevant flag, formatting numbers according to that country’s conventions, and validating input. As of version 1.27, the underlying JavaScript library ([International Telephone Input](https://github.com/jackocnr/intl-tel-input)) was updated from version 12.1.3 to 25.2+. This brings important usability improvements and more powerful configuration options.

****

## `Typical Use Cases`

- Input international phone numbers with country-specific formatting and validation.
- Require users to enter a number from a restricted list of countries.
- Set an initial country based on user location via IP lookup for more intuitive UX.
- Hide the country flag dropdown for a simpler, single-country form.
- Validate US numbers for both historic 7-digit and current 10-digit patterns.

****

## `Related Field Types`

| Field Name | Description                            |
| ---------- | -------------------------------------- |
| Email      | Allows entry/validation of emails      |
| Text       | Standard single-line text input        |
| Masked     | Apply masks to input (e.g., SSN/Zip)   |

****

## `Input Parameter Reference`

| Parameter                        | Description                                                                                                   | Supports Tokens | Default        | Required |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------- | -------------- | -------- |
| Initial Value                     | Initial phone number to display.                                                                              | Yes             | empty string   | No       |
| Set Initial Country using ipapi   | Auto-detect country using [ipapi](https://ipapi.co). If enabled and look-up fails, falls back to Initial Country. | No              | `false`        | No       |
| Initial Country                   | Country code (e.g., `us`, `bm`). Used for default country selection or as fallback for IP lookup failures.    | Yes             | empty string   | No       |
| Remove Flag                       | Hides the flag dropdown (requires Initial Country). Users enter numbers for one country only.                  | No              | `false`        | No       |
| Preferred Countries               | Comma-separated list of country codes to show at the top of the dropdown.                                     | Yes             | empty string   | No       |
| Specific Countries                | Comma-separated codes to limit selection and validation to those countries only (e.g., `us,ca,gb`).           | Yes             | empty string   | No       |
| Placeholder Option                | Controls placeholder: `autoplaceholder`, `removeplaceholder`, `custom`.                                       | No              | `autoplaceholder` | No    |
| Custom Placeholder                | Static placeholder string (shown only if Placeholder Option is set to `custom`).                               | Yes             | empty string   | No       |
| International Mode                | If set, shows and accepts country dialing codes. (`true` = international, `false` = national only)            | No              | `false`        | No       |
| Validation                        | Enables built-in phone number validation.                                                                    | No              | `true`         | No       |
| Readonly                          | Makes the field read-only.                                                                                   | No              | `false`        | No       |
| Save to Report (Obsolete)         | Legacy option. If enabled, saves value for reporting. May not be relevant in recent versions.                 | No              | `false`        | No       |

****

## `Output Parameters Reference`

| Parameter    | Description                                    |
| ------------ | ---------------------------------------------- |
| {FieldName}  | The value the user entered (full E.164 format) |

****

## `Security & Privacy`

- The IP geolocation feature uses the public API at [ipapi.co](https://ipapi.co/#pricing). By default, the free tier is used (up to 1,000 lookups/day); evaluate usage and [read ipapi’s docs](https://ipapi.co/faq/) if using at scale or in production.
- As with all input fields, especially those storing personally identifiable information (PII), ensure you comply with local privacy laws and guidelines.

****

## `Field Formatting & Validation Rules`

- Numbers are formatted in [E.164 format](https://en.wikipedia.org/wiki/E.164) (e.g., `+14155552671`).
- For the US, both 7-digit and 10-digit local number patterns are supported (due to regional telecom policies).
- If the value does not match the expected pattern for the selected or restricted country, a user-friendly error is displayed during entry and on submit.
- If "Specific Countries" is set and the field contains a number not belonging to those, the value won’t display/edit on subsequent loads. Adjust your country list as needed.

****

## `Behavior Notes & Edge Cases`

- **Precedence Order** for country/number initialization:
  1. If there is an _Initial Value_, this always takes precedence and sets the flag/country as per the value.
  2. If there's no Initial Value, _Set Initial Country using ipapi_ will try to select the user's country based on their IP.
  3. If the IP lookup fails, and _Initial Country_ is set, it will be used as fallback.
- If _Remove Flag_ is enabled, you must set an _Initial Country_.
- If the "Specific Countries" does not include the country code of a saved value, the field will be blank when loading that value.
- The phone field now uses the latest library (version 25+), with improved rule sets for many countries (including edge cases like Bermuda and other +1 area code countries).

****

## `Examples`

### `1. Basic US Phone Field with Validation`

```json
{
  "Title": "Phone",
  "Name": "phone",
  "TypeStr": "avt.ActionForm.Core.Input.TextInput,avt.ActionForm.Core",
  "Parameters": {
    "InitialCountry": "us",
    "PreferredCountries": "us,ca",
    "Validation": true
  }
}
```
A US default phone field with the country list defaulting to the US and Canada at the top, with validation enabled.

****

### `2. Restrict to Only UK, US, and Canada`

```json
{
  "Title": "Phone (Restricted Countries)",
  "Name": "phoneUkUsCa",
  "TypeStr": "avt.ActionForm.Core.Input.TextInput,avt.ActionForm.Core",
  "Parameters": {
    "SpecificCountries": "us,ca,gb",
    "InitialCountry": "gb"
  }
}
```
Here, only users from the US, Canada, or UK can enter valid phone numbers and select those countries.

****

### `3. IP Geo Lookup for Initial Country Using ipapi`

```json
{
  "Title": "Phone (Geo IP)",
  "Name": "phoneGeo",
  "TypeStr": "avt.ActionForm.Core.Input.TextInput,avt.ActionForm.Core",
  "Parameters": {
    "SetInitialCountryIpLookup": true
  }
}
```
When the form loads, the field automatically selects the user's country based on their IP address.

****

### `4. Single Country, No Flag/Dropdown, Readonly Field`

```json
{
  "Title": "Phone (Readonly, GB Only)",
  "Name": "phoneGbReadOnly",
  "TypeStr": "avt.ActionForm.Core.Input.TextInput,avt.ActionForm.Core",
  "Parameters": {
    "InitialCountry": "gb",
    "RemoveFlag": true,
    "Readonly": true
  }
}
```
For a display-only or confirmation scenario, the user cannot change value or country; the field is fixed to GB.

****

## `Changelog & Notable Improvements`

- **International Telephone Input library** upgraded from v12.1.3 to **25+** (2024). This update:
  - Improved support for edge-case countries (e.g., Bermuda, Antigua, Jamaica) especially handling the +1 NANP countries.
  - Fixes area code autofill, deletion, and input bugs.
  - Validation now matches latest national/local number length and pattern rules.
  - Additional options for country restriction and initial country lookup.
- Setting the field to national/international mode improves UX for local (single-country) deployments.
- Friendly user errors and better in-field guidance on mistakes.

****

## `Known Limitations & Troubleshooting`

- Free use of ipapi country lookup may be depleted or restricted by usage. Production deployments should monitor or add error handling/fallback logic.
- If the phone number is not valid for the selected/restricted country, form submit will be blocked (unless you disable Validation).
- Placeholders may be localized based on country and settings; using the custom placeholder overrides this.

****

## `Further Reading`

- [International Telephone Input Library Documentation](https://github.com/jackocnr/intl-tel-input)
- [Phone Number Formatting Standards (E.164)](https://en.wikipedia.org/wiki/E.164)
- [ipapi – IP Geolocation Service](https://ipapi.co/)

