
CryptoJS = require('crypto-js')
fs = require('fs')

function decrypt(filename, password) {
    console.log('decrypting ' + filename.replace(/^.*[\\\/]/, '') + '.pmd to ' 
                + filename.replace(/^.*[\\\/]/, '') + '.md');

    fs.readFile(filename + '.pmd', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }

        let decrypted = CryptoJS.AES.decrypt(data.toString(), password);
        let decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
        // console.log('decrypted.toString()\n', decryptedString), '\n'
        let buff = Buffer.from(decryptedString);
        fs.writeFile(filename + '.md', buff, (err, res) => {
            if (err) console.error(err);
        });
    });
}
module.exports = {
    decrypt: decrypt
};

if (require.main === module) {
    let filename = process.argv[2];
    let password = process.argv[3];
    decrypt(filename, password);
}
