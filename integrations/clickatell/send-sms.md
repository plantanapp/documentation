# Send SMS via Clickatell gateway

This action sends SMS to cell numbers, via the Clickatell gateway. It can be used only for Clickatell accounts created *November 2016 onwards*.

* **Clickatell Api Key** - Required. A valid api\_key must be passed to clickatell in order to authenticate and establish a session. The value for this mandatory parameter can be found logging in online and going to Dashboard &gt; SMS Integrations. It is the REST API key. Can contain [My Tokens](/my-tokens/index.html).

* **Sender ID** - the SMS Sender ID. Leave empty to use the default from the Clickatell website. This is used to add message content. Can contain [My Tokens](/my-tokens/index.html).

* **Phone Number\(s\) to Send TO** - SMS messages need to be sent in the standard international format, with country code followed by number. No leading zero to the number and no special characters such as "+" or spaces must be used. For example, a number in the UK being 07901231234 should be changed to 447901231234.If you use Send Bulk please use one of the following separators:
  - Line feed \("\r"\)
  - Carriage Return\("\n"\)
  - Line feed with Carriage Return\("\r\n"\)
  - Semicolon\(";"\)
  - Comma\(","\)

  Can contain  [My Tokens](/my-tokens/index.html).

* **Message**- The text of the Short Message. This is used to add message content. Can contain [My Tokens](/my-tokens/index.html).

* **Response Token Name** - The token name where to store the result received from clickatell. Can contain [My Tokens](/my-tokens/index.html).

![](assets/clicka.png)
