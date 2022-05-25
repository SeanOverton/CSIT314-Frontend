import { Container, Col, Row } from 'react-bootstrap';
import ContactUsButton from '../../components/ContactUsButton';
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

const AboutUs = () => (
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
                                <img src={img1} style={{width: "100%"}}/>
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                                <img src={img2} style={{width: "100%"}}/>
                            </h3>
                        </Col>
                        <Col>
                            <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
                                <img src={img3} style={{width: "100%"}}/>
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
                        <ContactUsButton/>
                    </Row>
                </Container>
            </div>
        </main>
    </>
);

export default AboutUs;
