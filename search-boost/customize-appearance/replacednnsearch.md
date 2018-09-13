# Replace DNN Search Box

## Automatically: 

In version 3 you can use the button Patch DNN Skins. Be careful though when uninstalling SearchBoost: you have to manually remove references to SearchBoost from all patched skins (in latest version you can automatically unpatch all patched skin files).

<iframe width="907" height="680" src="https://www.youtube.com/embed/caUQnMjxxuk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Manually:

Using SearchBoost as a skin object requires some manual setup:

* Locate the _ascx_ file of the skin you want to install SearchBoost into; in our example, we'll assume the skin is in `/Portals/_default/Skins/MinimalExtropy/index.ascx` 
or the default path: `\Portals\_default\Skins\Gravity`

* Open the skin _ascx_ file (in our example, that is index.ascx) in your favorite text editor

* Before declaring our tag, we need to register our control; add the following line right after the ```<%@Control..>``` declaration the ascx file:

```html
<%@ Register TagPrefix="avt" TagName="SearchBoost" Src="~/DesktopModules/DnnSharp/SearchBoost/SearchInput.ascx"%>
```

* Use Search Boost tag. Simply add the following line in the same skin ascx file to the place you want it to show up:

```html
<avt:SearchBoost runat = "server" id = "avtSearch" />
```

Note that this only applies for Search Input module. The results module doesn't work as a Skin Object, it only works as a module.

Search Boost 3.2 brings forth an Unpatch Skins button that allows users to more easily remove SB as skin from the site.



