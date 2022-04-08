const ChooseVehicle = ({setRego, setStep}: any) => {
    return (
        <>
        <div className="form-group">
        <label>Car registration:</label>
        <input type="text" className="form-control" placeholder="XWZ-123" onChange={e => setRego(e.target.value)}/>
        </div>
        <div>
        <button className="btn btn-primary" onClick={() => {setStep("Location")}}>Next</button>
        </div>
        </>
    )
}

export default ChooseVehicle;





