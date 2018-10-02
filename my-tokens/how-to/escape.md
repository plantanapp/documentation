# Escape Special Characters

When invoking a token, there are some special characters that determine the syntax.
These characters are: **[**, **]** and **|**. 

To clearly illustrate the purpose of the special characters, here is a simple example:
``[User:UserName|I'm user {0}]`` - displays I'm user MyUsername

The problem appears when you want to actually display a character that is considered special by the token engine. For example,
`[User:UserName|I'm user {0}, but I'd prefer to be called user[pro|b|lem]]` - *results in an error*
The token engine will be confused about the syntax, it will not know where you meant the token to end and also where the format starts.

To overcome this limitation, use HTML encoded entities. The 3 entities we need are:

```
[ ⇒ &#91;
] ⇒ &#93;
| ⇒ &#124;
```

To read more about HTML entities, see [this website](https://www.ascii.cl/htmlcodes.htm){:target="_blank"}.

We now can rewrite our example so the token engine is clear about what we've meant:
``[User:UserName|I'm user {0}, but I'd prefer to be called user&#91;pro&#124;b&#124;lem&#93;]`` - correctly displays *I'm user MyUsername, but I'd prefer to be called user[pro|b|lem]*

This example above may not appear common or it may appear that the special characters could have been handled better based on their positions. But with new features added to MyTokens 1.5.1, it becomes possible to nest tokens, that's why the characters presented in this section are special.

For example:
``[User:UserName|I'm user {0} and I'm currently on [Tab:TabName] page]`` - displays *I'm user MyUsername and I'm currently on Home page*.
We now have a nested token *[Tab:TabName]* that MyTokens knows to replace. If we wanted the text *[Tab:TabName]* to display on the screen, we would have escaped the special characters by using their HTML codes described above.