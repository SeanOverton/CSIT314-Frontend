import Nav from "../components/Nav";
import Footer from '../components/Footer';
import "../styles/forms.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BACKEND_URL, { FRONTEND_URL } from "../components/utils/Constants";
import { toast } from "react-toastify";

const CurrentJob = (props: any) => {
    const markAsComplete = (evt: any) => {
        evt.preventDefault();
        
        let details = props.request;

        let mechanic = localStorage.getItem("username")?.replaceAll('"', '');

        let body = {
            username: details.username,
            location: details.location,
            description: details.description,
            status: "COMPLETED",
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
            console.log(error.message);
        });
    }

    return (
        <>
            <h1>Status: {props.request.status}</h1>
            <h2>Customers description: {props.request.description}</h2>
            <h2>Location: {props.request.location}</h2>
            <h2>Mechanic: {props.request.mechanic}</h2>
            <form onSubmit={markAsComplete}>
                <button type="submit" className="btn btn-primary btn-block">Mark as Complete</button>
            </form>
        </>
    );
}

const MechanicDashboard = () => {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        let username = localStorage.getItem("username")?.replaceAll('"', '');
        let token = localStorage.getItem("token")?.replaceAll('"', '');

        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${token}`
        }

        axios.get(`${BACKEND_URL}/all_callouts`, {headers: headers})
        .then(response => {
            // console.log(response.data);

            var new_request = response.data.filter(function(request: any) {
                return request.mechanic == username && request.status == "ACCEPTED";
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
        <Nav/>
        {request.length == 0 ? (
            <h2>No current jobs accepted</h2>
        ) : (
            <CurrentJob request={request}/>
        )}
        <Footer/>
        </>
    );
};

export default MechanicDashboard;