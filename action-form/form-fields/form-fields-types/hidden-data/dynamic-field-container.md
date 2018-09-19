# Dynamic Field Container

This is a container for adding the dynamic fields from actions in the group Dynamic Fields. Note that fields will copy the UI settings of this container, but you can append more UI settings in each dynamic field. The hierarchy of the fields depends on the order you add them in the actions
This field will generate the following tokens:
<br>
`[<FieldName>:Json]` which will output the fields in this container as a JSON object, with the key being the FieldId and the value is the Value of the field (eg. {"field1":"value1","field2":"value2"} )
<br>
`[<FieldName>:QueryString]` which outputs the fields in this container in a QueryString format, meaning they will be joined by & (eg. field1=value1&field2=value2&field3=value3)