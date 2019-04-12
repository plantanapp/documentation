# POST

### Handling Http POST requests with an x-www-form-urlencoded body

When a web browser sends a POST request from a web form element, the default Internet media type is "application/x-www-form-urlencoded". This is a format for encoding key-value pair with possibly duplicate keys. 

The reference option binds a field to a specified key from the form-data.

### Example

Given a request to API Endpoint using the following URL 

``example.com/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ash?method=PostUser``

with the following body:

            (Key)                   (Value)

            uid                      MyUserName

            Email                  my@user.com

Now the keys received from the request are not entirely user friendly. By using the reference option we can store the data into more appropriately named tokens. To do this, in the reference field type the name of the key and in the name field write anything you want. In this example, the reference option could be *uid* and the name *UserName*. Now, you can use the token associated with the name field (i.e. *[UserName]*), as it will have the value from the request (i.e. *MyUserName*).

Also, in this example, the reference option is left empty and the field name is set to Email. The [Email] will be correctly created since it will use the field name as a default reference.

Default value:

If the reference option is left empty DnnApiEndpoint uses the name as a reference.