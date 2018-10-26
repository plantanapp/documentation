# Special Containers

Though Easy Container installs as a module it isn't actually module. But it isn't simply a container either. It's actually a set of user controls and Asp.NET pages wrapped around DotNetNuke container functionality. But this is transparent for Administrators and Users. 

What Administrators see is a list of containers to choose from under Module Settings. There are some special container there such as the `Easy Container > ...New Container`. When this container is selected, after the module settings are updated and the browser redirects back to the page, the Administrators will be presented with a form to create a new container. This is actually a plain Asp.NET User Control referenced within the container. In this special container, the content pane is hidden.

Similar to the New Container in the Containers list under Module Settings, there's another special entry for each container that clones the given container. It has the same name as the container to duplicate except it ends with the word `(clone)`.

Finally, there's another special container called `.Clear Float`. At the moment this documentation was written this container needs you to add an HTML module to it and Edit Content to empty before it will work. It's probably simpler to just use a Easy Container and set the clear property from the Layout tab. But we plan to make this container work easier in the future.
