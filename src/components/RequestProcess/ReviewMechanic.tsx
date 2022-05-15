import { useState } from "react";
import { FRONTEND_URL } from "../utils/Constants";
import { makeAuthenticatedPostRequest } from "../utils/Helpers";
import { MdFace, MdTagFaces } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";

const StarSelect = ({rating, setRating}: any) => {
    const stars = [1, 2, 3, 4, 5];

    return (
    <div>
        {stars.map((i) => {
        if(rating >= i){
            return <span style={{fontSize: "3em"}} key={i} onClick={() => {
                setRating(i);
            }}>★</span>
        }else{
            return <span style={{fontSize: "3em"}} key={i} onClick={() => {
                setRating(i);
            }}>☆</span>
        }
        })}
    </div>);
}

const ReviewMechanic = ({request}: any) => {
    const [rating, setRating] = useState<any>(0);
    const [review, setReview] = useState<any>();

    const reviewCallout = (evt: any) => {
        evt.preventDefault();

        let body = {
            username: request.username,
            location: request.location,
            description: request.description,
            status: "REVIEWED",
            mechanic: request.mechanic,
            review: review,
            rating: rating,
        }

        makeAuthenticatedPostRequest("/update_callout/", 
        "Success! Thank you for using our service!", 
        body, 
        FRONTEND_URL);
    }

    return (
        <main>
            <div className="auth-inner">
                <form onSubmit={reviewCallout}>
                {/* <form> */}
                <h3 style={{textAlign: "left"}}>How was your experience with {request.mechanic}?</h3>
                    <Container>
                        <Row>
                            <Col>
                                {rating >= 4 ? (
                                    <MdTagFaces style={{fontSize: "7em"}}/>
                                ) 
                                : (
                                    <MdFace style={{fontSize: "7em"}}/>
                                )}
                                
                                <StarSelect 
                                setRating={setRating}
                                rating={rating}/>
                            </Col>
                            <Col>
                            <div className="form-group">
                                <textarea
                                style={{resize: "none", minWidth: "150px"}}
                                maxLength={300} 
                                rows={6} cols={50} className="form-control" placeholder="Type a review here..." onChange={e => setReview(e.target.value)}/>
                            </div>
                            </Col>
                        </Row>
                    </Container>       
                    
                    <div style={{padding: "1em"}}>
                    <button type="submit" className="btn btn-primary btn-block">Submit review</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default ReviewMechanic;