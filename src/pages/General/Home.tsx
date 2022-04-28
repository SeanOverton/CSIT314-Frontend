import React from 'react';
import About from './About';
import Services from './Services';
import { Container, Col, Row, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <>
        <main>  
            <div style={{paddingTop: "1em", paddingBottom: "4em"}}>
            <h3> Why people Trust Us! </h3>
                <Container>
                    <Row>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "1em", paddingRight: "5em" }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "5em", paddingRight: "1em"  }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 style={{ paddingTop: "1em", paddingLeft: "1em", paddingRight: "4em" }}>Exclusive Services</h4>
                        </Col>
                        <Col>
                        <h4 style={{ paddingTop: "1em", paddingLeft: "4em", paddingRight: "1em" }}>Best Price</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{paddingLeft: "1em", paddingRight: "4em" }} >9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                        <Col>
                        <p style={{paddingLeft: "4em", paddingRight: "1em" }}>9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "1em", paddingRight: "5em" }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: "5em", paddingRight: "1em"  }}>
                                IMAGE PLACEHOLDER
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h4 style={{ paddingTop: "1em", paddingLeft: "1em", paddingRight: "4em" }}>It is Easy</h4>
                        </Col>
                        <Col>
                        <h4 style={{ paddingTop: "1em", paddingLeft: "4em", paddingRight: "1em" }}>Quick Response</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p style={{paddingLeft: "1em", paddingRight: "4em" }} >9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                        <Col>
                        <p style={{paddingLeft: "4em", paddingRight: "1em" }}>9/10 Problems fixed by roadside. Our xxx Specialist</p>
                        </Col>
                    </Row>
               </Container> 
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
