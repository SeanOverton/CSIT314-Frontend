import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';


const Nav = () => {
    // let loggedIn = props.loggedIn;
    // let userType = props.userType;
    
    return (
        <div className="navbar">
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/signup">Sign Up</Link>
            <Link className="navbar-link" to="/request">Request our service</Link>
            <Link className="navbar-link" to="/requests">View all requests</Link>
        </div>
    );
};

export default Nav;