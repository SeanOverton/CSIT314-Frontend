import Nav from "../Nav";
import Footer from '../Footer';
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

interface CalloutDetails {
    id: number,
    location: string,
    status: string,
    username: string, 
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
        mechanic:"", 
        date: "", 
        rating: "", 
        review: ""}

    const [details, setDetails] = useState<CalloutDetails>(default_details);

    const acceptJob = (evt: any) => {
        evt.preventDefault();

        let mechanic = localStorage.getItem("username")?.replaceAll('"', '');

        let body = {
            username: details.username,
            location: details.location,
            status: "ACCEPTED",
            date: details.date,
            mechanic: mechanic,
        }

        let token = localStorage.getItem("token")?.replaceAll('"', '');

        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${token}`
        }

        // axios request
        axios.post('http://127.0.0.1:8000/update_callout/', body, {headers: headers})
        .then(response => {
            alert("Success! The customer will be notified that you're on your way!");
            
            // TODO: this may be handled better by a react method?
            document.location = "http://localhost:3000";
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
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
        axios.get('http://127.0.0.1:8000/all_callouts/?status=PENDING', {headers: headers})
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
        <h1>Request details {id} for user: {details.username}</h1>
        <h3>Status: {details.status}</h3>
        <h3>Location {details.location}</h3>
        <h3>TODO: map here</h3>
        <h3>Time of request {details.date}</h3>
        <form onSubmit={acceptJob}>
        <button type="submit" className="btn-primary btn">Accept this callout</button>
        </form>
        <Footer/>
        </>
    );
};

export default RequestDetails;