import React from 'react';
import { observer } from 'mobx-react';
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

  renderFooter() {
    return <div id="footer">
      <div id="logos">
        <div className="logo-container">
          <a href="https://sites.nyuad.nyu.edu/cities/">
            <img id="cities_logo" src="assets/logos/cities_logo.png" />
          </a>
        </div>
        <div className="logo-container">
          <a href="https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/human-data-interaction-lab.html">
            <img id="nyuad_logo" src="assets/logos/nyuad_logo.png" />
          </a>
        </div>
        <div className="logo-container">
          <a href="https://nyu.edu/">
            <img id="nyu_logo" src="assets/logos/nyu_logo.png" />
          </a>
        </div>
        <div className="logo-container">
          <a href="https://www.ecohealthalliance.org/">
            <img id="eha_logo" src="assets/logos/eha_logo.png" />
          </a>
        </div>
      </div>
    </div>;
  }

  render() {
    if (!this.model.activePage || !this.model.activePageContent) {
      return null;
    }
    return (
      <div id="page-display" ref={this.pageDisplayRef}>
        {this.model.activePage['hide-title'] ? null : <h1 className="page-title">{this.model.activePage.name}</h1>}
        <div id="page-content" dangerouslySetInnerHTML={{__html: this.model.activePageContent}}></div>
        {this.renderFooter()}
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
