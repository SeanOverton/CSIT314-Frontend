import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//passing state through Link in react-router-dom is documented here:
//https://dev.to/medaminefh/passing-data-with-react-router-using-link-1h39

const SingleSubscriptionCard = (props: any) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Vehicle Registration:</Card.Title>
                <Card.Title>{props.subscription.vehicle_registration}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Time of request</Card.Subtitle>
                <Card.Text>
                Details regarding the callout
                </Card.Text> */}
            </Card.Body>
        </Card>
    );
}

const SubscriptionCardContainer = () => {
    const[subscriptions, setSubscriptions] = useState<any[]>([]);

    useEffect(() => {
        let username = localStorage.getItem("username")?.replaceAll('"', '');
        let token = localStorage.getItem("token")?.replaceAll('"', '');

        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${token}`
        }

        //TODO: actually fetch data in here
        axios.get(`http://localhost:8000/my_subscriptions/?username=${username}`, {headers: headers})
        .then(response => {
            console.log(response.data);
            setSubscriptions(response.data);
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }, []); 

    return (
        <>
            {(subscriptions.length == 0) ? (
                <>
                    <h1>You have no current vehicle subscriptions with us.</h1>
                    <h1>Add your first one now!</h1>
                </>
            ) : (
                <>
                    <h1>Your current vehicle subscriptions to Roadside assistance</h1>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                        {/* should also filter by time? so people at the top are next */}
                        {subscriptions.map((subscription) => {
                            return <div style={{padding: "0.3em"}}><SingleSubscriptionCard subscription={subscription}/></div>;
                        }) }
                    </div>
                </>
            )}
        </>
    );
}

const MySubscriptions = () => {
    return (
        <>
        <Nav/>
        
        <SubscriptionCardContainer/>
        
        <Link to="/add_car">
            <button className="btn btn-primary btn-block">
                Add new vehicle
            </button>
        </Link>
        
        <Footer/>
        </>
    );
};

export default MySubscriptions;