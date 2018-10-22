# Refund a Transaction

### Intro

This transaction type is used to refund a customer for a transaction that was successfully settled.

### Requirements

* The merchant must have a merchant bank account that allows Internet transactions.
* The merchant must have an e-commerce \(Card Not Present\) Authorize.Net Payment Gateway account.
* The merchant must have a valid Secure Sockets Layer \(SSL\) certificate and their Web site must be capable of initiating both client- and server-side SSL connections.
* The merchant must be able to store payment gateway account data securely \(for example, API Login ID, or Transaction Key\).
* The merchant must have Action Form module installed.

### Getting started

### Step 1 - Sign Up and Activate an Authorize.Net Account.

You will need both a merchant account and Authorize.Net Payment Gateway to accept credit cards.

You can sign up here: [https://www.authorize.net/signupnow/](https://www.authorize.net/signupnow/).

### Step 2 - Get the API Login ID and Transaction Key from Authorize.Net.

These keys will authenticate requests to the Authorize.Net Payment Gateway.

Get the id and the key if don't already have them. You will find them in your ACCOUNT -&gt; Settings -&gt; Security Settings -&gt; General Security Settings -&gt; API Login ID and Transaction Key.

Your API Login ID and Transaction Key are unique pieces of information specifically associated with your payment gateway account. However, the API login ID and Transaction Key are NOT used for logging into the Merchant Interface. These two values are only required when setting up an Internet connection between your Web site and the payment gateway. They are used by the payment gateway to authenticate that you are authorized to submit Web site transactions.

### Step 3 - Set up Action Form

Add an Action Form module to your page, go to Manage Form, and select Start from Scratch.

Add a text box field\(title ex: TransactionID\) a button with a Refund a Transaction action.

Set your API Login ID and Transaction Key.

Set the description and refund amount for your item.

Add in Transaction ID the token for your text box field.

Add any extra fields that you need for your particular setup.

### Settings Reference

* API Login ID
  * Required. API Login ID. This key will authenticate requests to the payment gateway.
* Transaction Key
  * Required. Transaction Key. This key will authenticate requests to the payment gateway.
* Transaction amount
  * Required. Amount of the transaction. This is the total amount and must include tax, shipping, and any other charges. Up to 15 digits with a decimal point.
* Transaction ID
  * Required. Transaction ID of the original settled transaction.
* On Success

  * Define a list of actions that should execute when a transaction is successfully refunded. 
    You can use the \[AuthorizeResponseCode\], \[AuthorizeResponseMessage\], \[AuthorizeAuthCode\], \[AuthorizeTransactionId\] tokens to show more info.

* On Error - Define a list of actions that should execute when this action's result is Error. You can use the \[AuthorizeErrorMessage\] and \[AuthorizeErrorCode\] tokens to show more info.



