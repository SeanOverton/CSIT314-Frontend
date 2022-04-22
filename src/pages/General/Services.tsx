import { Container, Col, Row } from 'react-bootstrap';
import { GiCarWheel, GiTowTruck } from "react-icons/gi";
import { FaOilCan, FaCarBattery } from "react-icons/fa";
import ContactUsButton from '../../components/ContactUsButton';

const Home = () => (
    <>
        <main>
            <div style={{paddingTop: "1em", paddingBottom: "4em"}}>
                <h1>Our Services</h1>
                <Container>
                    <Row style={{padding: "2em"}}>
                        <Col sm={4}>
                            <h3><span style={{padding:"1em"}}><GiCarWheel/></span>Flat Tyres</h3>
                        </Col>
                        <Col sm={8}>
                            <p>
                            We’ll change your tyre with your vechicles roadworthy spare tow your vehecle to a tyre outlet then service centre.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{padding: "2em"}}>
                        <Col sm={4}>
                            <h3><span style={{padding:"1em"}}><FaCarBattery/></span>Flat Battery</h3>
                        </Col>
                        <Col sm={8}>
                            <p>
                            We’ll either provide a jump atart or arrange a battery replacement if avilable, to help you on your way.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{padding: "2em"}}>
                        <Col sm={4}>
                            <h3><span style={{padding:"1em"}}><FaOilCan/></span>Emergency Fuel</h3>
                        </Col>
                        <Col sm={8}>
                            <p>
                            We will deliver up to 10 liters of emergency fuel. Electronic or LPG vehicles will be provided with towing assistance.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{padding: "2em"}}>
                        <Col sm={4}>
                            <h3><span style={{padding:"1em"}}><GiTowTruck/></span>Towing</h3>
                        </Col>
                        <Col sm={8}>
                            <p>
                            Emergency towing can transport your vehicle to the nearest repairer up to the kilometre limits of your plan.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{display:"inline-block", paddingTop: "2em"}}>
                        <ContactUsButton/>
                    </Row>
                </Container>
            </div>

        </main>
    </>
);

export default Home;
