# Sync users

The Sync Ussers action will allow you to synchronize users across all portals of your website.

It basically works as a *"Copy User Profile"* action **from source**(the current portal) **to destination**(one or more portals of the same website)

![Sync Users](https://static.dnnsharp.com/documentation/sync_users.png)

> Keep in mind this is a one way action; it syncs users from source to destination. 
To do a two way synchronization between two portals you will have to use the action on both of them(be careful to properly condition it to prevent running into an infinite loop)