# Address

The Address field helps you capture address information on a form and contains three options: Country, Region, and US State, which allow the users to select the needed values which are populated in these lists. Keep in mind that Regions is strictly dependent on the Country field, so if you want the Region list to be populated with the correct values, you have to link the Country Field option to the previously defined Country.

* **Country**
  * allows users to select a country from a dropdown. On submit, this field generates the following tokens: \[&lt;FieldName&gt;\] \(which yields the country code\), \[&lt;FieldName&gt;:CountryCode\], \[&lt;FieldName&gt;:CountryName\].
* **Region**

  * allows users to select a region from a dropdown. On submit, this field will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the region code, or if that doesn't exist, it will fall back to region name\), \[&lt;FieldName&gt;:RegionCode\], \[&lt;FieldName&gt;:RegionName\]. 
  * requires to link the region to a country field, so it changes the downdown's items if there are regions defined for the selected country into the Lists Table. 

* **US State**

  * allows users to select an US state from the dropdown. On submit, this field generates the following tokens: \[&lt;FieldName&gt;\] \(which yields the state code, or if that doesn't exist, it will fall back to state name\), \[&lt;FieldName&gt;:StateCode\], \[&lt;FieldName&gt;:StateName\].                        

  ![](assets/1abfe120f5[1].png)



