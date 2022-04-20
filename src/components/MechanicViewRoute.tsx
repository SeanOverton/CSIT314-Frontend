import { useEffect, useState } from "react";
import { 
    GoogleMap, 
    withGoogleMap, 
    withScriptjs, 
    DirectionsRenderer, 
    Marker} 
from "react-google-maps";

interface MapRoutesProps {
  origin: google.maps.LatLng;
  destination: any;
}

const MapRoutes = ({ origin, destination }: MapRoutesProps) => {
  const [directions, setDirections] = useState<any>();

  const directionsService = new google.maps.DirectionsService();

  useEffect(() => {
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        console.log(result);
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          setDirections(result);
          console.log(result);
        }
      }
    );
  }, []);

  return (
    <DirectionsRenderer
      options={{suppressMarkers: true}}
      directions={directions}
    />
  );
};

const SomeMap = withScriptjs(withGoogleMap(({destination}: any) => {
  const [origin, setOrigin] = useState<google.maps.LatLng>(new google.maps.LatLng(0, 0));

  useEffect(() => {
    if ("geolocation" in navigator) {
        console.log("Available");
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            
            const latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            setOrigin(latlng);
          });
    } else {
        console.log("Not Available");
        // TODO: add a notification reccomending user to enable 
        // location services in the browser
    }
  }, []);

    return (
      <div style={{ display: "flex", height: "100%" }}>
        <GoogleMap
          center={origin}
          zoom={18}
        >
          {(origin && destination != "") ? (
            <>
            <MapRoutes 
            origin={origin}
            destination={destination}
            />
            <Marker position={origin}/>
            </>
          ) : (
              <></>
          )}
        </GoogleMap>
    </div>
  );
}));

export default SomeMap;
