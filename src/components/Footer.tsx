import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsAwardFill, BsChatFill, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FRONTEND_URL } from './utils/Constants';

const Footer = () => {
    return (
        <footer>
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
              </Col>
              <Col>
                <h3>
                  <a href={FRONTEND_URL} style={{padding: "0.3em"}}><BsFacebook/></a>
                  <a href={FRONTEND_URL} style={{padding: "0.3em"}}><BsLinkedin/></a>
                  <a href={FRONTEND_URL} style={{padding: "0.3em"}}><BsInstagram/></a>
                  <a href={FRONTEND_URL} style={{padding: "0.3em"}}><BsAwardFill/></a>
                  <a href={FRONTEND_URL} style={{padding: "0.3em"}}><BsChatFill/></a>
                </h3>
              </Col>
            </Row>
          </Container>
        </footer>
    );
};

export default Footer;