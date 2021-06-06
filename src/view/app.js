import React from 'react';
import {observer} from 'mobx-react';
import './app.scss';
import Sidebar from './components/sidebar';
import PageDisplay from './components/pagedisplay';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.mainPanelContainerRef = React.createRef();
  }

  updateVisibleHeader() {
    let activePageVisibleHeader = null;
    let activePageVisibleHeaderRect = null;
    this.mainPanelContainerRef.current.querySelectorAll('h2, h3, h4, h5, h6').forEach(h => {
      var rect = h.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight 
        && (activePageVisibleHeaderRect == null || activePageVisibleHeaderRect.top < rect.top)) {
          activePageVisibleHeader = h.id;
          activePageVisibleHeaderRect = rect;
      }
    });
    this.props.model.setActivePageVisibleHeader(activePageVisibleHeader);
  }

  componentDidMount() {
    this.updateVisibleHeader();
  }

  render() {
    return <div id="app">
      <div id="sidebar-container" 
           className={this.props.model.activePage['hide-sidebar'] ? 'hide-sidebar' : ''}
      >
        <Sidebar model={this.props.model} />
      </div>
      <div id="main-panel-container" 
           ref={this.mainPanelContainerRef}
           onScroll={e => this.updateVisibleHeader()}>
        <PageDisplay model={this.props.model} onPageContentChanged={() => this.updateVisibleHeader()}/>
      </div>
    </div>;
  }

}

export default observer(App);
