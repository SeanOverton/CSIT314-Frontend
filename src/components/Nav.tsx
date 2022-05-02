import React from 'react';
import {Link} from "react-router-dom";
import '../styles/navbar.css';
import auth from "./utils/Auth";
import car_logo from "../images/Group_3.svg";
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
            <div className='nav-wrapper'>  
                <Link to="/"><img className="logo" src={car_logo} style={{height: "50px"}}/></Link>
               
                <ul className="nav-links left-wrapper">
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
                    </>
                    ) : ( <>
                        <li>
                            <Link className="" to="/services">Services</Link>
                        </li>
                        <li>
                            <Link className="" to="/membership">Membership</Link>
                        </li>
                        <li>
                            <Link className="" to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className="" to="/contactus">Contact Us</Link>
                        </li> 
                    </>
                    )}
                </ul>     
                <ul className="nav-links right-wrapper">
                {auth.isAuthenticated() ? (
                <>
                    <li>
                        <button className="btn nav-btn" onClick={()=> {
                                auth.logout(() => {
                                    window.location.reload();
                            })}
                        }>Sign Out</button>  
                    </li> 
                    <li>
                        <Link to="/profile">Hello, {auth.getUsername()}</Link>
                    </li>
                </>
                ) :( <>  
                    <li>
                        <div  className="nav-btn">
                            <Link to="/signup">Sign Up</Link>
                        </div>
                  </li>
                    <li>
                        <div className="nav-btn">
                            <Link className="nav-btn" to="/login">Login</Link>
                        </div>
                    </li>     
                 </>)}
                </ul>
            </div>
            <div className="mobile_header">
                <BurgerMenu/>
            </div>
         
        </div>
        
        
    );
};

export default Nav;