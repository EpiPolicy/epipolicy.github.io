
CryptoJS = require('crypto-js')
fs = require('fs')
let filename = process.argv[2];
let password = process.argv[3];
fs.readFile(filename + '.pmd', function (err, data) {
    let decrypted = CryptoJS.AES.decrypt(data.toString(), password);
    let decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    // console.log('decrypted.toString()\n', decryptedString), '\n'
    let buff = Buffer.from(decryptedString);
    fs.writeFile(filename + '.md', buff, (err, res) => {
        if (err) console.error(err);
    });
});