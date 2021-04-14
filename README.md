## EpiPolicy Documentation Website

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `docs` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `yarn build-pages`

To commit the pages changes to be visible to GitHub Pages. 
This operation is part of yarn build, but much faster since is only for pages.

### `yarn deploy`

To deploy the website to GitHub Pages

### `yarn encrypt-all 'my strong password'`

To encrypt all documents (see private pages section).

### `yarn decrypt-all 'my strong password'`

To decrypt all documents (see private pages section).


## Pages

In order to add a page you need to change the file `src/pages.json` adding an entry, for example:

```
{
    "name": "My Page",
    "url": "/mypage",
    "markdown-file": "mypage.md"
},
```

Pages can be markdown or HTML files, and they can be protected.

### Markdown Pages

In order to add a markdown file the property `markdown-file` needs to be used to specify the file name.
Markdown files are saved in the folder `public/pages`.

### HTML Pages

In order to add a HTML file the property `html-file` needs to be used to specify the file name.
HTML files are saved in the folder `public/html-pages`.

### Private pages

In order to add a protected file the property `protected` needs to be set to true. For example:

```
{
    "name": "Private Doc",
    "url": "/privatedoc",
    "protected": true,
    "markdown-file": "privatedoc.pmd"
}
```

Private documents are in the folder `public/private-pages`.
This folder automatically excludes `.md` files to be committed in the repository by using `.gitignore`. By using Git, only `.pmd` files (i.e. encrypted markdown files) are committed and visible in the repository.

To encrypt and decrypt a single file you can use the `encrypt_all.js` and `decrypt_all.js` scripts. 

For example to encrypt all files in the `private-pages` folder, you can execute:
```
node encrypt_all.js 'my-password' 
```
This will create/update all `.pmd` files inside the `private-pages` based on the `.md` documents you have locally.

To decrypt all private files:
```
node decrypt_all.js 'my-password' 
```

`main.md` file shouldn't be changed, since it's used by the website to check if the password is correct during the log in.

To encrypt single files go with your terminal in the `private-pages` folder and run:
```
node encrypt.js privatedoc 'my-password' 
```
to encrypt `privatedoc.md` to `privatedoc.pmd`.

Similarly to decrypt a single file:
```
node decrypt.js privatedoc 'my-password'
```
