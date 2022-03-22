import Nav from "../Nav";
import Footer from '../Footer';
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";

interface CalloutDetails {}

const RequestDetails = () => {
    const [details, setDetails] = useState<CalloutDetails>({});

    let { id } = useParams();

    useEffect(() => {
        //TODO: request details from API with request id above
        //const details = await axios.fetch()...
        //set in state and then render below
        // setDetails(details);
    }); 

    return (
        <>
        <Nav/>
        <h1>Request details {id}</h1>
        <h3>Location</h3>
        <h3>TODO: map here</h3>
        <h3>Time of request</h3>
        <button className="btn-primary btn">Accept this callout</button>
        <Footer/>
        </>
    );
};

export default RequestDetails;