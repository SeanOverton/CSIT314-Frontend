import React from 'react';
import Nav from "./Nav";
import Footer from './Footer';

const Home = () => {
    return (
        <>
        <Nav/>
        <h1>Home page</h1>
        <h1>Average rating: [FROM DB]/5</h1>
        <h1>Call outs in this month: [FROM DB]</h1>
        <Footer/>
        </>
    );
};

export default Home;
