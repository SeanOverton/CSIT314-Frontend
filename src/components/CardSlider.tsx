import React from 'react';
import "../styles/CardSlider.css";
import car_logo from "../images/car_logo.png";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";


const Card=(props:any) =>{
    var details : any =  props.details;
    return(
        <div className="slider-card" style={{width:'300px', height:'300px'}}>
           <img src = {car_logo} style={{width:'50%', height:'50%'}} alt="card_logo"></img>
           <h2>{details.vehicle_brand} {details.vehicle_model}</h2>
           <div className='lable'>{details.vehicle_registration}</div>
           <div className='lable'>
               <label>Subscribed</label> 
               <label>24/03/2022-24/03/2024</label>
            </div>
        </div>
    );
}

const CardSlider =(props:any) => {
    const slideLeft =() => {
        var slider = document.getElementById("slider");
        slider!.scrollLeft = slider!.scrollLeft - 300;
    }

    const slideRight =() => {   
        var slider = document.getElementById("slider");
        slider!.scrollLeft = slider!.scrollLeft + 300;
    }
    return(
        <div className="slider-wrapper">
            <BsFillArrowLeftCircleFill size={40} style={{position:"absolute", left :0}} onClick={slideLeft}/>
            <div id="slider">
            {  
                props.sliders.map((sub :any, index:number)=>{
                    return(
                        <Card details = {sub} key = {index}></Card>
                    );
                })
                
            }
            </div>
            <BsFillArrowRightCircleFill size={40} style={{position:"absolute", right :0}} onClick={slideRight}/>
        </div>
    );
}
export default CardSlider;