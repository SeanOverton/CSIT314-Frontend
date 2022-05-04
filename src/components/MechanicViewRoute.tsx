import { useEffect, useState } from "react";
import { 
    GoogleMap, 
    withGoogleMap, 
    withScriptjs, 
    DirectionsRenderer
  } 
from "react-google-maps";
import Auth from "./utils/Auth";
import { makeAuthenticatedPostRequest } from "./utils/Helpers";

const MapRoutes = ({ directions }: any) => {
  return (
    <DirectionsRenderer
      options={{suppressMarkers: false}}
      directions={directions}
    />
  );
};

const SomeMap = withScriptjs(withGoogleMap(({destination}: any) => {
  const [origin, setOrigin] = useState<google.maps.LatLng>(new google.maps.LatLng(0, 0));
  const [directions, setDirections] = useState<any>();

  const directionsService = new google.maps.DirectionsService();

  useEffect(() => {
    if ("geolocation" in navigator) {
        console.log("Available");

        let latlng = new google.maps.LatLng(0, 0);

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            
            latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let body = {
              "username": Auth.getUsername(),
              "location": latlng.toJSON()
            }

            makeAuthenticatedPostRequest(
              "/update_location/", 
              "Success! Current location!", 
              body);

            if(destination !== "" && !directions){
              setOrigin(latlng);

              directionsService.route(
                {
                  origin: latlng,
                  destination: destination,
                  travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                  console.log(result);
                  if (status === google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                  } else {
                    // setDirections(result);
                    console.log(result);
                  }
                });
              }
            }
          );
    } else {
        console.log("Not Available");
        // TODO: add a notification reccomending user to enable 
        // location services in the browser
    }
  }, [destination, directions, directionsService]);

    return (
      <div style={{ display: "flex", height: "100%" }}>
        <GoogleMap
          center={origin}
          zoom={18}
        >
          {(directions != null) ? (
            <>
            <MapRoutes 
            directions={directions}
            />
            </>
          ) : (
              <></>
          )}
        </GoogleMap>
    </div>
  );
}));

export default SomeMap;
