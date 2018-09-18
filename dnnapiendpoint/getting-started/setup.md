# Setup

## Grab DNN API Endpoint

The following steps will guide you through the installation and setting of the DNN API Endpoint module. You can download it from [DnnSharp site](https://www.dnnsharp.com/dnn/modules/custom-dnn-api-endpoint/download){:target="_blank"} and install it on Host > Extensions page, just as you would do with any other extension.

## Place DNN API Endpoint to a Page

Add *DNN API Endpoint* as normal from the menu: **Modules -> Add New Module**. Find **avt.DnnApiEndpoint** and add it to your page.

Note that you will need to unlock the 30 Day trial or Activate for Production before you are able to see this screen.

Do not worry about page or module permissions for now. DNN API Endpoint doesn't allow unauthenticated users to configure the API. But going forward you'll want to restrict access to only administrator roles.

## Creating Your First API method

With DNN API Endpoint you can create methods which can be invoked remotely from JavaScript or from mobile/desktop applications and so on. Below, there's a sample in which you can see how to create a method and call a web API using API Endpoint module. The method will have the following characteristics:

- *Action:* Get a product by ID
- *HTTP method:* GET
- *Relative Endpoint:* api/Products

1. Add a new method and name it Products. Set it as GET method. Check the *Is Enabled* box. Optionally you can add a parameter in the *Input Data* but for this guide we don't need one.

2. Add an action that will be triggered when calling the Endpoint api.
    - add *Entities -> Load Entities (SQL)* action.
    - set *SQL Query* to ``select * from {product table}``
    - set *Entity Name* to *Product* - this will be referenced later (in the response)
    - add in *Properties* pairs of *SQL Column name* <-> *Entity Property*. (in order to limit the info we want to list)

3. As response:
    - add *JSON Entity List* (to extract all the existing records) or *JSON Entity* (to extract only the first record)
    - set the same *Entity Name* as the one set in the action *Product*

You are all set. Just hit the Save & Test button and execute the method. The response should be displayed according to what *Response* you added.
