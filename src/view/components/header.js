import React from 'react';
import { observer } from 'mobx-react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.model = props.model;
        this.state = {
            collapse: true
        }
    }

    render() {
        return <nav id="header"
            className={'navbar navbar-expand-sm navbar-light' + (this.props.model.activePage['center-page'] ? ' center-page' : '')}
        >
            <a className="navbar-brand" href="#">
                <h1 className="title">
                    <img alt="EpiPolicy" className="title-logo" src="logo512.png" /> EpiPolicy
                </h1>
            </a>

            <button className="navbar-toggler" type="button" onClick={() => this.setState({collapse: !this.state.collapse})}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"navbar-collapse" + (this.state.collapse ? ' collapse' : '')}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="get_started">Get Started</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="docs_and_tutorials">Docs & Tutorials</a>
                    </li>
                </ul>
            </div>

        </nav>;
        return <div id="header" className={this.props.model.activePage['center-page'] ? 'center-page' : ''}>
            <h1 className="title">
                <img alt="EpiPolicy" className="title-logo" src="logo512.png" /> EpiPolicy
            </h1>
            <div className="header-menu-items">
                <a className="header-menu-item" href="get_started">Get Started</a>
                <a className="header-menu-item" href="docs_and_tutorials">Docs & Tutorials</a>
            </div>
        </div>;
    }

}

export default observer(Header);
