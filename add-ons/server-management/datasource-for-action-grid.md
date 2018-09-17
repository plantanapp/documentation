# DataSource for Action Grid

The Portal Aliases Management DataSource can be chosen when a new Action Grid is configured from Scratch.

It comes with the following grid fields:

* PortalAliasID
* PortalID
* HTTPAlias
* CreatedByUserID
* CreatedOnDate
* LastModifiedByUserID
* LastModifiedOnDate
* BrowserType
* Skin
* CultureCode
* IsPrimary

To allow users to add/edit/delete site Aliases we recommend to use special Grid buttons such as_ Inline Add/Inline Edit/Delete Special Grid Buttons_ or _Inline Edit/Delete Special Item Buttons_.

Make sure that special permissions are configured for your website, following one of the below steps to avoid the violation of database constraints:

* Go to C:\Windows\System32\inetsrv\config and add the identity of your Application Pool with the add/delete/modify rights enabled. 

![](/add-ons/server-management/assets/^9DC11305279D2DF0FEE71DDD17329B756927FB6B1D11FB81B5^pimgpsh_fullsize_distr.png)

* Give full Administrator privileges for your ApplicationPool by setting Administrator as Identity from IIS Manager -&gt; Application Pools - &gt; Advanced Settings  

![](/add-ons/server-management/assets/^FD2D5666C26FB31ACE8F94B89143FFB8584C6F01336023D7CB^pimgpsh_fullsize_distr.png)

One of the above special setting is mandatory because the Server Management Add-On automatically adds/modifies/deletes to IIS a binding when an alias is administered.

We recommend to carefully use this extension because a wrong step can determine IIS to stop the website. You can use Validators available for Inline edit to restrict the Input characters and Button's condition\(e.g _\[HTTPAlias\].IndexOf\("part\_of\_the\_string\_to\_block"\)==-1_ \) to hide an Edit Item Button for the primary alias.

