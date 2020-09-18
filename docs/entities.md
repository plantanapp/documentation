---
id: entities
title: Entities
sidebar_label: Entities
---

## `General Description`

Entities define the data model of the application. Some may refer to this as Data Structure or Structed Content. This is where you establish the data elements in your application and how they relate to each other. For a simple application, you could begin your design right here. For a more complex app, you may want to create a visual representation of your data model first and then create your entities based on that. Plant an App also creates a visual view of the relation between your Entities. You can view this by toggling to the `Dependency View` on the Entities page.

:::note
Plant an App automatically includes four default Entities. They are: Users, Roles, Documents and Images. These cannot be removed or edited. They won't appear in the Depency View unless they are added as a dependency to one of your Entities.
:::

## `Assets Created`

When you create an Entity, Plant An App automatically generates database tables, application screens including input forms and data grids, and APIs that allow user interaction with the data. Specifically, the following is created with a new entity:

- Database tables with index keys and foreign keys based on the relations you define between your entities
- A new page for the entity that can either be in the menu or not and can be defined as a top level page or as a child of an existing page
- A new page for viewing details of an entry created (hidden from menu and accessed when clicking the link for an item in the grid)
- A form for data entry with fields based on the properties you define
- A listing grid to show the records in the entity
- UI buttons providing the ability to create, edit, delete and view items
- Custom actions for create, delete, partial update, update and read operations added to the list of Plant an App core actions specifically for the entity
- APIs for creating, retrieving, updating, and deleting records
- In an upcoming release, a visual dashboard where you can define KPIs will also be automatically created

## `Property Types`

When you create an Entity, you need to define the properties of the Entity. Plant an App always adds five built-in properties for each entity including ID, CreateBy, CreatedDate, LastModifiedBy, and LastModifiedDate. You add Custom Properties to define your Entity and you need to specify the Type for each property. In the property selection dialogue you will see three sections. They are Primitive, Entities and List of Entities.

### `Primitive Properties`

The first section lists the standard or `Primitive` data types. Selecting these types will create corresponding form fields and database fields. To better understand what is created in the form and database table when you select one of the primitive types, reference the table below.

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

### `Entities`

The second section allows you to select another Entity from your application that can be used to populate a selection menu for the current Entity. For example, if you are creating a list of Tasks, you may have a specified list of Task Types defined in another Entity. You could add a Task Type property to the current Entity and select the Task Type Entity as the Property Type. This would create a field with a selection menu of Task Types.

### `List of Entities`

The third section allows you to select another Entity from your application that will store a list of items that are all related to an item in the current Entity. For example, if the current Entity (Parent) is going to be a list of Projects and each Project needs to have a list of tasks attached to it, you would add a property called Tasks and select the Tasks Entity (Child) under List of Entities. This property type does not create a form field. Instead it will add a column to the Parent Entity listing with a link to add items to the Child Entity. It also creates a relationship table in the database that stores the relationship between the parent and child Entities.

## `Permissions`
