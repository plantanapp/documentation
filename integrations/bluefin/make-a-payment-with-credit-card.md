## Make a payment with Credit Card, CC {#make-a-payment-with-credit-card-cc}

### Intro {#intro}

This type of payment allows one to make a payment with Credit Card through Bluefin Payment Gateway, using Bluefin Advanced Integration Method \(AIM\).

The security of an AIM transaction is ensured through a 128-bit Secure Sockets Layer \(SSL\) connection between the merchant’s Web server and the Bluefin Payment Gateway.

There are different credit card transaction types supported by the payment gateway and they each have specific field requirements:

* Authorization and Capture;
* Authorization Only;
* Prior Authorization and Capture, etc.

Make sure you have already read the Bluefin manual prior to using different credit card transaction types and specific fields:[ ](http://www.authorize.net/support/AIM_guide.pdf)[https://www.bluefin.com/wp-content/uploads/2015/03/Bluefin-PayConex-Manual.pdf](https://www.bluefin.com/wp-content/uploads/2015/03/Bluefin-PayConex-Manual.pdf)

For your convenience, DNN Bluefin Add-on already contains a template available in ActionForm to get you started, called "Pay With Credit Card, BlueFin"

Pay With Credit Card, it is a form that will do an Authorization and Capture transaction. This is the most common type of credit card transaction and is the default payment gateway transaction type. The amount is sent for authorization, and if approved, is automatically submitted for settlement.

### Requirements {#requirements}

* The merchant must have a merchant bank account that allows Internet transactions.

* The merchant must have an e-commerce \(Card Not Present\) Bluefin Payment Gateway account.

* The merchant must have a valid Secure Sockets Layer \(SSL\) certificate and their Web site must be capable of initiating both client- and server-side SSL connections.

* The merchant must be able to store payment gateway account data securely \(for example, API Login ID, or Transaction Key\).

* The merchant must have one of the following module installed

  * Action Form 03.08.74

  * Action Grid 04.00.39

  * DNN API Endpoint 01.02.15

  * Sharp Scheduler 02.01.18

  * InfoBox 01.01.22

* The merchant must have a platform containing DNN 6 and ASP.NET 4.0 at the least.

### Getting started {#getting-started}

### Step 1 - Sign Up and Activate an Bluefin Account. {#step-1---sign-up-and-activate-an-authorizenet-account}

You will need both a merchant account and Bluefin Payment Gateway to accept credit cards.You can sign up here:[ ](https://www.authorize.net/signupnow/)[https://secure.payconex.net/](https://secure.payconex.net/)

### Step 2 - Get the API Login ID and Transaction Key from Bluefin. {#step-2---get-the-api-login-id-and-transaction-key-from-authorizenet}

These keys will authenticate requests to the Bluefin Payment Gateway.Get the id and the key if don't already have them. You will find them in your ACCOUNT -&gt; Settings -&gt; Security Settings -&gt; General Security Settings -&gt; API Login ID and Transaction Key. Your API Login ID and Transaction Key are unique pieces of information specifically associated with your payment gateway account. However, the API login ID and Transaction Key are NOT used for logging into the Merchant Interface. These two values are only required when setting up an Internet connection between your Web site and the payment gateway. They are used by the payment gateway to authenticate that you are authorized to submit Web site transactions.

### **Step 3 - Setup** {#step-3---setup}

Add a DNN Sharp module to your page, go to Manage Settings, and add a new button with an Bluefin Action.

Set your API Login ID and Transaction Key.

Set the description and total amount for your item.+

Add any extra fields that you need for your particular setup.

### **Settings Reference** {#settings-reference}

* API Login ID

Required. API Login ID. This key will authenticate requests to the payment gateway.

* Transaction Key

Required. Transaction Key. This key will authenticate requests to the payment gateway.

* Credit Card Transaction Type

Credit Card Transaction Type. It can be one of the following: SALE, AUTHORIZATION, CAPTURE, CREDIT, or you can use any other future development Bluefin types using the Expression button at the end of the dropdown list. If the value submitted does not match a supported value, the transaction is rejected.

* Payment description

Tells what the transaction is about, for example a service name. This will appear in statements, receipts, etc.

* Amount - total to pay

The total Amount to pay in the selected currency. Can contain other context tokens, for example \[TotalAmount\] and My Tokens.

* Credit Card Number

Which of the fields in this form should be used as Credit Card Number

* Credit Card CCV

Which of the fields in this form should be used as Credit Card CCV. This field is required if the merchant would like to use the Card Code Verification \\(CCV\\) security feature.

* Expiration Month

Which of the fields in this form should be used as the customer’s credit card expiration Month.

* Expiration Year

Which of the fields in this form should be used as The customer’s credit card expiration Year.

Note: x\_exp\_date Value: The customer’s credit card expiration date will be sent as a concatenation of the Expiration Month and Expiration Year fields.

Formats accepted by Bluefin: MMYY, MM/YY,MM-YY, MMYYYY, MM/YYYY, MM-YYYY. Set your fields accordingly.

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

Select which extra data to pass to Bluefin. Map Bluefin's Fields to Action Form Fields or Expressions. Additional data to pass to Bluefin. Make sure you read the AIM manual. Some common used data could be perhaps x\_invoice\_num, x\_email, x\_cust\_id, with values from some tokens.

* Output Bluefin Response Code Token Name

Optionally provide a token name where to store the Bluefin Response Code generated by the transaction. For example, store Bluefin Response Code that is needed later in another action.

* Output Bluefin Response Reason Code Token Name

Optionally provide a token name where to store the Bluefin Response Reason Code generated by the transaction. For example, store Bluefin Response Reason Code that is needed later in another action. \(useful purpose: send it to an admin\).

* Output Bluefin Response Reason Text Token Name

Optionally provide a token name where to store the Bluefin Response Reason Text generated by the transaction. For example, store Bluefin Response Reason Text that is needed later in another action.

* Output Bluefin Response Authorization Code Token Name

Optionally provide a token name where to store the Authorize.Net Response Authorization Code generated by the transaction. The authorization or approval code. For example, store Bluefin Response Authorization Code that is needed later in another action.

* Output Bluefin Response Transaction ID Token Name

Optionally provide a token name where to store the Bluefin Response Transaction ID generated by the transaction. The payment gateway-assigned identification number for the transaction. For example, store Bluefin Response Transaction ID that is needed later in another action.

* On Approved

Define a list of actions that should execute when this action's result is Approved.

* On Declined

Define a list of actions that should execute when this action's result is Declined.

* On Error

Define a list of actions that should execute when this action's result is Error.

* On Held For Review

Define a list of actions that should execute when this action's result is Held For Review.

