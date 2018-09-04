# Creating a Theme

The new NavXp has now a backed rendering \(Razor Script\) that give us a huge speed improvement and the power to let the user decide how a Theme should look and adapt any menu to the solution he needs.

## Understanding how it works

After the security settings that can be made in the  Admin Panel for each profile all the information is passed to a Razor Script File that uses this new info to render a HTML. Then HTML is passed to DNN. This process is very fast, under 0.003 seconds even for complex Themes.

## Where to start?

The best way is to make a copy of Simple Unordered List \(_\DesktopModules\DnnSharp\NavXp\Templates\UnorderedList_\) because this theme is most minimalistic one. **Rename** the folder then. \(3\)\(5\)

Please keep in mind to clear the DNN cache every time modifications are brought to the config file. For improvements in performance they are not read from the disk each time. \(Restart/Recycle application will also work\)

**Change the config\(5\)**

In the folder you will find a file named template.json.config. You need to edit this so NavXp can identify the new template.

Change The **Id** into the template folder name.

The **DisplayName** the name that will be displayed in the dropdown in Admin Page

**JsIncludes**  -&gt; Javascript files that will be loaded with the menu, strings comma separated.

**CssIncludes**  -&gt;  CSS files that will be loaded with the menu, strings comma separated.

**Template **-&gt; Don't modify this.

**Parameters - &gt; **Don't modify this they are not in use yet.

At this moment you will have a new menu available that will be shown in the dropdown in Admin Page with the **DisplayName** you set.

**Change the Razor Template file.**

The whole menu html is generated here. Let's say that the file has 4 parts.

**Part 1**

Declaration zone. Here we get the data from the database and put in simple variables so we can use them later. We don't recommend bringing modifications here. This is all the data you can get and need.\(1\)

**Part 2**

The rendering algorithm. We are using here a recursive approach. First we render the first level of the menu. We separated this so you can have a separate look for the first level. There are 2 branches there where the menu item has submenus and the menu doesn't. We can tell this from looking at the children count. The branch that has children count bigger than 0 also has a function named AppendChilds. We will get to that to in Part 3. After all the strings a concatenated to obtain all the HTML we store it in the response variable witch will be used in Part 4. \(2\)

**Part 3**

AppendChilds function is used for appening children for each menu item that has any, on any level of the menu greater than the first one. Code looks similar to the one in Part 3. Define here the look of the HTML that contains the submenus. \(2\)

**Part 4**

Here you can define the parent HTML of your menu while putting the menu items inside it. View it like the container for your menu. \(4\)

**NOTES!**

\(1\) To bring more data for the Render Template to create more logic please look at this article [/add-data.md](/add-data.md "Add Data")

\(2\) The rendering algorithm from **Part 2 and Part 3 ** can be modified as you like and rewrite if need it.

\(3\) For more complex examples please check the other templates.

\(4\) To simplify the rendering for responsive menus create a Desktop Version and Mobile Version in the same file and use css to display them conditionally. Check the other templates for more examples.

\(5\) DO NOT modify the default templates files. The modifications will be deleted on upgrade. Best practice is to copy the template and modify it as described.

