import Nav from "../components/Nav";
import Footer from '../components/Footer';
import "../styles/forms.css";
import { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../components/utils/Constants";
import { toast } from "react-toastify";
import { makeAuthenticatedPostRequest } from "../components/utils/Helpers";

const Request = () => {
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const makeRequest = (evt: any) => {
        evt.preventDefault();
        
        let currentdate = new Date();
        
        let month = `${currentdate.getMonth()}`;
        let day = `${currentdate.getDate()}`;
        let year = `${currentdate.getFullYear()}`;

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        let currentdate_string = `${year}-${month}-${day}`

        // TODO: remove this date creation? as i think DB is handling this now
        let body = {
            username: localStorage.getItem("username"),
            location,
            description,
            status: "PENDING",
            date: currentdate_string
        }
        
        makeAuthenticatedPostRequest("/create_callout/", "Success! A mechanic will respond shortly!", body);
    }

    return (
        <>
        <Nav/>
        <div className="auth-inner">
                <form onSubmit={makeRequest}>
                    <h3>Request roadside assistance</h3>

                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" placeholder="Location"  onChange={e => setLocation(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Provide any detail on your issue:</label>
                        <input type="text" className="form-control" placeholder="eg. My car is on fire" onChange={e => setDescription(e.target.value)}/>
                    </div>
                    
                    <div style={{padding: "1em"}}>
                    <button type="submit" className="btn btn-primary btn-block">Submit request</button>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    );
};

export default Request;