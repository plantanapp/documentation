---
id: converting-from-bs3-to-bs5
title: Converting from Bootstrap 3 to Bootstrap 5
sidebar_label: Converting from BS3 to BS5
---

Plant an App allows you to use both the [Bootstrap 3](https://getbootstrap.com/docs/3.4/) and [Bootstrap 5](https://getbootstrap.com/) frameworks for your pages. However, since version 3 is now considered obsolete, you might want to migrate to [Bootstrap version 5](https://getbootstrap.com/docs/5.0/migration/).

This framework change involves different behavior in certain areas. This section will detail the important changes that you should be aware of when migrating from BS3 to BS5, as well as preventing unwanted behavior after the migration itself.

## Dynamic Containers (Forms)

Dynamic containers in the **Form Builder** behave and are displayed differently between Bootstrap version 3 and version 5. While this isn't a limitation or a problem in itself (just a change of behavior), it is important to understand how the display of the Dynamic Containers in your Form will change when migrating from BS3 to BS5.

### Behavior in Bootstrap 3

When adding dynamic fields to a version 3 dynamic container, each new field will be added and stacked *to the right* of the previous one, based on the width of the container. For example, if the container was 2 columns wide and 3 fields were added, a total of 6 columns will be displayed on a single row.

To illustrate, let's take two dynamic field containers ("Monday" and "Tuesday") and subsequent dynamic fields (selectable hourly intervals). While the containers will be displayed on different rows, their respective fields will be displayed horizontally, on unique columns:

<img src="/img/bs3-dynamic-fields.png" alt="bs3-dynamic-fields.png">

This will happen regardless of what is defined under the "`Layout`" section of the Form Builder (see the "`Layout`" section on the "<strong>Forms: Main Menu and Usage</strong>" page). As such, even if the dynamic fields are set to be displayed on different lines, they will be displayed as columns regardless.

### Behavior in Bootstrap 5

When adding dynamic fields to a Bootstrap 5 dynamic container, each new field is added *below* the previous one. For example, if the container was 2 columns wide and 3 fields were added, a total of 2 columns will be displayed on 3 rows.

Taking the same example as above, with two dynamic field containers ("Monday" and "Tuesday") and subsequent dynamic fields (selectable hourly intervals), they will be displayed vertically, as follows:

<img src="/img/bs5-dynamic-fields.png" alt="bs5-dynamic-fields.png">

This is considered to be a more logical behavior and has thus been adopted as the default behavior in BS5.

### Achieve the Bootstrap 3 behavior in Bootstrap 5

If you still prefer the Bootstrap 3 display while using the Bootstrap 5 template, you can achieve this by adding multiple dynamic containers and arranging them side-by-side (under the "`Layout`" section of your Form Builder). For example, adding 3 dynamic containers arranged 2 columns wide and on the same row, then adding 1 field to each, a total of 6 columns will be displayed on one row.

## Localization

The Localization settings file location changes from Bootstrap 3 to Bootstrap 5. When migrating from BS3 to BS5, you will need to set the Resource File from its new location.

### What is Localization and how is it used?

Localization allows you to automatically translate standard contextual elements such as buttons, messages or tooltips according to the user's language interface. For example, you can set a "Submit" button on your form in English to be automatically translated to "Absenden" when displayed in German, or "Soumettre" when displayed in French.

The different translation are stored in a "Resource File", which location changes from Bootstrap 3 to Bootstrap 5.

### Migrating from Bootstrap 3 to Bootstrap 5

The Localization path is dependent on the Bootstrap 3 or 5 used in your Form Builder (see the "`UI & Layout`" section on the "<strong>Forms: Settings</strong>" page). To access the localization settings for a specific language, go to your "<strong>Site Settings</strong>" > "<strong>Languages</strong>" tab and click the "Languages" button.

<img src="/img/site-settings-languages .png" alt="site-settings-languages .png">

* The "Bootstrap 5" template Resource File gets localized from:

`LocalResources / DesktopModules / MVC / DnnSharp / ActionForm / App_LocalResources / Main`

<img src="/img/bs5-ressource-file.png" alt="bs5-ressource-file.png">

* The "Bootstrap 3 (Obsolete)" template Resource File gets localized from:

`Local Resources / DesktopModules / DnnSharp / ActionForm / App_LocalResources / Form`

<img src="/img/bs3-ressource-file.png" alt="bs3-ressource-file.png">

As such, when migrating from BS3 to BS5, please make sure that:

1. You update the Localization from the new path
2. Go to "<strong>Servers</strong>" and click "`Clear Cache`"

<img src="/img/bs5-localization-clear-cache.png" alt="bs5-localization-clear-cache.png">