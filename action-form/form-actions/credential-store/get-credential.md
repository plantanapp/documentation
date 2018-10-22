# Get Credentials

The Get Credentials action gives the possibility to load an existent set of Credentials which belongs to a Group. This can be done for example using [Action Form](//www.dnnsharp.com/dnn/modules/action-form-builder) or [Action Grid Module](//www.dnnsharp.com/dnn/modules/action-grid-table-data).

**Entry ID **- the unique identifier of the entity wanted to be brought into context. This field supports [My Tokens](/my-tokens/index.html).

The tokens below are generated:

* \[CredentialEntryInfo:EntryId\]
* \[CredentialEntryInfo:EntryName\]
* \[CredentialEntryInfo:GroupId\]
* \[CredentialEntryInfo:GroupName\]
* \[CredentialEntryData:&lt;Fieldname&gt;\] 
* \[CredentialEntryData:&lt;CustomDataKey&gt;\] 

![](//static.dnnsharp.com/documentation/get_credential.png)
