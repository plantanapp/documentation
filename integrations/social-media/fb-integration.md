# Facebook Integration

* Initial Facebook App settings:
    * Create a new app at: https://developers.facebook.com (for more details visit: https://developers.facebook.com/docs/apps/register )
    * Go to : https://developers.facebook.com/apps/
    * Select your app
    * Go to settings/basic and add the site url to Website - Site URL
    * Go to products
    * Add Facebook login
    * Go to Products/Facebook Login/Settings
    * Set Valid OAuth Redirect URIs to : `{your site url}/DesktopModules/DnnSharp/Common/WebHandlers/DnnSharpFacebook.ashx/`

* Where to find Facebook App ID and App Secret
    * Go to : https://developers.facebook.com/apps/
    * Select your app

* Limitations:
    * Facebook post permissions
        * All Administrators, Developers and Testers can automatically post, for all other users you must go at https://developers.facebook.com , go to Status & Review - Add items to this Submission and add publish_actions. Facebook must review and approve this featurs.
        * Requires HTTPS
  
* Side notes
    * The Facebook Login action also creates the FacebookId profile property. And stores the created users Facebook client id in it.
