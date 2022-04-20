import React from 'react';
import "../styles/CardSlider.css";
import car_logo from "../images/car_logo.png";

const Card=() =>{
    return(
        <div className="slider-card" style={{width:'300px', height:'300px'}}>
           <img src = {car_logo} style={{width:'50%', height:'50%'}}></img>
           <h2>Honda</h2>
           <div className='lable'>rego</div>
           <div className='lable'>
               <label>Subscribed</label> 
               <label>24/03/2022-24/03/2024</label>
            </div>
        </div>
    );
}

const CardSlider =() => {

    return(
        <div className="slider-wrapper">
           <Card></Card>
           <Card></Card>
           <Card></Card>
        </div>
    );
}
export default CardSlider;