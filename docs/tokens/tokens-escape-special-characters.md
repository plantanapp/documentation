---
id: tokens-escape-special-characters
title: Tokens - Escape Special Characters
sidebar_label: Escape Special Characters
---

When invoking a token, there are some special characters that determine the syntax. These characters are: `[, ]` and `|`.

## Usage and examples

To clearly illustrate the purpose of the special characters, here is a simple example:

`[User:UserName|I'm user {0}]` - this token will display "*I’m user `<MyUsername>`*"

The problem appears when you want to actually display a character that is considered as "special" by the token engine. For example, the token "`[User:UserName|I'm user {0}, but I'd prefer to be called user[pro|b|lem]]`" will result in an error, as the token engine will be confused by the syntax. It will be unable to determine the delimitation of the token and format.

### Solution

To overcome this limitation, use HTML encoded entities; these are pieces of text ("strings") that begin with an ampersand ("`&`") and end with a semicolon ("`;`"). Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). The three entities we need for the example above are:

    [ ⇒ &#91;
    ] ⇒ &#93;
    | ⇒ &#124;

Please [see here](https://ascii.cl/htmlcodes.htm) for a list of HTML entities.

We can now can rewrite our token example: `[User:UserName|I'm user {0}, but I'd prefer to be called user&#91;pro&#124;b&#124;lem&#93;]`. 

This will now correctly display: "*I’m user `<MyUsername>`, but I’d prefer to be called user[pro|b|lem]*".

### Nested tokens

Let's take the following token: `[User:UserName|I'm user {0} and I'm currently on [Tab:TabName] page]`

It will display: "I’m user MyUsername and I’m currently on Home page". We now have a nested token `[Tab:TabName]` that Plant an App will replace with a value. If we wanted the text `[Tab:TabName]` to be displayed on the screen, we would have escaped the special characters by using their HTML codes described above.

<br /><br /><a href="#top">Back to the top of the page</a>