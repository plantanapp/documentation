# Star Rating

```java
This field is available in Action Grid \(FormBuilder\) and Action Form. 
It was designed to help developers to have a simple way to create a form in which they can evaluate services 
or products with a star based field. 
The field has a large number of customization fields.
```

## Settings

Below are explained the settings fields specific to this field only.

**Initial Value: ** A number value. \(eg. 0.3 or 0.5 or 1 or 5\)

**Number of Stars: **Number the stars that will be displayed \(eg. 5 or 7 or 10\)

**Step: **The step between selection of the rating\(eg. 0.1 or 0.5 or 1\)

**Size: ** **xs**-extra small **sm**-small **md**-medium **lg**-large **xl**-extra large

**Minimum Rating: ** The minimum value that can be selected when no is selected

**Maximum Rating: **The maximum value that can be selected when all stars are selected

**Selected Star Color: **The color of the selected stars. Can be any value used for setting colors in CSS \(eg. red \#00ff00 rgb\(0,0,255\)\)

**Unselected Star Color: **The color of the unselected stars. Can be any value used for setting colors in CSS \(eg. red \#00ff00 rgb\(0,0,255\)\)

**Star Caption: **The text that will be displayed when a selection will be made and the value matches this setting. **\(1\)**

**Star Caption Classes: ** Each caption can have a CSS class added to it when a selection will be made and the value matches this setting \(eg. label label-info\) **\(2\)\(3\)**

**Hide Caption: ** Hide the caption. Show only the stars.

**Hide Clear Button: ** Hide the Clear Button. This button let's you delete any setting and return to the minimum value.

## Notes

**\(1\)\(2\) **The values set should match values that are between Minimum Rating and Maximum Rating and should be match by multiplying the step with a number\(positive integer\) and added to the Minimum Rating . \(Minimum Rating + \(X \* Step\)\)

Minimum Rating = 0

Step = 0.5

Potential values settings: 0 , 0.5, 1 ... Maximium Rating

Any values can be used but if they don't match a selected value they will not be used.

**\(3\) **Recommended to match values set at Star Caption

