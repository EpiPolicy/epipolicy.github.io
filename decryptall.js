let privatePagesFolder = './public/private-pages';
let decrypt = require(privatePagesFolder + '/decrypt').decrypt;
let password = process.argv[2];
fs.readdir(privatePagesFolder, (err, files) => {
  files.forEach(filename => {
      if (filename.endsWith('.pmd')) {
        decrypt(privatePagesFolder + '/' + filename.slice(0, -4), password);
      }
  });
});