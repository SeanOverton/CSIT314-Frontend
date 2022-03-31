import React, { useState, useReducer } from 'react';
import {Link, Navigate} from "react-router-dom";
import '../styles/navbar.css';
import { slide as Menu } from 'react-burger-menu';
import auth from "./utils/Auth";

const Nav = () => {
  
    return (
        <>  
            <div className="mobile-hide navbar-space">
                <Link className="navbar-link" to="/">Home</Link>
                {auth.isAuthenticated() ? (
                    <>  
                        {auth.isCustomer() ? (
                            <>
                            <Link className="navbar-link bm-item" to="/request">Roadside assistance</Link>
                            <Link className="navbar-link bm-item" to="/subscriptions">My subscriptions</Link>
                            </>
                        ) : (
                            <></>
                        )
                        }
                        {auth.isMechanic() ? (
                            <>
                            <Link className="navbar-link bm-item" to="/requests">View all requests</Link>
                            <Link className="navbar-link bm-item" to="/currentjob">Current Job</Link>
                            </>
                        ) : (
                            <></>
                        )
                        }
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
                        {auth.isCustomer() ? (
                            <>
                            <Link className="navbar-link bm-item" to="/request">Roadside assistance</Link>
                            <Link className="navbar-link bm-item" to="/subscriptions">My subscriptions</Link>
                            </>
                        ) : (
                            <></>
                        )
                        }
                        {auth.isMechanic() ? (
                            <>
                            <Link className="navbar-link bm-item" to="/requests">View all requests</Link>
                            <Link className="navbar-link bm-item" to="/currentjob">Current Job</Link>
                            </>
                        ) : (
                            <></>
                        )
                        }
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