---
id: date-and-time
title: Date and Time
sidebar_label: Date and Time
---

## **Date and Time**

This field type allows you to insert date and time-related Fields into your Form - clocks, calendars and date pickers.

### **Clock**

Inserts a clock into your Form.

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | It is possible to select an initial value for the inserted clock; the field loads initially having this value. The time should be represented in milliseconds. Supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>, so you can pull data from various sources such as user profile. |
| *Clock Type* | Clock typology: `Analog`, `Digital` or `Both`. |
| *Digital Format* | Active only for "`Digital`" and "`Both`" *Clock Types* (see above). Follows the [ISO 8601 standard](https://en.wikipedia.org/wiki/ISO_8601#Times) - `H(H):mm:ss(s)` and supports 12/24h formats. |
| *Digital Styles* | Active only for "`Digital`" and "`Both`" *Clock Types* (see above). You can use [CSS](https://en.wikipedia.org/wiki/CSS) styles to customize the appearance of the digital clock (font or background color). |
| *Clock Offset* | Allows you to choose the time zone compared to [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). Choose from the dropdown list or write an expression by toggling the `EXPR` button (example: `4.30` for "UTC+04:30"). |
| *Show GMT Info* | Check the box to show time zone under the clock(s). |
| *Clock Theme* | Switch between a `Light` and `Dark` theme for the clock(s). |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

### **Date & Time Picker**

Inserts a date and time picker that uses the **[flatpickr](https://flatpickr.js.org/)**[ javascript library](https://flatpickr.js.org/) into the Form. Like any element in Plant an App, it is highly customizable: amongst others, it allows you to define the date format, the first day of the week or disable certain days.

This field automatically generates the following <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a> that can be used elsewhere in the Form context:

* `[Region]`
* `[Region:ISO]`
* `[Region:Utc]`
* `[Region:UtcFormatted]`
* `[Region:Day]`
* `[Region:Month]`
* `[Region:MonthName]`
* `[Region:Year]`
* `[Region:DayOfYear]`
* `[Region:DayOfWeek]`
* `[Region]`
* `[Region:ISO]`
* `[Region:Hour]`
* `[Region:Minute]`
* `[Region:TimezoneOffset]`

If the *Minimum* or *Maximum Date* fields are defined (see below), the tokens will contain the values in the new specified format, with each date value respecting the requested token. Additionally to the normal tokens, a set of new tokens are generated for the minimum date and the maximum date and will contain the "`Start`" and "`End`" prefix, so that they can be retrieved individually too (e.g. for the Iso value you will use the `[Region:StartIso]` and `[Region:EndIso]` tokens).

#### ***Parameters list:***

| Field | Description and information |
| ----- | --------------------------- |
| *Initial Value* | Provide an initial date for preload. It can be in any format that can be parsed in the current language. Supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>, so you can pull data from various sources such as user profile. |
| *Is UTC* | Relates to the parameter above: if the initial value is in UTC, use this option to automatically convert it to user time zone when displayed in the form. |
| *Format* | Select the date and time format that will be presented to the user. For backend operations it's advised to use the ISO sub token (see [above](#date--time-picker)). For custom formats, check the [Date/DateTime picker format](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings) strings or [Time picker format](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-timespan-format-strings) strings. Supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Allow Input* | If unchecked, the user will not be able to modify the time/date in the picker. |
| *Disable Dates* | Allows you to disable any date "`In The Future`" or "`In The Past`" in relation to the initial date, effectively disabling them. |
| *First Day of the Week* | Choose between `Sunday` and `Monday`. |
| *Disable Weekends* | Check the box to disable Saturdays and Sundays. |
| *Inline* | Check to make the calendar/picker visible without having to click inside the field. |
| *Minimum Date* | The minimum date that a user can start picking from (inclusive). Accepted format: "`yyyy-MM-dd`". Supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Maximum Time* | The maximum day time that a user can start picking from (inclusive). Accepted format: "`HH:mm`". Supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Maximum Time* | The minimum day time that a user can start picking from (inclusive). Accepted format: "`HH:mm`". Supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Minute Increment* | Sets the minute increment step. Defaults to: "`5`". |
| *Flatpickr Options Override (javascript object)* | Puts a JavaScript editor to your disposal to further customize the format of the calendar/time picker (takes precedence over the other settings if in conflict). Accepts a JavaScript object(s) that will override the options of the flatpickr library the field is using. See [flatpickr options](https://flatpickr.js.org/examples/) for further information. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

### **Date And Time** *(deprecated)*

This field type is deprecated. Please use `Date & Time Picker` (see above).

### **Date Picker**

Similar to the ["](#date--time-picker)<strong><em>[Date & Time Picker](#date--time-picker)</em></strong>[" type](#date--time-picker) (see above) but limited to date-specific parameters.

### **Time Picker**

Similar to the ["](#date--time-picker)<strong><em>[Date & Time Picker](#date--time-picker)</em></strong>[" type](#date--time-picker) (see above) but limited to time-specific parameters.