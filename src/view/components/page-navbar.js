import React from 'react';
import { observer } from 'mobx-react';
import './page-navbar.scss';

class PageNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
  }

  render() {
    let selectedHeader = this.props.model.pageNavActiveHeader;

    return (
      <div id="page-navbar-container">
        <nav id="page-navbar" className="navbar navbar-light bg-light flex-column align-items-stretch p-3">
          <nav className="nav nav-pills flex-column">
            {this.props.model.activePageHeaders.map((h, i) => 
              <a key={h.id} 
                 className={
                   "nav-link" + 
                   ((!selectedHeader && i === 0) || (selectedHeader === h.id) ? ' active' : '') + 
                   ' ' + 
                   h.tagname
                  } 
                 href={'#' + h.id}>
                {h.caption}
              </a>
            )}
          </nav>
        </nav>
      </div>
    );
  }

}

export default observer(PageNavbar);
