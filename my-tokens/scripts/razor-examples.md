# RazorScript Examples

1) **Custom dll to use in a razor script**

- Open VisualStudio
- New Project
- Select Visual C# / ClassLibrary
- Give it a name (ClassLibrary2)
- Write some code in your class (Example.cs)

```c#
namespace NamespaceExample
{
    public class Class1
    {
        public static string HelloWorld(string name) {
        return "Hello World from " + name;
        }
    }
}
```

- Build the project
- Copy the dll in your bin folder

Project.zip

2) **Razorscript example with assembly and custom dll**

- Create a new script
- Set namespace and name (RazorExample/Hello)
- Set additional assemblies to ~/bin/ClassLibrary1.dll
- Set your script code

```c#
@{
var hello = NamespaceExample.Class1.HelloWorld(@TknParams.UserName.ToString());
}
@hello
```

Now the token [RazorExample:Hello(UserName="Me")] will return "Hello World from Me"

Side notes:
  
  - the class should have the whole namespace written
  - a tokenparameter is an object so it should be converted (ex: @TknParams.UserName.ToString())

TokenExport

3) **Provided by Duotix: Razor Token example that can change the password of a DNN User (2 parameters: PortalID and UserID)**

```c#
@{
 int dtxPortalID = Convert.ToInt32(TknParams.PortalID.ToString());
 int dtxUserID = Convert.ToInt32(TknParams.UserID.ToString());
 string dtxPassword = TknParams.Password.ToString();
  Boolean dtxResult = false;

 if (dtxUserID!=1) { // never change host
    UserInfo dtxUserInfo = DotNetNuke.Entities.Users.UserController.GetUser(dtxPortalID, dtxUserID, false); 
    UserController.ResetPasswordToken(dtxUserInfo, 2); // 2 minutes 
    string dtxPasswordResetToken = dtxUserInfo.PasswordResetToken.ToString();

    try
    {
      dtxResult = UserController.ChangePasswordByToken(dtxUserInfo.PortalID, dtxUserInfo.Username, dtxPassword, dtxPasswordResetToken);
    }
    catch (Exception dtxEx)
    {
      //@dtxEx.ToString();
    }
 }
}@dtxResult.ToString()
```

4) **Provided by Duotix: : Razor Token example that can delete a user (2 parameters: PortalID and UserID)**

```c#
@{
  int dtxPortalID = Convert.ToInt32(TknParams.PortalID.ToString());
  int dtxUserID = Convert.ToInt32(TknParams.UserID.ToString());

  if (dtxUserID!=1) { // never delete host
  UserInfo objUserInfo = DotNetNuke.Entities.Users.UserController.GetUser(dtxPortalID, dtxUserID, false);
  UserController.DeleteUser(ref objUserInfo, false, false);
  UserController.RemoveUser(objUserInfo);
}
```

5) **Provided by Duotix: : Razor Token example that can set the value of the username and email to a new value (3 parameters: PortalID, UserID and Username)**

```c#
@{
  int dtxPortalID = Convert.ToInt32(TknParams.PortalID.ToString());
  int dtxUserID = Convert.ToInt32(TknParams.UserID.ToString());
  string dtxUsername = TknParams.Username.ToString();

  if (dtxUserID!=1) { // never change host
    UserInfo dtxUserInfo = DotNetNuke.Entities.Users.UserController.GetUser(dtxPortalID, dtxUserID, false);

    dtxUserInfo.DisplayName = dtxUsername;
    dtxUserInfo.Email = dtxUsername;

    //dtxUserInfo.Membership.Approved = false;
    UserController.UpdateUser(dtxPortalID, dtxUserInfo);
    UserController.ChangeUsername(dtxUserID, dtxUsername);
  }
}
```