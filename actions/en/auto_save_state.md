### Auto Save State

Add this action to "**On Init**" event to auto save form state in browser cookies. Load it back later by using Load State action, normally also placed in the initialization event. Using this Action you can edit the following fields:

* **Description**. A short description for the action. Only admins will be able to see this field.
* **Error Message**. An error message that will be displayed in case if a error occurs in this action.
* **Condition**. This boolean expression is used to determine if this action will execute. Use it to enable or disable actions programatically. For example, you'd enable a **ShowError** action only if you've found an error let's say when you parsed a response from a web service. A common example is * **Key**. Select a key to save under. Note that the scope is global, data can be shared between any two Action Forms. Important! This is saved in cookies. So, when using **LoadState** action, make sure to load from cookies. Supports My Tokens

![](auto-save-state.png)