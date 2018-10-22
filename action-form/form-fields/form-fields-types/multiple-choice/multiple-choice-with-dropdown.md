# Multiple Choice \(with Dropdown\)

The multiple Choice \(with Drop Down\) option is used to create a list of items for a user to choose from, allows the users to select a value from a list of items.

On submit, this field will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the value\), \[&lt;FieldName&gt;:Text\], \[&lt;FieldName&gt;:Value\], \[&lt;FieldName&gt;:Path\]. Note that if your options don't have a value \(there's nothing after the pipe character in the item list\), then all the tokens above will return same value.

### Options:

* Title When No Selection

  * this option displays a "Please Select" option as the first entry in the dropdown.

* Link To

  * Link this to another multi-select field that when changed will cause this control to update with different items. For example, imagine Category and Subcategory selection. When this option is used, prefix each item below with the name of the parent category like this: "Value Of Parent Item/This Item". 

* Datasource

  * Choose from existing data sources or provide values into the Item List area; Input one item per line. If you need to provide different text and value, then separate them by pipe. Can contain [My Tokens](/my-tokens/index.html).

* Initially Selected

  * Determines which of the items is initially selected. Possible values are from the item list. Supports [My Tokens](/my-tokens/index.html) so you can pull data from various sources such as user profile.

* "Other" Option

  * add another option that when selected it will show a Textbox where the user can input own data.

  ![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_14-40-52.png)

### Example:

1. Let's create an example where you create a drop down list called Products, in this list you have to add some Items, use the Items box and list several items, each item to be added per line \(e.g. car, laptop etc\). If you want, let's say, to add different colors/sizes for each item, you can create another drop down list which has to be linked to the Products drop down and when the user selects a product from the list, the second drop down calls only the colors available for that specific product only.

Here's how you can do it: in the second drop down list set on "Link to" option the "Products" field, then, in "Items" box there's a certain syntax which has to be correctly used to make the form work. You have to prefix the item with the name of the parent \(in our case: "car"\) and separate the parent from the child using slash \("/"\), for example if you want to display red, yellow and black for the product car, in the Items box you have to set:

car/yellow

car/red

car/black

and here's how it will be displayed on front when the user selects car from the first drop down list:

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_14-34-13.png)

And if you want to add a subcategory for the second drop down list \(Product Color\), then, on the third drop down list, let's name it Price, you have to link it to the second drop down - Product Color and in the Items box you have to use the syntax as follows:

car/red/3

car/red/5

car/red/10  
![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_14-34-50.png)

1. Another example of a drop down option would be to populate a drop down with a list of users from DNN and use the ID as the value displayed. Append this query in the drop down Items field: select Displayname, UserId from Users \(Note how the first column is the text, and the second column is the value\).

2. Data Source SQL Query allows you to populate a dropdown menu with a selection of items from a database of your choice. It also allows the use of My Tokens, making it a very versatile option.

Here are some examples of queries you can use in combination with tokens:

* select Email from Users where Email = '\[User:Email\]' 
* select '\[User:Email\]' from Users 

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_14-45-08.png)

* select username from users where email='abc@test.com'

will have as results the usernames of those user\(s\) who have registered with that specific email

* select username from users where email='\[User:Email\]'
* select username from users where email=\[User:Email\] &gt; this is not supposed to work because \[User:Email\] is not in single quotations and the value which should be returned is not an ID
* select username from users where UserId=\[User:UserID\]



