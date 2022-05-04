import { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/forms.css";
import { makePostRequest } from "../../components/utils/Helpers";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [usertype, setUsertype] = useState("customer");
    const [profileImage, setProfileImage] = useState<any>();

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('first_name', firstname);
        formData.append('last_name', lastname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password2', password2);
        formData.append('user_type', usertype);
        formData.append('image', profileImage);

        let headers = {
            "content-type": "multipart/form-data"
        }

        makePostRequest("/register/", "Success! Signed up!", formData, headers);
    }
    
    const handleImage = (e: any) => {
        if(e.target.files[0] != null){ 
            setProfileImage(e.target.files[0])
        }
    }

    return (
        <>
            <main>
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <div style={{padding: "1em"}}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" onChange={e => setFirstname(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" onChange={e => setLastname(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Repeat password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword2(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>User type</label>
                            <div>
                                <select name="user_type" onChange={e => setUsertype(e.target.value)} value={usertype}>
                                    <option value="customer">Customer</option>
                                    <option value="mechanic">Mechanic</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Profile pic (optional)</label>
                            <input type="file" className="form-control" onChange={handleImage}/>
                        </div>

                    </div>

                    <button type="submit" value="Submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">log in?</Link>
                    </p>
                </form>
            </div>
            </main>
        </>
    );
};

export default SignUp;