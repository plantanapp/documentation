# Input Data

### Summary

* Create definitions for parameters that the API accepts Based on the HTTP Method; these will be sent via Query String or form data
* The input fields can be accessed inside any action using the token syntax (e.g. [ParameterName])
* Input data can be validated with one or more rules
* Input can be text, numbers, etc - this type is not currently used for anything, but it's required for features on our roadmap

In the Input Data section text and/or number fields can be created and used as parameters that need to be fed into the API calls. If the HTTP Method is GET, then the parameters are parsed from Query String, POST is read for form data fields.

## How to Create a Field

You can begin by *naming* the field you want to create. Keep in mind that the parameter name must not contain spaces and that this data will be passed to this API under this name, after which it's possible to reference fields using the [Name] syntax. This field supports also [My Tokens](/my-tokens/index.html).

There are three *Condition* boxes where you can determine if and how the field will be used in the method. The first generic Condition box has the purpose to disable the whole field, the other two Condition boxes apply as follows: one Condition box disables the whole validation and other Condition box disables only the validation rule.  

There's a *validation* section where you can add the predefined validation rules that will determine if and how the field validation executes, and let's not forget that this section supports [My Tokens](/my-tokens/index.html) too. You can find more about the validation rules on the [Validation](../validation.html) page from this documentation.

## Handling Input

Based on the content-type header of the request DnnApiEndpoint can process the received data in multiple ways. Currently DnnApiEndpoint parses the data of the querystring for GET methods and the data of the body for POST methods. The module has different handlers for the different types of content-type: x-www-form-urlencoded, XML and JSON (this list can be extended by adding your own request handlers).

The field indicates the reference to the input value from the body of the request. Name and references do not need to match. The value of the reference will be inserted into a token with the name as the input data.

DnnApiEndpoint comes with 4 handlers:

1. [Handling Http GET requets](get.html)
2. [Handling Http POST requets with a JSON body](json.html)
3. [Handling Http POST requets with a x-www-form-urlencoded body](post.html)
4. [Handling Http POST requets with a XML body](xml.html)

You can also add your own custom handlers. To see how to do this check the following link: [Input Handlers](../extensibility/input-handlers.html)