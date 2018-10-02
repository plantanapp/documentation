# Access Google API (example: Trends Menu)

MyTokens supports the consumption of RESTful endpoints. With the various built in parsing engines, you can easily configure MyTokens to consume REST services; even those requiring various authentication schemes.

In this section we'll follow an example, we will create a “Trends Menu” using data retrieved from the Google Export API.

### What you will need

* MyTokens module installed. Download the trial version if you have not done so yet.

* A Google account with analytics service enabled for your website AND you must be using the Google Custom Search for your website.

### Authenticating against the API

Most REST Services, such as Google’s Export API, will require some form of authentication. MyTokens make HTTP authentication possible by allowing tokens to be nested. You can create one token that only has one job – which is to identify yourself and ask Google for an “Authorization Token” which you can use to identify you throughout the remainder of your session. In a normal application scenario, you’d retrieve this token and save it in memory (cache) which is similarly what we will do here. We will retrieve the token and cache it using the token cache settings so we can use the token over and over but only connect to Google once.

To begin, create a new Namespace in MyTokens called “ga”. Then create your first new token in the “ga” namespace. Call this token “authToken”. Final token will be [ga:authToken].

### Source

Select “Http Request” as the Source.

### Cache Time

For the cache time value, you can leave blank while developing but in the end you will want to cache this token for any value you are comfortable with based on any current rate limits Google has imposed or you may be experiencing. Small to mid-sized websites don’t generally have a problem but if you do, cache for longer.

Click Next.

### URL

Since we will pass credentials though this token’s request, we will be using the HTTPS protocol. In the URL field, type in https://www.google.com/accounts/ClientLogin; this is the authorization token endpoint.

### Get Parameters

The GET parameters are where you will specify the query parameters Google requires for this resource.

```
Email=you@yourdomain.com 
Passwd=Your_plain_text_password
accountType=GOOGLE
source=Author-Application_Name-Version
service=analytics
```

Read more on query parameters here: http://code.google.com/apis/analytics/docs/gdata/2.0/gdataProtocol.html

### Post & Http Headers

This particular request only passes information via GET method and requires no other post or header information to be passed. Leave these fields blank.

### Parsing

You would think this request would simply return your authorization key but that is not the case. If you are successfully authenticated your response will be an SID, LSID and Auth Token. Since we only need the Auth Token, we will need to parse that value out of the response.

Select to use Regular Expression Parsing.

Click Next.

### RegExp Expression

The regular expression we will use to match ONLY the Auth Token value is ``Auth=(.+)$``

This regular expression says to match:

1. “Auth=”

2. and one or more of any character (.+)

3. all the way to the end of the string $

Since the Auth token is the last of the three, this works out well. The parentheses tell the parser this is a match we want to extract. The final token, when retrieved and parsed will contain ONLY the authorization token value we need.

### Match Occurrence

We will only have one match, therefore leave this set to zero.

### Replace Response Tokens & Decode HTML

There will be no response tokens or encoded HTML. Leave these unchecked.

Click Save.

You should now test your token in the Token Test Window to ensure you are getting a value back and no errors. If you’ve successfully authenticated and retrieved an authorization token, your response will look something like:

DQAAAKJHiuadfhUKHIKunsd_u7_KJhja8fhjsdf8923khjskdKJHKJh83j__jNQuVfZoOjvYE9Ji3w-FuBN2tHn36iOssqVCSAOieNI-xdzzAUJDj8AgSTy9KpVnOQ3J8Gc_BBjDwQBOhC-Y80uSiI&YIUHi87iuiuhncwiducyi7YIUYni87yweuhniUYhkjelZQveATZTpt-Nwb9sYu8wm9FeQueFRM-9Ofn5EZjGtFTYeQlnuBjeO1jtnatCl_pbfyCncFMGA5A4I9SfKMD2-arV7tz7p5mI_kVVNg4RCkashfdaskQQJhsdfi773jf9

### Creating the Trends Menu Token

Now that we have a token to authenticate ourselves, we can create more tokens to retrieve the actual data.

To begin, create a new token called “trendsMenu”.

#### Source

Select “Http Request” as the Source.

#### Cache Time

If you have a very high volume of searches on your website, you may want this more real-time. Play with the caching level to a point where you can cache for as long as your functionality is not compromised. This also depends on the reporting period you’re extracting data for. If you’re extracting data that won’t change, like last year’s data, then you’ll cache this information for a very long time since it’s never going to change. If you’re pulling data in real-time, caching should be less or none at all.

Note that the cache is always cleared if the DNN application shuts down either manually or due to inactivity.

Click Next.

#### URL

The endpoint URL for retrieving data is https://www.google.com/analytics/feeds/data. Enter this URL here.

#### GET Parameters

This is the most complicated part of this process; figuring out which parameters to use. Google provides a handy “Query Explorer” at http://code.google.com/apis/analytics/docs/gdata/gdataExplorer.html for this reason. You can login and build your query. You CAN type/paste the cleanly formatted parameters as you see below and you CAN remove the question (?) and ampersands (&). MyTokens will retain this neat formatting for you as well as construct the proper string back together for passing to the REST service.

* Single-line Format:

``?ids=ga:XXXXXXX&dimensions=ga:searchKeyword&metrics=ga:searchUniques&start-date=[TknParams:startDate]&end-date=[TknParams:endDate]&sort=-ga:searchUniques&max-results=[TknParams:maxRecords]``

* Clean Format:

```
ids=ga:XXXXXXX
dimensions=ga:searchKeyword
metrics=ga:searchUniques
start-date=[TknParams:startDate]
end-date=[TknParams:endDate]
sort=-ga:searchUniques
max-results=[TknParams:maxRecords]
```

Notice that I’ve added some token parameters here: ``[TknParams:startDate]``, ``[TknParams:endDate]``, ``[TknParams:maxRecords]``.

The token parameters allow us to use this token multiple times with different values, producing different data. In this case, we want to pass the token the start and end dates for the period which we want to pull data for. In addition, we want to specify how many results we will get back. More on how these will be used later.

### Post Parameters

There will be no POST method parameters sent. Leave this blank.

### HTTP Headers

Enter the following into the box:

```
Authorization:      GoogleLogin Auth=[ga:authKey]
GData-Version:    2
```

Google requires that you provide an authorization key to prove you are allowed to access this data. This is where we will use our [ga:authToken] token we created already.

Google also requires that you specify which version of their protocol you will be using. In this case, we are using version 2.

### Parsing

This is where all the magic happens once you have successfully retrieved your data from Google’s Data Export API Service.

At the time of this writing, there is only one form of parsing that can produce and HTML output using defined templates. This is the XSL Transformation parser. In order for XSL to work, it will need an XML data resource to transform. The Google Analytics Data Export Feeds are XML.

Select XSL Transformation from the Parser selection and click Next.

### XSLT Stylesheet

Since the following XSLT stylesheet conforms to the specifications for transforming the Google Data Feed for version 2 of the API, an explanation for the details of the transformation will not be provided as it is out of the scope of this tutorial.

This XSLT stylesheet will (in theory) work for any search data received from version 2 of Google’s Data Export API endpoint:

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
    xmlns:atom='http://www.w3.org/2005/Atom'
    xmlns:dxp='http://schemas.google.com/analytics/2009'>
    <xsl:output method="html" />
    <xsl:template match="/">
        <ul>
            <xsl:for-each select="//atom:entry">
                <xsl:if test="not((contains(dxp:dimension/@value,'Search')) or (contains(dxp:dimension/@value,'FORID')))">
                    <li> <xsl:value-of select='dxp:dimension/@value' /> (<xsl:value-of select='dxp:metric/@value' />) </li>
                </xsl:if>
            </xsl:for-each>
        </ul>
    </xsl:template>
</xsl:stylesheet>
```

#### Replace Response Tokens

There will be no tokens in the response. Leave this blank.

#### Putting it all together

Place a new HTML module onto a page. Put the following token as the text of the module: ``[ga:trendsMenu(startDate="2011-01-01",endDate="2020-01-01",maxRecords=10)]``. Click Update.

The above token will output the top 10 latest search terms searched on your website in an unordered list, along with their search count, based on the reporting period you entered for startDate and endDate respectively.