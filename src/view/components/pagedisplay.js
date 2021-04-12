import React from 'react';
import { observer } from 'mobx-react';
import './pagedisplay.scss';
import axios from 'axios';
// import {parseMath, M} from 'jqmath';

class PageDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    if (!this.model.activePage) {
      return null;
    }

    return (
      <div id="page-display">
        <h2>{this.model.activePage.name}</h2>
        <div
          id="page-content"
          dangerouslySetInnerHTML={{__html: this.model.activePageContent}}>
        </div>
      </div>
    );
    
  }

  componendDidMount() {
    setTimeout(() => { window.MathJax.typeset(); }, 100);
    // setTimeout(() => {parseMath(document.body)}, 100);
  }

  componentDidUpdate() {
    setTimeout(() => { window.MathJax.typeset(); }, 100);
    // setTimeout(() => {parseMath(document.body)}, 100);
  }

}

export default observer(PageDisplay);
