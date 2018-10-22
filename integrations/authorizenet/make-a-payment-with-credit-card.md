## Make a payment with Credit Card, CC

### Intro

This type of payment allows one to make a payment with Credit Card through Authorize.Net's Payment Gateway, using Authorize.Net's Advanced Integration Method \(AIM\).

The security of an AIM transaction is ensured through a 128-bit Secure Sockets Layer \(SSL\) connection between the merchant’s Web server and the Authorize.Net Payment Gateway.

There are different credit card transaction types supported by the payment gateway and they each have specific field requirements:

* Authorization and Capture; 
* Authorization Only; 
* Prior Authorization and Capture, etc.

Make sure you have already read the Authorize.Net manual prior to using different credit card transaction types and specific fields: [http://www.authorize.net/support/AIM\_guide.pdf](http://www.authorize.net/support/AIM_guide.pdf).

For your convenience, DNN Authorize.Net Add-on already contains a template available in ActionForm to get you started, called '

Pay With Credit Card, Authorize.Net.It is a form that will do an Authorization and Capture transaction. This is the most common type of credit card transaction and is the default payment gateway transaction type. The amount is sent for authorization, and if approved, is automatically submitted for settlement.

### Requirements

* The merchant must have a merchant bank account that allows Internet transactions.

* The merchant must have an e-commerce \(Card Not Present\) Authorize.Net Payment Gateway account.

* The merchant must have a valid Secure Sockets Layer \(SSL\) certificate and their Web site must be capable of initiating both client- and server-side SSL connections.

* The merchant must be able to store payment gateway account data securely \(for example, API Login ID, or Transaction Key\).

* The merchant must have one of the following module installed

  * Action Form 03.08.74

  * Action Grid 04.00.39

  * DNN API Endpoint 01.02.15

  * Sharp Scheduler 02.01.18

  * InfoBox 01.01.22

* The merchant must have a platform containing DNN 6 and ASP.NET 4.0 at the least.

### Getting started

### Step 1 - Sign Up and Activate an Authorize.Net Account.

You will need both a merchant account and Authorize.Net Payment Gateway to accept credit cards.You can sign up here: [https://www.authorize.net/signupnow/](https://www.authorize.net/signupnow/).

### Step 2 - Get the API Login ID and Transaction Key from Authorize.Net.

These keys will authenticate requests to the Authorize.Net Payment Gateway.Get the id and the key if don't already have them. You will find them in your ACCOUNT -&gt; Settings -&gt; Security Settings -&gt; General Security Settings -&gt; API Login ID and Transaction Key. Your API Login ID and Transaction Key are unique pieces of information specifically associated with your payment gateway account. However, the API login ID and Transaction Key are NOT used for logging into the Merchant Interface. These two values are only required when setting up an Internet connection between your Web site and the payment gateway. They are used by the payment gateway to authenticate that you are authorized to submit Web site transactions.

### **Step 3 - Setup**

Add a DNN Sharp module to your page, go to Manage Settings, and add a new button with an Authorize.Net Action.

Set your API Login ID and Transaction Key.

Set the description and total amount for your item.+

Add any extra fields that you need for your particular setup.

### **Settings Reference**

* API Login ID

Required. API Login ID. This key will authenticate requests to the payment gateway.

* Transaction Key

Required. Transaction Key. This key will authenticate requests to the payment gateway.

* Credit Card Transaction Type

Credit Card Transaction Type. It can be one of the following: AUTH\_CAPTURE, AUTH\_ONLY, PRIOR\_AUTH\_CAPTURE, CAPTURE\_ONLY, CREDIT, VOID, or you can use any other future development Authorize.Net types using the Expression button at the end of the dropdown list.If the value submitted does not match a supported value, the transaction is rejected. If this field is not submitted or the value is blank, the payment gateway will process the transaction as an AUTH\_CAPTURE.

* Go Live

Enable this option to switch to Live Mode. By default, unchecked, Test Mode, the transaction will be posted to the Authorize.Net's test server for developer accounts:[https://test.authorize.net/gateway/transact.dll](https://test.authorize.net/gateway/transact.dll).

Make a few test transactions before going live!

* Payment description

Tells what the transaction is about, for example a service name. This will appear in statements, receipts, etc.

* Transaction's currency

For your convenience there is a dropdown list with a few preset currencies. You can change it to other currencies at any time using the Expression button at the end of the dropdown list. The currencies that a merchant can accept through Authorize.Net are determined by their payment processor. Read the documentation or contact Authorize.Net to check which of the currencies are set for your account.

* Amount - total to pay

The total Amount to pay in the selected currency. Can contain other context tokens, for example \[TotalAmount\] and My Tokens.

* Credit Card Numbe

Which of the fields in this form should be used as Credit Card Number

* Credit Card CCV

Which of the fields in this form should be used as Credit Card CCV. This field is required if the merchant would like to use the Card Code Verification \\(CCV\\) security feature.

* Expiration Month

Which of the fields in this form should be used as the customer’s credit card expiration  Month.

* Expiration Year 

Which of the fields in this form should be used as The customer’s credit card expiration Year.

Note: x\_exp\_date Value: The customer’s credit card expiration date will be sent as a concatenation of the Expiration Month and Expiration Year fields.

Formats accepted by Authorize.Net: MMYY, MM/YY,MM-YY, MMYYYY, MM/YYYY, MM-YYYY. Set your fields accordingly.

* First Name

Which of the fields in this form should be used as First Name.

* Last Name

Which of the fields in this form should be used as Last Name.

* Address

Which of the fields in this form should be used as Address.

* City

Which of the fields in this form should be used as City.

* State

Which of the fields in this form should be used as State.

* Country

Which of the fields in this form should be used as Country.

* Postal Code

Which of the fields in this form should be used as Postal Code/ ZIP Code.

* Fields 

Select which extra data to pass to Authorize.Net. Map Authorize.Net's Fields to Action Form Fields or Expressions. Additional data to pass to Authorize.Net. Make sure you read the AIM manual. Some common used data could be perhaps x\_invoice\_num, x\_email, x\_cust\_id, with values from some tokens.

* Output Authorize.Net Response Code Token Name

Optionally provide a token name where to store the Authorize.Net Response Code generated by the transaction. For example, store Authorize.Net Response Code that is needed later in another action.

* Output Authorize.Net Response Reason Code Token Name

Optionally provide a token name where to store the Authorize.Net Response Reason Code generated by the transaction. For example, store Authorize.Net Response Reason Code that is needed later in another action. \(useful purpose: send it to an admin\).

* Output Authorize.Net Response Reason Text Token Name

Optionally provide a token name where to store the Authorize.Net Response Reason Text generated by the transaction. For example, store Authorize.Net Response Reason Text that is needed later in another action.

* Output Authorize.Net Response Authorization Code Token Name

Optionally provide a token name where to store the Authorize.Net Response Authorization Code generated by the transaction. The authorization or approval code. For example, store Authorize.Net Response Authorization Code that is needed later in another action.

* Output Authorize.Net Response Transaction ID Token Name

Optionally provide a token name where to store the Authorize.Net Response Transaction ID generated by the transaction. The payment gateway-assigned identification number for the transaction. For example, store Authorize.Net Response Transaction ID that is needed later in another action.

* On Approved

Define a list of actions that should execute when this action's result is Approved.

* On Declined

Define a list of actions that should execute when this action's result is Declined.

* On Error

Define a list of actions that should execute when this action's result is Error.

* On Held For Review

Define a list of actions that should execute when this action's result is Held For Review.

