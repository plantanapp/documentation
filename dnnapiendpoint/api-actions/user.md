# User

## User Login

This action allows you to require the user to be logged in to submit the HTTP request. There is a sort of Login template where you can link the fields created in the Input Data section to the Username and Password which have the purpose of logging the user into the existing account. Note that the fields Username and Password should be previously created in Input Data section in order for the User Login action to work.

## User Registration

This action allows you to create a user account when the request to the method's Endpoint URL is made. To apply this action, there must be created in Input Data the same fields with the same name as in the action's drop down lists: Email, Username, and Password. This option is only applicable for new users. User Registration Options:

* Use Email as username

  Select this option to create the user account using the email address provided. This option will use the email address if you do not have the username field on the Input Data section. If you do not want to use the email address for the user name you will need to provide the username field separately on the Input Data section.

* Generate random password

  Select this option to generate a random password. This generates a random password if you do not provide a password field before making the request. If you do not want to generate a random password you will need to create a password field in Input Data.

* Send standard DNN registration email

  Select this option to send the standard DNN registration email. If you do not want to send DNN registration email and would like a custom email template, you will need to setup the Email actions.

## Update User Profile

This action is used so that the users' profiles can be updated. As options, there are:

* Allow password update box

  For this option to work, you need to setup a password field in the Input Data section. This option is useful when a user would like to update his password.

* Also update Display Name
  
  For this option to work, you need to setup a First Name and Last Name fields in the Input Data section so that the fields could be selected in the drop down list. This option will give the user the ability to change the display name with one of the two options: First Name and Last Name.

## Grant User Role

Action used to assign additional roles to the user as well as to apply an expired date to each role. Grant User Role options:

* Role

  This option allows you to grant a security role. Select one from the drop down list.

* Other Role Names

  This option give you the possibility to input a role name and if you specify multiple role names, separate them by comma. It also accepts DNN tokens and My Tokens.

* Role expiration

  In this field you can input a period after how many days the role expires. It you leave it blank, it will never expire.

## Revoke User Role

This action has the purpose to revoke the specified security role from a given user. 

## Clear User Cache

This action requires an email or username field and a password field to be present in the Input Data section in order to login the user. On successful login, access user info using the [User:*] tokens (for example [User:UserID] or [User:FirstName]).