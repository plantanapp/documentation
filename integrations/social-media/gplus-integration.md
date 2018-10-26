# Google+ Integration

* Initial Google App settings:
    * Create a new app at: https://console.developers.google.com (for more details visit: https://developers.google.com/identity/sign-in/web/devconsole-project )
    * Go to `https://console.developers.google.com/apis/credentials?project={your app name}`
    * Set Authorized redirect URIs to `{your site url}/DesktopModules/DnnSharp/Common/WebHandlers/DnnSharpGPlus.ashx/`
    * Side note:
        * It might take a few minutes until the the login will actually work.

* Where to find Google App ID and App Secret:
    * Create a new app at: https://console.developers.google.com
    * Go to `https://console.developers.google.com/apis/credentials?project={your app name}`

* Side notes
    * The Gplus Login action also creates the GplusId profile property. And stores the created users Gplus client id in it.
