# Button Properties

Both button types(**item button**/**grid button**) in Action Grid have similar properties which determine:
- #### How they look:
  - **Title** - the text that appears on the button
  - **Condition** - boolean expression used to determine if button will be shown or not (evaluated when page loads for grid buttons and on datasource refresh for item buttons)
  - **Enable Conditionally** - boolean expression used to determine if button will be enabled or not (evaluated when page loads for grid buttons and on datasource refresh for item buttons)
  - **Style** (default, primary, warning, danger)
  - custom **CSS class**
  - **Icon** (Font Awesome or Glyphicon)
  
  ![Button layout properties](https://static.dnnsharp.com/documentation/buttons_appearance_properties.png)
- #### Who has permission to use them
  
   ![Button permissions](https://static.dnnsharp.com/documentation/buttons_permission_properties.png)

- #### Their functionality:
  - **Ask for confirmation** before executing the actions
  - **Client button** to execute only client side actions without the extra ajax call to the server (All server side actions from the button will be deleted upon saving)
  - **Javascript code** to be executed before the actions
  - [**Actions**](/actions/index.html) to run when button is clicked


### Apart from all the above, grid buttons have some extra functionality:
- **Actions** are split in 3:
  - **Initialization Actions** that are execute once to setup the context
  - **Per Item Actions** that are executed for each selected item in the grid
  - **Final Actions** that are executed once after all the actions described above have completed
  
  ![Grid button actions](https://static.dnnsharp.com/documentation/grid_button_actions.png)
- **Requires Selection** to show the button only when at least one item from grid is selected
- **Requires Data** to show the button only if there is at least one item returned by the datasource(even when filtered or searched)
- **Show Count** to place a label inside the button showing the number of selected items
  ![Grid button extra settings](https://static.dnnsharp.com/documentation/grid_button_extra_settings.png)
- **Show Sum** that allows you to select a column for which to calculate sum of selected items or all items visible on grid and show it on the button
![Grid button show count](https://static.dnnsharp.com/documentation/grid_button_show_sum.png)


> **Requires Data** was introduced in Action Grid 5.0.120  
> **Show Sum** was introduced in Action Grid 5.0.95
