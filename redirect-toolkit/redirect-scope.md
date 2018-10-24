# Redirect Scope

When you add a Redirect Toolkit module to a page and add rules to it, by default they are evaluated only for requests to that page. But sometimes you want to write rules that are evaluated for all pages. One usual example is to redirect to a partner page when the user arrives from specific referrers.

This can be achieved by configuring the rule to run globally by selecting the option labeled *Evaluate For All Requests*. 

<div style="text-align:center">

![](redirect-toolkit/assets/evaluate-for-all-requests.png)

</div>
Global redirects are new in version 2.0. Behind the scenes, Redirect Toolkit installs an HTTP filter in web.config that will intercept all requests and see if they need redirected. It's important to know that global redirects run at a different time than module redirects, so the order in which you define the redirects should evaluate will apply separately for the two types of redirects.

The global scope serves two main purposes:
write permanent 301 redirects (even when the original URL doesn't exist anymore as a page)

execute redirects regardless of the page users arrive to. This includes all redirect types supported by Redirect Toolkit.
