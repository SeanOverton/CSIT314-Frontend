import React from 'react';
import About from './About';
import Services from './Services';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <main> 
            <div style={{paddingTop: "1em", paddingBottom: "4em"}}>
                <h1>IMAGE PLACEHOLDER</h1>
                <div style={{paddingTop: "5em", paddingBottom: "1em"}}>
                    <Container>
                    <Row>
                        <Col> <h3 style={{textAlign:"left"}}> Why people Trust Us! </h3> </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "1em", paddingRight: "2em" }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "2em", paddingRight: "1em"  }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 style={{textAlign:"center"}}>Exclusive Services</h4>
                        </Col>
                        <Col>
                        <h4 style={{textAlign:"center"}}>Best Price</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{textAlign:"center"}} >9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center"}}>9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "1em", paddingRight: "2em" }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "2em", paddingRight: "1em"  }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 style={{textAlign:"center" }}>It is Easy</h4>
                        </Col>
                        <Col>
                        <h4 style={{textAlign:"center" }}>Quick Response</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{textAlign:"center" }} >9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center" }}>9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                    </Row>
               </Container> 
               </div>
               <div><Row style={{display:"inline-block", paddingTop: "2em"}}>
                        <Card style={{ width: '35rem', backgroundColor: "#18A0FB" }}>
                            <Card.Body>
                                <Card.Title>Broken Down?<p> Request Roadside Assistance </p></Card.Title>
                                <div style={{display: "inline-block"}} className="nav-btn">
                                    <Link className="nav-btn" to="/contactus">Call Us</Link>
                                </div><br/> <br/>
                                <div style={{display: "inline-block"}} className="nav-btn">
                                    <Link className="nav-btn" to="/contactus">Book Online</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row> 
                </div>
            </div>

           {/* <div>
                <h1>Home page</h1>
                <h3>(Whatever information we want to put on the home page.)</h3>
                <h3>Average rating: [FROM DB]/5</h3>
                <h3>Call outs in this month: [FROM DB]</h3>
           </div>*/}
            {/* <About/>*/}
        {/* <Services/>*/}
         </main> 
        </>
    );
};

export default Home;
