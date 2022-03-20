import React, { useState, useReducer } from 'react';
import {Link, Navigate} from "react-router-dom";
import './navbar.css';
import { slide as Menu } from 'react-burger-menu';
import auth from "./Auth";

const Nav = () => {
  
    return (
        <>  
            <div className="mobile-hide navbar-space">
                <Link className="navbar-link" to="/">Home</Link>
                {auth.isAuthenticated() ? (
                    <>  
                        <Link className="navbar-link" to="/request">Request our service</Link>
                        <Link className="navbar-link" to="/requests">View all requests</Link>
                        <button className="btn btn-primary btn-block" onClick={()=> {
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
            </div>
            <div className="navbar-space">
                <div className="mobile-show">
                <Menu>
                    <ul>
                        <Link className="navbar-link bm-item" to="/">Home</Link>
                {auth.isAuthenticated() ? (
                    <>  
                        {/* instead of this single check of authetication they should render 
                        these two tabs seperately */}
                        <Link className="navbar-link bm-item" to="/request">Request our service</Link>
                        <Link className="navbar-link bm-item" to="/requests">View all requests</Link>
                        <button className="btn btn-primary btn-block bm-item" onClick={()=> {
                            auth.logout(() => {
                                window.location.reload();
                            })}
                        }>Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link className="navbar-link bm-item" to="/signup">Sign Up</Link>
                        <Link className="navbar-link bm-item" to="/login">Login</Link>
                    </>
                )}
                </ul>
                </Menu>
                </div>
            </div>
        </>
    );
};

export default Nav;