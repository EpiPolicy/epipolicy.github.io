import { makeObservable, observable, computed, action } from 'mobx';
import pages_config from "../pages.json";
import axios from 'axios';
import marked from 'marked';
import CryptoJS from 'crypto-js';
import highlight from 'highlight.js';

let PASSWORD_CONTROL_STRING = 'salimmo sù, el primo e io secondo,\ntanto ch’i’ vidi de le cose belle\nche porta ’l ciel, per un pertugio tondo.\nE quindi uscimmo a riveder le stelle.';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    const language = highlight.getLanguage(lang) ? lang : 'plaintext';
    return highlight.highlight(code, { language }).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

class Model {
  pages = pages_config;
  activePageContent = null;
  loginInfo = null;

  generateErrorPage(errMsg) {
    return '<div className="error">' + errMsg +'</div>';
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

  loadMarkdownFilePage(pageInfo) {
    let urlRoot = pageInfo.protected ? 'private-pages/' : 'pages/';
    axios.get(urlRoot + pageInfo['markdown-file'])
      .then(response => {
        let data = response.data;
        if (pageInfo.protected) {
          if (this.loginInfo) {
            try {
              let decrypted = CryptoJS.AES.decrypt(response.data, this.loginInfo.password);
              data = decrypted.toString(CryptoJS.enc.Utf8);
              console.log(data)
            } catch (err) {
              this.setActivePageContent(this.generateErrorPage(err));
            }
          } else {
            this.setActivePageContent(this.generateErrorPage('Login needed in order to decrypt this file'));
          }
        }
        this.setActivePageContent(this.latexReplace(marked(data)));
      })
      .catch(err => {
        this.setActivePageContent(this.generateErrorPage(err));
      });
  }

  loadHTMLFilePage(pageInfo) {
    axios.get('html-pages/' + pageInfo['html-file'])
      .then(response => {
        this.setActivePageContent(response.data);
      })
      .catch(err => {
        this.setActivePageContent(err);
      });
  }

  loadActivePage() {
    if (!this.activePage) {
      return null;
    } else if (this.activePage['markdown-file']) {
      this.loadMarkdownFilePage(this.activePage);
    } else if (this.activePage['html-file']) {
      this.loadHTMLFilePage(this.activePage);
    }
  }

  setActivePageContent(content) {
    this.activePageContent = content;
  }

  checkPagesActivation() {
    const path = window.location.hash.slice(1);
    let checkPagesFn = pages => {
      for (let page of pages) {  
        checkFn(page);
      }
    }
    let checkFn = page => {
      if (page.children) {
        checkPagesFn(page.children);
      }
      page.active = path === page.url;
    }
    checkPagesFn(this.pages);
    this.setActivePageContent(null);
    this.loadActivePage();
  }

  get activePage() {
    let getActivePageFromPagesFn = pages => {
      for (let page of pages) {
        let activePage = getActivePageFromPageFn(page);
        if (activePage) return activePage;
      }
    }
    let getActivePageFromPageFn = page => {
      if (page.children) {
        return getActivePageFromPagesFn(page.children);
      }
      if (page.active) return page;
    }

    let activePage = getActivePageFromPagesFn(this.pages);
    return activePage;
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
      loadActivePage: action,
      setActivePageContent: action,
      activePage: computed
    });

    this.checkPagesActivation();
    window.onpopstate = e => {
      this.checkPagesActivation();
    };
  }

}

export default new Model();

