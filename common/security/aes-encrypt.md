# AES Encrypt

If you want to encrypt, let's say the email addresses which are populated on a grid, you need to do the following steps:

1. Add an Item button on which set AES Encrypt as Action and in the AEW Key and IV V fields paste the data generated on the Generate your Key and Initialization Vector page, then in Data set the text you need to encrypt and the field you want to save the data in:

![](assets/e1.png)

2. In order to have confirmation that the field is encrypted, you can set a Display (Error) Message action where you have to set the token where you've saved the fields, in our case `[test1]`.