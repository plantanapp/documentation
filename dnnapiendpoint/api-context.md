# API Context

**Summary**

* The API Context is a fairy land where all tokens and entities live
* All fields in the context can be accessed using token syntax, (e.g. [FieldName])
* Use the context to share data between actions
* Input data is loaded into the context automatically
* The context is passed into all actions when they execute. Actions can add additional fields to the context (see Inject Data for a simple example, or Server Request and Execute SQL for more advanced ones)
* If the users sends a required valid API key then you have access to key using the tokens [ApiKeyName] and [ApiKeyValue]

All fields which are created in an SQL statement (let's say column names) and which is run when we want to extract some columns from the data base, are stored as tokens in the API Context, as long as the Store As field is filled with values. To note here, that any fields created in the Input Data section, any parameters defined there, will be created and defined as tokens and stored in the API Context. 

Besides this, there's also this Inject Data action where we can define a value, which becomes a token. Another way to share data between actions is to use the Regex Parsing action where after defining an Input value, you just have to add a value in the Store in Token (in Regex Patter we just need a regular expression) - in order to see an example with a server request where we obtain a response stored in tokens, please check the method created on the [API Methods](api-methods.html) page at Server side from HTTP request section.