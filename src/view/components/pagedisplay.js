import React from 'react';
import { observer } from 'mobx-react';
import './pagedisplay.scss';
import axios from 'axios';
import {parseMath, M} from 'jqmath';

class PageDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    return (
      <div id="page-display">
        <h2>{this.model.activePage.name}</h2>
        <div
          id="page-content"
          dangerouslySetInnerHTML={{__html: this.model.activePageContent}}>
        </div>
      </div>
    );
    // setTimeout(() => { window.MathJax.typeset(); }, 100);
  }

  componendDidMount() {
    setTimeout(() => {parseMath(document.body)}, 100);
  }

  componentDidUpdate() {
    setTimeout(() => {parseMath(document.body)}, 100);
  }

}

export default observer(PageDisplay);
