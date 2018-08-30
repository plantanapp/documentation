# Localization

When other different language than English is set as default language, there are six steps which are validated before the default language will be set on the website - the logic in getting the current locale is as follows:

 1. query string
 2. cookie
 3. user preference
 4. browser
 5. portal default
 6. system default

So the DNN will always take the priorities described above over the language set as default. 