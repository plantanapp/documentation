---
layout: default
---

# Initialization Scripts

Action Form comes with tons of features, but sooner or later you'll need to do something directly to the controls. For example, maybe you want to have a jQuery plugin run on a textbox or you want to disable some fields. This is very easy to achieve using the Initialization Script option under General Settings. The simplest thing you can do, is iterate everything to see what information is available. You can do it with this script:

```js
$.each(form.fields, function(i, field) {
    console.log(field);
});
```

Note that the info goes into the Console tab, so press F12 in your browser. The most useful information in the field object is the "id" property, which holds the ID of the HTML element. Therefore, you can can get a reference to it using javascript:

```js
var el = document.getElementById(form.fields.SomeFieldName.id);
```

or jQuery:

```js
var $el = $('#' + form.fields.SomeFieldName.id);
```

Once you have that, you can do DOM manipulation, install plugins and so on. For example, one could hide a textbox by using *$el.hide();* If you're trying to integrate a 3rd party jQuery plugin, you'll first have to include it. Currently you can't do this with Action Form, so you'll have to add it to the DNN skin or the Page Header under Page Settings. After you do that, you can simply call the plugin on the jquery element. For example, the following script would provide a password complexity message using the <a href="http://danpalmer.me/jquery-complexify/">complexify plugin:</a>

```js
$el.complexify(options, callback(valid, complexity){
    alert("Password complexity: " + complexity);
});
```

Other things to keep in mind is that this field also supports <a href="/my-tokens/index.html">My Tokens</a>. Note that if you use form tokens in this context they access the value of each field. So for example, [SomeFormField] is equivalent to form.fields.SomeFormField.value. One useful trick to know is that values can also be changed at this stage by assigning values to them. The following 2 are equivalent:

```code
form.fields.SomeFieldName.value = 'Something new';
[SomeFieldName] = 'Something new';
```