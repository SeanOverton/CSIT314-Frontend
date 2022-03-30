import Nav from "../components/Nav";
import Footer from '../components/Footer';
import "../styles/forms.css";
import { useState } from "react";
import axios from "axios";

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

        let body = {
            username: localStorage.getItem("username"),
            location,
            description,
            status: "PENDING",
            date: currentdate_string
        }

        let token = localStorage.getItem("token")?.replaceAll('"', '');

        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${token}`
        }

        // axios request
        axios.post('http://127.0.0.1:8000/create_callout/', body, {headers: headers})
        .then(response => {
            alert("Success! A mechanic will respond shortly!");
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
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