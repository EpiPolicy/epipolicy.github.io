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
    console.log('updateVisibleHeader')
    let mostVisibleHeader = null;
    let visibleHeaders = [];
    let lastVisibleHeader = null;
    if (this.mainPanelContainerRef.current.scrollTop === 0) {
      mostVisibleHeader = this.mainPanelContainerRef.current.querySelector('h2, h3, h4, h5, h6');
    } else {

      this.mainPanelContainerRef.current.querySelectorAll('h2, h3, h4, h5, h6').forEach(h => {
        let rect = h.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight && rect.bottom > 0) {
          if (visibleHeaders.length > 0) {
            visibleHeaders[visibleHeaders.length - 1].height -= window.innerHeight - rect.top;
          }
          visibleHeaders.push({id: h.id, height: window.innerHeight - rect.bottom});
        }
        if (lastVisibleHeader === null || rect.top < window.innerHeight) {
          lastVisibleHeader = h;
        }
      });

      for (let h of visibleHeaders) {
        if (mostVisibleHeader == null || mostVisibleHeader.height < h.height) {
            mostVisibleHeader = h;
        }
      }

      if (mostVisibleHeader === null) {
        mostVisibleHeader = lastVisibleHeader;
      }

    }

    this.props.model.setPageNavActiveHeader(mostVisibleHeader ? mostVisibleHeader.id : null);
  }

  render() {
    return <div id="app" className={this.props.model.activePage['hide-sidebar'] ? 'hide-sidebar' : ''}>
      <div id="menu-toggle" onClick={() => this.props.model.toggleSidebar()}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>  
      <div id="sidebar-container">
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
