# Token Parsers

Token Parsers provide the ability to process data (such as executing a regular expression or executing an XPath against an XML or JSON) after it has been retrieved from the Token Source.

Also, there are plans to release an API so 3rd party developers can write plugins that will hook as Token Parsers, that will basically process data based on any rules. 

My Tokens support the following Token Parsers:

* **No Parser:** means data will be displayed as it is. The only option available (that actually exists in all parsers) is to recursively replace tokens.
* **Strip XML/HTML Tags:** My Tokens will strip tags in data returned by the Token Source; output is the final replacement for the token.
* **XML/XPath Parser:** My Tokens converts the input data to XML, then executes the XPath expression supplied during configuration against the XML Document. If the XPath returns more than one match, the XML Parser allows defining which match to retrieve.
* **JSON/XPath Parser:** Same as XML Parser, except My Tokens will convert the JSON Data to an XML Document prior executing the XPath expression. The conversion is accurate except My Tokens will inject a root node called (this is because XML enforces a single object exists at root level and JSON doesn't provide a name for the root object). If the XPath returns more than one match, the JSON Parser allows defining which match to retrieve.
* **RegEx Parser:** My Tokens executes a regular expression against the input data and the match will be outputted. This parser allows for choosing which one of the matches to use in case there are more than one.
* **XSL Parser:** If the output produce by the token is XML, use this parser to transform it using the XSL you specify in the parser settings. This is idea for processing complex structures into simpler structures or HTML content.