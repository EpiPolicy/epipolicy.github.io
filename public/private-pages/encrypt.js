
CryptoJS = require('crypto-js')
fs = require('fs')
let filename = process.argv[2];
let password = process.argv[3];
fs.readFile(filename + '.md', function (err, data) {
    // console.log('data:\n', data.toString(), '\n')
    let encrypted = CryptoJS.AES.encrypt(data.toString(), password);
    
    let encryptedString = encrypted.toString();
    // console.log('encrypted.toString()\n', encryptedString, '\n');
    
    let decrypted = CryptoJS.AES.decrypt(encryptedString, password);
    let decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    // console.log('decrypted.toString()\n', decryptedString), '\n'

    let buff = Buffer.from(encrypted.toString());
    fs.writeFile(filename + '.pmd', buff, (err, res) => {
        if (err) console.error(err);
    });
});