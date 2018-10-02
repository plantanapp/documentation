# Data Sources

Token Sources represent where Data comes from, for example the Database, Web Services or files from remote FTP Serves.

My Tokens support the following Token Data Sources:

* **Constant String:** data is inputted by user
* **Database Query:** My Tokens connects to a database server (by default the DNN database) and runs a select query. The results are embedded in tokens that can be used anywhere where My Tokens is supported
* **HTTP Request:** My Tokens connects to the URL provided in the configuration optionally passing GET and POST parameters and retrieves the data. Further processing (such as executing an XPath expression) is possible by use of Parsers.
* **File System:** My Tokens loads a file from local disk and makes the content available through tokens. You may actually only need small parts of the file, so you can use the Parsers to extract desired content.
* **FTP Request:** Same as the File System Token, except the file is loaded from a remote FTP Server.
* **Execute Type:** My Tokens calls a method from your class that implements IExecutableToken interface from avt.MyTokens.Core assembly. The method returns a dictionary of tokens. [Read more...](execute-type.html)
* **Mail Server (Experimental):** My Tokens connects to email servers via POP3 or IMAP and grabs emails that are turned into tokens.