# Execute API Method

The action comes as part of the [DNN API Endpoint](/dnnapiendpoint/index.html) module and should be used when you are calling a local API method. By using it the time taken to call an API should be shorter because it eliminates the "slow internet connection" factor (on which the [Server Request](server-request.html) action is based)

It requires you to select:
* an API Endpoint Module (moduleid)
* an API Method
* the HTTP Method type

that needs to be called.

![Execute API Method](https://static.dnnsharp.com/documentation/execute_api_method.png)

> The action was added in API Endpoint 5.0.71