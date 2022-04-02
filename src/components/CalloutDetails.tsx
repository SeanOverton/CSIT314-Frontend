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
        <h1>Request details for user: {details.username}</h1>
        <h3>Location {details.location}</h3>
        <h3>TODO: map here</h3>
        <h3>Date: {formatDate(details.date)}</h3>
        <h3>Time of request: {formatTime(details.date)}</h3>
        <h3>Customer Comment: {details.description}</h3>
        </>
    );
};

export default CalloutDetails;