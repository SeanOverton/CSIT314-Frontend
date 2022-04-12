import React from 'react';
import {formatDate, formatTime} from "./utils/Helpers";

interface CalloutDetailsProps {
    details: CalloutDetailsInterface;
}

export interface CalloutDetailsInterface {
    id: number,
    location: string,
    status: string,
    username: string, 
    description: string,
    mechanic: string, 
    date: string, 
    rating: string, 
    review: string
}

const CalloutDetails = (props: CalloutDetailsProps) => {
    let details = props.details;
    
    return (
        <>
        <h1>Customer: {details.username}</h1>
        <h3>Location: {details.location}</h3>
        <h3>TODO: map here that shows location</h3>
        {details.mechanic == "" ? (
            <></>
        ) : (
            <h3>Appointed Mechanic: {details.mechanic}</h3>
        )}
        <h3>Date of request: {formatDate(details.date)}</h3>
        <h3>Time of request: {formatTime(details.date)}</h3>
        <h3>Issue : {details.description}</h3>
        {details.review == "" ? (
            <></>
        ) : (
            <h3>Customer Review: '<i>{details.review}</i>'</h3>
        )}
        {details.rating == "0" ? (
            <></>
        ) : (
            <h3>Customer Rating: {"★".repeat(parseInt(details.rating))}{"☆".repeat(10-parseInt(details.rating))}</h3>
        )}
        </>
    );
};

export default CalloutDetails;