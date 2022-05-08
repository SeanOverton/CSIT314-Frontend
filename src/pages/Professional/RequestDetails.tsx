import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BACKEND_URL, {FRONTEND_URL} from "../../components/utils/Constants";
import CalloutDetails from "../../components/CalloutDetails";
import { makeAuthenticatedPostRequest } from "../../components/utils/Helpers";
import Auth from "../../components/utils/Auth";

interface CalloutDetailsProps {
    id: number,
    location: string,
    status: string,
    username: string, 
    description: string,
    mechanic: string, 
    date: string, 
    rating: string, 
    review: string
}

const RequestDetails = () => {
    const default_details = {id: 0, 
        location: "", 
        status: "", 
        username: "",
        description: "",
        mechanic:"", 
        date: "", 
        rating: "", 
        review: ""}

    const [details, setDetails] = useState<CalloutDetailsProps>(default_details);

    const acceptJob = (evt: any) => {
        evt.preventDefault();

        let mechanic = Auth.getUsername()

        let body = {
            username: details.username,
            location: details.location,
            description: details.description,
            status: "ACCEPTED",
            mechanic: mechanic,
        }

        makeAuthenticatedPostRequest("/update_callout/", 
        "Success! The customer will be notified that you're on your way!", 
        body, 
        `${FRONTEND_URL}/currentjob`);
    }   

    let { id } = useParams();

    useEffect(() => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }

        //TODO: actually fetch data in here
        axios.get(`${BACKEND_URL}/all_callouts/?status=PENDING`, {headers: headers})
        .then(response => {
            
            var callout = response.data.filter(function(callout: any) {
                // console.log(callout);
                return callout.id === id;
            })[0];

            setDetails(callout);
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }, [id]); 

    return (
        <>
        <CalloutDetails displayRoute={true} details={details}/>
        <form onSubmit={acceptJob}>
        <button type="submit" className="btn-primary btn">Accept this callout</button>
        </form>
        </>
    );
};

export default RequestDetails;