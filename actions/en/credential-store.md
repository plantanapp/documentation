## Credentials Store

The Credential Store feature gives a secure management solution shared between the DnnSharp Modules. It has the capability to store log-in credentials \(username, password, etc.\) for different necessary credentials type \(eg. ConnectionString, SMTP, PayPal, IMAP Account, etc.\). It's designed to enable users to add credentials without communicating with an admin panel.

All credentials entries can contain different combinations of data \(simple string, email - password combination\) which are saved with an unique identification number - Entry id. Of course, custom data can be added for each entry \(eg. for the ticketing IMAP trigger each credential entry can have information about what department receives the ticket\).

The entries are grouped into Credentials Group for an easier way to process them.

Credential store supports the following actions:

* [Add IMAP Credentials](/credential-store/add-imap-credential.md) useful for the IMAP Trigger available in [SharpScheduler &gt; Mail Triggers&gt; Imap](https://www.gitbook.com/book/dnnsharp/common/edit#)
* [Update IMAP Credentials](/credential-store/update-imap-credential.md) useful for the IMAP Trigger available in [SharpScheduler &gt; Mail Triggers&gt; Imap](https://www.gitbook.com/book/dnnsharp/common/edit#)
* [Delete Credentials](/credential-store/delete-credential.md)
* [Get Credentials](/credential-store/get-credential.md) 

For a better management experience we recommend to integrated it with our [Action Grid](http://www.dnnsharp.com/dnn/modules/action-grid-table-data) Module. The latter comes with a Credential Store Entries Datasource configured in order users to add/edit/remove credentials, as shown below;

* Credential Store Entries Source - feeds the grid with necessary information
* Credential Type \(ss.trigger.imap\) - provides seamless integration with IMAP Trigger available in [SharpScheduler&gt; Mail Triggers&gt; Imap](https://www.gitbook.com/book/dnnsharp/common/edit#)
* Credential Group - the group name for the Credential data to be processed
* Custom Data Keys - offers the possibility to make columns with the custom data info
* Filter Entries - to select entries by their properties and their custom data. The values can contain [My Tokens ](http://www.dnnsharp.com/dnn/modules/my-custom-tokens)and tokens that refer to field names. Enabling the Use Regex option below will use filters as Regex Patterns for evaluate the retrieved values

After having the Credential Store Entries configured, Action Grid[ Datasource actions](https://action-grid.guide.dnnsharp.com/en/buttons/actions/datasource.html) can be used to properly operate the records.

