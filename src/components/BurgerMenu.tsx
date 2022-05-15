import React, { useState } from 'react';
import {Link} from "react-router-dom";
import '../styles/burger.css';
import { slide as Menu } from 'react-burger-menu';
import auth from "./utils/Auth";

const BurgerMenu = () => {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    return(
    <div> 
        <Menu noOverlay
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}>
        <ul className="burger-links">
            <li>
                <Link onClick={closeSideBar} className="navbar-link bm-item" to="/">Home</Link>
            </li>
            {auth.isAuthenticated() ? (
            <>  
                {auth.isCustomer() ? (
                <>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/request">Roadside assistance</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/subscriptions">My subscriptions</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/history">Order history</Link>
                </li>
            </>
            ) : (
            <></>
            )}
            {auth.isMechanic() ? (
            <>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/requests">View all requests</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/currentjob">Current Job</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/history">History</Link>
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
            ) : ( 
            <>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/services">Services</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/membership">Membership</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/about">About Us</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/contactus">Contact Us</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link onClick={closeSideBar} className="navbar-link bm-item" to="/login">Login</Link>
                </li>         
            </>
            )}
        </ul>
        </Menu>
    </div>
    );
}
export default BurgerMenu;
