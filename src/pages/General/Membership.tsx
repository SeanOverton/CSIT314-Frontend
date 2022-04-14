import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const Home = () => (
    <>
        <main>
            <div style={{paddingTop: "1em", paddingBottom: "4em"}}>
                <h1>Membership Benefits</h1>
                <div style={{paddingLeft: "10%", paddingRight: "10%"}}>
                    <p>We offer a comprehensive range of roadside assistance services to our members, to ensure that whenever they are on the road, they are safe knowing they’re covered, no matter what happens. Read on to see the full range of member benefits.</p>
                </div>
                <Container>
                    <Row style={{display:"inline-block", padding: "2em"}}>
                        <Card style={{ minWidth: '35vw', backgroundColor: "#18A0FB" }}>
                            <Card.Body>
                                {/* <Card.Title>Need expert help?</Card.Title> */}
                                <div style={{display: "inline-block"}} className="nav-btn">
                                    <Link className="nav-btn" to="/signup">Get started</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row style={{padding: "2em"}}>
                        <Col style={{textAlign: "right"}}>
                            <h1><ImCross/></h1>
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h4>No Joining Fees!</h4>
                            <p>
                                No hidden fees or charges just complete transparency.
                            </p>
                        </Col>
                        <Col style={{textAlign: "right"}}>
                            <h1><ImCross/></h1>
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h4>No Paper Work!</h4>
                            <p>
                            No paperwork/form as we are just an app click or a phone call away.
                            </p>
                        </Col>
                    </Row>
                    <h3>$99/vehicle annually, members will receive all cover!</h3>
                    <Row>
                        <Col>
                            <h4 style={{ padding: "2em", textAlign: "left" }}>
                                <p>✓ Unlimited Callouts</p>
                                <p>✓ More Towing (100 kms)</p>
                                <p>✓ Battery Assistance</p>
                                <p>✓ Flat tyre</p>
                                <p>✓ Emergency Fuel</p>
                            </h4>
                        </Col>
                        <Col>
                            <h4 style={{ padding: "2em", textAlign: "left" }}>
                                <p>✓ Lockout Assistance ($70)</p>
                                <p>✓ Ambulance Cover (Limit $400)</p>
                                <p>✓ Car Hire (Limit $700)</p>
                                <p>✓ Accomodation - Breakdown (Limit $700)</p>
                                <p>✓ Commencement Period (48 hours)</p>
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </div>

        </main>
    </>
);

export default Home;
