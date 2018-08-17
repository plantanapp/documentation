# Slider

The Slider Field allows users to slide through the values of an array. It offers dual handles, floating point values, text/label/select output.

On submit, it will generate the following tokens: \[&lt;FieldName&gt;\] \(which yields the value\), \[&lt;FieldName&gt;:StartValue\], \[&lt;FieldName&gt;:EndValue\].

### Options

* Initial Value

  * Determines which value or interval \(e.g.: 10, 20\) is initially selected. Also sets the number of slider handles, either 1 or 2. This field supports [My Tokens.](http://www.dnnsharp.com/dnn/modules/my-custom-tokens)

* Start Text

  * Displays the initial value/text of the slider and therefore the position of the first handle.

* End Text

  * Displays the highest value/text of the slider.

* Help Text

  * Description of the option; appears beneath the handler.

* Min Value

  * Value setting the minimum slider value.

* Max Value

  * Value setting the maximum slider value.

* Step Value

  * Value setting the slider step value.

* Slider Captions

  * Append Slider Captions. For decimals use ".". Can contain form tokens \(for example \[Email\]\) and

    [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens). Example: One \(Name\) - 1 \(Value\), Two \(Name\) - 2 \(Value\).

* Slider Caption Classes

  * Append Slider Caption Css Classes. Can contain form tokens \(for example \[Email\]\) and

    [My Tokens](http://www.dnnsharp.com/dnn/modules/my-custom-tokens). Example: label label-danger \(Class\) - 1 \(Value\), label label-success \(Class\) - 2 \(Value\).

* Width

  * Determines the slider width in px, em or percentage.

* Display Tooltip

  * Determines if the tooltip with the current value is displayed.

* Slider Orientation

  * Sets the orientation \(horizontal, vertical\) of the slider.

![](https://s3.amazonaws.com/static.dnnsharp.com/documentation/2017/07/chrome_2017-07-11_15-24-52.png)

