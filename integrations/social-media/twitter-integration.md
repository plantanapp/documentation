# Twitter Integration

* Initial Twitter App settings:
    * Create a new app at: https://apps.twitter.com/ (for more details visit: http://iag.me/socialmedia/how-to-create-a-twitter-app-in-8-easy-steps/ )
    * Go to Select your app
    * Set Callback URL to `{your site url}/DesktopModules/DnnSharp/Common/WebHandlers/DnnSharpTwitter.ashx/`

* Where to find Twitter App ID and App Secret:
    * Create a new app at: https://apps.twitter.com/
    * Go to Select your app
    * Select Keys and Access Tokens
  
* Side notes:
    * The Twitter Login action also creates the TwitterId profile property. And stores the created users Twitter client id in it.
    * Twitter does not provide the users email address automatically. So make sure you also request the user to manually give you his email.
    * Or request Twitter to whitelist your application so you can receive the email.
        * Go to https://support.twitter.com/forms/platform
        * Select "I need access to special permissions"
        * Enter Application Name and ID. These can be obtained via https://apps.twitter.com/ -- the application ID is the numeric part in the browser's address bar after you click your app.
        * Permissions Request: "Email address"
        * Submit & wait for response
        * After your request is granted, an addition permission setting is added in your twitter app's "Permission" section. Go to "Additional Permissions" and just tick the checkbox for "Request email addresses from users".
