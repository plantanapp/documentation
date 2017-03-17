# Form Builder

Beginning with Action Grid 2.0, form elements will be integrated inside the grid fields, by using the Add form button a list with form elements will be displayed from which you can choose Multiple choice fields, date picker fields, text fields and so on.

The purpose of this functionality is described in the following use case: for example, you have a table in your database with clothing articles, and you want to sell them, you can list all of the products in a grid on which you also have the ability to make the purchase via a form integrated in the grid, you can use an sql statement to list the products' names, their size and color, then you integrate a form field like text box or number in which the user will set a quantity which he desires to buy, you can also use a form field like image or static text in which you can provide additional info and a picture of the product and a drop down list with different types of credit cards from which the user will be able to select prior to his purchase.

#### How to hide form title

Other useful tips for using form elements would be to hide the form title displayed as title for the form column, this case can be done as follows:

  1. add a form element with title "Quantity"
  * set Label Align = Top
  * and add a text box where either you can leave the Title empty but with and auto id value set in the field OR you can put a title and on Label CSS Classes Styles you can add: `display:none;border-top:0px;` 

#### How to use form elements as calculator inside a grid

You can also use the form elements in order to create a calculator inside the grid:
  
add a form field > on it add three fields: 
1. Price (Text box) with initial value = the fixed amount, if this is the case
* Quantity (Text box or Number) 
* Total with the following expression on Bind Expressions Value field: [Price]*[Quantity]

#### How to use `[Ids:CommaDelimited]` token set into the button action to display all the grid selected items separated with comma

1. set an SQL Query as data source
2. set in ID Column box the ProductName table in order to identify each row
3. on the grid button in the action where you need to store the name of the products use this token: `[Ids:CommaDelimited]`
   
As expected result, after you select, let's say three items and you click on the grid button, the three items will be comma separated and properly displayed in the message displayed. 

#### How to display user profile image in grid

1. add on a grid a form field
2. add Display Image field
3. set in Image URL: `/profilepic.ashx?userId=[userid]`