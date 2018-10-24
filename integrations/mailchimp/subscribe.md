# Subscribe

You can subscribe to Mailchimp using our add-on as follows:


**Action Form**

Action Form comes with a *Subscribe to Mailchimp* template which has a few predefined fields and actions: First Name, Last Name, Email, Subscribe to Mailchimp, and Display Message.

![](/assets/template-af.jpg)

**Action Grid, DNN API Endpoint**


The Subscribe to Mailchimp action is basically the same in all the supported modules, with a few slight differences.



![](/assets/subsc.jpg)


Whereas in Action Form, Action Grid, and DNN API Endpoint you can use either a text box field or expression to determine which email will be used to subscribe


![](/assets/expr.jpg)


in **Sharp Scheduler and InfoBox**, the email must be determined by ways of injecting data or SQL query, for example.


![](inject.jpg)


![](/assets/sql.jpg)

The resulting Email token is then used in the Subscribe to Mailchimp Email field.

It is worth noting that in InfoBox, the Subscribe to Mailchimp action is a button action.

The API Key that needs to be provided in Subscribe to Mailchimp can be found in your Mailchimp account, under Account > Extra > API Keys. The List Name must be exactly as it appears in Mailchimp, as indicated by the help text.


![](/assets/api-key.jpg)