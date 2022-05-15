
import React, { useState } from "react";
import auth from "../../components/utils/Auth";
import { Navigate } from "react-router-dom";
import "../../styles/forms.css";
import axios from 'axios';
import BACKEND_URL, { FRONTEND_URL } from "../../components/utils/Constants";
import { toast } from "react-toastify";
import { makeAuthenticatedPostRequest } from "../../components/utils/Helpers";

const LogIn = (props: any) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = (evt: any) => {
        evt.preventDefault();

        let body = {
            username,
            password
        }

        // axios request
        axios.post(`${BACKEND_URL}/login/`, body)
        .then(response => {
            toast.success("Log in successful!", {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
            auth.login(() => {    
                window.location.reload();

                if(auth.isMechanic()){
                    // establsihes a location object if your a mechanic
                    // TODO: this should be created in backend upon sign up
        
                    let body = {
                        username: username, 
                        location: {"lat": 0, "lng": 0}
                    }
                    
                    // TODO: this throws errors when you login after the first time
                    // doesn't affect performance but should not be displayed
                    // recommended fix: introduce a callback function rather than the 
                    // redirect URL in the below function as it would be more powerful
                    // and reusable
                    makeAuthenticatedPostRequest("/create_location/", "Success! Location established!", body);
                }

            }, response.data);
        })
        .catch((error) => {
            for (const property in error.response.data) {
                console.log(`${property}: ${error.response.data[property][0]}`);
                toast.error(
                    `${error.response.data[property][0]}`,
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
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }

    return (
        <>
        {!auth.isAuthenticated() ? (
            <>
            <main>
                <div className="auth-inner">
                    <form onSubmit={login}>
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="username" className="form-control" placeholder="Enter username" onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        
                        <button type="submit" value="Submit" className="btn btn-primary btn-block">Login</button>

                        <p className="forgot-password text-right">
                            Forgot <a href={FRONTEND_URL}>password?</a>
                        </p>
                    </form>
                </div>
            </main>
            </>
        ) : (
            <Navigate to="/" replace />
        )}
        </>
    );
};

export default LogIn;