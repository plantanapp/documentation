---
id: entities
title: Entities
sidebar_label: Entities
---

## `General Description`

Entities define the data model of the application. This is sometimes referred to as Data Structure or Structured Content. This is where you establish the data elements in your application and how they relate to each other. For a simple application, you could begin your design right here. For a more complex app, you may want to create a visual representation of your data model first and then create your entities based on that. Plant an App also creates a visual view of the relation between your Entities. You can view this by toggling to the **Dependency View** on the Entities page.

:::note
Plant an App automatically includes four default Entities. They are Users, Roles, Documents, and Images. These cannot be removed or edited. They won't appear in the Depency View unless they are added as a dependency to one of your Entities.
:::

## `Assets Created`

When you create an Entity, Plant An App automatically generates database tables, application screens including input forms and data grids, and APIs that allow user interaction with the data. Specifically, the following is created with a new Entity:

- Database tables with index keys and foreign keys based on the relations you define between your entities
- A new page for the Entity that can either be in the menu or not and can be defined as a top level page or as a child of an existing page
- A new page for viewing details of an entry created (hidden from menu and accessed when clicking the link for an entry in the grid)
- A form for data entry with fields based on the properties you define
- A listing grid to show the records in the Entity
- A data source for the Entity to be used wherever you can select data sources
- UI buttons providing the ability to create, edit, delete and view entries
- Custom actions for create, delete, partial update, update and read operations added to the list of Plant an App core actions specifically for the Entity
- APIs for creating, retrieving, updating, and deleting records
- In an upcoming release, a visual dashboard where you can define KPIs will also be automatically created

## `Entity Properties`

### `Property Types`

When you create an Entity, you need to define the properties of the Entity. Plant an App always adds five built-in properties for each Entity including ID, CreateBy, CreatedDate, LastModifiedBy, and LastModifiedDate. You add **Custom Properties** to define your Entity and you need to specify the **Type** for each property. In the property selection dialogue, you will see three sections. They are **Primitive**, **Entities**, and **List of Entities**.

#### `Primitive Properties`

The first section lists the standard or **Primitive** data types. Selecting these types will create corresponding form fields and database fields. To better understand what is created in the form and database table when you select one of the primitive types, reference the table below.

| Property Type | Form Field | Database Field |
| -- | -- | -- |
| Boolean | True/False (Checkbox) | bit |
| Date | Date Time Picker with Date Picker Type and formatted as MM/dd/yyyy | date |
| Date and Time | Date Time Picker with Date and Time Picker Type and formatted as MM/dd/yyyy hh:mm tt | datetime2(7) |
| Email | Text Box with maximum 320 characters and Email Address validation | nvarchar(320) |
| Large Text | Large Text initialized with 3 rows | nvarchar(max) |
| Local Date and Time | Date Time Picker with Date and Time Picker Type and formatted as MM/dd/yyyy hh:mm tt | datetimeoffset(7) |
| Money | Currency set to USD | decimal(19, 4) |
| Number | Number with Integer Number validation | int |
| Phone | Phone with initial format set by Browser Country Code | nvarchar(15) |
| Text | Text Box with maximum 450 characters | nvarchar(450) |
| Time | Date Time Picker with Time Picker Type and formatted as hh:mm tt | time(7) |
| Url | Text Box with maximum 2000 characters and Web Address validation | nvarchar(2000) |

#### `Entities`

The second section lists existing **Entities** from your application that can be used to populate a selection menu for the current Entity. For example, if you are creating a list of Tasks, you may have a specified list of Task Types defined in another Entity. You could add a Task Type property to the current Entity and select the Task Type Entity as the Property Type. This would create a field with a selection menu of Task Types.

#### `List of Entities`

The third section also lists existing **Entities** from your application. However, selecting an Entity from here allows you to define a list of entries from the child Entity that are all related to an entry in the current Entity. For example, if the current Entity (Parent) is going to be a list of Projects and each Project needs to have a list of tasks attached to it, you would add a property called Tasks and select the Tasks Entity (Child) under List of Entities. This property type does not create a form field. Instead, it will add a column to the Parent Entity listing with a link to view the Child Entity listing filtered for entries related to the selected Parent Entity and to add entries to the Child Entity. It also creates a relationship table in the database that stores the relationship between the parent and child Entities.

### `How to Choose 'Entities' or 'List of Entities'`

To decide if you should select Entities or List of Entities, you need to consider the relationship between the Entities.

If you want an entry in the Parent Entity to be related to just one entry in the Child Entity, then choose Entities. This will store just the one ID of the related entry in the associated column in the Parent Entity's database table.

However, if you want any entry from the Parent Entity to be able to be related to one or more entries from the Child Entity, then choose List of Entities. When you choose this option a new table is created that stores relationships between entries in the Parent and Child Entities.

### `Other Property Settings`

#### `Required`

Selecting the Required option for a Property sets the required validation on the associated form field, but it also sets the associated database column to 'not null'. This is important to keep in mind if you plan on adding any direct insert or update queries on this Entity to your application.

#### `Searchable`

Selecting the Searchable option determines whether the property will be searched when you using the Entity's grid search field and when using the application main search.

#### `Filterable`

If the Filterable option is selected, the associated column in the Entity's grid will have a dropdown in the column header allowing the grid to be filtered by a selected value. This also will add an index key for the associated column in the database table.

#### `Sortable`

Selecting the sortable option will make the column header of this property a link that will sort the column by its values when clicked. This also will add an index key for the associated column in the database table.

## `Permissions`

Before setting permissions for your Entities, you will need to consider how your permission model relates to your data model and then set up [Roles](/docs/Roles) for your application. Once you have custom roles configured you will then see them on the permissions screen when creating or editing an Entity.

| Entity Permission | Description |
| -- | -- |
| Can View | Determines which entries members of the role are able to see in the Entity grid. The choices are All Entries, Own Entries (Entries created by the logged in user), or None. If set to None and the user has any other permission enabled, they will see the page and will see an error in the grid. |
| Can Add | Determines whether members of the role are able to add entries to the Entity. If true, the user will see a New button or Add button at the top of the Entity grid. |
| Can Edit | Determines which Entries the user is able to Edit. The choices are All Entries, Own Entries (Entries created by the logged in user), or None. |
| Can Delete | Determines which Entries the user is able to Delete. The choices are All Entries, Own Entries (Entries created by the logged in user), or None. |

:::note
To remove permission to view the Entity page to members of a role, the View, Edit, and Delete permissions must be set to None, and the Add permission disabled. It is not sufficient to simply set the view permission to None.  
:::

### `What does it mean to 'Own' an entry?`

Currently, the user that created an entry is the owner of that entry. This means when you select **Own Entries** from the permission dropdowns, you are giving permission to the user that created the entry. However, in the future Plant an App plans to add functionality that will allow admins to transfer ownership of an entry.
