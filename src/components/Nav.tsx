import React, { useState, useReducer } from 'react';
import {Link} from "react-router-dom";
import '../styles/navbar.css';
import auth from "./utils/Auth";
import car_logo from "../images/car_logo.png";

import BurgerMenu from './BurgerMenu';

const Nav = () => {
    React.useEffect(() => {
        const menuWrap = document.querySelector(".bm-menu-wrap");
        if (menuWrap) {
          menuWrap.setAttribute("aria-hidden", "true");
        }
      }, []);

    return (
        <div className='header'>
            <div className='navigation'>  
                <Link className="" to="/"><img className="logo" src={car_logo} style={{height: "100px"}}/></Link>
                <ul className="nav__links nav_bar   ">
                    <li>
                        <Link className="" to="/">Home</Link>
                    </li>
                    {auth.isAuthenticated() ? (
                    <>  
                    {auth.isCustomer() ? (
                    <>
                    <li>
                        <Link className="" to="/request">Roadside assistance</Link>
                        </li>
                    <li>
                        <Link className="" to="/subscriptions">My subscriptions</Link>
                    </li>
                    <li>
                        <Link className="" to="/history">Order history</Link>
                    </li>
                    </>
                    ) : (
                    <></>
                    )}
                    {auth.isMechanic() ? (
                        <>
                        <li>
                            <Link className="" to="/requests">View all requests</Link>
                        </li>
                        <li>
                            <Link className="" to="/currentjob">Current Job</Link>
                        </li>
                        <li>
                            <Link className="" to="/history">Job History</Link>
                        </li>
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
                    ) : ( <>
                        <li>
                            <Link className="" to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link className="" to="/login">Login</Link>
                        </li>         
                    </>
                    )}
                </ul>     
            </div>
            <div className="mobile_header">
                <BurgerMenu/>
            </div>
         
        </div>
        
        
    );
};

export default Nav;