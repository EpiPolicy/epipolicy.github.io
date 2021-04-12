import React from 'react';
import { observer } from 'mobx-react';
import './sidebar.scss';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  renderMenuItem(page) {
    const path = window.location.pathname;

    return <div 
      key={page.url}
      className={'menu-item' + (page.active ? ' active' : '')}
      onClick={() => this.goTo(page)}
      >
        {page.name}
    </div>; 
  }

  render() {
    return (
      <div id="sidebar">
        <h1 onClick={() => window.MathJax.typeset() }>EpiPolicy</h1>
        {this.model.pages.map(p => this.renderMenuItem(p))}
      </div>
    );
  }

  goTo(page){
     document.title = page.name;
     window.history.pushState({url: page.url}, page.name, page.url);
     this.model.checkPagesActivation();
  }


}

export default observer(Sidebar);
