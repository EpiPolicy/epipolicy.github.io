
CryptoJS = require('crypto-js')
fs = require('fs')

function encrypt(filename, password) {
    console.log('encrypting ' + filename + '.md to ' + filename + '.pmd with password ' + password);
    fs.readFile(filename + '.md', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        // console.log('data:\n', data.toString(), '\n')
        let encrypted = CryptoJS.AES.encrypt(data.toString(), password);
        
        let encryptedString = encrypted.toString();
        // console.log('encrypted.toString()\n', encryptedString, '\n');
        
        // let decrypted = CryptoJS.AES.decrypt(encryptedString, password);
        // console.log('decrypted.toString()\n', decrypted.toString(CryptoJS.enc.Utf8)), '\n'

        let buff = Buffer.from(encryptedString);
        fs.writeFile(filename + '.pmd', buff, (err, res) => {
            if (err) console.error(err);
        });
    });
}
module.exports = {
    encrypt: encrypt
};

if (require.main === module) {
    let filename = process.argv[2];
    let password = process.argv[3];
    encrypt(filename, password);    
}
