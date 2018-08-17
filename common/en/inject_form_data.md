### Inject Form Data {#inject-form-data}

The _**Inject Form Data**_ action lets you manually add and write data in the form.

This action is very useful, for example, when you want to add data which is specific to the button when you click on it or for when you want to append data that you don't want exposed through hidden fields. Note that this is **only valid for current action list**, it does not persist until next list of actions executes, for example on submit. For this situation, store the data in hidden fields, cookies or server session. Each piece of data in the context is stored under a name and can be accessed through tokens using that name. Use this action to load data that other actions down the stack need.

The values inserted into context can be constant text or tokens, including tokens created with [**My Tokens**](https://www.dnnsharp.com/dnn/modules/my-custom-tokens).

Loading over a name that already exists will overwrite the existing data. If a field with the same name exists, data is also loaded into the form. After you load data into a filed you might want to refresh the form by using the **Update Form Data\(AJAX\) **action  - form will not reload\(page will not refresh\), just the info will be updated.

[Click here](https://www.youtube.com/watch?v=kB0UKNnlbHQ) to see a tutorial where we present some Core concepts in Action From and where you'll find a practical example where Inject Form Data action is used.

![](/assets/inject_form_data.png)![](https://static.dnnsharp.com/documentation/inject_form_data.png)

