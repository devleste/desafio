import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './style.css';

class NavBar extends Component {
    render() {
        return(
            
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center"><img src="img/logo_leste_bco.png" className="circle" alt="logo" width="180px" /></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>{moment().format("DD MMMM YYYY")}</li>
                    </ul>
                </div>
                <div className="nav-content">
                    <span className="nav-title"></span>
                    <div className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                        <Link to="/form" ><i className="material-icons">add</i></Link>
                    </div>
                </div>
            </nav>
            
        )
    };
}

export default NavBar;