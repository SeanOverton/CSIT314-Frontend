import { Wrapper } from '@googlemaps/react-wrapper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Marker, Map } from '../pages/Customer/CustomerConfirmLocation';
import MechanicViewRoute from './MechanicViewRoute';
import {formatDate, formatTime} from "./utils/Helpers";

interface CalloutDetailsProps {
    details: CalloutDetailsInterface,
    displayRoute: boolean,
}

const render = (status: any) => {
    return <h1>{status}</h1>;
  };

export interface CalloutDetailsInterface {
    id: number,
    location: string,
    status: string,
    username: string, 
    description: string,
    mechanic: string, 
    date: string, 
    rating: string, 
    review: string,
}

const CalloutDetails = (props: CalloutDetailsProps) => {
    const [location, setLocation] = useState<any>(null);
    
    let details = props.details;

    useEffect(() => {
        const getLatLng = () => {
            if(details.location !== ""){
                axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${details.location}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`).then(
                    (response: any) => {
                        console.log("Google Geocode API response: ");
                        console.log(response.data)
                        console.log(response.data.results[0].geometry.location);
                        setLocation(response.data.results[0].geometry.location);
                    }
                    );
            }
        }

        getLatLng();
    }, [details])

    return (
        <>
        <h3>Booking ID: <span id="booking_id">{details.id}</span></h3>
        <p style={{color: "grey"}}>{details.description}</p>
        <h4>$200.00</h4>
        {/* only should display route when mechanic is viewing and/or 
        actually working on the job. */}
        {props.displayRoute ? (
            <MechanicViewRoute destination={details.location}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ paddingLeft: `5%`, paddingRight: `5%`, height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
        ) : (
            <div style={{ paddingLeft: "5%", paddingRight: "5%", height: "100%" }}>
                <Wrapper apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} render={render}>
                    {location ? (
                        <Map
                        center={location}
                        zoom={18}
                        style={{height: "400px" }}
                        >
                            <Marker position={location} />
                        </Map>
                    ) : (
                        <></>
                    )}
                </Wrapper>
            </div>
        )}
        <div id="map"></div>
        <div style={{paddingLeft: "10%", paddingRight: "10%", paddingBottom: "2em"}}>
            <h3 style={{textAlign: "left"}}>JOB DETAILS</h3>
            <hr/>
            <Row style={{fontSize: "3vw"}}>
                <Col>
                    <p style={{color: "grey"}}>Date and time</p>
                </Col>
                <Col>
                    <p>{formatTime(details.date)} {formatDate(details.date)}</p>
                </Col>
            </Row>
            <hr/>
            <Row style={{fontSize: "3vw"}}>
                <Col>
                    <p style={{color: "grey"}}>Customer Information</p>
                </Col>
                <Col>
                    <p>{details.username}</p>
                </Col>
            </Row>
            <hr/>
            <Row style={{fontSize: "3vw"}}>
                <Col>
                    <p style={{color: "grey"}}>Address</p>
                </Col>
                <Col>
                    <p>{details.location}</p>
                </Col>
            </Row>
            <hr/>
            {/* <Row style={{fontSize: "3vw"}}>
                <Col>
                    <p style={{color: "grey"}}>Vechile Information</p>
                </Col>
                <Col>
                    <p>TODO</p>
                </Col>
            </Row> */}
            {details.mechanic === "" ? (
                <></>
            ) : (
                <>
                    <hr/>
                    <Row style={{fontSize: "3vw"}}>
                        <Col>
                            <p style={{color: "grey"}}>Appointed Mechanic</p>
                        </Col>
                        <Col>
                            <p>{details.mechanic}</p>
                        </Col>
                    </Row>
                </>
            )}
            {details.review === "" ? (
                <></>
            ) : (
                <>
                    <hr/>
                    <Row style={{fontSize: "3vw"}}>
                        <Col>
                            <p style={{color: "grey"}}>Review</p>
                        </Col>
                        <Col>
                            <p><i>'{details.review}'</i></p>
                        </Col>
                    </Row>
                </>
            )}
            {details.rating === "0" ? (
                <></>
            ) : (
                <>
                    <hr/>
                    <Row style={{fontSize: "3vw"}}>
                        <Col>
                            <p style={{color: "grey"}}>Rating</p>
                        </Col>
                        <Col>
                        {"★".repeat(parseInt(details.rating))}{"☆".repeat(5-parseInt(details.rating))}
                        </Col>
                    </Row>
                </>
            )}
        </div>
        </>
    );
};

export default CalloutDetails;