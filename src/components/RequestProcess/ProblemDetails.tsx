import axios from "axios";
import { useState } from "react";
import Checkout from "../../pages/Customer/Checkout";
import Auth from "../utils/Auth";
import BACKEND_URL, { FRONTEND_URL } from "../utils/Constants";
import { makeAuthenticatedPostRequest } from "../utils/Helpers";

const ProblemDetails = ({location, rego, description, setDescription}: any) => {
    const [hasSubscription, setHasSubscription] = useState(false);
    const [hasChecked, setHasChecked] = useState(false);
    
    const makeRequest = (evt: any) => {
        evt.preventDefault();
        
        setHasChecked(false);

        checkIfCarHasSubscription();
    }
    
    const submitRequest = () => {
        let currentdate = new Date();
        
        let month = `${currentdate.getMonth()}`;
        let day = `${currentdate.getDate()}`;
        let year = `${currentdate.getFullYear()}`;

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        let currentdate_string = `${year}-${month}-${day}`

        let body = {
            username: Auth.getUsername(),
            location,
            description,
            status: "PENDING",
            date: currentdate_string
        }

        makeAuthenticatedPostRequest("/create_callout/", 
        "Success! A mechanic will respond shortly!", 
        body, 
        `${FRONTEND_URL}/request`);
    }
    
    const checkIfCarHasSubscription = async () => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }

        axios.get(`${BACKEND_URL}/my_subscriptions/?username=${Auth.getUsername()}`, {headers: headers})
        .then(response => {
            var new_request = response.data.filter(function(sub: any) {
                return sub.vehicle_registration == rego && sub.active;
            });

            setHasChecked(true);

            if(new_request.length > 0){
                setHasSubscription(true);
                submitRequest();
            }else{
                setHasSubscription(false);
            }            
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }
    
    return (
        <div className="form-group">
        <label>Provide any detail on your issue:</label>
        <input type="text" className="form-control" placeholder="eg. My car is on fire" onChange={e => setDescription(e.target.value)}/>
        
        {!hasSubscription && hasChecked ? (
                <Checkout submitRequest = {submitRequest}/>
            ) : (
                <div className="auth-inner">
                    <form onSubmit={makeRequest}>                        
                        <div style={{padding: "1em"}}>
                            <button type="submit" className="btn btn-primary btn-block">Submit request</button>
                        </div>
                    </form>
                </div>
        )}
        
        </div>
    )
}

export default ProblemDetails;