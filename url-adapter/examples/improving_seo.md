# Improving SEO

## Use URL Adapter to improve SEO

1. Better control of **duplicate URLs** and automatic definition of **Canonical URLs**. There are multiple ways to get to a page, but certainly nobody wants to have to put a LINK definition in the HEAD of every page.

    In this case URL Adapter does this for you, it can help to better understand where you have duplicates and lets you associate any number of URLs with a page and define which is primary, which is disabled, etc.

2. Updating the website considerably and without SEO consideration. Now, part of this is to delete bad URLs in the Google Webmaster Tools, but it would be nice if it were to rename a page (and therefore the URL) if there would be a system that kept that old URL for a specified period of time (e.g., 1 Month) and provide an automatic 301 redirect to the newly named URL. Same goes with pages that have been moved. 

    URL Adapter has the capability to add the old URLs as being disabled. This will cause URL Adapter to redirect to the primary URL, the only caveat is that you'll have to add this manually. 

3. LinkClick URLs: When you use LinkClick for PDF downloads and you want to provide these with properly named URLs.

    In URL Adapter you can setup "Advanced Rules" which are nothing more than a mapping table. It also supports a simplified regex-like engine. For example, you can match `urlA/{page}` to redirect to `urlB/{page}`, and in turn it will redirect all child pages. 

4. Can URL Adapter provide a consistent link output? Is there any way to write a rule that would add some type of meta tag to the link so that the link clicks can be better tracked?

    You can use the Advanced Rules to setup a rewrite rule from `urla/somepage` to `urla/somepage?trackingcode=123`.

