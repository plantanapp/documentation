# User CSS Styles

The Container Builder popup handles creating appropriate CSS styles for different container parts such as the title bar or the content pane. But sometimes you need to be able to add your own custom CSS styles to the container which are not supported by the builder.

This can be done in two ways. Either from the Container `Builder > Appearance > Other CSS Styles` screen (as show in the image on the left) or manually in the CSS file. Inh the Other CSS styles window you can add the desired styles for a specific selector within the Root Container (e.g. p { color: red; }).

![EC](\easy-container\assets\easy-container-settings-other-styles.png)

To do it manually, go to `Containers` folder under `Portals` folder and locate the CSS file that has the same name as the container you want to change. Open that file in your preferred text editor.

Make sure to add your styles after the markup line which reads:
`/* Your custom styles below this point */`

You will notice the two methods stay in sync. Meaning that changes you make to the CSS file are visible through the Container Builder and the other way around, changes made through the Container Builder are saved in the CSS file after the special markup.
