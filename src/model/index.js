import { makeObservable, observable, computed, action } from 'mobx';
import pages_config from "../pages.json";
import axios from 'axios';
import marked from 'marked';

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
    text = text.replace(/<latex>(.*?)<\/latex>/g, 
      (match, p1) => '<div class="latex">$' + p1 + '$</div>');
    text = text.replace(/<latex-line>(.*?)<\/latex-line>/g, 
      (match, p1) => '<div class="latex latex-line>$$' + p1 + '$$</div>');
    text = text.replace(/<latex-line-left>(.*?)<\/latex-line-left>/g, 
      (match, p1) => '<div class="latex latex-line latex-line-left">$$' + p1 + '$$</div>');
    return text;
  }

  loadMarkdownFilePage() {
    // const converter = new showdown.Converter();
    axios.get('pages/' + this.activePage['markdown-file'])
      .then(response => {
        // this.activePageContent = converter.makeHtml(response.data);
        this.activePageContent = this.latexReplace(marked(response.data));
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

