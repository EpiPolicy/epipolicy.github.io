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
          onKeyPress={event => {
              this.setState({loginError: null});
              if (event.key === 'Enter') {
                this.checkLoginPassword(event.target.value);
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

  render() {
    return (
      <div id="sidebar">
        <h1 onClick={() => window.MathJax.typeset() }>EpiPolicy</h1>
        {this.model.pages.map(p => this.renderMenuItem(p))}
        {this.renderLoginBox()}
      </div>
    );
  }

  goTo(page) {
     document.title = page.name;
     window.history.pushState({url: page.url}, page.name, page.url);
     this.model.checkPagesActivation();
  }


}

export default observer(Sidebar);
