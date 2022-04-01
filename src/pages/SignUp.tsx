import React, { useState } from 'react';
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import "../styles/forms.css";
import axios from 'axios';
import BACKEND_URL from '../components/utils/Constants';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [usertype, setUsertype] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        let body = {
            username: username, 
            first_name: firstname, 
            last_name: lastname, 
            email: email, 
            password: password, 
            password2: password2, 
            user_type: usertype
        }

        // read the endpoint in from a .env file?
        axios.post(`${BACKEND_URL}/register/`, body)
        .then(response => console.log(response.data))
        .catch((error) => {
            console.log(error.response.data);
            // console.log(error.request);
            // console.log(error.message);
        })

        // console.log(`Submitting Username ${body}`);
    }

    return (
        <>
            <Nav/>
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>

                    <div style={{padding: "1em"}}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" onChange={e => setFirstname(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" onChange={e => setFirstname(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Repeat password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword2(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>User type</label>
                            <div>
                                <select name="user_type" onChange={e => setUsertype(e.target.value)} value={usertype}>
                                    <option value="customer">Customer</option>
                                    <option value="mechanic">Mechanic</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button type="submit" value="Submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">log in?</Link>
                    </p>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default SignUp;