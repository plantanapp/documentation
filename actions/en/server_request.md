### Server Request Action

This action has the purpose of posting the form data to a different server, you can use the _URL field_ to determine the location for where the data will be posted, in this box you can also use tokens, and there's another useful box, the _Post Data_ box, where you can put key = value pairs on separate lines and you can also add additional _HTTP headers_, in case you need it, and you can specify the HTTP method by selecting it from the _"Choose an HTTP Method"_ drop down list.

The action can be used to make an HTTP request to a different server, optionally sending data. Often, this means invoking a web service. Note that if you don’t run in _Full Trust_, this action requires that the _Application Pool_ identity has _Web Permission_. The following fields can be configured:

* **URL**. This represents the URL to make the request to. A common mistake is to forget to include the protocol. For example www.domain.com/webservice is wrong. Instead, use [http://www.domain.com/websservice](http://www.domain.com/websservice). Optionally, append the query string directly to the URL after the question mark. For example [http://www.domain.com/websservice?q=test&p=1](http://www.domain.com/websservice?q=test&p=1). This field supports context tokens and My Tokens.

* **POST Data**. This is data to send to the URL using POST operation. Put **key=value** pairs, each on a separate line. It’s also possible to post whole messages, for example and **XML** \(that SOAP-like services expect\) by simply putting the XML without any lines. This field supports context tokens and My Tokens.

![](http://static.dnnsharp.com/documentation/server_request.png)

The current Server Request action does not support TLS1.2 requests as it references .NET4.0 for broader compatibility while TLS1.2 needs at least .NET4.5; in order to make TLS1.2 requests you will need a [custom built Server Request action](mailto:sales@dnnsharp.com "Request it from our Sales Department").

A basic example of using the Server Request action on a form button would be to convert Celsius degrees to Fahrenheit degrees. For this we'll need to call a web service with which we'll make the conversion and display the result on a Display Message action, here are the steps:

1. Add a form on your page &gt; access **Manage** form option;
2. Add a text box and label it **Celsius**
3. Add a button and on the button add **Server Request** action
4. In **URL** field paste the following: [http://www.w3schools.com/webservices/tempconvert.asmx/CelsiusToFahrenheit](http://www.w3schools.com/webservices/tempconvert.asmx/CelsiusToFahrenheit);
5. In **Post Data Box** set **Celsius=\[Celsius\]** - meaning that the form field **Celsius** will be used as token to take any value inserted in the form;
6. On Choose an **HTTP Method** drop down select the POST option;
7. Store the answer in a token bu using the **Output Token Name** section - set for example **"test"**;
8. Add a **Display Message** action and on **Message** field put the stored token **\[test\]**;
9. After saving the form and getting back on the page, insert in **Celsius box** a value, and click on **Submit**.

As expected result, the value 10 should be converted and the result should be displayed in the message action.

