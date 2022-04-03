import { toast } from "react-toastify";
import axios from "axios";
import BACKEND_URL from "./Constants";

export const formatDate = (unformatted_date: string) => {
    return unformatted_date.split("T")[0];
}

export const formatTime = (unformatted_date: string) => {
    if(!unformatted_date){
        return unformatted_date;
    }
    
    return unformatted_date.split("T")[1].substring(0, 5);

}

export const makePostRequest = (url: string, success_message: string, body: any, headers: any = {}, on_success_redirect_url?: string) => {
    // axios request
    axios.post(`${BACKEND_URL}${url}`, body, {headers: headers})
    .then(response => {
        toast.success(success_message, {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
        
        if(on_success_redirect_url){
            document.location = on_success_redirect_url;
        }
    })
    .catch((error) => {
        for (const property in error.response.data) {
            console.log(`${property}: ${error.response.data[property][0]}`);
            toast.error(
                `${property}: ${error.response.data[property][0]}`,
            {
                position: "top-center",
                autoClose: 10000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            }
            );
        }
        console.log(error.response.data);
        console.log(error.request);
        console.log(error.message);
    });
}

export const makeAuthenticatedPostRequest = (url: string, success_message: string, body: any, on_success_redirect_url?: string) => {
    let token = localStorage.getItem("token")?.replaceAll('"', '');

    // this should be extracted so it can be used by multiple requests
    let headers = {
        "Authorization": `Token ${token}`
    }

    makePostRequest(url, success_message, body, headers, on_success_redirect_url);    
}

export const updateCallout = () =>{
    
}