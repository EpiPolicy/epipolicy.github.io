let privatePagesFolder = __dirname + '/../public/private-pages';
let encrypt = require(privatePagesFolder + '/encrypt').encrypt;
let password = process.argv[2];
fs.readdir(privatePagesFolder, (err, files) => {
  files.forEach(filename => {
      if (filename.endsWith('.md')) {
        encrypt(privatePagesFolder + '/' + filename.slice(0, -3), password);
      }
  });
});