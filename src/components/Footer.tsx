import React from 'react';
import car_logo from "../images/car_logo.png";

const Footer = () => {
    return (
        <>
        <div style={{padding: "2em"}}>
            <img src={car_logo} style={{height: "200px"}}/>
            <p><b>Est. 8-3-2022</b></p>
        </div>
        </>
    );
};

export default Footer;