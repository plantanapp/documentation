# Custom Tokens

## Namespaces

Namespaces are a way to organize tokens by various criteria. The criteria for predefined namespaces in MyTokens targets the source of tokens (Cookies, DNN User Information, POST data, etc). For user defined namespaces, there are no restrictions. Usually, the criteria is selected to target parts of the application, interactions, integrations, etc.

## Tokens

Tokens represent special markup that triggers some logic on server side which will replace the token markup with specific content. The syntax for invoking a token is [Namespace:TokenName]. MyTokens supplies predefined tokens for accessing almost everything from application state. It also allows user defined tokens that can be constant strings, database queries or XML or JSON responses from invoking a Web Service. 

My Tokens allows creation of new tokens to retrieve data from Database or Web Services and process it for display. Logically, a custom token is made of two parts:

1. **Token Data Source:** is where data comes from (user inputted string, SQL Query, HTTP Response)
2. **Token Parser:** provides ability to process data (such as executing a regular expression or executing an XPath against an XML or JSON).

## Token Sources

Token Sources represents the location from where MyTokens will get the input for a given token. Supported sources are constant string, database (an SQL Query is run, the result is used for building the token), HTTP Request (MyTokens initiates a request to a given URL and uses the HTTP Response for building the token), files on local filesystem or on FTP Servers, email content pulled in form POP3 or IMAP Folders, tokens served using the My Tokens Integration API (that basically allows any developer to expose tokens that can be used in any My Tokens aware module). 

My Tokens support the following Token Data Sources:

* **Constant String:** data is inputted by user
* **Database Query:** My Tokens connects to a database server (by default the DNN database) and runs a select query. The results are embedded in tokens that can be used anywhere where My Tokens is supported
* **HTTP Request:** My Tokens connects to the URL provided in the configuration optionally passing GET and POST parameters and retrieves the data. Further processing (such as executing an XPath expression) is possible by use of Parsers.
* **File System:** My Tokens loads a file from local disk and makes the content available through tokens. You may actually only need small parts of the file, so you can use the Parsers to extract desired content.
* **FTP Request:** Same as the File System Token, except the file is loaded from a remote FTP Server.
* **Execute Type:** My Tokens calls a method from your class that implements IExecutableToken interface from avt.MyTokens.Core assembly. The method returns a dictionary of tokens. [Read more...](execute-type.html)
* **Mail Server (Experimental):** My Tokens connects to email servers via POP3 or IMAP and grabs emails that are turned into tokens.

[Read more about Token Data Sources.](data-sources.html)

## Token Parsers

Token Parsers take some input (from the Token Source) and do specific processing to produce final string that will replace the token markup. MyTokens supports following parsers: no parser (input is left as it is), XML Parser (the input string is transformed into an XML Document, then an XPath expression is executed against the XML to select the final value), JSON Parser (same as XML Parser, except the input is a JSON string) and RegExp Parser (a regular expression is executed against the input string, the final value is represented by the match). We plan to add more parsers and also release an API to allow 3rd party developers to implement own parsers.

My Tokens support the following Token Parsers:

* No Parser: means data will be displayed as it is. The only option available (that actually exists in all parsers) is to recursively replace tokens.
* Strip XML/HTML Tags: My Tokens will strip tags in data returned by the Token Source; output is the final replacement for the token.
* XML/XPath Parser: My Tokens converts the input data to XML, then executes the XPath expression supplied during configuration against the XML Document. If the XPath returns more than one match, the XML Parser allows defining which match to retrieve.
* JSON/XPath Parser: Same as XML Parser, except My Tokens will convert the JSON Data to an XML Document prior executing the XPath expression. The conversion is accurate except My Tokens will inject a root node called (this is because XML enforces a single object exists at root level and JSON doesn't provide a name for the root object). If the XPath returns more than one match, the JSON Parser allows defining which match to retrieve.
* RegEx Parser: My Tokens executes a regular expression against the input data and the match will be outputted. This parser allows for choosing which one of the matches to use in case there are more than one.
* XSL Parser: If the output produce by the token is XML, use this parser to transform it using the XSL you specify in the parser settings. This is idea for processing complex structures into simpler structures or HTML content.

[Read more about Token Parsers.](token-parsers.html)
