# Receive SMS reply - Two Way messaging

With the help of [DNN API Endpoint](https://www.dnnsharp.com/dnn/modules/custom-dnn-api-endpoint) module you will also be able to receive SMS on your website. This applies only to Clickatell numbers with Two Way messaging support.

For this to work, you will need two things:
* to create one API method(POST) on your website
* to set the URL for the above mentioned API method in your Clickatell account as the Reply Callback URL for two way messaging notifications (clickatell documentation [here](https://www.clickatell.com/developers/api-documentation/rest-api-reply-callback/))

The above setup will allow you to receive an API call every time one of your two way enabled number receives a reply. From there, it's just a matter of what you plan on doing with the information you receive from clickatell.

In your API Endpoint method you will need to have the [**Parse JSON into tokens** action](/actions/parsing/parse_json_into_tokens.html) to which you provide the _[RawInput]_ token as a JSON String, as seen in the image below.
![Parse JSON response into tokens](https://static.dnnsharp.com/documentation/clickatell_receive_SMS_parse_response.png)

The action above will create one token for every parameter that is being sent by clickatell in the request, in the form of _[BaseTokenName:ParameterName]_. The tokens can then be used in all following actions like [Send Email](/action-form/email.html), [Run SQL Query](/actions/run-sql-query.html)(if you want to save them in the database) and others.

Here are some token examples (for when base token name is "_Parsed_"):
* _[Parsed:fromNumber]_ - number who sent the reply
* _[Parsed:toNumber]_ - number to which the reply was sent
* _[Parsed:timestamp]_ - timestamp for when the reply was received
* _[Parsed:text]_ - the cotent of the SMS reply, your number received (URL encoded)