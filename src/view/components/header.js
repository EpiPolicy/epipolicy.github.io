import React from 'react';
import { observer } from 'mobx-react';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.model = props.model;
    }

    render() {
        return <div id="header" className={this.props.model.activePage['center-page'] ? 'center-page' : ''}>
            <h1 class="title">
                <img alt="EpiPolicy" class="title-logo" src="logo512.png"/> EpiPolicy
            </h1>
            <div className="header-menu-items">
                <a className="header-menu-item" href="get_started">Get Started</a>
                <a className="header-menu-item" href="docs_and_tutorials">Docs & Tutorials</a>
            </div>
        </div>;
    }

}

export default observer(Header);
