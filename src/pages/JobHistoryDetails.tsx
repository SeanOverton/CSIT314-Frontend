import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import BACKEND_URL, {FRONTEND_URL} from "../components/utils/Constants";
import { toast } from "react-toastify";
import CalloutDetails, { CalloutDetailsInterface } from "../components/CalloutDetails";

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

    const acceptJob = (evt: any) => {
        evt.preventDefault();

        let mechanic = localStorage.getItem("username")?.replaceAll('"', '');

        let body = {
            username: details.username,
            location: details.location,
            description: details.description,
            status: "ACCEPTED",
            mechanic: mechanic,
        }

        let token = localStorage.getItem("token")?.replaceAll('"', '');

        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${token}`
        }

        // axios request
        axios.post(`${BACKEND_URL}/update_callout/`, body, {headers: headers})
        .then(response => {
            console.log(response.data);
            if(response.data.status == "OK"){
                toast.success("Success! The customer will be notified that you're on your way!", {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    });
                // TODO: this may be handled better by a react method?
                document.location = FRONTEND_URL;
            }
        })
        .catch((error) => {
            for (const property in error.response.data) {
                console.log(`${property}: ${error.response.data[property][0]}`);
                toast.error(
                    `${property}: ${error.response.data[property][0]}`,
                {
                    position: "top-center",
                    autoClose: 10000,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                }
                );
            }
            // TODO: actually handle this error
            // console.log(error.response.data);
            // console.log(error.request);
            console.log(error.message);
        });
    }   

    let { id } = useParams();

    useEffect(() => {
        let token = localStorage.getItem("token")?.replaceAll('"', '');

        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${token}`
        }

        //TODO: actually fetch data in here
        axios.get(`${BACKEND_URL}/all_callouts/?status=REVIEWED`, {headers: headers})
        .then(response => {
            
            var callout = response.data.filter(function(callout: any) {
                // console.log(callout);
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
        <Nav/>
        <CalloutDetails details={details}/>
        <form onSubmit={acceptJob}>
        <button type="submit" className="btn-primary btn">Accept this callout</button>
        </form>
        <Footer/>
        </>
    );
};

export default RequestDetails;