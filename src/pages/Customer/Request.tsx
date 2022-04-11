import "../../styles/forms.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BACKEND_URL from "../../components/utils/Constants";
import Auth from "../../components/utils/Auth";
import ChooseVehicle from "../../components/RequestProcess/ChooseVehicle";
import ConfirmLocation from "../../components/RequestProcess/ConfirmLocation";
import ProblemDetails from "../../components/RequestProcess/ProblemDetails";
import PendingMechanic from "../../components/RequestProcess/PendingMechanic";
import TrackMechanic from "../../components/RequestProcess/TrackMechanic";
import ReviewMechanic from "../../components/RequestProcess/ReviewMechanic";
import { AiFillCar, AiFillClockCircle, AiFillSmile } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillGearFill } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';

// const getDirections = () => {
//     const DirectionsService = new google.maps.DirectionsService();

//     DirectionsService.route({
//     origin: new google.maps.LatLng(41.8507300, -87.6512600),
//     destination: new google.maps.LatLng(41.8525800, -87.6514100),
//     travelMode: google.maps.TravelMode.DRIVING,
//     }, (result, status) => {
//     if (status === google.maps.DirectionsStatus.OK) {
//         this.setState({
//         directions: result,
//         });
//     } else {
//         console.error(`error fetching directions ${result}`);
//     }
//     });

//     return
// }

const Request = () => {
    const steps = ["Vehicle", "Location", "Problem", "PENDING", "ACCEPTED", "COMPLETED"];
    const [step, setStep] = useState("Vehicle");

    const [request, setRequest] = useState([]);
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [rego, setRego] = useState("");

    useEffect(() => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }

        axios.get(`${BACKEND_URL}/all_callouts`, {headers: headers})
        .then(response => {
            // console.log(response.data);

            var new_request = response.data.filter(function(request: any) {
                return request.username == Auth.getUsername() && request.status != "REVIEWED" && request.status != "CANCELLED";
            });

            console.log(new_request);

            if(new_request.length > 0){
                setRequest(new_request[0]);
                setStep(new_request[0].status);
            }
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    }, []); 

    const renderProgressBar = (current_step: any) => {
        // TODO: room here to animate some sort of progression bar
        // wireframe design has an example but any creative ideas here
        // would be more than welcome
        const index = steps.indexOf(current_step);

        return (
            <div style={{width: "100%", left: "50%", padding: "2em", display: "block"}}>
                <Container>
                    <Row>
                        {index >= 0 ?
                            (
                                <Col>
                                    <h1><AiFillCar/></h1>
                                    <p>Confirm vehicle</p>
                                </Col>
                            ) : (
                                <></>
                            )    
                        }
                        {index >= 1 ?
                            (
                                <Col>
                                    <h1>
                                        <IoLocationSharp/>
                                    </h1>
                                    <p>Confirm location</p>
                                </Col>
                            ) : (
                                <Col>
                                    <span style={{color: "#D3D3D3"}}>
                                    <h1>
                                        <IoLocationSharp/>
                                    </h1>
                                    <p>Confirm location</p>
                                    </span>
                                </Col>
                            )    
                        }
                        {index >= 2 ?
                            (
                                <Col>
                                    <h1>
                                        <BsFillGearFill/>
                                    </h1>
                                    <p>Confirm issue</p>
                                </Col>
                            ) : (
                                <Col>
                                    <span style={{color: "#D3D3D3"}}>
                                    <h1>
                                        <BsFillGearFill/>
                                    </h1>
                                    <p>Confirm issue</p>
                                    </span>
                                </Col>
                            )    
                        }
                        {index >= 3 ?
                            (
                                <Col>
                                    <h1>
                                        <AiFillClockCircle/>
                                    </h1>
                                    <p>Pending a mechanic</p>
                                </Col>
                            ) : (
                                <Col>
                                    <span style={{color: "#D3D3D3"}}>
                                    <h1>
                                        <AiFillClockCircle/>
                                    </h1>
                                    <p>Pending a mechanic</p>
                                    </span>
                                </Col>
                            )    
                        }
                        {index >= 4 ?
                            (
                                <Col>
                                    <h1>
                                    ✓
                                    </h1>
                                    <p>On their way!</p>
                                </Col>
                            ) : (
                                <Col>
                                    <span style={{color: "#D3D3D3"}}>
                                    <h1>
                                    ✓
                                    </h1>
                                    <p>On their way!</p>
                                    </span>
                                </Col>
                            )    
                        }
                        {index >= 5 ?
                            (
                                <Col>
                                    <h1>
                                        <AiFillSmile/>
                                    </h1>
                                    <p>Complete</p>
                                </Col>
                            ) : (
                                <Col>
                                    <span style={{color: "#D3D3D3"}}>
                                    <h1>
                                    <AiFillSmile/>
                                    </h1>
                                    <p>Complete</p>
                                    </span>
                                </Col>
                            )    
                        }
                    </Row>
                </Container>
            </div>
        );
    }

    const renderCurrentStep = (param: any) => {
        switch(param) {
            case "Vehicle":
                return <ChooseVehicle 
                rego={rego}
                setRego={setRego} 
                setStep={setStep}/>;
            case "Location":
                return <ConfirmLocation 
                location={location}
                setLocation={setLocation} 
                setStep={setStep}/>
            case "Problem":
                return <ProblemDetails
                rego={rego}
                description={description}
                location={location} 
                setDescription={setDescription} 
                />
            case "PENDING":
                return <PendingMechanic request={request}/>
            case "ACCEPTED":
                return <TrackMechanic request={request}/>
            case "COMPLETED":
                return <ReviewMechanic request={request}/>
        }
      }

    return (
        <>
        {renderProgressBar(step)}
        {renderCurrentStep(step)}
        </>
    );
};

export default Request;