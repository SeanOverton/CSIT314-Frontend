import { Col, Row } from 'react-bootstrap';
import MechanicViewRoute from './MechanicViewRoute';
import {formatDate, formatTime} from "./utils/Helpers";

interface CalloutDetailsProps {
    details: CalloutDetailsInterface;
}

export interface CalloutDetailsInterface {
    id: number,
    location: string,
    status: string,
    username: string, 
    description: string,
    mechanic: string, 
    date: string, 
    rating: string, 
    review: string
}

const CalloutDetails = (props: CalloutDetailsProps) => {
    let details = props.details;

    return (
        <>
        <h3>Booking ID: {details.id}</h3>
        <p style={{color: "grey"}}>{details.description}</p>
        <h4>$200.00</h4>
        {/* <h3>TODO: map here that shows location</h3> */}
        <MechanicViewRoute/>
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
            {details.mechanic == "" ? (
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
            {details.review == "" ? (
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
            {details.rating == "0" ? (
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