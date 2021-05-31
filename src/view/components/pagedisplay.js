import React from 'react';
import { observer } from 'mobx-react';
import './pagedisplay.scss';
import 'highlight.js/scss/github.scss';
import $ from 'jquery';

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

  componendDidMount() {
    this.mathJax();
    this.bootstrapToolTips();
  }

  componentDidUpdate() {
    this.mathJax();
    this.bootstrapToolTips();
  }

}

export default observer(PageDisplay);
