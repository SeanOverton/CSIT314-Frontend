import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";

const Home = () => {
    return (
        <>
        <main> 
            <div style={{paddingTop: "1em", paddingBottom: "4em"}}>
                <img src={img1} style={{width:"50%"}}/>
                <div style={{paddingTop: "5em", paddingBottom: "1em"}}>
                    <Container>
                    <Row>
                        <Col> <h3 style={{textAlign:"left"}}> Why people Trust Us! </h3> </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "1em", paddingRight: "2em" }}>
                            <img src={img2} style={{width:"50%"}}/>
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "2em", paddingRight: "1em"  }}>
                            <img src={img3} style={{width:"50%"}}/>
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
                        <p style={{textAlign:"center"}} >We provide exclusive roadside service in Australia.</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center"}}>We offer the best price for the service.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "1em", paddingRight: "2em" }}>
                            <img src={img4} style={{width:"50%"}}/>
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "2em", paddingRight: "1em"  }}>
                            <img src={img5} style={{width:"50%"}}/>
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
                        <p style={{textAlign:"center" }} >It just take few clicks book our roadside service.</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center" }}>You can rely on our service as it is fast.</p>
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
                <hr></hr>
                <div style={{paddingTop: "2em", paddingBottom: "2em"}}>
                    <h1>How it works ? </h1>
                    <p>Step 1</p>
                    <p>Step 2</p>
                    <p>Step 3</p>
                    <p>Step 4</p>
                    <p>Step 5</p>
                </div>
                <div>
                    <hr></hr>
                    <h3 style={{paddingBottom: "2em"}}>Latest reviews from customers.</h3>

                    <Container>
                    <Row>
                        <Col>
                            <h3 style={{ padding: "1em" }}>
                            ★★★★★
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ padding: "1em" }}>
                            ★★★★★
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ padding: "1em" }}>
                            ★★★★★
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ padding: "1em" }}>
                            ★★★★★
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{textAlign:"center"}}>Customer review 1</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center"}}>Customer review 2</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center"}}>Customer review 3</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center"}}>Customer review 4</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{padding: "1em"}}>
                            ★★★★★
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{padding: "1em"}}>
                            ★★★★★
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{padding: "1em"}}>
                            ★★★★★
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{padding: "1em"}}>
                            ★★★★★
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{textAlign:"center" }}>Customer review 5</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center" }}>Customer review 6</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center" }}>Customer review 7</p>
                        </Col>
                        <Col>
                        <p style={{textAlign:"center" }}>Customer review 8</p>
                        </Col>
                    </Row>
                    </Container> 
                </div>
                <hr></hr>
                <div>
                    <h3 style={{padding: "1em"}}>Our new mobile application is comming soon</h3>
                    <Container>
                        <Row>
                            <Col>
                            <p>Our new mobile application will enable you to manage your membership subscription,request assistance, be allocated a service provider aal via your mobile phone, as well as track the service providers location/distance and ETA to your location. We will be able to allocate the correct resources in the first instance, we call it "The Uber of Roadside Assistance"</p> 
                            </Col>
                            <Col>
                            <h3 style={{ padding: "1em" }}>
                                <img src={img6} style={{width: "50%"}}/>
                            </h3>
                            </Col>
                        </Row>
                    </Container>            
                </div>
            </div>
         </main> 
        </>
    );
};

export default Home;
