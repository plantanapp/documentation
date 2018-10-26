# Management

## Create New Containers

To create new a new Easy Container simply go to Module Settings of the module you want to create the container for and under Page Settings set container to `Easy Container > ... New Container`. The selection is shown in image below.

![module container](\easy-container\assets\easy-container-300x388w.jpg)

This is a special container that instead of displaying the module it will display the form to create a new container. This is shown in the image below.

![new dnn ec](\easy-container\assets\new-dnn-easy-container-form.png)

Note that Super Users also get to specify if the container should be per host (global, available for all portals) or only for the current portal. Module and Portal Administrators don't see this option. In this case the container will automatically be created for current portal.

The Container Name is used as the file name for the container ASCX, XML and CSS files. Read more about these on the Container Format page. Given this, Easy Container will display a error if the container name is not a valid file name.

After you provide a valid container name and hit `Create`, you should see a container similar to image below.

![easy cont def](\easy-container\assets\easy-container-default-container.png)

Notice the `Edit Container` link which you'll use to start customizing the container.

## Edit Containers

![easy cont sett](\easy-container\assets\easy-container-settings.png)

After the container is set, it's time to adjust it to fit the page and the requirement. To get started hit the Edit Container button and wait while the Settings Popup fully loads. Then, your screen should look like the image on the right.

Before proceeding to configure the container know that you can **drag** the container around the page by holding the left mouse button over the popup title bar and moving the mouse around. Or, if you prefer, you can move the popup by grabbing one of the ears of the golden box which is more fun.

Also, notice how the window transparency changes when you move the container around. This will help you many times because you'll have to move the container so you see some of it's properties changing while hiding others that you're not interested in at the moment.

Another useful feature you should now before starting edits is the question mark in the upper right corner. When clicked, it will highlight on the page the areas affected by the container you're editing. This usually means highlighting a module. But you have two modules on the same page both using same container that you're currently editing, then both will highlight on the page.

Now, let's change something. Locate the Width field on the Layout tab and type some value into it, for example 600. Notice how the page updates in real time as you type to show the container at the width you specified.

Please read through the **Settings** section to find more about what each setting does.

After you finished your changes hit `Save` to have the container updated on disk. 
It's important to know that although your browser will take the changes immediately, other browsers may have a delay until they show your changes because of the way browsers cache files. To have a browser immediately show the changes, force a page refresh (CTRL+F5 on most browsers). Why your browser updates instantly? Because we implemented some code to force loading the new CSS files through javascript.
If, on the other hand, you don't like the changes you made, just hit `Cancel` and the page will revert instantly to the way it looked before you started editing it.

## Reuse Containers

The whole idea of using containers is the ability to reuse them across the portals. Once you created a new container (as show in previous section) you will be able to use for any module (set it from Module `Settings > Page Settings > Module Container`).

But bare in mind that if you later need to change the container of a module then all modules using that container will update. If, on the other hand, you only need to make the change for that particular module, read below on more about cloning container.

## Clone Containers

So you have a container assigned to 10 modules. The requirement updated so now one of that 10 modules need to look slightly different than the other 9.

This is handled by some other special container similar to the `...New Container` except it clones the settings from any other existing container.

So for each Easy Container you have you'll see a second entry in the Module Container list under Module Settings (see image on the right) that ends with the word **(clone)**. When you select that and update the module settings, you'll be presented again with the Container Creation form and will be required to provide a container name.

![cont new](\easy-container\assets\dnn-module-settings-container.png)

After you name your new container with a valid name and hit `Create`, you will get a new container that looks identically to the one you cloned. Except that now when you go to edit the container settings they only apply to that one module.

## Delete Containers

At the time this documentation was written there is no button to delete Easy Container. To do this you must go to the file system to appropriate Containers folder and manually delete the container files, just as you would do with any DotNetNuke standard container.

Containers that are global (available for all portals) are located under `/Portals/_default/Containers/EasyContainer` folder. Portal specific containers are located under `[Portal Home Directory]/Containers/EasyContainer`, where `[Portal Home Directory]` is usually `/Portals/0` or something similar.
