### User Registration

This action allows you to specify an action for creating user account when the user clicks on a button which uses this action. This action sets the email address as the username. This option is only applicable for new users. User Registration Options:

* **Username, Password and Email Fields**. In these drop down lists you can choose from the fields added on the grid to determine which field will be called when the action from the button is executed.
* **Generate random password**. Enable this option to have DNN Api Endpoint generate a random password. This basically replaces the password fields. The generated password is stored in \[RegRandomPass\] token so you can use it for example in an email action.
* **Send standard DNN registration email**. When this option is enabled DNN Api Endpoint will use the standard registration email from DNN. For custom emails, disable this option and add Email actions.

![](http://static.dnnsharp.com/documentation/UserRegistration.png)

