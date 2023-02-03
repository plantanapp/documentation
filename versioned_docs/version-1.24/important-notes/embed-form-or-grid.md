---
id: embed-form-or-grid
title: Using the Embed Option in Forms and Grids
sidebar_label: Embed Form or Grid
---

> Audience: [`Citizen Developer`](/docs/audience#citizen-developers)<br/>
> Skill Prerequisites: `HTML`

The `Embed` option, available for Grids under `Advanced UI Settings` and Forms under `Advanced Settings` when `Display Mode` is set to `Initially Visible`, allows the form or grid to be embedded on another site so that data can be updated and viewed on the other site. When selected, the embed code to use on the other site is automatically provided.

While this option can be very useful, there are special considerations when using it.

:::caution
 If your form or grid utilizes any open in popup actions (i.e., `Open Action Form in Popup` or `Open FileManager in Popup`) those popups will not work on the site where you have the form embedded.
:::

## `Special Considerations`

1. Do not mix `HTTP` and `HTTPS` (i.e., origin site is `HTTPS` and site where the form is embedded is `HTTP`) because "**Mixed Active Content**" is blocked by all major browsers. It's recommended to always use `HTTPS`.
2. If you have issues displaying the embed code on the target site, confirm the following:
    - The permissions for the page where the form is located are set to allow the `All Users` Role `View` permission (i.e., the page is public).
    - The web.config on the origin website is properly set. Under the `httpProtocol/customHeaders` section there should be one remove tag for `X-Frame-Options` header and there shouldn't be any other add tags for `X-Frame-Options` that sets the header. Here is an example of that `web.config` section with the `X-Frame-Options` setting correctly added:
  
```xml {1,2,5}
<httpProtocol>
    <customHeaders>
        <remove name="X-Powered-By" />
        <remove name="X-XSS-Protection" />
        <remove name="X-Frame-Options" />
        <add name="X-XSS-Protection" value="1; mode=block" />
    </customHeaders>
</httpProtocol>
```

3. Because of the latest cookie policies enforced by Chrome, for the Embed option to work, there are some additional changes to the origin site's `web.config` that need to be implemented. In the `system.web/authentication` section in the `forms` tag you need the `cookieSameSite` attribute set to `true` with `requireSSL` set to `true`. Additionally, `httpCookies` should have the `sameSite` attribute set to `None` also with `requireSSL` set to `true`. Here are examples of those settings:

```xml {1,3,4,7}
<system.web>
    ...
    <authentication mode="Forms">
        <forms cookieSameSite="None" requireSSL="true" />
    </authentication>
    ...
    <httpCookies sameSite="None" requireSSL="true" />
    ..
</system.web>
```

## `Additional Information and Consideration`

For more information and additional considerations when embedding a form or grid on another site, please read [this article from Chrome Platform](https://www.chromestatus.com/feature/5633521622188032).
