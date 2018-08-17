# Region

Allows users to select a region from a dropdown. On submit, this field will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the region code, or if that doesn't exist, it will fall back to region name\), \[&lt;FieldName&gt;:RegionCode\], \[&lt;FieldName&gt;:RegionName\].

It requires to link the region to a country field, so it changes the dropdown's items if there are regions defined for the selected country into the Lists Table.

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_17-40-19.png)

