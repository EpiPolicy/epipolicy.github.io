import React from 'react';
import { observer } from 'mobx-react';
import 'highlight.js/scss/github.scss';
import $ from 'jquery';
import hljs from 'highlight.js';
import PageNavbar from './page-navbar';
import Footer from './footer';

// Bootstrap initialization
window.$ = $;
window.jQuery = $;
let bootstrap = require('bootstrap');
window.bootstrap = bootstrap;

class PageDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
    this.pageDisplayRef = React.createRef();
  }

  render() {
    if (!this.model.activePage || !this.model.activePageContent) {
      return null;
    }
    return (
      <div id="page-display" ref={this.pageDisplayRef}>
        {this.model.activePage['hide-title'] ? null : <h1 className="page-title">{this.model.activePage.name}</h1>}
        <div id="page-content" dangerouslySetInnerHTML={{__html: this.model.activePageContent}}></div>
        <Footer model={this.model}/>
        {!this.model.activePage['hide-page-navbar'] && <PageNavbar model={this.model} />}
      </div>
    );
  }

  mathJax() {
    window.MathJax.typeset();
  }

  bootstrapToolTips() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    this.mathJax();
    this.bootstrapToolTips();
    
    document.querySelectorAll('#page-content pre code').forEach(el => {
      hljs.highlightElement(el);
    });
    
    let headers = [];
    document.querySelectorAll('h2, h3, h4, h5').forEach(header => {
      headers.push({id: header.id, caption: header.innerText, tagname: header.tagName});
    });
    this.model.setActivePageHeaders(headers);

    let header = document.getElementById(this.props.model.activePageVisibleHeader);
    if (header) header.scrollIntoView({behavior: 'smooth'});
  }

}

export default observer(PageDisplay);
