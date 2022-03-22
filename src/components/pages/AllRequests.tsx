import Nav from "../Nav";
import Footer from '../Footer';
import { Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//passing state through Link in react-router-dom is documented here:
//https://dev.to/medaminefh/passing-data-with-react-router-using-link-1h39

const SingleRequestCard = (props: any) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Location (Distance?)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Time of request</Card.Subtitle>
                <Card.Text>
                Details regarding the callout
                </Card.Text>
                <Link to={{
                    pathname: `/details/${props.id}`,
                }}>View Details</Link>
            </Card.Body>
        </Card>
    );
}

const RequestCardContainer = () => {
    const[requests, setRequests] = useState<any[]>([1, 1, 1, 1, 1, 1, 1]);

    useEffect(() => {
        //TODO: actually fetch data in here
        setRequests([1, 2, 3, 4, 5, 6]);
    }); 

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {requests.map((requestID) => {
                return <div style={{padding: "0.3em"}}><SingleRequestCard id={requestID}/></div>;
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