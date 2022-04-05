import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import "../../styles/forms.css";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { makeAuthenticatedPostRequest } from "../../components/utils/Helpers";
import { FRONTEND_URL } from "../../components/utils/Constants";
import Auth from "../../components/utils/Auth";

const Request = () => {
    const [rego, setRego] = useState("");

    const makeRequest = (evt: any) => {
        evt.preventDefault();

        let body = {
            username: Auth.getUsername(),
            vehicle_registration: rego,
            active: true
        }

        makeAuthenticatedPostRequest("/add_subscription/", "Success! New car added!", body, `${FRONTEND_URL}/subscriptions`);
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