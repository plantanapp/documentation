# Localization

When more than one language is in use on your site, to determine the language in which the content is displayed, we look at the following settings, in this order:

 1. The `language` parameter in query string
 2. The first segment of the request path (after the virtual path, if any).
 3. Cookie
 4. User preference
 5. Browser
 6. Portal default
 7. System default

It is important to properly setup the Site (Portal) Aliases when dealing with localization. You will have to add a portal alias for each language that the portal should support. Otherwise the page content for the secondary language may be displayed in the default language (the most usual issue being the links in the page will be generated using the default language), or in some cases, pages will not display at all or redirect to the Page Not Found page.

Let's say that your current portal alias is `domain.com`. In single language mode, DNN is using the `en-us` language as default, which in multi language mode is used as the system fallback and can never be removed. When you enable localization and add another language, you will have two languages to support: `en-us` and your chosen language, let's say `de-de`. After enabling localization, you will have to setup the site aliases as follows, using `en-us` as default language:
  * Use the `Canonical` Site Alias Mapping Mode
  * `domain.com` - can be set to primary, language can be left not set or set to the default language
  * `domain.com/en-us` - language set to en-us, and set as primary
  * `domain.com/de-de` - language set to de-de, and set as primary
  
When a user is accessing the site with the first alias (`domain.com`) he will be redirected to the one with the default language (in our case, `domain.com/en-us`).
