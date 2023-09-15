---
id: listings-general-settings
title: Listings General Settings
sidebar_label: General Settings
---

Those settings allow yout to configure the display appearance of the data Grid. The "Settings" tab is accessible through the Grid Editor (`Listing`). Multiple settings are available and are listed below.

### Show Conditionally
Define a condition to be evaluated and for the Grid to be displayed. This is a server side expression (C# and Tokens - for example: `[HasRole:Administrator|true]`); when "false", the Grid will be hidden.

### Display Title
When checked, the module title is displayed at the beginning of the top button bar.

### Display Mode
Choose whether this grid appears initially on the page or if it should be opened programmatically. Possible values:
   - `Initially Visible` - default, displays the grid as is.
   - `In Popup` - opens the Grid in a popup page; has [specific parameters](#popup-specific-parameters). You can:

     - Open the popup by calling the API (`dnnsf.api.actionGrid.showGridPopup(420`)) or by using <a href="https://learn.plantanapp.com/docs/current/category/actions" target="_blank">**Actions**</a>;
     - Close the popup by calling the API (`dnnsf.api.actionGrid.hideGridPopup(420)`)
   - `Manual` - grid will be shown after manual action; you can:

     - Open the popup by calling the API (`dnnsf.api.actionGrid.showGridPopup(420`));
     - Close the popup by calling the API (`dnnsf.api.actionGrid.hideGridPopup(420)`)

#### Popup-specific parameters
   - *Popup Width* - define the popup window width (numeric field)
   - *Width Coordinate* - define the popup window width unit ([px](https://www.w3.org/Style/Examples/007/units.en.html#units), percentage, or [vw](https://www.w3.org/Style/Examples/007/units.en.html#future))
   - *Popup Name* - This will be displayed as modal title. Supports Tokens.

### Enable Row Tooltip
If checked, allows you to configure a tooltip row that will be displayed with your Grid.
- Specific parameters:

| Parameter | Description and Notes | Supports Tokens/HTML |
|---|---|---|
| *Tooltip Title* | Define tooltip title. | &#x2705; |
| *Tooltip Content* | Editor field. Define the contents of your tooltip.  | &#x2705; |
| *Tooltip Placement* | Possible values: `Top`, `Left`, `Right`, `Bottom`. The placement is only applied when the page layout allows it. Otherwise, the tooltip is displays in the direction that is most visible to the user. | &#10060; |
| *Tooltip Height(px)* | In [px](https://www.w3.org/Style/Examples/007/units.en.html#units). Accepts only integer values between 0-500. For default adjusting set it to: `0`. | &#10060; |
| *Tooltip Width(px)* | In [px](https://www.w3.org/Style/Examples/007/units.en.html#units). Accepts only integer values between 0-500. For default adjusting set it to: `0`. | &#10060; |
| *Tooltip Data Trigger* | Action the triggers the tooltip; mouse `Click` or mouse `Hover`. | &#10060; |
| *Icon* | Choose the tooltip icon. Uses [Font Awesome version 6.2 classes](https://fontawesome.com/v6/search?o=r&m=free) to label the button with icons (`fa-*shortcode*`). You can use 4 different styles - Solid (`fas`), Regular (`far`), Light (`fal`) and Brands (`fab`). Example:`(fas fa-*shortcode*)`. | &#10060; |
| *Icon Position* | Tooltip icon position in regards to the cusrosor: `Right` or `Left`. | &#10060; |
| *Visible in edit mode* | If checked, enables the option so that the tooltips be displayed in the grid, in inline edit mode. | &#10060; |

### Message for empty grid
Define the message to be displayed when the returned data grid is empty. Supports Tokens & HTML.

### Hide empty grid
If this is enabled, Listing will be invisible if there is no data to be shown.

### Enable Search
Check to enable the Search field (default). If search is disabled, the search box is hidden, even if there are fields marked as searchable.

#### Show data on search
Check to only display data when the user has provided the search terms.

#### Search Placeholder
The text is displayed in the search input field before the user enters a value. The "`search.placeholder`" parameter value from the `.resx` file will be used if this field is empty. This field supports Tokens.

### Search Delay
Define the delay after the Grid starts the search request, in milliseconds. Accepts values between `0` and `3000`.

### Enable Filters
If checked (default), will display the filter buttons and dropdowns. Note that if disabled, the filters are hidden, even if there are fields marked as filterable.

### Sync with URL
Enable this option to sync URL with current sort, pagination and filters. Useful for navigating back using browser button, bookmarking, sharing and integrating with other modules.

#### Query String Prefix
If there are multiple listing modules on the page, the prefix helps differentiate which parameters reflect to this module. Otherwise, the 2 modules will use the same parameters, which could result in unwanted behavior. The url will change from: `<yourapp>.com/?page=1`, to: `<yourapp>.com/<prefix>page=1`

### Lock into Edit Mode
Check this box in order for the Grid to always display in inline edit mode. Note that item itself and the Grid button will not be available when this option is enabled.

### Include FontAwesome
Allow the use of [Font Awesome version 6.2 classes](https://fontawesome.com/v6/search?o=r&m=free) icons. Enabled by default; uncheck to prevent Font Awesome from being loaded on the page.

### Debug Mode
Check this box to log detailed debug information in the `<PortalHome>/Logs/ActionGrid` folder.

### Root CSS Classes
Allows you to add custom CSS classes (attributes used to define a group of HTML elements in order to apply unique styling and formatting to those elements with CSS) to further refine the form display. You can load multiple such classes, separating them with a space. This field also supports Tokens.

### Refresh when a modal/popup is closed
Check this option box to refresh this Listing when a [Boostrap modal](https://getbootstrap.com/docs/5.2/components/modal/) is closed.

### Show loading animation
Uncheck to hide the CSS loading animation of the Listing; enabled by default.

## Advanced UI Settings
These are advanced UI configuration settings that allow you to further refine your data Grid display.

### Additional HTML Header
HTML editor that allows you to create a specific, custom header for your data Grid. Supports Tokens.

### On Init Javascript
Javascript editor in which you can define a script to be executed on data Init (see the way data is loaded in Plant an App <a href="https://learn.plantanapp.com/docs/current/modules/forms-overview#stages-of-data-load-and-execution" target="_blank">here</a>). Gives access to the `settings` JS variable. Supports Tokens.

### On DataSource Load/Refresh Javascript
Javascript editor in which you can define a script to be executed on data Load or Refresh (see the way data is loaded in Plant an App <a href="https://learn.plantanapp.com/docs/current/modules/forms-overview#stages-of-data-load-and-execution" target="_blank">here</a>). Gives access to the `settings` and `resultSet` JS variable. Supports Tokens.

### Embed
Checking this box will generate an embeddable code snippet that will allow you to integrate your data Grid on external pages. Note that this has limitations; reade more about it <a href="https://learn.plantanapp.com/docs/modules/important-notes/embed-form-or-grid/" target="_blank">here</a>.

:::caution

The "Popup" functionality will not work in embedded Grids (i.e., for "Open a Form in Popup", "Open fileManager in Popup", etc.).

:::

## Tabs Integration
Settings linked to the data Grid integration in the Plant an App **Tabs** module.

### Load When Tab Is Activated
Check this box to initialize when the Tab is active.

### Refresh Grid When Tab Is Activated
Check this box to refresh the data Grid when the Tab is active.

### Trigger loading animation
Check this box to trigger the Tabs loading animation from Listing.

## Javascript APIs
API call reference that allows you to interact with the data Grid from inside the web browser. They are loaded through the `actiongrid.js` file.

- **`dnnsf.api.actionGrid.refresh(moduleId, delay)`** - Forces a data refresh from back-end; the delay is set in milliseconds.
- **`dnnsf.api.actionGrid.showGridOrPopup(moduleId, modalSettings, clearGridQueryString)`** - Shows Grid set: "Manual" or "In Popup".
- **`dnnsf.api.actionGrid.showGrid(moduleId, clearGridQueryString)`** - Shows Grid set to: "Manual"; "`clearGridQueryString`" is boolean.
-** **`dnnsf.api.actionGrid.showGridPopup(moduleId, modalSettings, clearGridQueryString)`**** - Display: "In Popup"; `modalSettings` is an object consisting of modal settings from Bootstrap 3; `clearGridQueryString` is boolean.
- **`dnnsf.api.actionGrid.hideGridOrPopup(moduleId)`** - Hides grid display, "Manual" or "In Popup".
- **`dnnsf.api.actionGrid.hideGrid(moduleId)`** - Hides grid display: "Manual"
- **`dnnsf.api.actionGrid.hideGridPopup(moduleId)`** - Hides grid display: "In Popup"
- **`dnnsf.api.actionGrid.clearGridQueryString(moduleId)`** - This method will look for parameters in the URL that contains the predefined `moduleId`, deletes them and replaces the URL.

<br /><br /><a href="#top">Back to the top &#10548;</a>