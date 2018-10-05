# Custom Actions

Our modules are built on an open configuration architecture, that makes them very configurable. We have developed it in this way because we know how important is for you to have the ability to customize it with new functionalities which suits you needs.

In the example presented below, we are going to show you how to create your custom action.

- Open `Visual Studio` and create a new project.
- In the `Solution Explorer` panel, expand References, select `Browse` and add a new reference to `DnnSharp.Common.dll` in your /bin folder of the site.
- Add:

```cs
 using DnnSharp.Common;
 using DnnSharp.Common.Actions;
```

- Implement the `IActionImpl` interface which exposes two methods named `Execute` and `Init` with the following signatures:

```cs
 public IActionResult Execute(ActionContext context);

 public void Init(StringsDictionary actionTypeSettings, SettingsDictionary actionSettings);
```

- The names are self-explanatory, the `Execute` method is where you will put all your code needed to implement your desired behavior  for the action needed while the `Init` method will be used to initialize different variables  needed in the code of the method.
  
- After implementing the interface `IActionImpl` it would be a good idea to set your properties with their respective attributes. Since we are talking about custom actions you will  use  the `ActionParameter` attribute followed by the properties it needs. The properties that will  be used are as follows:

- `ApplyTokens`: This enables your parameters to be automatically tokenized.

- `IsRequired`: This will specify that a parameter is required for your action to properly function. Side note, our code will throw errors if a parameter is empty at runtime, however if this parameter becomes empty after the tokenization process, the action will continue executing.

- `RequiredMessage`: This is the exception message that will be thrown if a field that is set as required is empty.

- `IsOutputToken`: This attribute should be set to `true` for the action's output parameters. The config parameter type should be `Text` and the C# property should be of type `string`. What this does is to cleanup square brackets from the value and make sure that no tokenization is applied to the value.

- Finally, click Build, and in the /bin/Debug folder in the `MYCUSTOMACTION` project you will find a dll file named `MyCustomAction.dll` . Copy this dll to the /bin of your site.
  
<br> Now that you have created your custom action, you also need to write a `Config` file for it. This file defines how to bring the parameters from the page all the way to your code.
It is much easier to understand this part if you have the example config open and follow it as it is explained.

- The `Config` file is written in `JSON` format, more specifically it can contain configs for multiple actions, so it is a `JSON` array.

- Inside square brackets you will have to define everything that the action needs to function and you must start by opening a pair of curly braces inside of which you will define the `Id` of the function which must be unique and not necessarily the class name , the `Title` and the `HelpText` (these properties are `JSON` objects of `LocalizedContent` type they support multiple languages as keys followed by the desired text as a value. You can also write a `default` option).
- `TypeStr` property specifies the class to be used for the action and has the following format: `NameSpace.ClassName, DllName`. This tells us where to look for your action.
- `Settings` property defines various specifics about your action including the `Group` property.
- `Group` property specifies which group of actions your custom action will appear under, for example `Messages` group.
- `Parameters` property specifies which parameters from the frontend you want to pass on to the back-end. There are various types of parameters with their respective settings. There is one basic setting for parameters which all of them have: `ShowCondition`.
- `ShowCondition` defines a `JavaScript` condition that shows/hides the parameter. You can access other parameter values of the element using the `itemParameters` variable. Example: `itemParameters['\<parameter name\>']`
  
     Parameter Type               | Description | Additional settings
   ---------------------|---------|------------
     Boolean | Generates a checkbox that returns a true/false value  | N/A
     Code | Generates a Textarea that accepts Javascript code| CodeMirrorMode (`string`) - {`sql`; `javascript`; `css`; `xml`; `htmlmixed`}
     Textarea | Generates a Textarea field|N/A
     Date| Simple date picker|Defaults (`string`)- {`\"Date\": \"\"`} <br>
     Time |  Simple time picker|Defaults (`string`) - {`\"Time\": \"12:00:00AM\"`}
     DateTime | Date and Time picker|Defaults (`string`) -{`\"Date\": \"\", \"Time\": \"12:00:00AM\"`}
     Interval | Generates a interval selection field|Defaults(`string`) - {`\"Qty\": 1, \"Unit\": \"Seconds\"`}<br>Items(`string`) - {`\"Seconds\": { \"default\": \"Seconds\"}, \"Minutes\": {\"default\": \"Minutes\"}, \"Hours\": {\"default\": \"Hours\"}`}
     RichText| Generates a Rich Text editor|N/A
     Select | Dropdown which allows selection|Items (`object`) - {}  <br>DefaultValue (`string`) - {}<br>SupportsExpressions (`boolean`) - {`true`; `false`}<br>DataSource (`string`) - {} <br>TypeName (`string`) - {} <br>ModuleDef (`string`) - {} <br>Interpolate (`boolean`) - {`true`; `false`} <br>DataSourceMethod (`string`) - {} <br> GridModuleID (`string-javascript`) - {`{parentObject.Parameters['Grid'].Value}`}<br>moduleType (`string`) - {}
    CheckboxList | This generates a list of buttons that can be selected/unselected|Items (`object`) - {} <br>DataSourceMethod (`string`) - {} <br>Interpolate (`boolean`) - {`true`; `false`} <br>TableName(`string-javascript`) - {`{parentObject.Parameters['TableName'].Value || parentObject.Parameters['TableName']}`} <br>SkipIdConnectionString<br>Defaults <br>SupportsExpressions (`boolean`) - {`true`; `false`}
     FilePicker| Generates a list of files and allows the selection of files| N/A
     FieldSelect| Generates a dropdown with the selected field type (allows the selection of a single field out of the list)|FieldType (`string`) - {`"upload.single"`, `"upload.multi"`} <br>SupportsExpressions (`boolean`) - {`true`; `false`} <br>ExceptSelf  (`boolean`) - {`true`; `false`}
     NameValueCollection| Generates two (or more) text boxes that will return a Key-Value pair|NameColumn (`string`) - {`"Name"`} <br>ValueColumn (`string`) - {`"Value"`} <br> ButtonName (`string`) - {} <br>IsCustomData (`boolean`) - {`true`; `false`}
     Grid| Generates a grid which allows the input mixed types of parameters|Columns (`array - objects`) - {}<br> ButtonName (`string`) - {} <br>ModuleDef (`string`) - {} <br>SupportsExpressions (`boolean`) - {`true`; `false`}
     ActionList| This is an input which allows an the input of multiple actions that will be executed in order|Event (`string`) - {}
     Text| Generates a simple text input|N/A
     ActionCredentials| Generates an input for credentials that are used in external services(PayPal, Amazon etc.)|Type (`string`) - {} <br> Selection (`boolean`) - {`"Single"`; `"Multiple"`}
     StaticHelpText| Displays a simple text on the frontend as a description/help text| N/A

- Additionally the `Grid` setting `Columns` is essentially an array of other types of parameters.

- The `Columns` setting of the `Grid` parameter, as specified above, is an array. Moreover it is an array that contains parameter objects, basically each column field type is specified in the same way as a parameter. There are a few special settings that can be set on all parameter types when they are part of the `Columns` setting on the `Grid` parameter type:

Setting | Description
--------|-------------
ColSize|Sets the size of the column. (if you have multiple columns, their total size must not exceed 12)
NoColumnLabel|If set to true,the label above the column won't be shown
NoLabel|If set to true,the label to the left of the column won't be shown

- The attached zip archive named `MYCUSTOMACTION.ZIP` contains much more information and a configuration file for your action. You can use it as a start for creating your own action.

<br> Also, copy the Config folder contained in the archive to the `/DesktopModules/DnnSharp/Common` folder in your site folder.

- Refresh your admin page and you should see the new Group containing your example action.

- In this example you should select a value for the dropdown when you configure the action on the site, as some of our modules (such as `DnnApiEndpoint`) require a value for the dropdowns to be selected.

[Custom Action Example](https://dl.dnnsharp.com/documentation/AFORM/MyCustomAction.zip)
