# AES Decrypt

As additional step to the steps provided on AES Encrypt section, you can decrypt the same field which was previously encrypted by adding the AES Decrypt as second action and setting the same Key and IV as the ones used into the AES Encrypt action but on Data Text to Encrypt you just have to use the token where you've previously saved the data, in our case, `[test1]`.

![](assets/e2.png)

And here's the how the grid item will look encrypted and decrypted:

![](assets/e3.png)