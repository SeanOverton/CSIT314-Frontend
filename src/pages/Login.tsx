
import React, { Component, useState } from "react";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import auth from "../components/utils/Auth";
import { Navigate } from "react-router-dom";
import "../styles/forms.css";
import axios from 'axios';
import BACKEND_URL from "../components/utils/Constants";
import { toast } from "react-toastify";

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
            <Nav/>
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
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </main>
            <Footer/>
            </>
        ) : (
            <Navigate to="/" replace />
        )}
        </>
    );
};

export default LogIn;