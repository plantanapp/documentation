# Breaking changes (custom css or templates)

From time to time we change things that requires you to update your custom templates after updating SearchBoost. We try our best to minimize the hassle of having your own custom templates but sometimes there is no other way.

Breaking changes for custom templates:

1. When upgrading to version 3.01.99: you have to update output custom templates if you want to use Allow User Sort. You should add class *sort-sb-results* to the `<div class="btn-group..."` after "sorted by".

2. When upgrading from SearchBoost 2.x to SearchBoost 3.x:
  1. Either switch to a template supported in 3.0 and reapply your custom css.
  2. Or manually apply the following changes (in templateFolder/main.xsl & css files):
    1. Rename CSS classes: searchBox to search-box and searchBtn to search-btn. (and, of course, rename custom css).
    2. Remove javascript functions: *sbInp_clearPlaceholder*, *sbInp_syncPlaceholder* and any reference to them(`onfocus="sbInp_clearPlaceholder(this);" onblur="sbInp_syncPlaceholder(this)`)
    3. Remove <xsl:attribute name="onclick">.....</xsl:attribute> if you have a template with a button.
    4. Use placeholder attribute. Add under `<input type="text" class="searchBox"... >` :
```xsl
<xsl:attribute name="placeholder">
            <xsl:value-of select="empty" />
</xsl:attribute>
```
You can remove: 
```xsl
<xsl:attribute name="data-empty">
            <xsl:value-of select="empty" />
</xsl:attribute>
```
Add this in order to have in the input box the search term:
```xsl
<xsl:attribute name="value">
            <xsl:value-of select="init" />
</xsl:attribute>
```

