import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BACKEND_URL, { FRONTEND_URL } from "../../components/utils/Constants";
import { makeAuthenticatedPostRequest } from "../../components/utils/Helpers";
import Auth from "../../components/utils/Auth";

//passing state through Link in react-router-dom is documented here:
//https://dev.to/medaminefh/passing-data-with-react-router-using-link-1h39

const SingleSubscriptionCard = (props: any) => {
    const removeSubscription = () => {
        let body = {
            username: props.subscription.username,
            vehicle_registration: props.subscription.vehicle_registration,
            active: false
        }

        makeAuthenticatedPostRequest("/update_subscription/", "Success! Vehicle subscription has been removed from your account.", body, `${FRONTEND_URL}/subscriptions`);
    }
    
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Vehicle Registration:</Card.Title>
                <Card.Title>{props.subscription.vehicle_registration}</Card.Title>
                <button type="button" onClick={removeSubscription} className="btn btn-danger">Unsubscribe</button>
            </Card.Body>
        </Card>
    );
}

const SubscriptionCardContainer = () => {
    const[subscriptions, setSubscriptions] = useState<any[]>([]);

    useEffect(() => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }

        //TODO: actually fetch data in here
        axios.get(`${BACKEND_URL}/my_subscriptions/?username=${Auth.getUsername()}`, {headers: headers})
        .then(response => {
            console.log(response.data);

            let active_subscriptions = response.data.filter((subscription: any) => {
                return subscription.active;
            })

            setSubscriptions(active_subscriptions);
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
        <SubscriptionCardContainer/>
        <Link to="/add_car">
            <button className="btn btn-primary btn-block">
                Add new vehicle
            </button>
        </Link>
        </>
    );
};

export default MySubscriptions;