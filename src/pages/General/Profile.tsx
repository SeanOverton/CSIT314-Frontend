import React from "react";

import Auth from "../../components/utils/Auth";
import logo from "../../images/test_profle.png";
import CardSlider from "../../components/CardSlider";
import "../../styles/profile.css";
const Profile = (user : any) => {

    return(
        <div>
            <main>
                <h3>Profile</h3>          
                <div className ="profile-wrapper">
                    <img src={logo} style={{width:'90px', height:'90px', borderRadius:'50%'}}></img>
                    <div className = "profile-details-wrapper">
                        <div>{Auth.getUsername()} test</div>
                        <div>
                            <label>user.phone???</label>
                            <button>change Phone number</button>
                        </div>
                        <div>
                            <label>user.emnail???</label>
                            <button>change Phone number</button>
                        </div>
                        <div>
                            <label>user.password?????</label>
                            <button>change Password</button>
                        </div>
                        <div>
                            <label>user.occupation????</label>
                            <button>change Occupation</button>
                        </div> 
                    </div> 
                </div>
                <div>
                    <CardSlider></CardSlider>
                </div>
            </main>
   
        </div>
    );


}

export default Profile;