# Create Auto Login Link

The action will help you create user specific links that when clicked will automatically login the user and redirect to a portal page(or url) specified in the action.

![Autologin redirect to page](https://static.dnnsharp.com/documentation/autologin_redirect_to_page.png)
It also gives the option of passing custom data as QueryString parameters which can then be referenced on the target page as [QueryString:parameter_name]

The action allows you to:
* determine how many times can an autologin link be used. This way you can create auto login links that can be used only once or a couple times or with unlimited usage(default)
![Autologin Number of logins](https://static.dnnsharp.com/documentation/autologin_number_of_logins.png)
* specify an expiration date for the autologin link so that it will expire regardless if the logins limit was reached or not
![Autologin expiration time](https://static.dnnsharp.com/documentation/autologin_expiration.png)

The output coming from this action will be an url similar to this *{SiteAlias}/DesktopModules/AutoLogin/API/AutoLogin?code={code}*. 
It is stored in the token bearing the name written in the Output Token Name inside the action. ([autologin] for the example image below)
![Auto login link output token name](https://static.dnnsharp.com/documentation/autologin_link_output_token.png)

With the help of the Create Auto Login Link action you can Impersonate Users on your website(login as them without the need of knowing their password) - see video tutorial here.

> The action will not create autologin links for Administrators or SuperUsers accounts.
