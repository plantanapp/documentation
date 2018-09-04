### Profiles

Profiles are used to create menus. It contains multiple settings fields, structured in 3 main categories: **Profile Settings**, **Profile Items** and **Permissions **\(if Menu Items Mode - Advanced\).

* **Profile Settings **- General settings for Profile, like Name, Description.

  * **Profile Name**: Specify the name of the Profile. This is not public, it will be displayed just in Admin Panel;

  * **Profile Description**: A short description of the Profile \(optional\);

  * **Start Level**: Configure how NavXp should render this profile: Profile Root will render the entire hierarchy; Current Page will render starting from the current page \(assuming it exists inside your profile\); Children of Current Page will render starting with the children of current page;

  * **Maximum level to render**: Specify the maximum depth NavXp should render for this profile. Set it to 0 \(default\) to have NavXp render the entire hierarchy. Note that the actual number of levels that are rendered also depends on the skin you're using;

  * **Default Items Visibility**: Use this option to specify the default visibility the items should have. Inherit DNN means NavXp will respect the Include in Menu checkbox from DNN page settings. Set to Visible to have items appear in the menu regardless of DNN setting. The visibility can be overriden per item from respective Properties Dialog;

  * **Default Items DNN Sync**: Use this option to specify the default sync the items should have. The sync affects if new pages \(created after this profile\) should appear in menu;

  * **Ignore DNN Page Security**: If this option is selected, items will appear in the menu even if the current user doesn't have access to the respective pages. Clicking the item will redirect the user to the login page or the access denied page;

  * **Use MyTokens to Replace Tokens**: If this is ticked, you will be able to use MyTokens for menu items.

* **Profile Items **- Using this setting you can build your menu. Simply drag from the left pane an element and drop it to the right pane. You can also edit every item individually by pressing the pencil icon available on hover for items on the right pane.

* **Permissions **- Here you can select what user groups will see that specific menu. Note that this option is available on the **Profile Settings **only if **Menu Items** is set to "Advanced".

Under the **Profile Items **you can also edit settings for every item, if you click the "Pencil" icon:

* **Item Title**: Here you set the title of the item. You can use the tab name or tab title, or if you want, you set the name manually. For this, select **Input Caption **and a new field will be added below;
* **Item Alternative Text**: The alternative text that will be added to the item;
* **Rel Attribute**: Select the desired "**Rel**" attribute. Here you can see more info about this: [http://www.w3schools.com/tags/att\\_a\\_rel.asp](http://www.w3schools.com/tags/att\_a\_rel.asp);
* **Link Target**: The target where you want the page to open. It can be **Default**, **Parent**, **Top **or **Named Frame**. Here you can find out more about "link" attribute: [http://www.w3schools.com/TAgs/att\\_link\\_target.asp](http://www.w3schools.com/TAgs/att\_link\_target.asp);
* **Visibility**: The visibility of the item. It can be **Inherit**, **Visible**, **Hidden **or **Execute Token **if you want to show/hide the menu using complex scenarios;
* **Sync**: Optionally, you can use this setting to "**Sync All Descendants with DNN**";
* **Initially Active**: Work in progress;
* **Add Data:** This field allows transporting user inputted data for an item into the skin\(See more [here](/add-data.md "Here")\).



