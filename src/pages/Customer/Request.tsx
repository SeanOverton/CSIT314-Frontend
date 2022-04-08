import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
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
        return <h1>Status: {current_step}</h1>
    }

    const renderCurrentStep = (param: any) => {
        switch(param) {
            case "Vehicle":
                return <ChooseVehicle setRego={setRego} setStep={setStep}/>;
            case "Location":
                return <ConfirmLocation setLocation={setLocation} setStep={setStep}/>
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
        <Nav/>
        {renderProgressBar(step)}
        {renderCurrentStep(step)}
        <Footer/>
        </>
    );
};

export default Request;