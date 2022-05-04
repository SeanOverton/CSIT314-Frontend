import "../../styles/forms.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BACKEND_URL, { FRONTEND_URL } from "../../components/utils/Constants";
import CalloutDetails from "../../components/CalloutDetails";
import { makeAuthenticatedPostRequest } from "../../components/utils/Helpers";
import Auth from "../../components/utils/Auth";

const CurrentJob = (props: any) => {
    const markAsComplete = (evt: any) => {
        evt.preventDefault();
        
        let details = props.request;

        let body = {
            username: details.username,
            location: details.location,
            description: details.description,
            status: "COMPLETED",
            mechanic: details.mechanic,
        }
        
        makeAuthenticatedPostRequest("/update_callout/", 
        "Success! The customer will be prompted for a review!", 
        body, 
        FRONTEND_URL);
    }

    return (
        <>
            <CalloutDetails displayRoute={true} details={props.request}/>
            <div style={{padding:"2em"}}>
                <form onSubmit={markAsComplete}>
                    <button type="submit" className="btn btn-primary btn-block">Mark as Complete</button>
                </form>
            </div>
        </>
    );
}

const MechanicDashboard = () => {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }
        
        axios.get(`${BACKEND_URL}/all_callouts`, {headers: headers})
        .then(response => {
            // console.log(response.data);

            var new_request = response.data.filter(function(request: any) {
                return request.mechanic === Auth.getUsername() && request.status == "ACCEPTED";
            });

            console.log(new_request);

            if(new_request.length > 0){
                setRequest(new_request[0]);
            }
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }, []); 

    return (
        <>
        {request.length === 0 ? (
            <h1>No current jobs accepted</h1>
        ) : (
            <CurrentJob request={request}/>
        )}
        </>
    );
};

export default MechanicDashboard;