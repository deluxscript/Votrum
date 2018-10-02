import React, { Component } from 'react';

import vote from '../../vote.png';
import key from '../../keyword.png';
import swing from '../../swing.png';
import locked from '../../locked.png';
import account from '../../accounting.png';
import camera from '../../camera.png';

// Importing Stylings
import './Home.css';

var BgStles = {
    backgroundImage: 'url(' + vote + ')',
    height: "43px",
    backgroundSize: "contain"
};

class Home extends Component {
    render() {
        return(
            <div>
                <div className="home-content flex">
                    <h3 className="ma0 Text">Ethereum decentralized voting system</h3>
                    <p className="subText">Supports <b>Transparency</b>, <b>Security</b>, <b>Accessibility</b></p>
                    <a className="f6 link dim br3 ph5 pv3 mb2 dib white home-btn" href="#0">Create Poll</a>
                </div>
                <div style={BgStles}>
                    {/* <img src={vote} width="40" alt="vote" /> */}
                </div>
                <div className="home-footer flex pa3">
                    <div><img src={key} alt="keyword"/> Accessible</div>
                    <div><img src={swing} alt="swing"/> Fair</div>
                    <div><img src={locked} alt="swing"/> Secured</div>
                    <div><img src={account} alt="accounting"/> Accountable</div>
                    <div><img src={camera} alt="camera"/> Stable</div>
                </div>
            </div>
        );
    }
}

export default Home;
