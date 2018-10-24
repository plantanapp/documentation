# Actions

The actions screen allow defining which Module Actions are available as well as configure some parameters about these actions.

There are several distinct actions supported by the DotNetNuke framework. Also, note that even if you enable an action on the container it will only be visible if the module displayed inside the container also has that option enabled under Module Settings.

So, in Easy Container you're just **enabling support** for various actions. Either if the feature is used or not it depend on how each module that uses the container is configured.

Finally, before getting to analyze each action, know that some of them are also available through the Admin menu (the black arrow on the title bar in DNN5 or the Manage faded button on DNN6).

![EC settings](\easy-container\assets\easy-container-settings-actions.png)

## Add / Edit Content Actions

This section let's you configure either the Add/Edit content buttons are visible, and if they are if either to display the link, the icon, or both.

The actions depend on the module displayed in the container. For a HTML module the action is `Edit Content`. But for other modules there can be several actions, for example `Manage Form` and `Reports`.

Also, you get to specify additional CSS classes to put on this action.

## Syndicate, Print

For each of these actions you can define either they're visible, and if they are then either they're displayed as links, icons or both. Also, you get to specify the CSS Class and the icon for each. Leave the icon field empty to use the default.

Please `note` that the Syndicate option (RSS) works only for modules that support search through DNN ISearchable interface - basically any module that comes up when you search using the DNN Search feature - HTML module is searchable, but Action Form and Action Grid are not, so they wouldn't show the RSS button. 

## Settings

This button is actually only visible for Module Administrators. You get to define if this action is available for Administrators, and if it is, either if to display them as links, icons or both. Also, you get to specify the CSS Class and the icon. Leave the icon field empty to use the default.

## Minimize / Maximize

Use this action to enable the expand/collapse buttons on the title bar that when clicked they show/hide the content pane.
You get to specify both the expand and collapse icons. Also, you can specify the position (left or right) on the title bar and also the margin which is quite useful for precision positioning.
