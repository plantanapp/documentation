---
id: listings-general-settings
title: Listings General Settings
sidebar_label: General Settings
---

# Listing Control Settings in Plant an App

> Audience: [`Citizen Developer`](/audience.md#citizen-developers)
>
> Skill Prerequisites: `Tokens`

Explore the variety of settings available to configure the display appearance of the data Grid in Plant an App. Access the "Settings" tab through the Grid Editor (`Listing`) to discover the multitude of settings that can be utilized to personalize your data presentation. This guide will provide a detailed overview of each setting, describing its impact on the grid's appearance and functionality.

For an insightful demonstration of these features, explore [this detailed video on YouTube](https://youtu.be/6-M4horNyy8?si=3Uj2mPVZN16A4crd).

### `Show Conditionally`
Define a condition using a server-side expression (C# and Tokens) to determine if the Grid should be displayed. For example, `[HasRole:Administrator|true]` shows the grid only for administrators. If the condition evaluates to "false," the grid will be hidden.

### `Display Title`
Enable this option to display the module title at the beginning of the top button bar. Unchecking it hides the title, reducing screen clutter.

### `Display Mode`
Choose one of the following display modes for the grid:
- **Initially Visible**: The grid is displayed as is by default.
- **In Popup**: The grid appears in a popup page. Open the popup using the API (`dnnsf.api.actionGrid.showGridPopup(moduleId)`) or through Plant an App actions; close it with `dnnsf.api.actionGrid.hideGridPopup(moduleId)`.
- **Manual**: The grid will appear only after a manual action. Use JavaScript API calls to control its visibility.

**Popup-specific parameters**:
- **Popup Width**: Define the width of the popup (in numeric units).
- **Width Coordinate**: Choose the unit for width: px, %, or vw.
- **Popup Name**: Displayed as the modal title. Supports Tokens.

### `Enable Row Tooltip`
Activate this setting to configure tooltips for grid rows. You can define various parameters such as title, content, and placement.

- **Tooltip Title**: Define the title for the tooltip. Supports Tokens.
- **Tooltip Content**: Specify the content within the tooltip. Supports Tokens.
- **Tooltip Placement**: Set the direction of the tooltip (Top, Left, Right, Bottom), with automatic adjustments for visibility.
- **Tooltip Height (px)** and **Tooltip Width (px)**: Set dimensions in pixels—adjust for defaults using '0'.
- **Tooltip Data Trigger**: Choose the event that triggers the tooltip; options include `Click` or `Hover`.
- **Icon**: Choose an icon using [Font Awesome classes](https://fontawesome.com/v6/search?o=r&m=free).
- **Icon Position**: Specify the icon's position relative to the cursor: `Right` or `Left`.
- **Visible in edit mode**: Enable to display tooltips in the grid while in edit mode.

### `Message for Empty Grid`
Customize the message displayed when the grid returns no data. This supports both Tokens and HTML.

### `Hide Empty Grid`
Enable this to make the grid invisible if there is no data to display, conserving space.

### `Enable Search`
Activate this to show the Search field. If disabled, the search box is hidden, even if there are fields marked as searchable.

### `Exact Search`
When enabled, the search incorporates only exact character matches (case-insensitive) for precise filtering.

### `Show Data on Search`
Enable this to only display data after the user provides search terms, optimizing resource usage for large datasets.

### `Search Placeholder`
Define the placeholder text before user input. Defaults to the "search.placeholder" parameter. Supports Tokens.

### `Search Delay`
Set the delay in milliseconds (0-3000) before initiating a search request, influencing performance—lower values search faster but consume more resources.

### `Enable Filters`
Enable to display filter buttons and dropdowns. If disabled, filters are hidden regardless of filterable fields.

### `Sync with URL`
Enable to synchronize the URL with current sorting, pagination, and filtering states, useful for navigation, bookmarking, and sharing.

### `Query String Prefix`
Differentiate between multiple listing modules on a page, ensuring parameter separation in the URL.

### `Lock into Edit Mode`
Enable this to keep the grid in inline edit mode continuously. Note that item and grid buttons are unavailable when this is active.

### `Include FontAwesome`
Checked by default to use [Font Awesome](https://fontawesome.com/v6/search?o=r&m=free) icons. Uncheck to prevent it from loading on the page.

### `Debug Mode`
Enable this to log extensive debug information into the `PortalHome/Logs/ActionGrid` folder for troubleshooting.

### `Root CSS Classes`
Input custom CSS classes to apply bespoke styling across forms. They are separated by spaces and support Tokens.

### `Refresh When a Modal/Popup is Closed`
Enable this to refresh the Listing when a [Bootstrap modal](https://getbootstrap.com/docs/5.2/components/modal/) is shut.

### `Show Loading Animation`
Unchecked to disable the CSS loading animation of the Listing; enabled by default.

## Advanced UI Settings
These configurations refine your grid's UI presentation further.

### Additional HTML Header
Use the HTML editor to fashion a unique header for your grid.

### On Init Javascript
Utilize JavaScript for actions during data initialization, with access to the `settings` variable. Supports Tokens.

### On DataSource Load/Refresh Javascript
Inject JavaScript for execution on data load or refresh, utilizing the `settings` and `resultSet` variables.

### Embed
Enable to generate embeddable scripts for data grid integration on external pages. Note the incapability to operate "Popup" functions within embedded grids.

## Tabs Integration
Use these settings when integrating the data grid within the Plant an App **Tabs** module.

### Load When Tab Is Activated
Initialize when its associated tab is activated.

### Refresh Grid When Tab Is Activated
Refresh the grid each time its associated tab is activated.

### Trigger Loading Animation
Enable this to prompt loading animations from the Listing.

## Javascript APIs
Interact with the data Grid using API calls directly through the web browser:

- **`dnnsf.api.actionGrid.refresh(moduleId, delay)`** - Refresh data post delay (milliseconds).
- **`dnnsf.api.actionGrid.showGridOrPopup(moduleId, modalSettings, clearGridQueryString)`** - Control grid visibility: Manual/In Popup.
- **`dnnsf.api.actionGrid.showGrid(moduleId, clearGridQueryString)`** - Show Manual mode grid.
- **`dnnsf.api.actionGrid.showGridPopup(moduleId, modalSettings, clearGridQueryString)`** - Display Popups with specific settings.
- **`dnnsf.api.actionGrid.hideGridOrPopup(moduleId)`** - Hide Manual/In Popup grids.
- **`dnnsf.api.actionGrid.hideGrid(moduleId)`** - Conceal Manual grids.
- **`dnnsf.api.actionGrid.hideGridPopup(moduleId)`** - Conceal Popup grids.
- **`dnnsf.api.actionGrid.clearGridQueryString(moduleId)`** - Erase and replace URL parameters containing the module ID.


Revised 11/03/2025