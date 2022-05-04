import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import BACKEND_URL from "../../components/utils/Constants";
import Auth from "../../components/utils/Auth";
import BootstrapModal from "../../pages/Customer/BootstrapModal";
import car_logo from "../../images/car_logo.png";

const SingleSubscriptionCard = ({ selected, setSelected, subscription}: any) => {    
    return( 
        <div>
        { (selected === subscription.vehicle_registration) ? 
        (
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                    <img alt="car_logo" src={car_logo} style={{height: "100px"}}/>
                    <Card.Title>{subscription.vehicle_brand} {subscription.vehicle_model} {subscription.vehicle_year}</Card.Title>
                    <Card.Text>{subscription.vehicle_registration}</Card.Text>
                </Card.Body>
            </Card>
        ) : (
            <Card onClick={() => {setSelected(subscription.vehicle_registration)}} style={{ width: '18rem' }}>
                <Card.Body>
                <img alt="car_logo" src={car_logo} style={{height: "100px"}}/>
                <Card.Title>{subscription.vehicle_brand} {subscription.vehicle_model} {subscription.vehicle_year}</Card.Title>
                <Card.Text>{subscription.vehicle_registration}</Card.Text>
                </Card.Body>
            </Card>
        )}
        </div>
    );
}

export const SubscriptionCardContainer = ({rego, setRego}: any) => {
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
            {(subscriptions.length === 0) ? (
                <>
                    <h1>You have no current vehicle subscriptions with us.</h1>
                    <h1>Add your first one now!</h1>
                </>
            ) : (
                <>
                    <h1>Choose your vehicle</h1>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                        {/* should also filter by time? so people at the top are next */}
                        {subscriptions.map((subscription, i) => {
                            return <div style={{padding: "0.3em"}}>
                                <SingleSubscriptionCard
                                key={i} 
                                subscription={subscription}
                                setSelected={setRego}
                                selected={rego}
                                />
                            </div>;
                        }) }
                    </div>
                </>
            )}
        </>
    );
}

const ChooseVehicle = ({rego, setRego, setStep}: any) => {
    const confirmVehicle = () => {
        setStep("Location");
    }

    const prompt_string = `Confirm the vehicle registration that is having trouble is: ${rego}`;

    return (
        <>
        <main>
            <div className="auth-inner">
                <SubscriptionCardContainer rego={rego} setRego={setRego}/>
                <div className="form-group">
                <label>Other vehicle:</label>
                <input type="text" className="form-control" placeholder="XWZ-123" onChange={e => setRego(e.target.value)}/>
                </div>
                <div>
                {/* <button className="btn btn-primary" onClick={() => {}}>Next</button> */}
                </div>
                <div style={{padding: "0.5em"}}>
                    <BootstrapModal 
                    title="Confirm Vehicle" 
                    prompt_question={prompt_string}
                    function={confirmVehicle}/>
                </div>
            </div>
        </main>    
        </>
    )
}

export default ChooseVehicle;





