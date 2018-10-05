
### Collect PayPal Payment

This action allows you to set a PayPal payment requirement when the request is made. To set this requirement you will need to add the **Collect Paypal Payment** action. It allows you to set PayPal payments by submitting your Sandbox Account Email, Live Account Email, Payment Amount, Payment Frequency, and Currency preference. You can also apply tokens to the email addresses, item title and payment amount fields. 

The **Collect Paypal Payment** action allows you to set the requirement before giving the user access to specific resources or rights. When an HTTP request is made, the redirect to the PayPal website should be made, where you should be able to complete the payment process. The user is required to log in to complete the payment process, but if he does not have a Paypal account, is required to create one.

**Sandbox Account Email**. The Sandbox Account Email field is used for entering your PayPal Sandbox email address. This is the email address you used when you set up your PayPal Sandbox account. Paypal Sandbox is a testing environment that allows you to test transactions without monetary transactions. You are required to enter a valid email address. If you do not enter a valid email you will get an error message.

**Live Account Email**. The Live Account Email field is used for entering your Live PayPal email address. This is the email address you used to open your Paypal account. If you do not enter a valid email you will get an error message.

**Recurring Payment**. The Recurring Payment drop down menu includes a list of ongoing payment options:
* **None** to require a recurring payment.
* **Monthly** to specify a monthly recurring payment.
* **Yearly** to specify a yearly recurring payment.

**Item Title**. The Item Title field is used for entering the title of the product or service. 
**Currency Code**. The Currency drop down menu is used for specifying your currency preference, for example U.S Dollars. The drop down menu includes a list of currency preferences, displayed below: 
* U.S. Dollars (USD)
* Euros (EUR)
* Canadian Dollars (CAD)
* Pounds Sterling (GBP)
* Australian Dollar (AUD).

**Amount**. The Amount field is used for entering the amount for the product or service. You are required to enter a valid number. If you enter letters or symbols you will get an error message. Do not enter the dollar ($) symbol, this is invalid and will return an error message. Only numbers and decimal points are allowed, for example 5.55.

**Cancel Page**. The Cancel Page drop down menu includes a list of pages for redirecting the user when Cancel is selected. The list of pages in the Cancel Page menu depends on the pages available in your site.

**Pending Payment Page**. The Pending Payment Page drop down menu includes a list of pages for redirecting the user when the payment is pending. The list of pages in the Cancel Page menu depends on the pages available in your site.

**Generate Unique Order ID**. If you check this option box, an unique ID will be generated for each order the users makes.