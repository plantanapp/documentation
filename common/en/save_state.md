### Save State

This action saves all the submitted data in the server session so it can be loaded back into this or another form. You need to use a key, in the key field, under which the data will be saved, and you also need to specify where the saved data will be stored in the Save Location, either by selecting the Server Session or the Browser Cookies. Keep in mind that the server data is lost after a period of inactivity, usually after 20 minutes, browser cookies usually last longer. Contains the following parameters:

* * **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is **[SomeField] == "Some Value"**. This field supports **My Tokens**. 
* **EntryId**. A guid that uniquely identifies an entry. Can contain form tokens (for example **[Email]**) and **My Tokens**.
* **Key**. Select a key to load from. Note that the scope is global, data can be shared between any two Action Forms. Supports **My Tokens**.
* **Save Location**. Select where to load the saved data from. Session data is lost after a period of inactivity, usually around 20 minutes. Browser cookies usually last longer.

![](save-state.png)