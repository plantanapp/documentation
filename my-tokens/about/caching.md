# Caching

My Tokens implements several layers of caching. Most important is the token level caching. This is specified at creation time and it's a very powerful optimization feature. 

There are several strategies for token level cache:

### Global (Per Host)

When this option is selected My Tokens caches the token once for all requests made to pages on any portal. Use this strategy when the token doesn't vary based on user or other contextual information. For example, a currency exchange rate would not depend on anything from the site.

### Per Portal

With this caching strategy My Tokens stores the token once per portal. This means that all requests made to one portal will yield same token output. Use this strategy for tokens that are different based on portal. For example, a constant token that uses [Portal:Title] would be best cached per portal.

### Per Role

This caching layer stores token output once for every role. This means that users in same role will always see the same thing. Note that this is actually stored for a group of roles. So let's say one user that has *Role1* and *Role2* comes to the page where the token is. My Tokens looks for a value saved for the *Role1+Role2* key. If it doesn't exist, it evaluates the token and returns the response. If another user that only has *Role1* accesses the page, the My Tokens considers it different than *Role1+Role2*, therefore it reevaluates the token and saves the response under key Role1.

### Per User

Using this layer will have My Tokens cache the response once for each user. Use this strategy when the token depends on the user.

### Per User Session

This is the same as strategy above except the cache will be cleared when the server session expires. With previous option the cache expires when the a number of seconds equal to Cache Time passes or the web server/application pool is restarted.