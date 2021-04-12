import React from 'react';
import {observer} from 'mobx-react';
import './app.scss';
import Sidebar from './components/sidebar';
import PageDisplay from './components/pagedisplay';

class App extends React.Component {

  render() {
    return <div id="app">
      <div className="container-fluid no-gutters">
        <div className="row">
          <div id="sidebar-container" className="col-2">
            <Sidebar model={this.props.model} />
          </div>
          <div id="main-panel-container" className="col-10">
            <PageDisplay model={this.props.model} />
          </div>
        </div>
      </div>
    </div>;
  }
}

export default observer(App);
