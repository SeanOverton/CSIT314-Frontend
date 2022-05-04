import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Checkout from "../../pages/Customer/Checkout";
import Auth from "../utils/Auth";
import BACKEND_URL, { FRONTEND_URL } from "../utils/Constants";
import { makeAuthenticatedPostRequest } from "../utils/Helpers";
import { BsExclamationCircleFill } from "react-icons/bs";

const SingleProblemCard = ({ selected, setSelected, symbol, name}: any) => {    
    return( 
        <div>
        { (selected === name) ? 
        (
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                    {symbol}
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        ) : (
            <Card onClick={() => {setSelected(name)}} style={{ width: '18rem' }}>
                <Card.Body>
                    {symbol}
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        )}
        </div>
    );
}

export const ProblemCardContainer = ({description, setDescription}: any) => {
    let problems = [
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Emergency"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Vehicle will not start"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Flat Tyre"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Flat Battery"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "New Battery"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Keys locked in car"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Engine stopped"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Cooling system/fluid leak"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Transmission/gear box"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Out of petrol"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Out of diesel"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Electrical headlights"
        },
        {
            "symbol": <BsExclamationCircleFill/>,
            "name": "Steering"
        },
    ]
    return (
        <>
            <h1 style={{textAlign: "left", paddingLeft: "3em"}}>What is the problem?</h1>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {problems.map((problem, i) => {
                    return <div style={{padding: "0.3em"}}>
                        <SingleProblemCard
                        key={i} 
                        setSelected={setDescription}
                        selected={description}
                        symbol={problem.symbol}
                        name={problem.name}
                        />
                    </div>;
                }) }
            </div>
        </>
    );
}

const ProblemDetails = ({location, rego, description, setDescription}: any) => {
    const [hasSubscription, setHasSubscription] = useState(false);
    const [hasChecked, setHasChecked] = useState(false);
    
    const makeRequest = (evt: any) => {
        evt.preventDefault();
        
        setHasChecked(false);

        checkIfCarHasSubscription();
    }
    
    const submitRequest = () => {
        let currentdate = new Date();
        
        let month = `${currentdate.getMonth()}`;
        let day = `${currentdate.getDate()}`;
        let year = `${currentdate.getFullYear()}`;

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        let currentdate_string = `${year}-${month}-${day}`

        let body = {
            username: Auth.getUsername(),
            location,
            description,
            status: "PENDING",
            date: currentdate_string
        }

        makeAuthenticatedPostRequest("/create_callout/", 
        "Success! A mechanic will respond shortly!", 
        body, 
        `${FRONTEND_URL}/request`);
    }
    
    const checkIfCarHasSubscription = async () => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }

        axios.get(`${BACKEND_URL}/my_subscriptions/?username=${Auth.getUsername()}`, {headers: headers})
        .then(response => {
            var new_request = response.data.filter(function(sub: any) {
                return sub.vehicle_registration === rego && sub.active;
            });

            setHasChecked(true);

            if(new_request.length > 0){
                setHasSubscription(true);
                submitRequest();
            }else{
                setHasSubscription(false);
            }            
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }
    
    return (
        <main>
            <div className="auth-inner">
        {!hasSubscription && hasChecked ? (
                <Checkout submitRequest = {submitRequest}/>
            ) : (
                    <div className="form-group">
                        <ProblemCardContainer
                        description={description}
                        setDescription={setDescription}/>
                        <label>Other:</label>
                        <input type="text" className="form-control" placeholder="eg. My car is on fire" onChange={e => setDescription(e.target.value)}/>        
                        <form onSubmit={makeRequest}>                        
                            <div style={{padding: "1em"}}>
                                <button type="submit" className="btn btn-primary btn-block">Submit request</button>
                            </div>
                        </form>
                    </div>
                
        )}
            </div>
        </main>
    )
}

export default ProblemDetails;