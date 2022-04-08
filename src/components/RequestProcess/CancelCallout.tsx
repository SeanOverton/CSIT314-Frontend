import BootstrapModal from "../../pages/Customer/BootstrapModal";
import { FRONTEND_URL } from "../utils/Constants";
import { makeAuthenticatedPostRequest } from "../utils/Helpers";

const CancelCallout = ({details}: any) => {
    const cancelCallout = () => {
        let body = {
            username: details.username,
            location: details.location,
            description: details.description,
            status: "CANCELLED",
        }

        makeAuthenticatedPostRequest("/update_callout/", 
        "Success! Thank you for using our service!", 
        body, 
        FRONTEND_URL);
    }

    return (
        <BootstrapModal title="Cancel Callout" prompt_question="Are you sure you want to cancel?" function={cancelCallout}/>
    );
}

export default CancelCallout;