import React from 'react';
import { observer } from 'mobx-react';
import './sidebar.scss';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.model = props.model;
    this.state = {
      loginBox: false
    };
  }

  renderLoginBox() {
    if (this.model.loginInfo) {
      return <div className="login-box" onClick={() => this.model.logOut()}>
        Sign out
      </div>
    }

    if (this.state.loginBox) {
      return <div className="login-box">
        {this.state.loginError ? <div className="login-error">{this.state.loginError}</div> : null}
        <input 
          autoFocus 
          type="password"
          onKeyDown={event => {
            this.setState({loginError: null});
              if (event.key === 'Enter') {
                this.checkLoginPassword(event.target.value);
              } else if (event.key === 'Escape') {
                this.setState({loginBox: false});
              }
            }
          }
        />
      </div>
    }

    return <div className="login-box" onClick={() => this.setState({loginBox: true})}>
      Sign in
    </div>;
  }

  checkLoginPassword(password) {
    this.model.logIn(password).catch(err => {
      this.setState({loginError: err});
    })
  }

  renderMenuItem(page) {
    if (page.hidden) {
      return null;
    }
    if (page.children) {
      return <div key={page.name}>
        <div className="menu-parent-item">{page.name}</div>
        <div className="menu-children">
          {page.children.map(p => this.renderMenuItem(p))}
        </div>
      </div>
    } else {
      if (!this.model.loginInfo && page.protected) {
        return null;
      }
      return <div 
          key={page.url}
          className={'menu-item' + (page.active ? ' active' : '')}
          onClick={() => this.goTo(page)}
        >
          {page.name}
      </div>; 
    }
  }
  
  render() {
    return (
      <div id="sidebar">
        <h1 className="title" onClick={() => this.goTo(this.model.pages[0])}>
          <img alt="EpiPolicy" className="title-logo" src="logo512.png" /> EpiPolicy
        </h1>
        <div className="menu">
          {this.model.pages.slice(1).map(p => this.renderMenuItem(p))}
        </div>
        {this.renderLoginBox()}
      </div>
    );
  }

  goTo(page) {
    document.title = page.name;
    window.history.pushState({url: '/' + page.url}, page.name, '/' + page.url);
    this.model.checkPagesActivation();
  }


}

export default observer(Sidebar);
