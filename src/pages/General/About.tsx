import React from 'react';
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <main>
            <div style={{paddingTop: "1em", paddingBottom: "4em"}}>
                <h1>About Us</h1>
                <Container>
                    <Row>
                        <Col>
                            <h4>Our Company</h4>
                            <p>
                                CompanyName is there to help and to ensure your safety  if your vehicle breaks down in New Sauth Wales. We will provide all types of towing services at the lowest possible price rates in New South Wales. We guarantee our clients the easiest mode of transactions. So, no need to search for an ATM in the middle of the night. One call/an Online booking requires it all!
                            </p>
                        </Col>
                        <Col>
                            <h4>Our Team</h4>
                            <p>
                                The professional team of ComapnyName will find a complete solution no matter whether you car breaks down or run out of gas. All our drivers are highly trained, certified and experienced professionals to work in any situation. The vehicle our team use for towing services are regulary maintained, cleaned and updated.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h4>Careers</h4>
                            <p>
                                If you are interested in joining the marvellous team at CompanyName, please complete the following form and we will contact you when you positions become available.
                            </p>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row style={{display:"inline-block", paddingTop: "2em"}}>
                        <Card style={{ width: '35rem', backgroundColor: "#18A0FB" }}>
                            <Card.Body>
                                <Card.Title>Need expert help?</Card.Title>
                                <div style={{display: "inline-block"}} className="nav-btn">
                                    <Link className="nav-btn" to="/contactus">Contact Us</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        </main>
    </>
);

export default Home;
