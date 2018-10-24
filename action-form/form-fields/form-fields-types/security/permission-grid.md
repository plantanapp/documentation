# Permission Grid

In order to add the Permission Grid field on the form, you need to select it from Add Field section &gt; Security &gt; Permission Grid.

![](assets/Permission Grid.png)

## Getting started:

Add an Action Form module to your page, go to Manage Form, and select Start from Scratch.

Add a Permission Grid field

Set the roles\(ex:Registered Users, Subscribers\)

Set the permissions\(ex: View, Edit\)

Set Load Permissions\(ex: View for Key, \[ViewToken\] for Roles\)

Add a button with an Update Page action - on the action set the Permissions similar to the previous step

## Settings Reference:

* Roles

  * Input one role name or ID per line. Special roles "All Users" and "Unauthenticated Users" are also supported. Supports contextual tokens, such as \[RoleName\]

* Permissions

  * Input one permission name per line. They don't need to map to anything from DNN. The permissions in this grid are given a meaning later depending on the context in which they're used.

* Load Permissions

  * Load permissions from tokens. The first column would contain VIEW or EDIT or other permission that you wish to load. The second column is a comma delimited list of role IDs or role names. It can also be permissions loaded with a LoadPage or LoadModule action. Supports contextual tokens, such as \[Roles\]
