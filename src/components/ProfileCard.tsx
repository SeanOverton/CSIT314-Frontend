import React from 'react';
import { Card } from 'react-bootstrap';
const ProfileCard = (props: any) =>{
    const handleClick = () =>{
        //onclick go to profile page
        // profile page should take a user json data as props
    }
    return(
        <div>
            <Card style={{width: '20%'}}>
                <Card.Body>
                    <Card.Title>{props.mechanic}</Card.Title>
                    <Card.Title>{props.rating}</Card.Title>      
                </Card.Body>
            </Card>
        </div>
        
    );
}
   

export default ProfileCard;