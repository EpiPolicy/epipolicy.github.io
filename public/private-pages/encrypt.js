
CryptoJS = require('crypto-js')
fs = require('fs')

let password = '';
fs.readFile('main.md', function (err, data) {
    console.log('data:\n', data.toString(), '\n')
    let encrypted = CryptoJS.AES.encrypt(data.toString(), password);
    
    let encryptedString = encrypted.toString();
    console.log('encrypted.toString()\n', encryptedString, '\n');
    
    // let encryptedData = CryptoJS.enc.Base64.parse(encryptedString);
    let decrypted = CryptoJS.AES.decrypt(encryptedString, password);
    let decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    console.log('decrypted.toString()\n', decryptedString), '\n'

    let buff = Buffer.from(encrypted.toString());
    fs.writeFile('main.pmd', buff, (err, res) => {
        if (err) console.error(err);
        console.log(res);
    });
});