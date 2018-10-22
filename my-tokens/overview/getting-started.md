# Getting Started

**NOTE:** This guide assumes you already downloaded and installed latest version from our website. If you don't have it, please download [My Tokens trial](/my-tokens/index.html) and install as any other module from Host>Module Definition or Host>Extensions.

There is also a [My Tokens video tutorial](https://www.dnnhero.com/Videos/EntryId/304/Turbo-charge-token-replacement-in-DotNetNuke-with-MyTokens-module-part-1-2-Video-284){:target="_blank"} by Aderson Oliveira that shows how to get started and create your first simple token that answers a real common problem in content management.

## Instantiate My Tokens Management Module

This modules offers access to My Tokens Studio which is the management console for everything related to tokens. 

* To instantiate My Tokens management module:
  + Login as user with admin rights
  + Go to the page where you want to add the module
  + Select avt.MyTokens from the dropdown list of available modules in the Control Panel and click Add

When you instantiate the module you be presented with various option to access My Tokens Studio. The first option is a direct link to My Tokens Studio. Second option will install a button under Admin menu so the module will no longer be necessary and can be removed.

## Create New Token

Now, it's time to create a token. The simplest token type My Tokens support is the Constant Token.

* To create a new constant token:
  + Navigate to My Tokens Studio
  + Create a new Namespace. A namespace is a container for grouping tokens by arbitrary criteria.
  + After token is created, its property pages will automatically open in a new tab
  + Click New Token to start the token creation wizard
  + In first step, provide a name and optionally a description; make sure the Constant String is selected in the Token Source dropdown
  + Second page of the wizard is token specific. For the constant token, you need to input the string which will appear in the Html module when token replacement happens. Note that the string can contain other tokens (thus making it not so constant). Leave the parser set to No Parser and click Next.
  + Last wizard page allows customizing the parser; since we've selected No Parser, the only option we have is to specify if My Tokens should recursively replace tokens.
  + When done, click Save. The new token is created and ready to use.

## Using the Token in Html module

* To make sure token replacement will run, go into module settings; at the end there is a section called Html Module Settings (or something like this). Make sure the Replace Tokens checkbox is checked, the Save your settings. 

* Click Edit Text to start editing content and use the token 

* In the text editor, type your text as you normally would, then insert the token in the place where you want to appear. In our example above, you would insert [MyNamespace:MyToken].

Sometimes you need to make sure there is no HTML formatting breaking your token into many pieces. To check this, go into Html mode (in different editors it may be called differently, but basically it shows the Html code of the text you've typed in). Locate the token and make sure that are not HTML tags inside [MyNamespace:MyToken] string.

* Save the content. The Html module should now display the string you've associated with the token.

### Next Steps

You will want to experiment with the rest of token types, to get a feeling of the unlimited possibilities My Tokens offers. Navigate through the rest of the documentation pages to read more about each type.
