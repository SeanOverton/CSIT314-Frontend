import React from "react";
import axios from "axios";
import Auth from "../../components/utils/Auth";
import BACKEND_URL from "../../components/utils/Constants";
import def_Img from "../../images/default.png";
import CardSlider from "../../components/CardSlider";
import "../../styles/profile.css";
import { useState, useEffect} from "react";
import editIcon  from "../../images/edit_icon.svg"
import { makeAuthenticatedPostRequest } from "../../components/utils/Helpers";
const DataField = (props:any) => {

    return(
        <div className="dataField">
            <input className ="profileEditInput" type="text" id={props.name} defaultValue={props.value} disabled/>    
        </div>
    );
}
const Profile = (user : any) => {
    const[details, setDetails] =  useState<any[]>([]);
    useEffect(()=>{
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }
        axios.get(`${BACKEND_URL}/get_user_details/?username=${Auth.getUsername()}`, {headers: headers})
        .then(response => {
            setDetails(response.data);  console.log(response.data);
            console.log(details.length);          
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    },[]);

    const editData = () =>{
        // Swap button
        document.getElementById("editProfileBtn")!.style.display="none";
        document.getElementById("submitChangesBtn")!.style.display="inline";

        // Enable input fields        
        const fields = document.getElementsByClassName("profileEditInput");
        Array.prototype.filter.call(fields, function(field){
            field.disabled = false;
            console.log(field.value);
        });
        
    }
    const submitChanges = () =>{
        // get input data
        const username : any = document.getElementById("username");
        const email : any = document.getElementById("email");
        console.log(username.value, email.value);
   
        let body = {
            "username": username.value,
            "current_username": Auth.getUsername(),
            "email": email.value,      
            "subscriptions" : details[0].subscriptions,
          }

        // update request
         makeAuthenticatedPostRequest(
            "/update_user_details/", 
            "Success! User details updated!", 
            body);

        // update local storage
        localStorage.setItem("username", JSON.stringify(username.value));
    }
    
    return(
        <div>
            {(details.length==1)?( <>
                <main>
                <h3>Profile</h3> 
                <form onSubmit={submitChanges}>         
                    <div className ="profile-wrapper">  
                    <img 
                        src={`${BACKEND_URL}/media/${details[0].image}`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src=def_Img;
                        }}
                        style={{width:'90px', height:'90px', borderRadius:'50%'}}
                    />
                        
                        <div className = "profile-details-wrapper">
                            <DataField name = {"username"} value={details[0].username}/>                        
                            <div>
                            <DataField name = {"email"} value = {details[0].email}/>
                            </div>
                            <div>
                                <label>user.occupation????</label>
                            </div> 
                        </div> 
                        <div>
                            <button id= "editProfileBtn" type="button" onClick={editData}> 
                                <img style = {{width : "50px", height : "50px"}} src = {editIcon}></img>
                            </button>
                            <input type="submit" value="submit" id="submitChangesBtn"/>
                        </div>            
                    </div>
                </form>
                <div>
                    <CardSlider sliders = {details[0].subscriptions}></CardSlider>
                </div>
            </main>  
            </>):(<>
           
            </>)}
               
   
        </div>
    );


}

export default Profile;