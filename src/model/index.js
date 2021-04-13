import { makeObservable, observable, computed, action } from 'mobx';
import pages_config from "../pages.json";
import axios from 'axios';
import marked from 'marked';
import CryptoJS from 'crypto-js';

let PASSWORD_CONTROL_STRING = 'salimmo sù, el primo e io secondo,\ntanto ch’i’ vidi de le cose belle\nche porta ’l ciel, per un pertugio tondo.\nE quindi uscimmo a riveder le stelle.';

class Model {
  pages = pages_config;
  activePageContent = null;
  loginInfo = null;

  checkPagesActivation() {
    const path = window.location.pathname;
    for (let page of this.pages) {
      page.active = path === page.url;
    }
    this.loadActivePage();
  }

  latexReplace(text) {
    text = text.replace(/<latex>(.*?)<\/latex>/g, 
      (match, p1) => '<div class="latex">$' + p1 + '$</div>');
    text = text.replace(/<latex-line>(.*?)<\/latex-line>/g, 
      (match, p1) => '<div class="latex latex-line>$$' + p1 + '$$</div>');
    text = text.replace(/<latex-line-left>(.*?)<\/latex-line-left>/g, 
      (match, p1) => '<div class="latex latex-line latex-line-left">$$' + p1 + '$$</div>');
    return text;
  }

  generateErrorPage(errMsg) {
    return '<div className="error">' + errMsg +'</div>';
  } 

  loadMarkdownFilePage() {
    let urlRoot = this.activePage.protected ? 'private-pages/' : 'pages/';
    axios.get(urlRoot + this.activePage['markdown-file'])
      .then(response => {
        let data = response.data;
        if (this.activePage.protected) {
          if (this.loginInfo) {
            try {
              let decrypted = CryptoJS.AES.decrypt(response.data, this.loginInfo.password);
              data = decrypted.toString(CryptoJS.enc.Utf8);
              console.log(data)
            } catch (err) {
              this.activePageContent = this.generateErrorPage(err);
            }
          } else {
            this.activePageContent = this.generateErrorPage('Login needed in order to decrypt this file');
          }
        }
        this.activePageContent = this.latexReplace(marked(data));
      })
      .catch(err => {
        this.activePageContent = this.generateErrorPage(err);
      });
  }

  loadHTMLFilePage() {
    axios.get('html-pages/' + this.activePage['html-file'])
      .then(response => {
        this.activePageContent = response.data;
      })
      .catch(err => {
        this.activePageContent = err;
      });
  }

  loadActivePage() {
    if (!this.activePage) {
      return;
    } else if (this.activePage['markdown-file']) {
      this.loadMarkdownFilePage();
    } else if (this.activePage['html-file']) {
      this.loadHTMLFilePage();
    }
  }

  get activePage() {
    for (let page of this.pages) {
      if (page.active) {
        return page;
      }
    }
    return null;
  }

  logIn(password) {
    return new Promise((resolve, reject) => {
      axios.get('private-pages/main.pmd')
      .then(response => {
        try {
          let decrypted = CryptoJS.AES.decrypt(response.data, password);
          let decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
          console.log('login check. decrypted:\n' + decryptedString);
          if (PASSWORD_CONTROL_STRING === decryptedString) {
            this.loginInfo = {
              password: password,
            }
          } else {
            this.loginInfo = null;
          }
          resolve();
        } catch (err) {
          reject('Login failed');
        }
      });
    });
  }

  logOut() {
    this.loginInfo = null;
  }

  constructor() {
    makeObservable(this, {
      pages: observable,
      checkPagesActivation: action,
      loginInfo: observable,
      logIn: action,
      logOut: action,
      activePageContent: observable,
      activePage: computed
    });

    this.checkPagesActivation();
    window.onpopstate = e => {
      this.checkPagesActivation();
    };
  }

}

export default new Model();

