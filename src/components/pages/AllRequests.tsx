import Nav from "../Nav";
import Footer from '../Footer';
import { Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//passing state through Link in react-router-dom is documented here:
//https://dev.to/medaminefh/passing-data-with-react-router-using-link-1h39

const SingleRequestCard = (props: any) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Location: {props.request.location} (Distance?)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Time of request</Card.Subtitle>
                <Card.Text>
                Details regarding the callout
                </Card.Text>
                <Link to={{
                    pathname: `/details/${props.request.id}`,
                }}>View Details</Link>
            </Card.Body>
        </Card>
    );
}

const RequestCardContainer = () => {
    const[requests, setRequests] = useState<any[]>([1, 1, 1, 1, 1, 1, 1]);

    useEffect(() => {
        let token = localStorage.getItem("token")?.replaceAll('"', '');

        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${token}`
        }

        //TODO: actually fetch data in here
        axios.get('http://localhost:8000/all_callouts/?status=PENDING', {headers: headers})
        .then(response => {
            console.log(response.data);
            setRequests(response.data);
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }, []); 

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {requests.map((request) => {
                return <div style={{padding: "0.3em"}}><SingleRequestCard request={request}/></div>;
            }) }
        </div>
    );
}

const AllRequests = () => {
    return (
        <>
        <Nav/>
        <h1>All logged requests page</h1>
        <RequestCardContainer/>
        <Footer/>
        </>
    );
};

export default AllRequests;