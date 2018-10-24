# Easy container

<div style="float: left; max-width: 70%;">
Easy Container lets site administrators quickly create containers on the fly using web based UI, significantly improving productivity. Each container can be customized for position, appearance, actions and so much more.
Read more on Official <a href="http://www.dnnsharp.com/dotnetnuke-modules/dnn-skin/easy-container" target="_blank">Easy Container Page</a> or browse documentation pages.
<iframe width="600" height="450" src="https://www.youtube.com/embed/stNzELb1dgM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<img style="max-width: 30%" src="\easy-container\assets\easy-container-300x388w.jpg" />
<br>

You can get started with Easy Container and build some nice containers within a few minutes.

1\) If you haven't already done so, get Easy Container trial. Install the package using the _Host > Extensions screen._

2\) Now, locate an HTML module for which you wish to make a new container; go to its Module Setti ngs > Page Settings > Module Container and select _Easy Container > ...New Container_. Update Module Settings.

3\) You'll be presented with a form to create a new container. Input a valid name and hit Create.

4\) Now you should see a gray container, which is the Default. Located and click the _Edit Container_ link at the bottom of the module.

5\) Modify some styles. For example, let's set width to 400px, and in _Appearance  > Title bar_, set color to red.Notice how the pages updates instantly as you type.

6\) If you're happy with the visual hit Save, which will make your changes permanent by saving them in CSS and XML files. If you were to click cancel the page would instantly revert to previous appearance.

**You're done! You've created your first container and now it's time to create more, to reuse them and tweak them and enjoy the productivity boost!**

## Downgrade

If you try to add an older version of Easy Container over a newer one you will get the following error “A newer version of this package is already installed”.

1\) To downgrade from a newer version to an older one, you need to uninstall the newer version. Go to Host -> Extension -> EasyContainer -> UnInstall this Extension. 

2\) Easy Container remains on the pages where it was added. All modules that were added must be manually removed or, if you want to keep the modules, you have to remove the container which was set on them - by going into the Settings of the module -> Page Settings -> Module Container -. set the option to None. In this way, no container will remain on any page. Once you have removed all the containers, go to Host -> Extension -> Containers -> EasyContainer -> UnInstall this Extension.

3\) Add the desired version of Easy Container.

We make a **note** here regarding the upgrade from one version to another, when you have existing containers created with container options (we talk about the "Module Container" options from "Page Settings"), on an upgrade to a new Easy Grid version. the predefined containers will be overwritten. There is though a "create new container" option, and any container created from scratch will be saved and kept on upgrade. You'll even get a warning message on the "What's new" step informing you about the upgrade differences when you'll install the new version of Easy Container.
