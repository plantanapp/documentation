# Replace Tokens with My Tokens

To skip the details, jump directly to production ready VB.NET or C# code at the end of this page.

## Direct Calls

If you have the source code of the component you want to integrate with and you know My Tokens will always be available you can link directly to *avt.MyTokens.Core.dll*. To tokenize content the simply make calls to *avt.MyToken.MyTokensReplacer.ReplaceTokensAll*, that has the following prototype:

**VB.NET**

```vb 
Shared Function ReplaceTokensAll( _
    ByVal strSourceText As String, _
    ByVal cUser As UserInfo, _
    ByVal dbgMsg As Boolean, _
    ByVal cModule As ModuleInfo) As String
```

**C#** 

```c#
static string ReplaceTokensAll(
    string strSourceText, 
    UserInfo cUser, 
    bool dbgMsg, 
    ModuleInfo cModule
);
```

**VB.NET** - Invoking MyTokens directly outside of Module scope:

```vb
strContent = avt.MyTokens.MyTokensReplacer.ReplaceTokensAll( _
    strContent, _
    UserInfo, _
    Not DotNetNuke.Common.Globals.IsTabPreview(), _
    Nothing
)
```

Invoking MyTokens directly from Module scope - note the additional parameter:

```vb
    strContent = avt.MyTokens.MyTokensReplacer.ReplaceTokensAll( _
        strContent, _
        UserInfo, _
        Not DotNetNuke.Common.Globals.IsTabPreview(), _
        ModuleSettings _
    )
```

**C#** - Invoking MyTokens directly outside of Module scope:

```c#
    strContent = avt.MyTokens.MyTokensReplacer.ReplaceTokensAll(
        strContent,
        UserInfo,
        !DotNetNuke.Common.Globals.IsTabPreview(),
        null
    );
```

Invoking MyTokens directly from Module scope - note the additional parameter:

```c#    
    strContent = avt.MyTokens.MyTokensReplacer.ReplaceTokensAll(
        strContent,
        UserInfo,
        !DotNetNuke.Common.Globals.IsTabPreview(),
        ModuleSettings
    );
```

## Using Reflection

Most often, you can't rely on MyTokens being installed. Using the code above would cause a compiler error since the type is not known. It's desirable that token replacement runs only when MyTokens is installed and reverts to a default behavior when it's not. 

**VB.NET**

*Invoking MyTokens using reflection outside of Module scope*

```vb
strContent =
    DotNetNuke.Framework.Reflection.CreateType("avt.MyTokens.MyTokensReplacer").InvokeMember( _
        "ReplaceTokensAll", _
        System.Reflection.BindingFlags.InvokeMethod, _
        Nothing, _
        Nothing, _
        New [Object]() { _
            strContent, _
            UserInfo, _
            Not DotNetNuke.Common.Globals.IsTabPreview(), _
            Nothing
        } _
    )
```

*Invoking MyTokens using reflection from Module scope - note the additional parameter*

```vb
strContent =
    DotNetNuke.Framework.Reflection.CreateType("avt.MyTokens.MyTokensReplacer").InvokeMember( _
        "ReplaceTokensAll", _
        System.Reflection.BindingFlags.InvokeMethod, _
        Nothing, _
        Nothing, _
        New [Object]() { _
            strContent, _
            UserInfo, _
            Not DotNetNuke.Common.Globals.IsTabPreview(), _
            ModuleConfiguration _
        } _
    )
```

**C#**

Invoking MyTokens using reflection outside of Module scope

```c#

strContent =
    DotNetNuke.Framework.Reflection.CreateType("avt.MyTokens.MyTokensReplacer").InvokeMember(
        "ReplaceTokensAll", 
        System.Reflection.BindingFlags.InvokeMethod, 
        null, 
        null, 
        new object[] { 
            strContent, 
            UserInfo, 
            !DotNetNuke.Common.Globals.IsTabPreview(),
            null 
        }
    ).ToString();
```

*Invoking MyTokens using reflection from Module scope - note the additional parameter*

```c#
strContent =
    DotNetNuke.Framework.Reflection.CreateType("avt.MyTokens.MyTokensReplacer").InvokeMember(
        "ReplaceTokensAll", 
        System.Reflection.BindingFlags.InvokeMethod, 
        null, 
        null, 
        new object[] { 
            strContent, 
            UserInfo, 
            !DotNetNuke.Common.Globals.IsTabPreview(),
            ModuleSettings
        }
    ).ToString();
```

Don't forget to encapsulate this code inside try.. catch statements. Could be that MyTokens is not installed or there is an exception thrown that you'll need to handle.

## Production Ready Code

In practice, the solution needs to take into account other factors such as minimizing the overhead of using reflection or reverting to a default behavior.

The function below has the following features:

  1.Uses reflection method so if MyTokens is not installed the website runs normally.
  2.Can be called both from Module scope and from other components (Skin Objects, Services, Http Handlers, etc).
  3.Implements caching so overhead that comes from reflection is eliminated
  4.Reverts to standard DotNetNuke token replacement when MyTokens is not installed
  5.Code can be used as it is, copy paste the function and the includes. Then, invoke it whenever you need token replacement. It's recommended to include the method in a Business Controller Class so it's visible to all controls.
  6.It's *Thread Safe*

#### VB.NET Complete Code Sample

```vb
Imports System.Web
Imports DotNetNuke.Entities.Modules
Imports System.Reflection
' ................................

' replace tokens in a module 
strContent = Tokenize(strContent, ModuleConfiguration, False, True)

' replace tokens outside of a module
strContent = Tokenize(strContent, Nothing, False, True)

' ................................

Public Shared Function Tokenize(strContent As String, modInfo As DotNetNuke.Entities.Modules.ModuleInfo, currentUser as DotNetNuke.Entities.Users.UserInfo, forceDebug As Boolean, bRevertToDnn As Boolean) As String
  Dim cacheKey_Installed As String = "avt.MyTokens2.Installed"
  Dim cacheKey_MethodReplace As String = "avt.MyTokens2.MethodReplace"

  Dim bMyTokensInstalled As String = "no"
  Dim methodReplace As System.Reflection.MethodInfo = Nothing

  Dim bDebug As Boolean = forceDebug
  If Not bDebug Then
    Try
      bDebug = Not DotNetNuke.Common.Globals.IsTabPreview()
    Catch
    End Try
  End If

  SyncLock GetType(DotNetNuke.Services.Tokens.TokenReplace)
    ' first, determine if MyTokens is installed
    If HttpRuntime.Cache.[Get](cacheKey_Installed) Is Nothing Then

      ' check again, maybe current thread was locked by another which did all the work
      If HttpRuntime.Cache.[Get](cacheKey_Installed) Is Nothing Then

        ' it's not in cache, let's determine if it's installed
        Try
          Dim myTokensRepl As Type = DotNetNuke.Framework.Reflection.CreateType("avt.MyTokens.MyTokensReplacer", True)
          If myTokensRepl Is Nothing Then
            Throw New Exception()
          End If
          ' handled in catch
          bMyTokensInstalled = "yes"

          ' we now know MyTokens is installed, get ReplaceTokensAll methods
          methodReplace = myTokensRepl.GetMethod("ReplaceTokensAll", System.Reflection.BindingFlags.[Public] Or System.Reflection.BindingFlags.[Static], Nothing, System.Reflection.CallingConventions.Any, New Type() {GetType(String), GetType(DotNetNuke.Entities.Users.UserInfo), GetType(Boolean), GetType(DotNetNuke.Entities.Modules.ModuleInfo)}, Nothing)

          If methodReplace Is Nothing Then
            ' this shouldn't really happen, we know MyTokens is installed
            Throw New Exception()

          End If
        Catch
          bMyTokensInstalled = "no"
        End Try

        ' cache values so next time the funciton is called the reflection logic is skipped
        HttpRuntime.Cache.Insert(cacheKey_Installed, bMyTokensInstalled)
        If bMyTokensInstalled = "yes" Then
          HttpRuntime.Cache.Insert(cacheKey_MethodReplace, methodReplace)
        End If
      End If
    End If
  End SyncLock

  bMyTokensInstalled = HttpRuntime.Cache.[Get](cacheKey_Installed).ToString()
  If bMyTokensInstalled = "yes" Then
    methodReplace = DirectCast(HttpRuntime.Cache.[Get](cacheKey_MethodReplace), System.Reflection.MethodInfo)
    If methodReplace Is Nothing Then
      HttpRuntime.Cache.Remove(cacheKey_Installed)
      Return Tokenize(strContent, modInfo, forceDebug, bRevertToDnn)
    End If
  Else
    ' if it's not installed return string or tokenize with DNN replacer
    If Not bRevertToDnn Then
      Return strContent
    Else
      Dim dnnTknRepl As New DotNetNuke.Services.Tokens.TokenReplace()
      dnnTknRepl.AccessingUser = currentUser
      dnnTknRepl.DebugMessages = bDebug
      If modInfo IsNot Nothing Then
        dnnTknRepl.ModuleInfo = modInfo
      End If

      ' MyTokens is not installed, execution ends here
      Return dnnTknRepl.ReplaceEnvironmentTokens(strContent)
    End If
  End If

  ' we have MyTokens installed, proceed to token replacement
  Return DirectCast(methodReplace.Invoke(Nothing, New Object() {strContent, currentUser, bDebug, modInfo}), String)

End Function
```

#### C# Complete Code Sample

```c#

using System.Web;
using DotNetNuke.Entities.Modules;
using System.Reflection;

// ................................

// replace tokens in a module
strContent = Tokenize(strContent, ModuleConfiguration, UserInfo, PortalId);

// replace tokens outside of a module
strContent = Tokenize(strContent, null, UserController.GetCurrentUserInfo(), PortalController.GetCurrentPortalSettings().PortalId);
// replace tokens outside of an HTTP context (from a scheduled task for example)
strContent = Tokenize(strContent, null, null, -1);

// ................................

public static string Tokenize(string strContent, DotNetNuke.Entities.Modules.ModuleInfo modInfo, DotNetNuke.Entities.Users.UserInfo user, int portalId, bool forceDebug = false, bool bRevertToDnn = true)
    {
        string cacheKey_Installed = "avt.MyTokens2.Installed";
        string cacheKey_MethodReplace = "avt.MyTokens2.MethodReplace";

        string bMyTokensInstalled = "no";
        System.Reflection.MethodInfo methodReplace = null;

        bool bDebug = forceDebug;
        if (!bDebug) {
            try { bDebug = DotNetNuke.Common.Globals.IsEditMode(); } catch { }
        }

        lock (typeof(DotNetNuke.Services.Tokens.TokenReplace)) {
            // first, determine if MyTokens is installed
            if (HttpRuntime.Cache.Get(cacheKey_Installed) == null) {

                // check again, maybe current thread was locked by another which did all the work
                if (HttpRuntime.Cache.Get(cacheKey_Installed) == null) {

                    // it's not in cache, let's determine if it's installed
                    try {
                        Type myTokensRepl = DotNetNuke.Framework.Reflection.CreateType("avt.MyTokens.MyTokensReplacer", true);
                        if (myTokensRepl == null)
                            throw new Exception(); // handled in catch

                        bMyTokensInstalled = "yes";

                        // we now know MyTokens is installed, get ReplaceTokensAll methods
                        methodReplace = myTokensRepl.GetMethod(
                            "ReplaceTokensAll",
                            System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Static,
                            null,
                            System.Reflection.CallingConventions.Any,
                            new Type[] { 
                                typeof(string), 
                                typeof(DotNetNuke.Entities.Users.UserInfo), 
                                typeof(bool),
                                typeof(DotNetNuke.Entities.Modules.ModuleInfo)
                            },
                            null
                        );

                        if (methodReplace == null) {
                            // this shouldn't really happen, we know MyTokens is installed
                            throw new Exception();
                        }

                    } catch {
                        bMyTokensInstalled = "no";
                    }

                    // cache values so next time the funciton is called the reflection logic is skipped
                    HttpRuntime.Cache.Insert(cacheKey_Installed, bMyTokensInstalled);
                    if (bMyTokensInstalled == "yes") {
                        HttpRuntime.Cache.Insert(cacheKey_MethodReplace, methodReplace);
                    }
                }
            }
        }

        bMyTokensInstalled = HttpRuntime.Cache.Get(cacheKey_Installed).ToString();
        if (bMyTokensInstalled == "yes") {
            methodReplace = (System.Reflection.MethodInfo)HttpRuntime.Cache.Get(cacheKey_MethodReplace);
            if (methodReplace == null) {
                HttpRuntime.Cache.Remove(cacheKey_Installed);
                return Tokenize(strContent, modInfo, user, portalId, forceDebug, bRevertToDnn);
            }
        } else {
            // if it's not installed return string or tokenize with DNN replacer
            if (!bRevertToDnn) {
                return strContent;
            } else {
                DotNetNuke.Services.Tokens.TokenReplace dnnTknRepl = new DotNetNuke.Services.Tokens.TokenReplace();
                dnnTknRepl.AccessingUser = DotNetNuke.Entities.Users.UserController.GetCurrentUserInfo();
                dnnTknRepl.User = user ?? DotNetNuke.Entities.Users.UserController.GetCurrentUserInfo();
                dnnTknRepl.DebugMessages = bDebug;
                if (modInfo != null)
                    dnnTknRepl.ModuleInfo = modInfo;

                // MyTokens is not installed, execution ends here
                return dnnTknRepl.ReplaceEnvironmentTokens(strContent);
            }
        }

        // quick hack to pass a portal id to My Tokens
        if (modInfo == null && portalId != -1) {
            modInfo = new DotNetNuke.Entities.Modules.ModuleInfo() {
                PortalID = portalId
            };
        }
        // we have MyTokens installed, proceed to token replacement
        return (string)methodReplace.Invoke(
            null,
            new object[] {
                strContent,
                user ?? DotNetNuke.Entities.Users.UserController.GetCurrentUserInfo(),
                bDebug,
                modInfo
            }
        );

    }
```