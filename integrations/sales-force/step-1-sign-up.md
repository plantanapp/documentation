### Step 1 - Sign up for an account with Salesforce

There are a few steps one has to take before starting to set up Action Form. First thing to do would be to have an account on Salesforce, with access to the REST API. This seems to depend on which type of subscription you have with Salesforce. You can also start with a new developer account which gets access to the API implicitly. You can open such an account at [developer.salesforce.com](//developer.salesforce.com/). Or, if you already have a Salesforce account login at [login.salesforce.com](//login.salesforce.com/).

The Salesforce [documentation](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_quickstart_intro.htm) specifies which account type has access by default and which does not:

> Any functionality described in this guide is available if your organization has the API feature enabled. This feature is enabled by default for Performance, Unlimited, Enterprise, and Developer Editions. Some Professional Edition organizations may also have the API enabled. If you cannot access the features you see in this guide, contact Salesforce.


Note that you will need to activate the account, by clicking on a link you should receive in an activation email for your free Developer Edition account. Once the account is active, you will need a security token.

Before we show you how to get your security token, a Connected App needs to be installed into your organization first. Go to [Step 2](/step-2-install.md) to learn how to install and configure it.