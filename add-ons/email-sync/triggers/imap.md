## IMAP Trigger

Creates a connection to the e-mail server using the IMAP protocol and starts listening for push mail.

The tokens below are generated:

* \[CredentialData:Hostname\] - contains the hostname of the IMAP Server;
* \[CredentialData:Username\] - contains the email/username used to contact the IMAP server;
* \[CredentialData:UseSSL\] - mentions if SSL was used to connect to the IMAP Server;
* \[CredentialData:&lt;Key&gt;\] - will be created with the custom data set in the Credential Section used for connection; 
* \[Mail:From\] - contains the sender email; 
* \[Mail:FromName\] - contains the sender's friendly name; 
  * In case of you need to extract the sender's FirstName, MiddleName, LastName the most common scenario is to use a Regex Parser Action with the \[Mail:FromName\] as Input and the following settings as Parse Data:
    * **FirstName** Stored in Token with the **\(\w+\)** Regex Pattern; 
    * **MiddleName** Stored in Token with the **\(?:\w+\[^\S\n\]+\)\(.\*\)\(?:\[^\S\n\]+\*\*\)** Regex Pattern; 
    * **LastName** Stored in Token with the **\(?:\(?:\w+\)\[^\S\n\]+\)+\(\w+\)$** Regex Patter.
* \[Mail:To\]  - contains a list of emails with friendly name separated by comma; 
* \[Mail:Cc\] - contains a list of emails with friendly name separated by comma;
* \[Mail:Bcc\] - contains a list of emails with friendly name separated by comma;
* \[Mail:Subject\] - contains the email subject; 
* \[Mail:DateSent\] - contains the date when the email has been sent;
* \[Mail:Body\] - contains the email body as HTML when it's set as HTML, otherwise it contains the text version;
* \[Mail:BodyText\] - contains email body as a plain text;
* \[Mail:BodyHTML\] - contains email body as a HTML;
* \[Mail:HasAttachments\] - contains a boolean value which mentions if the email has attachments;
* \[Mail:AttachmentsNameList\] - contains a list with all the names of the attachments separated by comma.

**Credentials** - the mandatory  information for authorization.

* **Group** -  contains the group name, configured in the Manage Credentials section, which can contain several emails \(entries\); 
* **Entry** -  contains all entries available for a group, configured in the Manage Credentials section;

**WARNING:** For each credential in the group a thread will be created. We recommend you to limit this to 20 entries.

* **Edit Manage Credentials** opens a frame where the Groups and their entries can be configured. 
  * **Group Title** - the title used in the Credential option.
  * **Credential Entries** - set for a group:
    * **Entry Title** - determine a suggestive name for your entry; 
    * **Hostname** - the details of the incoming email \(IMAP\) server, for example imap.gmail.com:993 \(933 represents the required Port\); 
    * **Use SSL** - enable this option if your Email Server requires an SSL certificate;
    * **Username** - usually the full email address; 
    * **Password** - the email password;
    * **Custom Data** where a Data Key and a Data Value, which can be used later in actions, can be appended.
* **Start Date** - use this option to specify a starting date from which the trigger will scan e-mails. This will be updated with the last run time.
* **Make this go through all existing mail at the first run**. This will override the Start Date setting.
* **Compact body text** - removes all empty lines and extra whitespace form the \[Mail:BodyText\] token.

* **Save Attachments** - enable this option to save the attached files.

* **Attachments save directory** - choose a directory where the files should be saved.

* **Filter E-mail by subject** - where a simple email subject can be appended. Enabling the Use Regex option below will parse the complete email subject according to the set Regex expression. Be advised that the subject must be a perfect match if Use Regex is not set.

* **Filter E-mail by recipient** - where a simple recipient email address can be appended. Enabling the Use Regex option below will parse the recipient email address according to the set Regex expression. Be advised that the recipient email address must be a perfect match if Use Regex is not set.

* **Filter E-mail by sender** -  where a simple sender email address can be appended. Enabling the Use Regex option below will parse the sender email address according to the set Regex expression. Be advised that the sender email address must be a perfect match if Use Regex is not set.

* **Filter E-mail by CC** - where a simple CC recipient email address can be appended. Enabling the Use Regex option below will parse the CC recipient email address according to the set Regex expression. Be advised that the CC recipient email address must be a perfect match if Use Regex is not set.

* **Filter E-mail by BCC** - where a simple BCC recipient email address can be appended. Enabling the Use Regex option below will parse the BCC recipient email address according to the set Regex expression. Be advised that the BCC recipient email address must be a perfect match if Use Regex is not set.

* **Filter E-mail by body** - where a simple plain text can be appended.The below Use Regex option enabled will parse the email body according to the set Regex expression. where a simple plain text can be appended. Enabling the Use Regex option below will parse the body email according to the set Regex expression. Be advised that the plain text must be a perfect match if Use Regex is not set.

* **Filter E-mail by attachments** - choose one of the following options:

  * Has attachements

  * Doesn't have attachements

* **Custom Headers Filters** - If your emails have other headers than the ones above, add custom Header and Filter.

![](../assets/imap.jpg)
