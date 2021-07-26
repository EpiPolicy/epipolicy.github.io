import React from 'react';
import { observer } from 'mobx-react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.model = props.model;
    }

    render() {
        return <div id="footer">
            <div id="logos">
                <div className="logo-container">
                    <a href="https://huda-lab.github.io/">
                        <img id="hudalab_logo" alt="huda lab" src="assets/logos/hudalab_logo.png" />
                    </a>
                </div>
                <div className="logo-container">
                    <a href="https://sites.nyuad.nyu.edu/cities/">
                        <img id="cities_logo" alt="cities" src="assets/logos/cities_logo.png" />
                    </a>
                </div>
                <div className="logo-container">
                    <a href="https://nyuad.nyu.edu/en/research/faculty-labs-and-projects/human-data-interaction-lab.html">
                        <img id="nyuad_logo" alt="nyuad" src="assets/logos/nyuad_logo.png" />
                    </a>
                </div>
                <div className="logo-container">
                    <a href="https://nyu.edu/">
                        <img id="nyu_logo" alt="nyu" src="assets/logos/nyu_logo.png" />
                    </a>
                </div>
            </div>
            
        </div>;
    }

}

export default observer(Footer);
