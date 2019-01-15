# Grant User Role

Action Grid allows you to assign additional roles to the user as well as to apply an expired date to each role. Grant User Role options:  
Role

This option allows you to grant a security role. Select one from the drop down list.  
Other Role Names  
This option gives you the possibility to input a role name and if you specify multiple role names, separate them by comma. It also accepts DNN tokens and My Tokens.  
Role expiration  
In this field you can input after how many days the role expires. It you leave it blank, it will never expire.
The option "Extend a role validity period" will accept a parameter named "Extensions Days" which can be a token. By using this action, you can extend the expiration day of a role that is currently granted to a user. Furthermore, if a role is already granted and has no expiration date(indefinite) this action will set an expiration date on that role which will be calculated by using the current date and adding the number of the extension days. Same goes for a role that was never granted, this action will grant the respective role using the same calculation.

![](//static.dnnsharp.com/documentation/GrantUserRole.png)

