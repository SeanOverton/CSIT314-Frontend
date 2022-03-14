import React, { useState, useReducer } from 'react';
import {Link, Navigate} from "react-router-dom";
import './navbar.css';
import { slide as Menu } from 'react-burger-menu';
import auth from "./Auth";

const Nav = () => {
  
    return (
        <>
            <div className="mobile-hide">
                <Link className="navbar-link" to="/">Home</Link>
                {auth.isAuthenticated() ? (
                    <>  
                        <Link className="navbar-link" to="/request">Request our service</Link>
                        <Link className="navbar-link" to="/requests">View all requests</Link>
                        <button className="btn btn-primary btn-block" onClick={()=> {
                                auth.logout(() => {
                                    <Navigate to="/" replace />;
                                    //this does actually work for a single component
                                    // update();
                                    window.location.reload();
                            })}
                        }>Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link className="navbar-link" to="/signup">Sign Up</Link>
                        <Link className="navbar-link" to="/login">Login</Link>
                    </>
                )}
            </div>
            <div className="mobile-show"> 
                <Menu>
                <Link className="navbar-link" to="/">Home</Link>
                {auth.isAuthenticated() ? (
                    <>  
                        <Link className="navbar-link" to="/request">Request our service</Link>
                        <Link className="navbar-link" to="/requests">View all requests</Link>
                        <button onClick={()=> {
                                auth.logout(() => {
                                    window.location.reload();
                            })}
                        }>Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link className="navbar-link" to="/signup">Sign Up</Link>
                        <Link className="navbar-link" to="/login">Login</Link>
                    </>
                )}
                </Menu>
            </div>
        </>
    );
};

export default Nav;