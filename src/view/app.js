import React from 'react';
import {observer} from 'mobx-react';
import './app.scss';
import Sidebar from './components/sidebar';
import PageDisplay from './components/pagedisplay';

class App extends React.Component {

  render() {
    return <div id="app">
      <div id="sidebar-container" 
           className={this.props.model.activePage['hide-sidebar'] ? 'hide-sidebar' : ''}
      >
        <Sidebar model={this.props.model} />
      </div>
      <div id="main-panel-container">
        <PageDisplay model={this.props.model} />
      </div>
    </div>;
  }

}

export default observer(App);
