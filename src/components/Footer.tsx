import { Col, Container, Row } from 'react-bootstrap';
import { BsAwardFill, BsChatFill, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <Container>
          <Row>
            <Col>
              <h3>Company Name</h3>
              <p>© Company Name, 2022</p>
            </Col>
            <Col>
              <div style={{textAlign: "left", paddingLeft: "20%"}}>
                  <p><b><Link to="/">Home</Link></b></p>
                  <p><b><Link to="/services">Services</Link></b></p>
                  <p><b><Link to="/membership">Membership</Link></b></p>
                  <p><b><Link to="/about">About Us</Link></b></p>
                  <p><b><Link to="/contactus">Contact Us</Link></b></p>
              </div>
              {/* <img src={car_logo} style={{height: "50px"}}/>
              <p>Est. 8-3-2022</p> */}
            </Col>
            <Col>
              <h3>
                <a href="#" style={{padding: "0.3em"}}><BsFacebook/></a>
                <a href="#" style={{padding: "0.3em"}}><BsLinkedin/></a>
                <a href="#" style={{padding: "0.3em"}}><BsInstagram/></a>
                <a href="#" style={{padding: "0.3em"}}><BsAwardFill/></a>
                <a href="#" style={{padding: "0.3em"}}><BsChatFill/></a>
              </h3>
            </Col>
          </Row>
        </Container>
        </>
    );
};

export default Footer;