# Send SMS via Clickatell gateway - Obsolete

This action sends SMS to cell numbers, via the Clickatell gateway. It can be used only for Clickatell accounts created *prior to November 2016*.

* **API ID** - Required. A valid api\_id, user and password must be passed to clickatell in order to authenticate and establish a session. The value for this mandatory parameter can be found logging in online and going to APIs, Manage APIs. It is the SOAP API id. This field supports [My Tokens](/my-tokens/index.html).

* **Username** - Required. A valid user must be passed to clickatell in order to authenticate and establish a session. This field supports [My Tokens](/my-tokens/index.html).

* **Password** - Required. A valid password must be passed to clickatell in order to authenticate and establish a session. Your account password. This field supports  [My Tokens](/my-tokens/index.html).

* **Sender ID** -  the SMS Sender ID. Leave empty to use the default from the Clickatell website. This field supports [My Tokens](/my-tokens/index.html).

* **MO** - This sets the MO Clickatell parameter to 1. It is used when the SenderID is a two-way number.

* **Max. Length of the Message** - Max. Length of the message. If left empty, no limit for text length. \(Clickatell maximum of 5355 characters.\) This field supports  [My Tokens](/my-tokens/index.html).

* **Phone Number\(s\) to Send TO** - SMS messages need to be sent in the standard international format, with country code followed by number. No leading zero to the number and no special characters such as "+" or spaces must be used. For example, a number in the UK being 07901231234 should be changed to 447901231234. If you use Send Bulk please use one of the following separators:
  - Line feed \("\r"\)
  - Carriage Return\("\n"\)
  - Line feed with Carriage Return\("\r\n"\)
  - Semicolon\(";"\)
  - Comma\(","\)

  This field supports [My Tokens](/my-tokens/index.html).



