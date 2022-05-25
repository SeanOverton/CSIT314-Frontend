import { Card, CardImg, Row, Col } from "react-bootstrap";
import logo from "../../images/test_profle.png";
import "../../styles/profileCard.css";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import { BiSad, BiHappyBeaming} from "react-icons/bi";
import { useState, useEffect} from "react";
import Auth from "../../components/utils/Auth";
import BACKEND_URL from "../../components/utils/Constants";
import axios from "axios";
import { stringify } from "querystring";
import Collapse from 'react-bootstrap/Collapse'

interface Content {
    reviews: any[],
    averageRating: number
};

function GetPastCallOuts(name:string){
    const[details, setDetails] =  useState<any[]>([]);
    
    useEffect(()=>{
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }
        axios.get(`${BACKEND_URL}/all_callouts?mechanic=${name}`, {headers: headers})
        .then(response => {
            setDetails(response.data);           
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }, [details.length]);
       
    return details;
}

function GetMechanics(name:string){
    const[details, setDetails] =  useState<any[]>([]);
    
    useEffect(()=>{
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }   
        axios.get(`${BACKEND_URL}/get_user_details?username=${name}`, {headers: headers})
        .then(response => {
            setDetails(response.data);           
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }, []);
       
    return details;
}

function GetReviewContents(PastCallOuts:any) {
    var contents : Content= {
                reviews: [],
                averageRating: 0
    };
    
    var numberOfReviewed:number;
    var totalRating  :number;
       
    //count average rating
    totalRating = numberOfReviewed= 0;

    for (var i = 0; i < PastCallOuts.length; i++) {
        if(PastCallOuts[i].status == "REVIEWED"){
            totalRating += Number(PastCallOuts[i].rating);
            const reviewContents = {
                name: PastCallOuts[i].username,
                rating: PastCallOuts[i].rating,
                review: PastCallOuts[i].review,
            };
            //  console.log(reviewContents);
            contents.reviews.push(reviewContents);
            numberOfReviewed++;
        }
    } 

        if(numberOfReviewed>0){
         //   console.log(totalRating, numberOfReviewed);
            contents.averageRating= (totalRating/numberOfReviewed);
        }

    return contents;
}


const MechanicMiniProfile = ({name}: any) => {

    var PastCallOuts = GetPastCallOuts(name);
    var Mechanic = GetMechanics(name);
    var contents = GetReviewContents(PastCallOuts);
    console.log(contents.reviews);
    const [open, setOpen] = useState(false);
            
      
    

    const generateStars =(num:number) =>{
        var blueStars : number;
        var  blackStars : number;
       
        blueStars = blackStars  = 0;
        blueStars = Math.round(num);
        blackStars = 5-blueStars;
        return(
            <div>
                {  
                Array.from({length: blueStars})
                        .map((_, index) => (
                            <AiFillStar style={{color:"var(--font-color-secondary)"}}></AiFillStar>
                        )
                )}

                {Array.from({length: blackStars})
                .map((_, index) => (
                    <AiOutlineStar  style={{color:"var(--font-color-secondary)"}}></AiOutlineStar>
                )
        )}
            </div>
        );
    }

    return (
        <div className = "profile-card">
        {(Mechanic.length===1)?( <>
            <Card bg="light" 
                key="light"
                text="dark"
                className="mb-2 "
                style = {{minWidth:"300px"}}
                >
                <Card.Header>
                    <Card.Title> {Mechanic[0].first_name} is on their way</Card.Title>
                    <Card.Img className="rounded-circle" overflow-hidden variant="top" 
                       src={`${BACKEND_URL}/media/${Mechanic[0].image}`}
                    style={{ width: '150px', height: "150px"}}></Card.Img>   
                </Card.Header>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            {
                            1 < 3 
                            ?  
                                (<BiSad style={{color:"var(--font-color-secondary)"}} size={20}/>) 
                            : 
                                (<BiHappyBeaming style={{color:"var(--font-color-secondary)"}} size={20  }/>)
                            }
                        </div>
                        <div>{generateStars(contents.averageRating)}</div>  
                        <div>
                            <button className="btn btn-primary" 
                                type="button" 
                                onClick={() => setOpen(!open)}
                                aria-controls="review-list"
                                aria-expanded={open}
                            >
                                See Reviews
                            </button>
                        </div>
                        
                    </div>
                </Card.Body>
            </Card>
            <Collapse in={open} dimension="width">
                <div id = "review-list">
                {(contents.reviews).map((rev:any)=>{
                    return(
                        <div className="review-content">
                            <h4>{rev.name}</h4>
                            <p>{rev.review}</p>
                            <div>{generateStars(Math.round(rev.rating))}</div>
                        </div>    
                    );
                 })}
                </div>
            </Collapse>
        </>):(<>
           
        </>)}
    </div>
    )
}




export default MechanicMiniProfile;