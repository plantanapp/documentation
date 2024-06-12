---
id: tkn-core-datetime
title: DateTime
sidebar_label: DateTime
---

> Audience: [`Low-Code Developers`](audience.md#top)
>
> Skill Prerequisites: `None`

Returns `DateTime` information in a variety of formats


## `Typical Use Cases`

- Display the current date and time to a user
- Format the date in a specific format
- Initialize a form field
- Compute a relative date

# [DateTime:\<Value\>]

>The examples below assume the current UTC time is 7/3/2023 11:29:47 PM

| Example | Output | Notes |
| ---------------- | ----------------------------------------------- | --------------- |
|[DateTime:Now] | 7/3/2023 6:29 PM | Assumes the user's preferred time zone is US Central Time
|[DateTime:Now\|dddd, MMMM d, yyyy \a\t hh:mm:ss tt] |Monday, July 3, 2023 at 06:29:47 PM| Assumes the user's preferred time zone is US Central Time
|[DateTime:UTC] | 7/3/2023 11:29 PM
|[DateTime:Iso] | 2023-07-03T23:29:47.8663226+00:00
|[DateTime:Current] | Monday, July 3, 2023
|[DateTime:System] | 7/3/2023 11:29 PM
|[DateTime:Unix] | 1688426987
|[DateTime:Relative(add="-7 days")] | 6/26/2023 11:29:47 PM| Supports days/weeks/months/years
|[DateTime:Week(Offset=1)] | Monday July 10 - Sunday July 16|Offset is 1 week into the future
|[DateTime:WeekUS(Offset=1)] | Sunday July 9 - Saturday July 15|Offset is 1 week into the future













### Special Notes

The `DateTime:Now` token will give varying outputs depending on both user context and the site settings.


1. If a user context is given: This output will be adjusted to the User Profile's Preferred Time Zone. 

   This situation occurs (1) when there is a logged-in user, or (2) when actions are being executed and the Load User action has been implemented to modify the context to a different user.

2. If no user context is given: The output aligns with the Settings / Site Settings / Site Time Zone. 

   For instance, this case would be valid when you establish an automation job that doesn't have a defined context user, and there's no load user action being implemented.


