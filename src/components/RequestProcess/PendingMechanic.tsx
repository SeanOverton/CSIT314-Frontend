import CancelCallout from "./CancelCallout";

const PendingMechanic = ({request}: any) => {
    return (
        <>
        <h1>Please hang tight, a mechanic will accept your request shortly.</h1>
        <CancelCallout details={request}/>
        </>
    );
}

export default PendingMechanic;