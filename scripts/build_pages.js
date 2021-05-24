let srcPath = './public';
let dstPath = './docs';
let folders = ['/private-pages', '/private-pages', '/private-pages', '/assets'];
const fse = require('fs-extra');
for (let f of folders) {
  fse.copySync(srcPath + f, dstPath + f, { overwrite: true }, err => {
    if (err) {
      console.error(err);
    }
  });
}
console.log('done');
