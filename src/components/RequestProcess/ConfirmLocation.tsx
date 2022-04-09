import CustomerConfirmLocation from "../../pages/Customer/CustomerConfirmLocation";

const ConfirmLocation = ({location, setLocation, setStep}: any) => {
    return (
        <>
        <div className="form-group">
            <label>Location</label>
            <input type="text" className="form-control" placeholder={location}  onChange={e => setLocation(e.target.value)}/>
        </div>

        <div style={{padding: "1em", display: "inline-block", verticalAlign: "center"}}>
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