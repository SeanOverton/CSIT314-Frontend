import CustomerConfirmLocation from "../../pages/Customer/CustomerConfirmLocation";

const ConfirmLocation = ({setLocation, setStep}: any) => {
    return (
        <>
        <div className="form-group">
            <label>Location</label>
            <input type="text" className="form-control" placeholder="Location"  onChange={e => setLocation(e.target.value)}/>
        </div>

        <div style={{display: "inline-block", verticalAlign: "center"}}>
            <CustomerConfirmLocation
            setLocation={setLocation}
            />
        </div>

        <div>
            <button className="btn btn-primary" onClick={() => {setStep("Problem")}}>Next</button>
        </div>
        </>
    )
}

export default ConfirmLocation;