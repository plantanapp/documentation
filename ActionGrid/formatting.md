# Formatting

Lately, beginning with version 2.0.30, we've implement the formatting option for grid fields, it's a mechanism easily extendable with new types of formatting, as initial version, we've implemented formatting options for Custom Date, Date, Money and Numbers. The formatting is specified in the settings of each grid field.

### Custom Date Format


The format of the dates is based on standard .NET form specifiers, if for example you have a date grid field and you want to format its display, you can select this Formatting option and set in Format box: 
`MMMM dd, yyyy`, the date will be displayed as `March 03, 2015`.

### Date


The Date Formatting option comes with fifteen format options, select the one which suits you best.

### Money


When this formatting option is set on a grid field, the currency of the portal language will be displayed, for example on a US portal, $1.00 will be displayed, on a French portal, 1,00 € will be displayed.

### Number


This option will format the grid field's values according to the decimal option set, if the values from the grid field is 1 and you set as decimal the 2 option, then the final result will be 1.00.


### True/False

This functionality comes with two options through which you can customize the displayed text when the value is True or False.