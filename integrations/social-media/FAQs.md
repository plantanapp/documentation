# FAQs

1\) How are identities handled when the same users logs in with more than one social media ?

The addon creates users based on data received from the social media and uses the email received as an ID since you may have two users with the same first name and last name combination.

Side notes:

* on each login the addon requests the data again from the social media site and updates the data of your users
* each social media might have different data based on what the user provided it so if the user has a different name on facebook and gplus the addon will take the data from the last social media used by the user to log in
* twitter does not automatically offer the user email if your application is not whitelisted by them so we recommend you only add the twitter log in after you have this or the addon will use the twitter display name and an ID and the user will also not have an email

For more details about whitelisting your app please check the side notes of our [twitter integration](\integrations\social-media\twitter-integration.html)

2\) Other social media logins work but Facebook does not.
This is usually a problem from the clients firewall that prevents requests any url in https://
