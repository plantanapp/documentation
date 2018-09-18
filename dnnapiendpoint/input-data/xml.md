# XML

## Handling Http POST requets with a XML body

When a web browser make a request it sends information to the server about what it is looking for in headers. One of these headers is the Content-Type header. The Content-Type header tells the server what file format, or more correctly MIME-type, the browser is looking for. One such type is application/xml. Using this Content-type you are telling the server that the data received from the request is in a XML format and it should be treated accordingly.

Using the Reference option to extract data from XML

The reference option binds a field to a specified XPath expression that will be applied to the body.

The entire input is stored into the ``[RawInput]`` Token.

Example:

A request is made to API Endpoint using the following URL: 
``example.com/DesktopModules/DnnSharp/DnnApiEndpoint/Api.ash?method=PostOrder``

Having the header:

``Content-Type    application/xml``

and with the following body:

```xml
            <Order>
                <OrderId>1341</OrderId>
                <Items>
                    <Item>SmallSoda</Item>
                </Items>
            </Order>
```

Say we want to create a field named ``ItemName`` that will hold the value that is in the ``<Item>`` node. To achieve this, create a field, name it ``ItemName`` and in the ``Reference`` field type the *XPath* to the node. In our example, this is ``Order/Items/Item``. Now, whenever you use the token associated with this field (i.e.   ``[ItemName]``), you get the value that was passed in the node (i.e. *SmallSoda*).

If the reference option is left empty DnnApiEndpoint returns the value based on the field name.