import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUsButton = () => {
    return (
        <Card style={{ minWidth: '35vw', backgroundColor: "#18A0FB" }}>
            <Card.Body>
                <Card.Title>Need expert help?</Card.Title>
                <div style={{display: "inline-block"}} className="nav-btn">
                    <Link className="nav-btn" to="/contactus">Contact Us</Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ContactUsButton;