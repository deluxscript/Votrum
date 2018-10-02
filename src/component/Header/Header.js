import React, { Component } from 'react';
import logo from '../../v.png';
// import ManageAccount from '../ManageAccount/ManageAccount';

// Importing Stylings
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="Header flex pa3">
                <div className="logo">
                    <img src={logo} alt="app_logo" width="120" />
                </div>
                <div className="menu flex">
                    <div className="ph4 pv2 menu1">
                        <select>
                            <option>I'm a voter</option>
                            <option>I want to create a poll</option>
                        </select>
                    </div>
                    <div className="ph4 pv2 menu2">Login</div>
                </div>
                {/* <ManageAccount /> */}
            </div>
        );
    }
}

export default Header;
