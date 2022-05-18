import { Wrapper } from "@googlemaps/react-wrapper";
import CancelCallout from "./CancelCallout";
import MechanicMiniProfile from "./MechanicMiniProfile";
import { Marker, Map } from '../../pages/Customer/CustomerConfirmLocation';
import { useEffect, useState } from "react";
import Auth from "../utils/Auth";
import BACKEND_URL from "../utils/Constants";
import axios from "axios";

const render = (status: any) => {
    return <h1>{status}</h1>;
  };


const TrackMechanic = ({request}: any) => {
    const [mechanicLocation, setMechanicLocation] = useState();
    
    useEffect(() => {
        // this should be extracted so it can be used by multiple requests
        let headers = {
            "Authorization": `Token ${Auth.getToken()}`
        }

        //TODO: actually fetch data in here
        axios.get(`${BACKEND_URL}/get_location/?username=${request.mechanic}`, {headers: headers})
        .then(response => {
            console.log(response.data);
            const location = response.data[0].location;
            console.log(location);
            setMechanicLocation(location);
        })
        .catch((error) => {
            // TODO: actually handle this error
            console.log(error.response.data);
            console.log(error.request);
            console.log(error.message);
        });
    },[])

    return (
        <>
      <div className="d-flex justify-content-center">
            <MechanicMiniProfile name={request.mechanic}/>
      </div>
      
        <div style={{ paddingLeft: "5%", paddingRight: "5%", height: "100%" }}>
            <Wrapper apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} render={render}>
                {mechanicLocation ? (
                    <Map
                    center={mechanicLocation}
                    zoom={13}
                    style={{height: "400px" }}
                    >
                        <Marker position={mechanicLocation} />
                    </Map>
                ) : (
                    <></>
                )}
            </Wrapper>
        </div>
        <CancelCallout details={request}/>
        </>
    )
}

export default TrackMechanic;