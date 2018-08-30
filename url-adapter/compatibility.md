# Compatibility

## Minimum Requirements

URL Adapter works on DotNetNuke 6.0+, either it's the Community or one of the Professional editions. It needs IIS6+ with ASP.NET 4.0+ and SQL Server 2000+ (including the MSDE or Express editions).

The administration console is compatible with all the major browsers.

![firefox compatible](http://www.dnnsharp.com/Portals/0/img/icon_firefox24.png)
![internet explorer 6 compatible](http://www.dnnsharp.com/Portals/0/img/icon_ie624.png)
![internet explorer 7+ compatible](http://www.dnnsharp.com/portals/0/img/icon_IE724.png)
![safari compatible](http://www.dnnsharp.com/portals/0/img/icon_safari24.png)
![opera compatible](http://www.dnnsharp.com/portals/0/img/icon_opera24.png)
![google chrome compatible](http://www.dnnsharp.com/portals/0/img/icon_chrome24.png)

## Facebook Authentication Provider

This provider doesn't work with relative URLs. It fails on `/login.aspx` URL. So make sure to switch URL Adapter to absolute URLs, so this component will actually receive `http://example.com/login.aspx` which does work.

## The Core MemberDirectory module

When using the Friendly URL Option, be aware of using the Core MemberDirectory module. This module contains a hack that makes it incompatible with URL Adapter. The issue and the fix have been described at [http://support.dotnetnuke.com/project/DNN/2/item/27195](http://support.dotnetnuke.com/project/DNN/2/item/27195){:target="_blank"}

We've attached to this page a Hot Fix that will work in DNN 6 and one that will work in DNN 7. Simply open the zip file and copy everything to your website root - it should ask you to overwrite the existing files.

We didn't test these changes on every DNN version, so if you need to reapply the Hot Fix to a specific version, follow the steps below:

1. In `Member.cs` add
    ```cs
    public string ProfileUrl
    {
        get { return DotNetNuke.Common.Globals.NavigateURL(_settings.UserTabId, "", "userId=" + _user.UserID); }
    }
    ```

2. In `MemberDirectory.js`
    
    Change
    ```js
    self.ProfileUrl = ko.computed(function () {
        return profileUrl.replace(profileUrlUserToken, self.UserId().toString());
    }, this);
    ```
    To:
    ```
    self.ProfileUrl = ko.observable(item.ProfileUrl);
    ```

3. Optionally remove `opts.profileUrl` and `opts.profileUrlUserToken` hack from `MemberDirectory.j`s and `View.ascx`

4. Compile and copy the DLL to the website `/bin` folder and the JS to `~\DesktopModules\MemberDirectory\scripts\MemberDirectory.js`


|File name|Size|Download link|
|:--|:--:|:--:|
|MemberDirectory-HotFix-DNN-7.0.5.zip|16K|[download](http://dl.dnnsharp.com/url-adapter-MemberDirectory-fix/MemberDirectory-HotFix-DNN-7.0.5.zip){:target="_blank"}|
|MemberDirectory-HotFix-DNN-7.0.6.zip|17K|[download](http://dl.dnnsharp.com/url-adapter-MemberDirectory-fix/MemberDirectory-HotFix-DNN-7.0.5.zip){:target="_blank"}|
|MemberDirectory-HotFix-DNN6.zip|16K|[download](http://dl.dnnsharp.com/url-adapter-MemberDirectory-fix/MemberDirectory-HotFix-DNN6.zip){:target="_blank"}|