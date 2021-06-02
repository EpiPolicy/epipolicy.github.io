import React from 'react';
import { observer } from 'mobx-react';
import './page-navbar.scss';

class PageNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
    this.state = {
      headers: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="page-navbar-container">
        <nav id="page-navbar" className="navbar navbar-light bg-light flex-column align-items-stretch p-3">
          <a className="navbar-brand" href="#">Page Content</a>
          <nav className="nav nav-pills flex-column">
            {this.props.model.activePageHeaders.map(h => <a key={h.id} className="nav-link" href={'#' + h.id}>{h.caption}</a>)}
          </nav>
        </nav>
      </div>
    );
  }

}

export default observer(PageNavbar);
