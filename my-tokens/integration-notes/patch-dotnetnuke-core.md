# Patch DotNetNuke Core

NOTE: Move the DLLs here.

To maximize capabilities, it's recommended that you allow My Tokens to patch DotNetNuke core.

First time after you install My Tokens and access the administration console you'll be asked either you want to patch the DotNetNuke core. This will make My Tokens available in all places that support standard token replacer, including a large number of standard and commercial modules. Note that you have to have super user rights to apply the patch automatically.

Note that you don't have to make a decision right away, you can dismiss the popup asking about the patch and access it later by clicking the toolbar button.

### How does it work?

DotNetNuke doesn't have a mechanism to provide other token replacers, so My Tokens only works with modules that have been already integrated with (see My Tokens page for list of supported standard and commercial modules). Patching the core means replacing DotNetNuke.dll with another file we precompile to fully support My Tokens.

### Benefits of patching the DNN core

Patching the core will make My Tokens available in all places where standard token replacing is supported. This includes a large number of standard or commercial modules.

Only Super User Accounts can use this function from My Tokens Studio. Login with a Super User account or notify one...

### How to undo the patch

Note that My Tokens will make a backup of your current /bin/DotNetNuke.dll file and put it under /DesktopModules/avt.MyTokens/Backup. So if you later need to undo the patch, just copy the backup back to the /bin folder.

### How to apply the patch manually

Download patched DLLs for various versions of DotNetNuke at the end of the page.
If you need to compile your own DotNetNuke, browse the public repository [here](https://github.com/bogdan-litescu/DotNetNuke-Core-My-Tokens-Patch){:target="_blank"} and download the source code for your version. We only included files that changes so you can safely override your folders (except you already made other changes to those files in which case you need to merge them first).

### Contributions are welcomed

There are lots of DNN versions out there and it's a great effort to patch every one of them. We added notifications so when you request to patch a version we don't already have it here an email is sent to us. But if you can do the patch yourself and post it here (fork the pull request) that would be great. Note that we welcome all kind of patches, for example to add token replacement capabilities to meta tags, standard modules and so on.