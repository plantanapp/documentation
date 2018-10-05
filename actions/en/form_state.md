###  {#sites-page-title-header}

# Form State

### Save State



This action saves all the submitted data in the server session so it can be loaded back into this or another form. You need to use a key, in the key field, under which the data will be saved, and you also need to specify where the saved data will be stored in the Save Location, either by selecting the Server Session or the Browser Cookies. Keep in mind that the server data is lost after a period of inactivity, usually after 20 minutes, browser cookies usually last longer.

![](http://action-form.dnnsharp.com/_/rsrc/1406194377676/form-actions/form-state/state.png)

### Auto Save State

Add this action to "On Init" event to auto save form state in browser cookies. Load it back later by using Load State action, normally also placed in the initialization event.

### 

### Clear State

This action has the purpose of clearing the previously saved state, for example, if you have a contact form and on its button you've set the Save state on server session action, to not keep the values that the user fills in the boxes, you can use the Clear state action so that the form refreshes and clears all the data which was inserted in the boxes.

### 

### Load State

As it says, from the label, this  action will load the previously saved state in the form.  
To see a practical example where the Form State actions are used, you can Click [here](https://www.youtube.com/watch?v=oIclb99Xgt4) and check our tutorial where we use the Form State action in order to create a Multi form.

