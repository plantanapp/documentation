# Format

An Easy Container works pretty much as a standard container.
It consists of:

* ASCX file what defines layout
    * This file is automatically created by Easy Container when Administrators select to create new containers or clone existing ones through Module Settings screen

* ASCX file whose file name ends with `(clone)`
    * This container, when selected, will trigger the Create Container form to appear asking for a container name for the clone and either the container should be global available for all portals or only for current portal (this option is only available for Super Users, otherwise the later is automatically used)

* CSS file with styles that define appearance
    * All the Layout and Appearance settings from Container Settings popup go into this file. Additionally, any user styles added to this file (either manually or thorugh the settings popup) are preserved by Easy Container

* XML file with other settings
    * This is the only difference compared to the standard container. This XML file containers settings not directly related to CSS styles, such as the settings related to module actions

Note that there is no other place where Easy Container stores these settings. These 4 files are all the settings totally decoupled from other storage.

This also means that any change you make manually to these files will be automatically reflected on the web pages. This is a very powerful feature. We designed Easy Container to not hold an exclusive interface on the container, making it possible to create containers manually or through automated scripts.
