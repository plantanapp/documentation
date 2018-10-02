# Examples

This section presents some simple examples in response to real scenarios. After all, it's much easier to learn by example than read pages of abstract documentation. Predefined tokens are straightforward and will not be covered here. The examples address different strategies for creating custom tokens. 

## Data Replication #1

#### Problem

Usually, we have some text that repeats in many places (let's call them Html Modules) and needs to change from time to time. Let's say this text is the version of NavXp. Without using tokens, we would have to update all Html modules that display the version number. This takes a lot of time and is possible to miss some occurrences. 

#### Token Solution

1. Start by creating a new namespace, let's call it *NavXp*
2. Once we have the namespace, create a new Token. Let's name it *Version* and set Token Source to Constant String. On Step 2 of the wizard, input *1.5.2* in the textbox and leave No Parser selected. Save the token.
3. Now, we go into all HTML Modules and replace what we've manually written *1.5.2* with *[NavXp:Version]*.
4. When NavXp 1.5.3 is released, we go into MyTokens Studio and update the token to *1.5.3* which in turn will reflect everywhere on the website. The effort is minimal and the chance of missing an occurrence or misspelling are zero.

## Module Integration #1

#### Problem:

Let's assume we have a 3rd party product catalog module. It does its job very good, but it lacks utility modules. Let's say we want to display latest added product on the homepage and there isn't a module for this. We could manually add an HTML module and update it each time a new product is added, but this is an overhead which gets bigger as products are added more often. The solution: Use a database token. 

#### Token Solution

1. Start by analyzing the database, see how the Product Catalog module holds data. Let's assume there is a Products table that has following columns: ProductId, ProductName, ProductDescription and DateAdded.
2. Once we've identified the data, we're ready to create a database token. Start by creating the namespace, let's say LatestProduct.
3. Then, create a new database token. In Step 2 of the wizard, we'll extract the ProductId Column. Let's do a simple query Select * From Products OrderBy DateAdded Desc. MyTokens will only use the first row, which, because of the ordering, is the latest added product. In Column field write ProductId. Save the token.
4. Repeat previous step to create the rest of the tokens. The Sql Query stays the same, only the Column changes (there is some overhead with repeating the SQL in this process, but we're planning to simplify it in a future release).
5. We now should have [LatestProduct:Id], [LatestProduct:Name], [LatestProduct:Description] and [LatestProduct:DateAdded]
6. To use the token, we create an Html module and invoke all the tokens. HTML code could look like this:

```html
<a href="/Products.aspx?id=[LatestProduct:Id]">[LatestProduct:Name]</a>
<br />
[LatestProduct:Description]
<br />
Added [LatestProduct:DateAdded]
```

## Web Spider #1

#### Problem

Often, we need to pull content from different websites. If the other website doesn't provide an API/Web Service or an RSS (covered in other examples), we'd have to manually copy content and probably monitor when it changes. This is very time consuming. Let's assume we want to display on our website latest release by Avatar Software. We already know to find it on the [homepage](https://www.dnnsharp.com/){:target="_blank"}, but there isn't a Web Service or RSS for this.

The solution: use an HTTP Request token with a RegExp parser.

#### Token Solution

1. Start by creating the namespace, let's name it *AvatarLatest*
2. Now, create a new token, let's name it **Product**, and set source to Http Request. In Step 2, fill the URL with web address above. Leave blank for GET and POST since we have no parameters to send.
3. Normally, if we left No Parser selected, entire page would be shown where the token appears. As we only want the first product in Latest Releases section, we will need the RegExp Parser. Select it and click Next.
4. This is where the tricky part comes in. We have to come up with a regular expression that matches what we need. In general web spidering, the rule is to match unique constructs, most commonly IDs or unique texts, then match elements relatively to that one. The expression I came up with looks like this: ``dnn_ctr2376_ModuleContent.*?<a[^>]*><b>(.*?)</b>`` (dnn_ctr2376_ModuleContent is an unique id, then I'm jumping to first ``<a>`` element that I know it contains the title).
5. Repeat previous step to extract as many data as needed. Note that if multiple tokens are build against same url (and using same parameters), MyTokens only makes the request once for first token and caches it for the rest of the tokens. Also, think of a good caching strategy for tokens and control it with token's ``<b>CacheTime</b>`` property. For this particular example, it would be wise to have the token cached for one day since the content will not update very frequently.

## Combine Tokens #1

#### Problem

Let's assume we need to display the Country Name on a page that varies based on a parameter we recieve in the URL, which is the country code. The url could look like this www.mywebsite.com/Default.aspx?CountryCode=US (or, with friendly URLs in DNN the address could look like www.mywebsite.com/CountryCode/US/Default.aspx).

The solution: We take advantage of two things: the predefined GET token source that will get us the country code and the Lists table in the database where DNN saves country information.

#### Token Solution

* Create a new token, let's name it *CurrentCountry*.
* Select **Database** in the source dropdown
* Give a generous caching time since country names don't change every day (let's say 86400 - 1 day)
* In the second step, put the following query:

```sql
SELECT Text FROM {databaseOwner}[{objectQualifier}Lists]
    where ListName = 'Country' and Value = '[Get:CountryCode]'
```

Notice the ```[Get:CountryCode]``` token. This gets the country code from the URL and uses it to build the Where clause

* Put *Text* in column textbox (this is the name of the column we need)
* Click Next and Save the token
* You can't test this token in MyTokens studio because you can't set the GET parameters. So instantiate a HTML module and put the token in (let's say *[MyNamespace:CurrentCountry]*). Now, append the country code to the URL, let's say www.domain.com/Default.aspx?CountryCode=US, and the module should display United States.

## Get a List of Items from JSON

So you make a request to a web service to get a list of items and you need to put this into a select. Most likely, the web service will not send you a list of nicely formatted items you can just insert into a list. It will probably return an array of items as JSON. 

To achieve this, we need to transform the JSON and we do this using a Razor script.

First, create a token to get the JSON. For testing purposes, you can creating a constant token and add the JSON below to it. In real life you'd make a HTTP token to get the JSON.

``[ {id: 1, name: 'item 1'}, {id: 2, name: 'item 2'} ]``

Name this *[My:Json]*

Next, let's create a new Razor Script in C#.
In assemblies area add ``System.Web.Extensions.dll`` without the quotes. 

In the Script Body, write:
```c#
@{ 
var js = new System.Web.Script.Serialization.JavaScriptSerializer(); 
dynamic obj = js.Deserialize<object>(My.Json.ToString()); 
} 
```

```html
<select> 
@foreach (dynamic item in obj) { 
<option value="@item["id"]">@item["name"]</option> 
} 
</select>
```

Save this as *[My:List]* and that's it. Whenever you're using *[My:List]* you're embedding the list from the web service.

## Using Razor and JavaScript

See the example code below.

Razor script

```c#
@{
var greeting = "Welcome to our site!";
}
```

```js
function myFunction(message) {
alert(message);
}
myFunction (@greeting);
```

or simply

``JSvar = @greeting;``

For that to work, you'll need to adjust the Razor script a bit. 

```c#
@{ 
var greeting = "Welcome to our site!"; 
} 
```

```js
function myFunction(message) { 
alert(message); 
} 
myFunction ('@greeting');
```

Razor will compile the script above to:

```js
function myFunction(message) { 
alert(message); 
} 
myFunction ('Welcome to our site!'); 
```

Which is valid JavaScript code.

However, for best results, [DNN API Endpoint](https://www.dnnsharp.com/dnn/modules/custom-dnn-api-endpoint){:target="_blank"} can be employed to make AJAX request to get the string. In DNN API Endpoint you can have a Display Message action that prints a string like "Welcome to our site!" or the contents of a token.

## Database Tokens Returning More than First Row

At the moment, due to the way MyTokens is structured, it will only return the first row for any query. It will however return as many columns as the table has by appending the token with the column name. 

If you would like the token to return all rows in a query, you can either:

1) Use Razor Script. Looping over a database token will get you all the results. 

```c#
@foreach (var row in My.Token) { 
<li>row.ColumnName</li> 
}
```

2) Use [DNN Api Endpoint](https://www.dnnsharp.com/dnn/modules/custom-dnn-api-endpoint){:target="_blank"} and employ the Load Entity and Serialize Entity actions. To do that, click on New Method and under Actions select *Add Action > Entities > Load Entities*. To serialize, click on *Add Response > Output > JSON Entity List*.

### How to use My Tokens and return certain data back in this same JSON format so that you can lay out the markup in the templates instead of in a My Tokens script

If you need to generate JSON data with My Tokens, you have the option to create a Razor script that generates JSON. Some objects also have a ToJson or ToJsonArray method, such as the database tokens, and those might also help. 

If you're looking to implement an Angular application yourself, then most suited would be DNN API Endpoint. You can configure a web service to return JSON data.

### Best way to use other tokens in My Tokens

Scenario:

```sql
SELECT Id, Name, Notes, StudentId
FROM  some table
where StudentId=convert(int,[get:sid]) and Id=[User:UserId]
```

Even though this scenario works, you don't need to convert to int if it's already an int. Token replacement happens as a string replacement before the query is executed. Also make sure to add single quotes around tokens when they are strings in SQL. For example ``select * from Users where UserName='[username]'``.

### Accessing a GUID through a database cell
If you would like to see if a GUID matches up on both the site and the external database, you need to use [Portal:GUID] to return the GUID of the current site.