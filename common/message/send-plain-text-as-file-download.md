## Send Plain Text as File Download

Action Form has the option to Send Plain Text as File Download. Go to Manage Form, add Field, Button, Message, Send Plain Text as File Download. You can use one of several file types: CSV, HTML, XML, TXT, XSL.

Some of them require specific formats to work. For example:

### XML

```xml
<test>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Fusce mattis a orci laoreet pretium. Mauris scelerisque vel enim ac dictum.
</test>
```

### XSL

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <xsl:for-each select="test">
    <xsl:element name="hello; test">
      <xsl:value-of select="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" />
    </xsl:element>
    <br />
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
```

### HTML-specific styles can be used for this format.

```html
<body style="background-color:lightgrey">
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
```

Additionally, MyTokens can be used as value of text, if a field called First Name exists.

For example, XSL

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <xsl:for-each select="test">
    <xsl:element name="bla bla; test">
      <xsl:value-of select="[FirstName]" />
    </xsl:element>
    <br />
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
```

Also, expressions can be used besides the available formats, like for example docx.

If you want the browser to automatically start the file download, then check the Force download option. This option, however, is conditioned by the browser.

