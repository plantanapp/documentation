# Sticky header

> Feature was introduced in Action Grid 5.0.110 and does not apply to the Listing template.

You now have the ability to keep Action Grid's table head on the visible area of the screen by setting the **Enable sticky head** checkbox to true.
![Enable sticky head](https://static.dnnsharp.com/documentation/sticky-header-setting.png "Enable sticky head")

The feature rings two different operating modes:
* **Scroll the Grid**, and keep its header on top of page(or popup window) for as long as the grid content is visible
* **Scroll inside the Grid**, which means the Grid has fixed position on the page and you will scroll the data inside it

The difference between the two is made by the **Table Height** setting 
![Sticky head table height](https://static.dnnsharp.com/documentation/sticky-header-table-height.png "Sticky header table height")
as follows:
* **leave it empty** in order to scroll the grid and keep table head in the visible area of the window for as long table data is visible
* **set fixed height** (in pixels) in order to give a fixed height to the Action grid table and scroll the data inside that area (when the mouse is inside the area)