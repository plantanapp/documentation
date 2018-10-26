# Installation

Redirect Toolkit can be installed through Extensions screen.

<div style="text-align:center">

![](\assets/host-extensions.png)

</div>

On successful install you'll see the avt.Redirect Toolkit module in the module list.

<div style="text-align:center">

![](\assets/add-redirect-toolkit.png)

</div>

You have to add a Redirect Toolkit module to the page then start configuring redirects. Each redirect can then be made global, in each case it runs for all page requests. Otherwise, the redirect runs only in the context of the page where the module has been added to.

For the module to be able to execute redirects make sure ALL ROLES & USERS that will be affected have view rights to the module (this is specified in Module Settings, by default it inherits view permissions from the DNN page). The safest way to proceed is to grant view rights to all users because Redirect Toolkit will make itself invisible for the non-administrator users. Note that this does not apply for global redirects.

Don't worry when you grant view rights to all users, the module will hide itself when non-admin users access the page. The view permissions are only used to determine which users are affected by the redirects written in that specific Redirect Toolkit module. Further filtering of roles is possible with Role Redirects.

### Requirements:

* DNN 5.2+, DotNetNuke 6, DotNetNuke 7
* SQL Server 2000/2005/2008/2012/r2 (including made and express editions)
* Asp. NET 2.0+
* IIS 6.0+
  
## Manually adding the handlers to web.config

To handle global redirects, which are redirects that are evaluated for every request to any page or resource, Redirect Toolkit installs a special HTTP Handler. This is added automatically by DNN during installation.

But, if the installer doesn't have access to modify web.config for example, you'll have to add the handlers manually. To do this, open web.config in your text editor.

In web.config: / configuration / system.webServer / modules append following line:

```xml
    <add name="RedirectToolkitHandler"
         type="avt.RedirectToolkit.GlobalHttpFilter, avt.RedirectToolkit.DotNetNuke"
         preCondition="managedHandler" />
```

In web.config: /configuration/system.web/httpModules append following line:

```xml
    <add name="RedirectToolkitHandler"
         type="avt.RedirectToolkit.GlobalHttpFilter, avt.RedirectToolkit.DotNetNuke" />
```
If you get an error during installation, open the zip install package and modify the avt.RedirectToolkit.dnn file and remove the whole node show below:
```xml
    <component type="Config">
          <config>
            <configFile>web.config</configFile>
            <install>
              <configuration>
                <nodes>
                  <node path="//system.webServer/modules" action="update" key="name" collision="overwrite">
                    <add name="RedirectToolkitHandler" type="avt.RedirectToolkit.GlobalHttpFilter, avt.RedirectToolkit.DotNetNuke" preCondition="managedHandler" />
                  </node>
                  <node path="//system.web/httpModules" action="update" key="name" collision="overwrite">
                    <add name="RedirectToolkitHandler" type="avt.RedirectToolkit.GlobalHttpFilter, avt.RedirectToolkit.DotNetNuke" />
                  </node>
                </nodes>
              </configuration>
            </install>
            <uninstall>
              <configuration>
                <nodes>
                  <node path="//system.webServer/modules/add[@name='RedirectToolkitHandler']" action="remove" />
                  <node path="//system.web/httpModules/add[@name='RedirectToolkitHandler']" action="remove" />
                </nodes>
              </configuration>
            </uninstall>
          </config>
        </component>
```
After you remove these lines, add the file back to the zip and reinstall.