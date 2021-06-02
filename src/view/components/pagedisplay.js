import React from 'react';
import { observer } from 'mobx-react';
import './pagedisplay.scss';
import 'highlight.js/scss/github.scss';
import $ from 'jquery';
import hljs from 'highlight.js';
import PageNavbar from './page-navbar';

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
      <div id="page-display"
           ref={this.pageDisplayRef}
           className={this.model.activePage['no-padding'] ? 'no-padding' : ''}>
        {this.model.activePage['hide-title'] ? null : <h1>{this.model.activePage.name}</h1>}
        <div 
          id="page-content" 
          data-bs-spy="scroll" 
          data-bs-target="#page-navbar" 
          data-bs-offset="0" 
          dangerouslySetInnerHTML={{__html: this.model.activePageContent}}>
        </div>
        <PageNavbar model={this.model} />
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
    document.querySelectorAll('#page-content h2, #page-content h3').forEach(header => {
      // TODO h3, h4... as children
      headers.push({id: header.id, caption: header.innerText});
    });
    this.model.setActivePageHeaders(headers);

    let header = document.getElementById(this.props.model.activePageVisibleHeader);
    if (header) header.scrollIntoView({behavior: 'smooth'});
  }

}

export default observer(PageDisplay);
