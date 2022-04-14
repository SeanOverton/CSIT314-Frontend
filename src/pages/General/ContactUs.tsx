import { useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { FaRegBuilding, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { toast } from 'react-toastify';

const ContactDetails = () => {
    return (
        <>
            <h1>How to get in contact with us</h1>
            <Container>
                <Row style={{padding: "2em"}}>
                    <Col>
                        <h4>ROADSIDE ASSISTANCE AVAILABLE</h4>
                        <p>
                            24 hours, 7 days a week
                        </p>
                    </Col>
                    <Col>
                        <h4>EMERGENCY BREAKDOWN NUMBER</h4>
                        <p>
                            011-222-3333
                        </p>
                    </Col>
                </Row>
                <Row style={{padding: "2vw"}}>
                    <Col>
                        <Row style={{padding: "2vw"}}>
                            <h4><span style={{padding:"1vw"}}><FaPhoneAlt/></span>012-345-6789</h4>
                        </Row>
                        <Row style={{padding: "2vw"}}>
                            <h4><span style={{padding:"1vw"}}><MdEmail/></span>companyName@email.com.au</h4>
                        </Row>
                        <Row style={{padding: "2vw"}}>
                            <h4><span style={{padding:"1vw"}}><FaRegBuilding/></span>1234 Smith St, Sydney, NSW, Australia</h4>
                        </Row>
                    </Col>
                    <Col>
                        <h4>Sales & Enquiries (AEST time)</h4>
                        <Row>
                            <Col style={{textAlign: "right"}}>
                                <p>Monday</p>
                                <p>Tuesday</p>
                                <p>Wednesday</p>
                                <p>Thursday</p>
                                <p>Friday</p>
                                <p>Saturday</p>
                                <p>Sunday</p>
                                <p>Public Holidays</p>
                            </Col>
                            <Col style={{textAlign: "left"}}>
                                <p>8AM-5PM</p>
                                <p>8AM-5PM</p>
                                <p>8AM-5PM</p>
                                <p>8AM-5PM</p>
                                <p>8AM-5PM</p>
                                <p>8AM-3PM</p>
                                <p>Closed</p>
                                <p>Closed</p>
                            </Col>
                        </Row>
                    </Col>  
                </Row>                   
            </Container>
        </>
    );
}

const ContactUsForm = () => {
    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [subject, setSubject ] = useState("");
    const [message, setMessage] = useState("");
    
    const sendEmail = (evt: any) => {
        evt.preventDefault();

        // could actually implement this 
        // but not necessary for now
        // https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application
        toast.success("Message sent! Our team will respond as soon as possible. Thanks for contacting us.", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }
    
    return (
        <>
            <h1>Contact Us</h1>
            <main style={{width: "100%"}}>
                <div className="auth-inner">
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <label>Your name (required)</label>
                            <input type="text" className="form-control" placeholder="John Smith" onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Your email (required)</label>
                            <input type="text" className="form-control" placeholder="john@email.com" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        
                        <div className="form-group">
                            <label>Subject</label>
                            <input type="text" className="form-control" placeholder="" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Your message</label>
                            <textarea 
                            maxLength={300} 
                            rows={6} cols={50} className="form-control" placeholder="" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        
                        <div style={{padding: "1em"}}>
                            <button type="submit" value="Submit" className="btn btn-primary btn-block">Send</button>
                        </div>
                    </form>
                </div>   
            </main>              
        </>
    );
}

const ContactUs = () => (
    <>
        <main>
            <div style={{paddingTop: "1em", paddingBottom: "4em"}}>
                <ContactDetails/>
                <ContactUsForm/>
            </div>
        </main>
    </>
);

export default ContactUs;
