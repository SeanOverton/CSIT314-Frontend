
import React, { Component, useState } from "react";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import auth from "../components/utils/Auth";
import { Navigate } from "react-router-dom";
import "../styles/forms.css";
import axios from 'axios';

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
        axios.post('http://127.0.0.1:8000/login/', body)
        .then(response => {
            auth.login(() => {
                alert("Log in successful!");
    
                //navigate to new path
                window.location.reload();
            }, response.data)
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
        {!auth.isAuthenticated() ? (
            <>
            <Nav/>
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
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
            <Footer/>
            </>
        ) : (
            <Navigate to="/" replace />
        )}
        </>
    );
};

export default LogIn;