import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Request from './pages/Request';
import AllRequests from './pages/AllRequests';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/request" element={<Request/>} />
            <Route path="/requests" element={<AllRequests/>} />
          </Routes>
    </div>
  );
}

export default App;
