import React from 'react';
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
        <Nav/>
        <h1>Home page</h1>
        <h3>(Whatever information we want to put on the home page.)</h3>
        <h3>Average rating: [FROM DB]/5</h3>
        <h3>Call outs in this month: [FROM DB]</h3>
        <Footer/>
        </>
    );
};

export default Home;
