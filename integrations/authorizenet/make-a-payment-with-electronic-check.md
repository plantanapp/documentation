# Make a payment with Electronic Check

**Intro**

This type of payment allows one to submit electronic check transactions through an Authorize.Net Card Not Present Payment Gateway account, using Authorize.Net's Advanced Integration Method (AIM).

eCheck.Net® is Authorize.Net’s exclusive electronic check processing solution. eCheck.Net enables Web merchants already processing credit card transactions through the Authorize.Net Payment Gateway to offer their customers an additional payment option.

The security of an AIM transaction is ensured through a 128-bit Secure Sockets Layer (SSL) connection between the merchant’s Web server and the Authorize.Net Payment Gateway.

There are different electronic check transaction types supported by the payment gateway and they each have specific field requirements: Authorization and Capture, Authorization Only, Prior Authorization and Capture, etc.Make sure you already read the Authorize.Net manuals prior to use different electronic check transaction types and specific fields.

There are currently six eCheck.Net transaction types supported by the Authorize.Net Payment Gateway.

* Accounts Receivable Conversion (ARC)

  This transaction type is a one-time charge against a customer's checking account. ARC allows merchants to collect payments received in the mail or left in a drop-box and convert them to an electronic payment.
  
* Back Office Conversion (BOC)
 
  This transaction type is a one-time charge against a customer's checking account. BOC allows merchants to collect a check written at a point of sale (checkout counter, manned bill payment location, service call location) and convert it to an ACH debit during back office processing.

* Cash Concentration or Disbursement (CCD)

  This transaction type is a one-time or recurring charge or refund against a business checking account. CCD transactions are fund transfers to or from a corporate entity.

* Internet-Initiated Entry (WEB)

  This transaction type is a one-time or recurring charge against a consumer checking or savings account and for which payment authorization has been obtained from the customer via the Internet.

* Prearranged Payment and Deposit Entry (PPD)

  This transaction type is a one-time or recurring charge or refund against a consumer checking or savings account. PPD transactions may only be originated when payment and deposit terms between the merchant and the customer are prearranged.

* Telephone-Initiated Entry (TEL)
  
  This transaction type is a one-time charge against a consumer checking or savings account that was originated by telephone. TEL transactions can only be originated when an existing relationship between the merchant and the customer exists; or if no relationship exists, the customer must initiate the telephone call to the merchant.

For your convenience, DNN Authorize.Net Add-on contains four templates to get you started, named: 'Pay With eCheck ARC Authorize.Net', 'Pay With eCheck PPD Authorize.Net', 'Pay With eCheck TEL Authorize.Net' and 'Pay With eCheck WEB Authorize.Net'.

**Getting started**

**Step 1 - Sign Up and Activate an Authorize.Net Account. **

You will need both a merchant account and Authorize.Net Payment Gateway to accept credit cards.
You can sign up here: https://www.authorize.net/signupnow/.

**Step 2 - Get the API Login ID and Transaction Key from Authorize.Net. **

These keys will authenticate requests to the Authorize.Net Payment Gateway.
Get the id and the key if don't already have them. You will find them in your ACCOUNT -> Settings -> Security Settings -> General Security Settings -> API Login ID and Transaction Key.

Your API Login ID and Transaction Key are unique pieces of information specifically associated with your payment gateway account. However, the API login ID and Transaction Key are NOT used for logging into the Merchant Interface. These two values are only required when setting up an Internet connection between your Web site and the payment gateway. They are used by the payment gateway to authenticate that you are authorized to submit Web site transactions.

**Step 3 - Setup**

Add a DNN Sharp module to your page, go to Manage Settings, and add a new button with an Authorize.Net Action.

Set your API Login ID and Transaction Key.

Set the description and total amount for your item.

Add any extra fields that you need for your particular setup.

**Settings Reference**
* API Login ID

  Required. API Login ID. This key will authenticate requests to the payment gateway.
  
* Transaction Key

  Required. Transaction Key. This key will authenticate requests to the payment gateway.
  
* Credit Card Transaction Type

  Credit Card Transaction Type. It can be one of the following: AUTH_CAPTURE, AUTH_ONLY, PRIOR_AUTH_CAPTURE, CAPTURE_ONLY, CREDIT, VOID, or you can use any other future development Authorize.Net types using the Expression button at the end of the dropdown list.If the value submitted does not match a supported value, the transaction is rejected. If this field is not submitted or the value is blank, the payment gateway will process the transaction as an AUTH_CAPTURE.

* Go Live

  Enable this option to switch to Live Mode. By default, unchecked, Test Mode, the transaction will be posted to the Authorize.Net's test server for developer accounts: https://test.authorize.net/gateway/transact.dll.
  
  Make a few test transactions before going live!

* Payment description

  Tells what the transaction is about, for example a service name. This will appear in statements, receipts, etc.

* Transaction's currency 

  For your convenience there is a dropdown list with a few preset currencies. You can change it to other currencies at any time using the Expression button at the end of the dropdown list. The currencies that a merchant can accept through Authorize.Net are determined by their payment processor. Read the documentation or contact Authorize.Net to check which of the currencies are set for your account.

* Amount - total to pay

  The total Amount to pay in the selected currency. Can contain other context tokens, for example [TotalAmount] and My Tokens.

* Bank Aba Code

  Which of the fields in this form should be used as Bank Aba Code. The valid routing number of the customer's bank.

* Bank Acct Num

  Which of the fields in this form should be used as Bank Acct Num. The customer's valid bank account number

* Bank Acct Type

  Which of the fields in this form should be used as Bank Acct Type. The type of bank account.

* Bank Name

  Which of the fields in this form should be used as Bank Name. The name of the bank that holds the customer's account.

* Bank Acct Name

  Which of the fields in this form should be used as Bank Acct Name. The name associated with the bank account.

* eCheck Type
 * ARC - Accounts Receivable Conversion
 * BOC - Back Office Conversion
 * CCD - Cash Concentration or Disbursement
 * PPD - Prearranged Payment and Deposit Entry
 * TEL - Telephone-Initiated Entry
 * WEB - Internet-Initiated Entry
 * The type of electronic check transaction.

* Bank Check Number

  Which of the fields in this form should be used as Bank Check Number. The check number on the customer's paper check. Required only when x_echeck_type=ARC or BOC.

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
  Select which extra data to pass to Authorize.Net. Map Authorize.Net's Fields to Action Form Fields or Expressions. Additional data to pass to Authorize.Net. Make sure you read the AIM manual. Some common used data could be perhaps x_invoice_num, x_email, x_cust_id, with values from some tokens.

* Output Authorize.Net Response Code Token Name

  Optionally provide a token name where to store the Authorize.Net Response Code generated by the transaction. For example, store Authorize.Net Response Code that is needed later in another action.

* Output Authorize.Net Response Reason Code Token Name

  Optionally provide a token name where to store the Authorize.Net Response Reason Code generated by the transaction. For example, store Authorize.Net Response Reason Code that is needed later in another action. (useful purpose: send it to an admin).
  
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