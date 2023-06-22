---
id: users 
title: Users
sidebar_label: Users
---

## `General Description`

`Users` is the page where you can control the management of the users from the platform, you can create new users, add new roles to the existing ones, delete some roles or delete them from the platform.

## `Create User`

On the top of the page you have the `NEW` button that will open an pop-up.

![Add User](/img/add-user.png)

* `Email` - Must be a valid email address that will be used as the `Username` in the platform for the new user created.
* `First Name` - First Name of the new user.
* `Last Name` - Last Name of the new user.
* [Roles](/roles.md) - Here you select which role the new user will have in the platform.

## `Edit User`

In the listing below the button you will see this icon (`Pencil`) which will open the same pop-up as the `NEW` button from the top of the page, but now it already have `Email`, `First Name`, `Last Name`, `Roles` already completed with the values from the `User` that you want to edit.

## `Grant Role` \ `Revoke Role`

If you want to assign more roles for a specific `User` you can edit it and give him new Roles by checking the check-box for the specific `Role`. For the revoke part you simply uncheck the role that you want and the click on the `Save` button.

## `Uniqueness`

In the platform each `Email` represent an `User`, you can't create 2 users with the same e-mail address.

## `Delete User`

Deleting an `User` from the listing button (`Trash`) will delete it permanently from the platform. This operation is irreversible.

:::caution
If you delete all the roles from an User from the listing, you will lock him away. This operation it is recoverable by an user with [Administrators Role](/roles.md#low-level-roles).
:::
