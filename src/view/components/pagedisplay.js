import React from 'react';
import { observer } from 'mobx-react';
import './pagedisplay.scss';

class PageDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    if (!this.model.activePage || !this.model.activePageContent) {
      return null;
    }
    console.log('render', this.model.activePage.name);

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

  mathJax() {
    window.MathJax.typeset();
  }

  componendDidMount() {
    this.mathJax();
  }

  componentDidUpdate() {
    this.mathJax();
  }

}

export default observer(PageDisplay);
