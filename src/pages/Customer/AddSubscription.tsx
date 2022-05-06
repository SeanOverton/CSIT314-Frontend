import "../../styles/forms.css";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { makeAuthenticatedPostRequest, range } from "../../components/utils/Helpers";
import { FRONTEND_URL } from "../../components/utils/Constants";
import Auth from "../../components/utils/Auth";
import { Col, Form, Row } from "react-bootstrap";

const AddSubscription = () => {
    const [rego, setRego] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [modelType, setModelType] = useState("");
    const [brand, setBrand] = useState("");
    const [year, setYear] = useState("");
    const [weight, setWeight] = useState("");

    const types = ["SUV", "Truck", "Sedan", "Van", "Coupe", "Wagon", "Convertible", "Sports Car", "Diesel", "Crossover", "Luxury Car", "Hybrid/Electric"];
    const brands = [
        "Abarth",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "Bugatti",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "Citroën",
        "Dacia",
        "Daewoo",
        "Daihatsu",
        "Dodge",
        "Donkervoort",
        "DS",
        "Ferrari",
        "Fiat",
        "Fisker",
        "Ford",
        "Honda",
        "Hummer",
        "Hyundai",
        "Infiniti",
        "Iveco",
        "Jaguar",
        "Jeep",
        "Kia",
        "KTM",
        "Lada",
        "Lamborghini",
        "Lancia",
        "Land Rover",
        "Landwind",
        "Lexus",
        "Lotus",
        "Maserati",
        "Maybach",
        "Mazda",
        "McLaren",
        "Mercedes-Benz",
        "MG",
        "Mini",
        "Mitsubishi",
        "Morgan",
        "Nissan",
        "Opel",
        "Peugeot",
        "Porsche",
        "Renault",
        "Rolls-Royce",
        "Rover",
        "Saab",
        "Seat",
        "Skoda",
        "Smart",
        "SsangYong",
        "Subaru",
        "Suzuki",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
      ];
    
    // note this date is self adjusting to the new year
    // otherwise if it was static it would need to be 
    // manually updated each year
    const years = range(1950, new Date().getFullYear());

    const makeRequest = (evt: any) => {
        evt.preventDefault();

        let body = {
            username: Auth.getUsername(),
            vehicle_registration: rego,
            vehicle_type: vehicleType,
            vehicle_model: modelType,
            vehicle_brand: brand,
            vehicle_year: year,
            vehicle_weight: weight,
            active: true
        }

        makeAuthenticatedPostRequest("/add_subscription/", "Success! New car added!", body, `${FRONTEND_URL}/subscriptions`);
    }

    return (
        <main>
        <div className="auth-inner">
                <form onSubmit={makeRequest}>
                    <h1 style={{textAlign: "left"}}>Vehicle Information</h1>

                    <Row>
                        <Col>
                            <h3>Registration Number</h3>
                        </Col>
                        <Col>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Vehicle registration number"  
                        onChange={e => setRego(e.target.value)}/>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <h3>Vehicle Type</h3>
                        </Col>
                        <Col>
                            <Form.Select 
                            aria-label="Default select example"
                            onChange={e => setVehicleType(e.target.value)}>
                                {types.map((type: any) => {
                                    return <option value={type}>{type}</option>
                                })}
                            </Form.Select>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <h3>Model</h3>
                        </Col>
                        <Col>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="eg. Elantra"  
                            onChange={e => setModelType(e.target.value)}/>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <h3>Brand</h3>
                        </Col>
                        <Col>
                            <Form.Select 
                            aria-label="Default select example"
                            onChange={e => setBrand(e.target.value)}>
                                {brands.map((brand: any) => {
                                    return <option value={brand}>{brand}</option>
                                })}
                            </Form.Select>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <h3>Year</h3>
                        </Col>
                        <Col>
                            <Form.Select 
                                aria-label="Default select example"
                                onChange={e => setYear(e.target.value)}>
                                    {years.map((year: any) => {
                                        return <option value={year}>{year}</option>
                                    })}
                            </Form.Select>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <h3>Weight (kgs)</h3>
                        </Col>
                        <Col>
                            <input type="number" className="form-control" placeholder="1700" min="500" max="5000"  onChange={e => setWeight(e.target.value)}/>
                        </Col>
                    </Row>

                    <div style={{padding: "1em"}}>
                    <button type="submit" className="btn btn-primary btn-block">Add vehicle</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default AddSubscription;