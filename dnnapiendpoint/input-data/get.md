# GET

### Handling Http GET requets

The method will be able to get all values from the query string.

### Examples

A request is made to API Endpoint using the following URL: 
``example.com/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ash?method=GetUser&filter=123``

Say we want to create a field named UserId that will hold the value that is passed via query string in the *filter* parameter. To achieve this, create a field, name it *UserId* and in the *Reference* field type the name of the query string parameter. In our example, this is *filter*. Now, whenever you use the token associated with this field (i.e. [UserID]), we get the value that was passed in the query string (i.e. *123*).

### Default value

If the reference option is left empty DnnApiEndpoint uses the name as a reference.