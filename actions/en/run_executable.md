### Run Executable Action

This action runs an executable on the server, optionally capturing the output. This makes it a powerful integration point with the system or custom binaries. Note that if you don’t run the app in Full Trust, this action requires that the Application Pool identity have appropriate permissions. The following configuration options are available: 

**Application**. Determines which application to execute, like cmd.exe. If the application is not the PATH of the system, then you need to supply the absolute path, for example c:\windows\system32\cmd.exe. This field supports context tokens and My Tokens.

Notes: 
* Usually, if you want to call applications out of the site location you must grant special permissions to the site.

**Arguments**. Optionally pass command line arguments to the application. Using cmd.exe in the Applicationfield and /c "echo test" in this field will output the word test. It can contain context tokens ([ContextTokenName]) and My Tokens.

**Output Token Name**. Optionally, provide a name under which to store the execution result in the job context. This will make it possible to use in other actions down the stack. Note how the examples provided here use instructions from the standard windows command line. This is very limiting, so that’s why we've also implemented another action that provides access to the Windows PowerShell.

Notes:
* You should use Output token for console applications (Not for graphical applications).

![](Run executable.png)