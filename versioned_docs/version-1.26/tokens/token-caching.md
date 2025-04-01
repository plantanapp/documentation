---
id: token-caching
title: Token Caching
sidebar_label: Token Caching
---

## How are Tokens cached?

*Caching* refers to the action of holding contextual data in memory in order for it to be quicky accessed in case of requests. In the specific case of tokens, it refers to holding the data the token references in a certain context in memory for later access in a specific context.

Plant an App's tokens are cached in several layers, the most important of which is the *token level caching*. The token caching layer is specified when the token is created and makes for a very powerful optimization feature.

There are several strategies for token level caching:

### Global (per Host)
When this option is selected the token is cached once for all requests made to pages on any portal.

- **When is it useful?** When the token doesn’t vary based on user or other contextual information. For example, a currency exchange rate would not depend on anything from the site.

### Per Portal
With this caching strategy My Tokens stores the token once per portal. This means that all requests made to one portal will yield same token output. 

- **When is it useful?** For tokens that are different based on portal. For example, a constant token that uses `[Portal:Title]` would be best cached at the portal level.


### Per Role
This caching layer stores token output once for every role. In other words, users in same role will always see the same thing. Note that this is actually stored for a group of roles.

- **When is it useful?** When the token value(s) is/are dependent on the roles. As an illustration, a user with "`Role1`" and "`Role2`" access the page where your token is located. Plant an App will look for a value saved for the `Role1+Role2` key. If it doesn’t exist, it evaluates the token and returns the response. If another user that has only "`Role1`" accesses the page, it will be considered as different to `Role1+Role2`; therefore the token is re-evaluated and the response saved under key "`Role1`".


### Per User
When using this layer, Plant an App will cache the token response once for every user. Note that the caching expires when the number of seconds defined for the "<a href="https://learn.plantanapp.com/docs/tokens/custom-tokens-and-namespaces#cache" target="_blank">`Cache Time`</a>" parameter is reached or when the web server or the application pool is restarted.

- **When is it useful?** If you have user-dependent tokens.


### Per User Session
Works similarly as the strategy above, except for the fact that the cache will be cleared when the server session expires or ends. 

- **When is it useful?** When you want your user-dependent tokens values to be cleared when ending the session. 

<br /><br /><a href="#top">Back to the top of the page</a>