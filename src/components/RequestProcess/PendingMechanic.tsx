import CancelCallout from "./CancelCallout";
import { BsFillGearFill } from "react-icons/bs";

const PendingMechanic = ({request}: any) => {
    return (
        <div style={{padding:"2em"}}>
            <h1>Please hang tight, a mechanic will accept your request shortly.</h1>
            <h2>Refresh this page to see when a mechanic accepts your order.</h2>
            <div style={{padding: "2em"}}>
                <BsFillGearFill 
                style={{fontSize: "3em",
                animation: `spin 3s linear infinite`}}/>
                <BsFillGearFill 
                style={{fontSize: "10em",
                animation: `spin 10s linear infinite`,
                animationDirection: "reverse"}}/>
                <div>
                <BsFillGearFill 
                style={{fontSize: "5em",
                animation: `spin 7s linear infinite`}}/>
                </div>
            </div>
            <div style={{padding: "2em"}}>
                <CancelCallout details={request}/>
            </div>
        </div>
    );
}

export default PendingMechanic;