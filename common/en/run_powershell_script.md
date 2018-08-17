### Run PowerShell Script Action

This action executes a script with Windows PowerShell, optionally storing the output for later use in other actions. PowerShell is very powerful in achieving system integration such as retrieving information from OS or updating configuration.
This action exposes the following configuration options:
Script. This is the PowerShell script to execute. Here’s a very simple example that returns the identity of the application pool: [System.Security.Principal.WindowsIdentity]::GetCurrent().Name. Can contain context tokens (for example [ContextTokenName]) and My Tokens.+

Output Token Name. Optionally, provide a name under which to store the execution result in the job context. This will make it possible to use it in other actions down the stack.

![](Run powershell.png)