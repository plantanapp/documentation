# Update User Profile
> Introduced in builds released after June 12th, 2018 (eg. Action Form 5.0.200)

The action allows you to update data on the profile of a user on your website and it can be conditioned by using tokens or boolean values in the __Condition__ field.
It updates the User profile that will match by UserId, Username or Email the value specified in the **__User Identifier__** field and it only updates properties provided in the action:
* either the predefined ones (password, display name and email)
* or __Additional User Profile Properties__ specified by you

![update user profile action](//static.dnnsharp.com/documentation/update_user_profile.png)

## Update User Profile (Obsolete)
> In all builds released after June 12th, 2018 this action is marked as Obsolete and replaced by the one above.

This action allows you to setup some actions so that the users can update their profile information. It is a very useful option when your site has an intranet section. It will update the user from the context; in case you want to update a specific User Profile and you're using modules released before June 12th 2018 you will have to use the Load User action first to load the user into context and then the Update User Profile action.
Update User Profile options:  
Allow password update  
If there's a password field on the form, the module will also update the password for the current user.  
Also update Display Name with in this drop down list you can select a corresponding field which were previously added as data source and which will be called when the buttons action is executed.

![update user profile obsolete](//static.dnnsharp.com/documentation/UpdateUserProfile.png)

