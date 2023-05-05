---
id: address
title: Address
sidebar_label: Address
---

This type of field allows you to define address and location-specific data types, such as countries, regions, Google Places and so on.

- [**Country**](#country)
- [**Google Maps**](#google-maps)
- [**Google Places**](#google-places)
- [**Region**](#region)
- [**US State**](#us-state)

Note that only the field-specific parameters will be listed below. Please <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-parameters" target="_blank">see here</a> for a list of **common parameters** to all fields and <a href="https://learn.plantanapp.com/docs/modules/fields-overview-and-settings#common-configuration-sections-bind-expressions-ui-settings-validation" target="_blank">here</a> for the **common configuration** elements to all fields.

## **Country**

Creates a "<em>Country</em>" selection dropdown list in the Form, populated with all the World's countries.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Title When No Selection* | Allows you to select a default text for the field, when no selection is (yet) made. |
| *Initial Value* | It is possible to select an initial value for this field; note that you can pull data for this parameter from various sources via <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

## **Google Maps**

<img src="/img/google_maps_multiple_markers.png" alt="google_maps_multiple_markers.png" ></img>

Inserts a Google Maps snippet in the Form, for which you can define the following specific parameters.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Google API Key* | Enter the Google API Key (a unique identifier that authenticates requests associated with your project for usage and billing purposes) here to enable this type of Field. You can find or create a Google API Key [here](https://console.cloud.google.com/apis/credentials). This field supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Map Center Method* | Defines where the map will be centered. Available options are: `Geolocation` (will try to get the current location from the browser; falls back to "Map Center" if unsuccessful), `Map Center` (requires geographical coordinates to be defined - see below) or `Zoom To Markers` (needs Google Maps markers to be defined- see below). This field supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Map Center* | Enter latitude and longitude coordinates, separated by a comma (available only when selecting "`Geolocation`" or "`Map Center`", above). Example: "`40.730610, -73.935242`". |
| *Map Zoom* | Select map zoom level; accepts values between "`0`" and "`18`" and also <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Markers* | Define Google markers on the map; each marker requires `Latitude` and `Longitude` coordinates, as well as a `Label`. Note that you need at least two suck markers for the " `Zoom To Markers`" method, above. This field supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Circles* | Allows you to draw circles on the map; please refer to the [Google documentation](https://developers.google.com/maps/documentation/javascript/reference/data-driven-styling#FeatureStyleOptions) for a description of the various features (radius, fill color, opacity, etc.), as well as their accepted values. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

<img src="/img/google_map_circle.png" alt="google_map_circle.png" ></img>


## **Google Places**

<img src="/img/google_places_field.png" alt="google_places_field.png" ></img>

Creates a "Google Places" selection Field in the Form.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Google API Key* | Enter the Google API Key (a unique identifier that authenticates requests associated with your project for usage and billing purposes) here to enable this type of Field. You can find or create a Google API Key [here](https://console.cloud.google.com/apis/credentials). This field supports <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Result Type* | Defines where the map will be centered. Available options are: `Mixed` (combines "[Geocode](https://developers.google.com/maps/documentation/geocoding/requests-geocoding#geocoding-lookup)" and "[Establishment](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2)" types), `Geocode` (instructs the [Places Autocomplete service](https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service) to return <strong>only geocoding results</strong>, rather than business results; you can use this request to disambiguate results where the location specified may be indeterminate), `Address` (instructs the [Places Autocomplete service](https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service) to return <strong>only geocoding results with a precise address</strong>, rather than business results; you can use this request when you know the user will be looking for a fully specified address) or `Establishment` (instructs the [Places Autocomplete service](https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service) to return <strong>only [business results](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2)</strong>). |
| *Basic Data Fields* | Toggle switches that allow you to define Google-specific location data such as a place's icon, photo, vicinity, etc. Please check [Google's Prices for Basic data](https://developers.google.com/maps/billing/understanding-cost-of-use#basic-data). |
| *Contact Fields* | Toggle switches that allow you to define Google-specific contact data such as a place's phone number or website. Please check [Google's Prices for Contact data](https://developers.google.com/maps/billing/understanding-cost-of-use#contact-data). |
| *Atmosphere Fields* | Toggle switches that allow you to define Google-specific [atmosphere data](https://developers.google.com/maps/documentation/places/web-service/place-data-fields#atmosphere). Please check [Google's Prices for Atmosphere data](https://developers.google.com/maps/billing/understanding-cost-of-use#contact-data). |
| *Component Restrictions* | Enter [country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) that allow you to restrict the Google Places search results for this field; up to five such code are supported, with codes separated by a comma. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

## **Region**

Creates a "<em>Region</em>" selection dropdown list in the Form.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Title When No Selection* | Allows you to select a default text for the field, when no selection is (yet) made. |
| *Initial Value* | It is possible to select an initial value for this field; note that you can pull data for this parameter from various sources via <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Country Field* | Link this Field to a "[Country](#country)"-type field (the selection list contains all the "`Country`"-type fields in your Form), case in which the dropdown items will be automatically populated with regions defined for the selected country. For example, if the country is "`US`", then the region textbox will change into a dropdown list that contains all US states. |
| *Other textbox* | Checking this box will introduce a new option titled "<strong>Other</strong>" in the "<em>Region</em>" dropdown list that will show an empty textbox. The textbox will allow the user introduce a custom region (for regions that are not in the "<em>Region</em>" list). |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

## **US State**

Creates a "<em>US State</em>" selection dropdown list in the Form, populated with all the states in the United States.

- Specific parameters

| Field | Description and information |
| ----- | --------------------------- |
| *Title When No Selection* | Allows you to select a default text for the field, when no selection is (yet) made. |
| *Initial Value* | It is possible to select an initial value for this field; note that you can pull data for this parameter from various sources via <a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces">tokens</a>. |
| *Save to Report* | Checking this box automatically saves the value from this Field into the database, under the `avtActionForm_Reports` table. |

<br /><br /><a href="#top">Back to the top &#10548;</a>