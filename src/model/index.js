import { makeObservable, observable, computed, action } from 'mobx';
import pages_config from "../pages.json";
import axios from 'axios';
import showdown from 'showdown';

class Model {
  pages = pages_config;
  activePageContent = null;

  checkPagesActivation() {
    const path = window.location.pathname;
    for (let page of this.pages) {
      page.active = path === page.url;
    }
    this.loadActivePage();
  }

  latexReplace(text) {
    return text.replace(/<div class="latex">(.*?)<\/div>/g, 
      (match, p1) => '<div class="latex">$$' + p1 + '$$</div>');
  }

  loadMarkdownFilePage() {
    const converter = new showdown.Converter();
    axios.get('pages/' + this.activePage['markdown-file'])
      .then(response => {
        this.activePageContent = converter.makeHtml(response.data);
        this.activePageContent = this.latexReplace(this.activePageContent);
      })
      .catch(err => {
        this.activePageContent = "Error: " + err;
      });
  }

  loadHTMLFilePage() {
    axios.get('pages/' + this.activePage['markdown-file'])
      .then(response => {
        this.activePageContent = response.data;
      })
      .catch(err => {
        this.activePageContent = "Error: " + err;
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

  constructor() {
    makeObservable(this, {
      pages: observable,
      checkPagesActivation: action,
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

