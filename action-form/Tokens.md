# Tokens

Tokens are a mechanism to pull dynamic data inside a static template. Think of the classical example, "Hello `[FirstName]`, DNN Sharp loves you". Here, `[FirstName]` is a token that would get replaced with the actual first name of a person, for example, of the person receiving an email.

Besides using them inside actions, tokens are also very important for writing Conditional Logic.

Action Form supports a few types of tokens in various contexts.

* Form Data
    * The value of any form fields can be references using a token, which is its ID between square brackets. For example, if the ID of a form field is FirstName, then the token is `[FirstName]`. Note that the ID and the token can't contain spaces or punctuation.

* Utility Tokens
    * `[_ReportKey]` - unique ID that identifies the current submission. This also powers edit functionality in Action Form. Whenever a entry parameter is present in query string, Action Form tries to match the associated report entry and load it into the form.
    * `[_Referrer]` - holds the URL from which the user arrived to the form
    * `[_UserIp]` - holds the IP of the user
    * `[_FormUrl]` - the URL where the form lives
    * `[_FormUrlRelative]` - same as above, only it's a relative URL
    * `[_EditUrl]` - is the URL to edit current submission at a later time
    * `[_IsNew]` - true when the form is submitted for the first time
    * `[_IsEdit]`- true when the form is edited (for example using the `[_EditUrl]` token or Action Grid).

* My Tokens
    * My Tokens comes with dozens of new predefined tokens such as Session, Server, Query String or Post Data access. It also allows to create custom tokens from database queries, HTTP Requests or files.

Other token examples you can use on a form are the **Geo IP location tokens**, you can use a static field box where you can place the following tokens:

* `[FreeGeoIp:CountryCode]`
* `[FreeGeoIp:CountryName]`
* `[FreeGeoIp:RegionCode]`
* `[FreeGeoIp:RegionName]`
* `[FreeGeoIp:City]`
* `[FreeGeoIp:ZipCode]`
* `[FreeGeoIp:TimeZone]`
* `[FreeGeoIp:MetroCode]`
* `[FreeGeoIp:Latitude]`
* `[FreeGeoIp:Longitude]`