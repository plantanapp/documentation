# Step 2 - Install the Connected App

To be able to connect to the Salesforce service we use a Connected App that uses OAuth with Username/Password Flow as the authentication method. This app needs to be installed into your salesforce organization to be able to manage the permissions. If the app is not installed all the users with the **API Enabled** permission will have access to the data (by default the **System Adminstrator** profile has this permission).

To install the app open this [link](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t0Y000000INnj). (this will be updated if any new version of the app is released)

You can install the app only for administrators, for all users or for specific users. We recommend to install it for admins only or for specific users.

By default Salesforce lets the users of the organization to self authorize access to the app. We recommend you to change this behaviour by going to the admin page of the Connected App (Setup > Manage Apps > Connected Apps > Click Edit on DnnSharp Integration) and change the **Permitted Users** setting to **Admin approved users are pre-authorized**. After this you can use the Profiles and Permission Sets lists which are at the bottom of the same page to manage the users that have access to the application.

Next you need to [get your security token](/step_3_-_get_a_security_token_from_salesforce.md) and setup the appropriate action in Action Form.