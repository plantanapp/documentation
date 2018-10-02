# Other Integrations

## Integration with XMod

It is possible to integrate My Tokens in XMod Pro templates by using the [My Tokens SkinObject](../how-to/token-dnn-skins.html). This will allow invoking any token from XMod. Here is a code sample provided by one of our customers.

```xml
<xmod:Register TagPrefix="MyTokens" Namespace="avt.MyTokens" Assembly="avt.MyTokens" />

<xmod:template>
    <ListDataSource CommandText="SELECT Username FROM Users WHERE UserId=@UserID">
        <parameter name="UserID" value='[[User:ID]]'/>
    </ListDataSource>
    <HeaderTemplate>
        <table>
    </HeaderTemplate>
    <ItemTemplate>
        <tr>
            <td>
               [[Username]] same as <MyTokens:SkinObjectReplacer Token="[User:Username]" />
            </td>
        </tr>
    </ItemTemplate>
    <FooterTemplate>
        </table>
    </FooterTemplate>
</xmod:template>
```