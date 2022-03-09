import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import Navbar from "react-bootstrap";
import { slide as Menu } from 'react-burger-menu';


const Nav = () => {
    // let loggedIn = props.loggedIn;
    // let userType = props.userType;
    
    return (
        <>
            <div className="mobile-hide">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/login">Login</Link>
                <Link className="navbar-link" to="/signup">Sign Up</Link>
                <Link className="navbar-link" to="/request">Request our service</Link>
                <Link className="navbar-link" to="/requests">View all requests</Link>
            </div>
            <div className="mobile-show"> 
                <Menu>
                    <Link className="menu-item" to="/">Home</Link>
                    <Link className="menu-item" to="/login">Login</Link>
                    <Link className="menu-item" to="/signup">Sign Up</Link>
                    <Link className="menu-item" to="/request">Request our service</Link>
                    <Link className="menu-item" to="/requests">View all requests</Link>
                </Menu>
            </div>
        </>
    );
};

export default Nav;