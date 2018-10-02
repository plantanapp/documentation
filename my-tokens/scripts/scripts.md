# Scripts/Templates

Starting with version 2.0 My Tokens supports the Razor template engine. This means is now possible to use tokens and build content in more clever ways. Below are just a few benefits that the template engine provide.

* Loops
  + It is now possible to iterate database tokens and build HTML content with all results.

* Conditions
  + This has been requested many times by My Tokens users, that is the ability to conditionally display one content or another using independent criteria.

* .NET Framework Features
  + Actually, the DNN is just a subset/wrapper of .NET framework. In the template you can access any object available in .Net 4.0 framework.

## Loops

This concept allows displaying a list of items formatted in similar ways. Let's take for example a list of users and display it as an unordered list.

* First, create a database token that executes the following query: ``SELECT * FROM Users``
* Under columns fields put ``FirstName`` and ``LastName`` each on separate line.
* Let's name the token ``TestUsers`` and place it under namespace ``MyProject``.

So far nothing new. My Tokens supports database tokens since first version. Here comes the magic part.
Create a New Script and put the following template:

```c#
<ul>
@foreach (var user in MyProject.TestUsers) {
    <li>@user.FirstName @user.LastName</li>
}
</ul>
```

It's that simple! The loops only work on database tokens for now but we plan to add support for other sources as well.

Also, note that TestUsers is an list, so you can invoke each item individually by writing for example ``MyProject.TestUsers[2].FirstName``.
Writing ``MyProject.TestUsers.FirstName`` has same effect as ``MyProject.TestUsers[0].FirstName``.

## Conditions

Often in real world websites and applications content needs to be conditioned by other criteria in the application. One common example is to vary content based on either the user is logged in or not. 
The scripts below illustrate how this can be accomplished:

```c#
@if (@User.UserID != -1) {
<span>Hello @User.FirstName</span>
} else {
<span>Hello stranger...</span>
}
```

Note that there is more than one way to skin the cat both for looping and for writing conditional statements. Please refer to syntax guide for [Razor](https://docs.microsoft.com/en-us/aspnet/web-pages/overview/getting-started/introducing-razor-syntax-c){:target="_blank"}.

## Invoking .NET Framework

A Razor or Spark template is more than a text with special syntax. It actually gets transformed by Razor, respectively Spark, into a C# class then compiled at runtime into a temporary assembly. This means that you're not limited to the objects that DNN or My Tokens exposes, instead you can do anything you can imagine of by calling .NET objects directly.

Here are a few examples:

#### Display Current Date
```c#
@DateTime.Now.ToLongDateString()
```

### Objects Available to My Tokens Razor and Spark Templates

To make things a lot easier, My Token also maps some objects to the template scope.You already seen the *User* object we used in the previous examples.

We could have used ``DotNetNuke.Entities.User.UserController.GetCurrentUserInfo()``  which does the same thing. But this is too long to type, subject to typing errors and requires My Tokens users to have knowledge of DotNetNuke core architecture.

Following Objects are mapped and can be used directly in to scripts:

* Portal
  + Exposes Portal Settings object which contains properties such as *PortalID, PortalName, Description, Keywords, HomeTabId, LogoFile* and so on

* Tab
  + Exposes information about current page with properties such as *TabID, TabName, TabTitle, KeyWords, FullUrl* and so on

* Module
  + Exposes information about current module with properties such as *ModuleID, ModuleName* and so on

* User
  + Exposes information about current user with properties such as *UserID, FirstName, LastName, Email* and so

* Request
  + Exposes the current *HttpRequest* object

* Response
  + Exposes the current *HttpResponse* object

* Server
  + Exposes the current *HttpServerUtility* object

* Session
  + Exposes the current *HttpSessionState* object

* Application
  + Exposes the current *HttpApplicationState* object

### Accessing Other Tokens Programatically

Using the *[Namespace:Token]* syntax inside a Razor script will work, but it only does a string replacement before the script is compiled. This is a good practice if the tokens you are calling are constant. If the string returned by the tokens vary significantly, My Tokens will compile a script for each different value of the token. This can result give poor performances.

In this case is advised to invoke the tokens programatically using .NET objects that My Tokens exposes. This way My Tokens will compile only one script which invokes the tokens at runtime. The syntax is Namespace.TokenName.

For example, having a database token like *[MyNamespace:Token1]* can be rewritten in a Razor script as *MyNamespace.Token1*

If the token accepts parameters, then you have 2 options:

* **Pass as named parameters** (starting with version 2.6.16)

```c3
@{
  foreach (var user in My.Db(UserId:1, SomethingElse: "This is a test")) { 
    <text>@user.FirstName</text>
  }
}
```

* **Pass a dictionary** with the parameters.

```c#
@{
  var args = new Dictionary<string, object>() {
    {"UserId", 1} {"SomethingElse", "This is a test"} };
  foreach (var user in My.Db(args)) {
    <text>@user.FirstName</text>
  }
}
```

* **Pass a magic string.**

Basically, pass the entire list of parameters as you would pass it normally to the token.

``[MyNamespace:Users.FirstName(UserId=1,Other="test")]``

can be rewritten like:

``MyNamespace.Users("UserId=1,Other='test'").FirstName``

To iterate over a list of values returned by a token use following syntax:

```c#
@foreach (var item in MyNamespace.TokenName) {
    <text>@item</text>
}
```

Parameters can be passed similar to previous example. If the item comes from a database token it can actually contain fields that need to be invoked like `@item.fieldName`.

### Special TknParams Collection

If you've created some custom tokens you're already familiar with the special TknParams collection. This exists in razor scripts as well and can be invoked in the same way like other objects, for example `@TknParams.Param1`. 

If you try to do this on a parameter that was not passed into the token, you'll see that My Tokens throws an error. We've added a second form, method-like, to allow a default value to be generated when a parameter doesn't exist. The syntax is `@TknParams.Param1("Value if param1 is not set")`. To be clear, let's follow an example. Let' say your razor script is called ``[My:Script]``. If you invoke it like this, then My Tokens will get the default value from TknParams method invocation. If you invoke it like ``[My:Script(Param1="something")]`` or even ``[My:Script(Param1="")]`` then you've already given a value to the parameter and My Tokens will use that and not call on the default.