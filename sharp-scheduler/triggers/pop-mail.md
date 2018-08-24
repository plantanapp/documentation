# POP Mail

The new POP Mail trigger is fired each time an email is received, and the following tokens are created along with this trigger:

* \[Mail:From\]
* \[Mail:FromName\]
* \[Mail:To\]
* \[Mail:Cc\]
* \[Mail:Bcc\]
* \[Mail:Subject\]
* \[Mail:DateSent\]
* \[Mail:Body\]
* \[Mail:HasAttachments\]
* \[Mail:AttachmentsNameList\]

## POP Mail trigger with Gmail:

1. Enable POP option in your Gmail account: [https://support.google.com/mail/troubleshooter/1668960?hl=en\#ts=1665119](https://support.google.com/mail/troubleshooter/1668960?hl=en#ts=1665119) ;
2. Create a new cron ;
3. Add POP Mail trigger ;
4. Set POP Gmail server details: pop.gmail.com \(which can be found here: [https://support.google.com/mail/troubleshooter/1668960?hl=en&rd=1\#ts=1665119,1665162](https://support.google.com/mail/troubleshooter/1668960?hl=en&rd=1#ts=1665119,1665162)\) ;
5. Check Use SSL option ;
6. Add your Gmail "Username" and "Password" ;
7. Set an interval and a "Start Date" ;
8. Set a subject in "Filter email by subject" field ;
9. Set a sender email address in "Filter email by sender" ;
10. Additionally or optionally, set a Header and a Filter in "Custom Headers Filters" ;
11. Set cron action which will be executed at the interval set on the trigger each time an email which matches the filters set on the trigger is sent .

Enable recent mode if you have issues with Gmail emails not being received by the trigger:  
By default Gmail makes the email available to the first POP client that accesses the mail. So if you have another POP client that queries the account \(Outlook, mobile device, etc.\) and you have issues with our POP Mail trigger you can enable the recent mode by adding 'recent:' in front of the username. This will ensure that you receive the email from the last 30 days no matter what.

## POP Mail trigger with Yahoo:

1. Create a new cron job ;
2. Add POP Mail trigger ;
3. Set the Pop3 server option to pop.mail.yahoo.com  \(which can be found here: [https://help.yahoo.com/kb/pop-server-settings-sln4724.html](https://help.yahoo.com/kb/pop-server-settings-sln4724.html)\) ;
4. Check Use SSL option ;
5. Set Username and Password ;
6. Set Check Interval and Start date ;
7. Set a subject and a sender ;
8. Set a cron action which will be executed when an email which matches the filters set on the trigger is send .
