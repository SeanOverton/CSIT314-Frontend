
import React, { Component } from "react";
import Nav from "./Nav";
import Footer from './Footer';
import auth from "./Auth";
import { Navigate } from "react-router-dom";

import "./forms.css";

const LogIn = (props: any) => {
    return (
        <>
        {!auth.isAuthenticated() ? (
            <>
            <Nav/>
            <div className="auth-inner">
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    {/* <button type="submit" className="btn btn-primary btn-block">Login</button> */}
                    
                    <button onClick={() => {
                        auth.login(() => {
                            alert("Log in successful!");

                            //navigate to new path
                            window.location.reload();
                        })
                    }} className="btn btn-primary btn-block">Login</button>

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