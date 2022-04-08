import CancelCallout from "./CancelCallout";

const TrackMechanic = ({request}: any) => {
    return (
        <>
        <h1>Your mechanic {request.mechanic} is on his way.</h1>
        <CancelCallout details={request}/>
        </>
    )
}

export default TrackMechanic;