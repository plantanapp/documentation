### NavXP as a skin object

If you want to replace the default DNN navigation with NavXP, please follow these simple steps:  
1.Go to **Portals\_default\Skins\yourskin**;  
2.Open the **.ascx** template where you want to add NavXP;  
3.In the header, add this line:  

`<%@ Register TagPrefix="DnnSharp" TagName="NavXp" Src="~/DesktopModules/DnnSharp/NavXp/Main.ascx" %>`  

4.Replace the default "navbar" div content with this:


`<div class="navbar"> <DnnSharp:NavXp runat = "server" id = "avtMenuTop" /> </div>`

5.Clear Cache if the menu doesn't appear from the first refresh.
<br>
6.To make sure that the menu is loaded from NavXP, right-click on logo and Click "Inspect". When the Console opens, scroll up few lines and there should be a div that looks like this:

   `<div class="navxp...">`

7.The menu Id can be changed 



