import React from 'react';
import { observer } from 'mobx-react';
import './pagedisplay.scss';
import 'highlight.js/scss/github.scss';
import $ from 'jquery';
import hljs from 'highlight.js';

// Bootstrap initialization
window.$ = $;
window.jQuery = $;
require('bootstrap');

class PageDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    if (!this.model.activePage || !this.model.activePageContent) {
      return null;
    }
    return (
      <div id="page-display" className={this.model.activePage['no-padding'] ? 'no-padding' : ''}>
        {this.model.activePage['hide-title'] ? null : <h2>{this.model.activePage.name}</h2>}
        <div
          id="page-content"
          dangerouslySetInnerHTML={{__html: this.model.activePageContent}}>
        </div>
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
    // document.querySelectorAll('pre code').forEach((el) => {
    //   hljs.highlightElement(el);
    // });
  }

}

export default observer(PageDisplay);
