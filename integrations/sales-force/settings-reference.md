### Settings Reference

* **Salesforce Username** <br>
Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session.

* **Salesforce Password** <br>
Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session.

* **Salesforce Security Token** <br>
Required. A valid Username, Password and Security Token must be passed to Salesforce in order to authenticate and establish a secure session.

* **Salesforce Entity Type** <br>
The entity type intended to create. There is a dropdown list with the most common type entities, Lead, Case, Contact, Account, but you can always select a different entity by clicking on the Expr button at the end of the dropdown list, and entering manually your own type of entity.
You can see a list of standard objects and their standard fields in the [Salesforce documentation](http://www.salesforce.com/us/developer/docs/api/index_Left.htm).

* **Fields** <br>
Select which data to pass to salesforce. Map Salesforce's Fields to Action Form Fields or Expressions. For example, map LastName to SomeFieldId01, FirstName to SomeFieldId02, etc. Note that some Salesforce Fields are mandatory! Read Salesforce's documentation on which fields are required!
You can see a list of standard objects and their standard fields in the [Salesforce documentation](http://www.salesforce.com/us/developer/docs/api/index_Left.htm). Lookout for the required fields! Different object have different required fields.

* **Output Entity's ID Token Name** <br>
Optionally provide a token name where to store the newly created Entity's ID. For example, store Entity's ID that is needed later in another action.

* **Output Entity's URL Token Name** <br>
Optionally provide a token name where to store the newly created Entity's URL. For example, store Entity's URL that is needed later in another action, like redirect, etc.

* **SOQL Query** <br>
Salesforce Object Query Language (SOQL) query to execute. Can contain My Tokens. For more info on SOQL, check [Force.com SOQL Reference](http://www.salesforce.com/us/developer/docs/soql_sosl/index_Left.htm).

* **Extract Columns** <br>
Optionally provide an association table to parse columns into context data. Can contain other context tokens, for example [Name], and My Tokens.
