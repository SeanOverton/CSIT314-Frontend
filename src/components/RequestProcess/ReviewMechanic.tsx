import { useState } from "react";
import { FRONTEND_URL } from "../utils/Constants";
import { makeAuthenticatedPostRequest } from "../utils/Helpers";

const ReviewMechanic = ({request}: any) => {
    const [rating, setRating] = useState<any>();
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
        <div className="auth-inner">
            <form onSubmit={reviewCallout}>
                <h3>Review the service!</h3>

                <div className="form-group">
                    <label>Rating</label>
                    <input type="text" className="form-control" placeholder="1-10"  onChange={e => setRating(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Please provide a descriptive review:</label>
                    <input type="text" className="form-control" placeholder="The mechanic was a legend!" onChange={e => setReview(e.target.value)}/>
                </div>
                
                <div style={{padding: "1em"}}>
                <button type="submit" className="btn btn-primary btn-block">Submit review</button>
                </div>
            </form>
        </div>
    );
}

export default ReviewMechanic;