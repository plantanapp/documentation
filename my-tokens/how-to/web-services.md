# Consume Web Services

Web Services are a method to exchange data across the web. They can provide simple functions such as conversions to more complex operations such as transporting data structures across systems, therefore integrating them.

To illustrate how My Tokens can be used to consume web services I'll integrate with a simple Web Service provided by w3schools.com that will convert Celsius to Fahrenheit. The Web Service details can be found at the following location www.w3schools.com/webservices/tempconvert.asmx.

What's nice about this example Web Service is it support SOAP 1.1, SOAP 1.2 and HTTP POST (not REST in true sense, but close enough) operations.

## SOAP 1.1

Create a new token, as follows:

* **Screen 1**
  + *Name:* TestSoap11
  + *Source:* HTTP Request
  + *Cache Time:* for this examples the cache time can be safely set to as much as possible since the conversion values won't change between requests.

* **Screen 2**
  + *URL:* http://www.w3schools.com/webservices/tempconvert.asmx
  + *POST Parameters:*

```xml
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CelsiusToFahrenheit xmlns="http://www.w3schools.com/webservices/">
      <Celsius>30</Celsius>
    </CelsiusToFahrenheit>
  </soap:Body>
</soap:Envelope>
```

  + *HTTP Headers:*

  ```
  Content-Type: text/xml; charset=utf-8
  SOAPAction: "http://www.w3schools.com/webservices/CelsiusToFahrenheit"
  ```

  + *Parser:* XML (XPath Parsing)

* **Screen 3**
  + *XPath Expression:* //CelsiusToFahrenheitResult

Notice how in Screen2 we pass an XML document to the Web Service that contains the parameters we want to send. In our example we send 30 degrees Celsius and we'd like to know how much that means in Fahrenheit.
Two headers are needed in order for the target Web Service to know how to handle our requests: the Content-Type tells our data is an XML document and SOAPAction which is a required header for SOAP 1.1.

The Web Service will return another XML. If we didn't set any parser we'd actually see the entire response XML. Setting the parser to XPath and providing the XPath expression we only extracted the value that was of interest to us. Note that same could have been achieved with a RegEx parser for example, but XPath is better because it will require the response to be a valid XML which will enforce handling any errors related to this in advance.

## SOAP 1.2

This is very similar to SOAP 1.1. The main differences from a consumer point of view are
the SOAP header is no longer needed
the XML soap namespace is slightly different
Here is the complete sample:

* **Screen 1**
  + *Name:* TestSoap12
  + *Source:* HTTP Request
  + *Cache Time:* for this examples the cache time can be safely set to as much as possible since the conversion values won't change between requests.

* **Screen 2**
  + *URL:* http://www.w3schools.com/webservices/tempconvert.asmx
  + *POST Parameters:*

```
<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
    xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <CelsiusToFahrenheit xmlns="http://www.w3schools.com/webservices/">
      <Celsius>30</Celsius>
    </CelsiusToFahrenheit>
  </soap12:Body>
</soap12:Envelope>
```

  + *HTTP Headers:*

```
Content-Type: text/xml; charset=utf-8
Parser: XML (XPath Parsing)
```

* **Screen 3**
  + *XPath Expression:* //CelsiusToFahrenheitResult

That's it. Same remarks as with SOAP 1.1 apply.

## HTTP POST

This is the easiest method to invoke web services without a framework. The target Web Service accepts HTTP POST Requests similar to how you'd submit a plain HTML form. 

* **Screen 1**
  + *Name:* TestHttpPost
  + *Source:* HTTP Request
  + *Cache Time:* for this examples the cache time can be safely set to as much as possible since the conversion values won't change between requests.

* **Screen 2**
  + *URL:* http://www.w3schools.com/webservices/tempconvert.asmx/CelsiusToFahrenheit
  + *POST Parameters:* Celsius=30
  + *Parser:* XML (XPath Parsing)

* **Screen 3**
  + *XPath Expression:* //string

Notice the main difference between this method and the SOAP, that is we're no longer sending an XML but instead we're setting the parameters "application/x-www-form-urlencoded" format (name=value). This Web Service only expects one parameter, but in real life there can be any number of parameters in which case we input one name=value pair per line.

Also, the response of a HTTP Post can be anything. In this case, it was an XML, but it can as well be a plain text, a JSON object or other custom structure (see for example the [Google API example](google-api.html).


The example presented in this section is a very simple one, but same principles apply at any scale when SOAP or HTTP POST Web Services need to be consumed.