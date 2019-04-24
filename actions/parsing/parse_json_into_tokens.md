# Parse JSON into tokens

The action will help you easily extract parameter values from a JSON.

Based on the JSON here 
```
{
	"param1": "val1",
	"param2": {
		"p2v1": "p2val1"
	}
}
```
and given a base token name of **Parsed** then the values for the parameters will be accessible with the following tokens:
* *[Parsed:param1]* which will return *val1*
* *[Parsed:param2]* which will return ```{
		"p2v1": "p2val1"
	}```
* *[Parsed:param2.p2v1]* which will return *p2val1*


![Parse Json into Tokens image](https://static.dnnsharp.com/documentation/parse_JSON_into_tokens.png)

> Arrays will not be automatically parsed; in this situation you will have to recursively run multiple Parse JSON into tokens actions.
