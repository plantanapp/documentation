# Conditions

This features provide the ability to show/enable fields/actions based on a boolean expression. Dependition on the condition type it will be executed real time or on the server side. All condition options support [**MyTokens**](http://www.dnnsharp.com/dnn/modules/my-custom-tokens). Please note that all server side conditions will also add put the value between quotation marks so the following expression might break:_ "SomeValue" = "\[SomeToken\] something else". _

### **Actions**

The Condition option runs on server side, is C\# code and can contains tokens \(default tokens or custom tokens\). Based on the result of this expression the action will be either executed or ignored.

### **Fields**

* Show Conditionally -  applies from the server side, it supports C\# syntax. It's not real time. It evaluates on form load and on button clicks, for example. But you have the power of everything that's on the server, including My Tokens. Please note that if "Show Conditionally" returns false then the field value will not be saved in the reports.
* Enable Conditionally - applies from the server side, it supports C\# syntax. It's not real time. It evaluates on form load and on button clicks. But you have the power of everything that's on the server, including My Tokens.

### **Fields - Bind Expressions**

* Show option -  runs on client side, is JavaScript code, you can use \[FieldId\] from your form. In this option you can display the field depending on other fields from your form. "Bind Show" applies from client side, through JavaScript and Angular JS. It's real time. But obviously you don't have access to server side objects, such as My Tokens. This is good to show/hide fields based on values in other fields.Please note that if the "Show" condition returns false then the field value will not be saved in the reports.

### **Examples**

**Using tokens **

* \[User:UserId\] == 2  --&gt; The field will be displayed if the UserId = 2 \(default token\)
* \[HasRole:MyRole\|true\] The field will be displayed if the user has the role "MyRole". The HasRole token requires [**MyTokens**](http://www.dnnsharp.com/dnn/modules/my-custom-tokens). 

**Using Fields **

* having a text box SomeText : \[SomeText\] == "Some Value"
* having a check box CheckboxFieldId : \[CheckboxFieldId\] == true

**Using complex expressions**

* \[AgreedToTerms\] && \[Signature\] == \[Name\]
* \[AgreedToTerms\] && \(\[Signature\] == \[Name\] \|\| \[SignLaterAtYourOffice\]\)

**Using DateTime Comparison**

* It supports any C\# Date Time methods, for example: \[date1\].AddMinutes\(45\) &gt; \[DateTime:Now\] && \[date2\].AddMinutes\(55\) &lt;= \[DateTime:Now\]
* It supports multiple comparition operators, like: 
  * **== **for example: "12/18/2011 21:12" == "12/18/2011 21:12" 
  * **!= **for example: "12/18/2011 20:12" != "11/11/2011 21:11"
  * **&lt; **for example: \[Datetime:Now\] &lt; \[DateFieldID\]
  * **&lt;= **for example: \[DateFieldID1\] &lt;= "12/18/2011 21:12"
  * **&gt; **for example: "12/18/2011 21:12" &gt; \[DateFieldID\]
  * **&gt;= **for example: \#11/11/2011 21:12\# &gt;= "11/11/2011 21:11" where \# is the old way to convert old date time formats.



