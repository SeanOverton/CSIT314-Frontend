import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import BACKEND_URL from "../../components/utils/Constants";
import CalloutDetails, { CalloutDetailsInterface } from "../../components/CalloutDetails";
import Auth from "../../components/utils/Auth";

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

    const [details, setDetails] = useState<CalloutDetailsInterface>(default_details);  

    let { id } = useParams();

    useEffect(() => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }

        //TODO: actually fetch data in here
        axios.get(`${BACKEND_URL}/all_callouts/?status=REVIEWED`, {headers: headers})
        .then(response => {
            
            var callout = response.data.filter(function(callout: any) {
                return callout.id == id;
            })[0];

            setDetails(callout);
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
        <CalloutDetails details={details}/>
        </>
    );
};

export default RequestDetails;