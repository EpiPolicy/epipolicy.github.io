import React from 'react';
import {observer} from 'mobx-react';
import './app.scss';
import Sidebar from './components/sidebar';
import PageDisplay from './components/pagedisplay';
import $ from 'jquery';

window.$ = $;
window.jQuery = $;

class App extends React.Component {

  render() {
    return <div id="app">
      <div id="sidebar-container">
        <Sidebar model={this.props.model} />
      </div>
      <div id="main-panel-container">
        <PageDisplay model={this.props.model} />
      </div>
    </div>;
  }

}

export default observer(App);
