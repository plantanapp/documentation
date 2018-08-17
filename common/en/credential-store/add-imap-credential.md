## Add IMAP Credentials

The Add IMAP Credentials action provides the possibility to append a new set of IMAP Credentials to an existing Group. This can be done for example using [Action Form](http://www.dnnsharp.com/dnn/modules/action-form-builder) or [Action Grid Module](http://www.dnnsharp.com/dnn/modules/action-grid-table-data).

Each added entry receives a unique identification number that can be stored into a token name. Specify a token name to save the EntryId response into. You can access it later using the token syntax, for example \[MyNamedEntryIdToken\].  All added data are inserted into the DnnSharp\_CredentialStoreData Database Table.

The below properties can be added for a Credential Entry:

**Group Name** - the group name to which it should belong. The available groups can be managed from [SharpScheduler&gt; Mail Triggers&gt; Imap. ](https://sharp-scheduler.guide.dnnsharp.com/imap.html)

**Entry Title** - determine a suggestive name for your entry. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

**Hostname **- the details of the incoming email \(IMAP\) server, for example imap.gmail.com:993 \(933 represents the required Port\). This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

**Use SSL** - enable this option if your Email Server requires an SSL certificate. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

**Username** - usually the full email address. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

**Password **- the email password. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

**Custom Data** where a Data Key and a Data Value, which can be used later in actions, can be appended. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

**EntryId Token Name** - specify a token name to save the EntryId respose into. You can access it later using the token syntax, for example \[MyNamedEntryIdToken\]. This field supports [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens).

