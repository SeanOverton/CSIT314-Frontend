import Nav from "../components/Nav";
import Footer from '../components/Footer';
import "../styles/forms.css";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { makeAuthenticatedPostRequest } from "../components/utils/Helpers";

const Request = () => {
    const [rego, setRego] = useState("");

    const makeRequest = (evt: any) => {
        evt.preventDefault();
        
        let username = localStorage.getItem("username")?.replaceAll('"', '');

        let body = {
            username: username,
            vehicle_registration: rego
        }

        makeAuthenticatedPostRequest("/update_subscriptions/", "Success! New car added!", body);
    }

    return (
        <>
        <Nav/>
        <div className="auth-inner">
                <form onSubmit={makeRequest}>
                    <h3>Add new vehicle subscription</h3>

                    <div className="form-group">
                        <label>Vehicle registration number</label>
                        <input type="text" className="form-control" placeholder="Vehicle registration number"  onChange={e => setRego(e.target.value)}/>
                    </div>
                    
                    <div style={{padding: "1em"}}>
                    <button type="submit" className="btn btn-primary btn-block">Add vehicle</button>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    );
};

export default Request;