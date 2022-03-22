import Nav from "../Nav";
import Footer from '../Footer';
import "../../styles/forms.css";

const Request = () => {
    return (
        <>
        <Nav/>
        <div className="auth-inner">
                <form>
                    <h3>Request roadside assistance</h3>

                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" placeholder="Location" />
                    </div>

                    <div className="form-group">
                        <label>Something else</label>
                        <input type="password" className="form-control" placeholder="Other details" />
                    </div>
                    
                    <div style={{padding: "1em"}}>
                    <button type="submit" className="btn btn-primary btn-block">Submit request</button>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    );
};

export default Request;