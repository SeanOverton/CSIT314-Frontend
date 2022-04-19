import { useEffect, useState } from "react";
import { DirectionsRenderer } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "../../src/pages/Customer/CustomerConfirmLocation";
import { compose, lifecycle, withProps } from "recompose";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import React from "react";

interface MapRoutesProps {
  center: any;
  goal: any;
}

const MapRoutes = ({ center, goal }: MapRoutesProps) => {
  const [directions, setDirections] = useState<any>();

  const origin = center;
  const destination = goal;

  const directionsService = new google.maps.DirectionsService();
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
        console.log(result);
      }
    }
  );

  return (
    <DirectionsRenderer
      options={{ suppressMarkers: true }}
      directions={directions}
    />
  );
};

const render = (status: any) => {
  return <h1>{status}</h1>;
};

const SomeMap = ({destination}: any) => {
  const [origin, setOrigin] = useState<any>();

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
  });
  
    return (
      <div style={{ display: "flex", height: "100%" }}>
      <Wrapper apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} render={render}>
        <Map
          center={origin}
          zoom={18}
          style={{ width: "70vw", height: "50vh" }}
        >
          <MapRoutes 
          center={origin}
          goal={destination}
          />
        </Map>
      </Wrapper>
    </div>
  );
};

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(-37.8136, 144.9631),
          destination: new google.maps.LatLng(-37.8116, 145.23),
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)((props: any) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={new google.maps.LatLng(-37.8136, 144.9631)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class NewMap extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MapWithADirectionsRenderer />
      </React.Fragment>
    );
  }
}

export default NewMap;

// export default SomeMap;
