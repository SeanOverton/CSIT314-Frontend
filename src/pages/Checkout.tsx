import React from 'react';
import Nav from "../components/Nav";
import Footer from '../components/Footer';

const Checkout = (props: any) => {
   return (
        <>
        {/* <Nav/> */}
        <h1>This vehicle registration has no subscription</h1>
        <div className="auth-inner">
            <form onSubmit={props.submitRequest}>
                <h3>No worries! We support pay on demand!</h3>

                <div className="form-group">
                    <label>Card Holder Name</label>
                    <input type="text" className="form-control" placeholder="John Smith"/>
                </div>

                <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" className="form-control" placeholder="xxxx xxxx xxxx xxxx"/>
                </div>

                <div className="form-group">
                    <label>Card Expiry Date:</label>
                    <input type="text" className="form-control" placeholder="MM/YY"/>
                </div>

                <div className="form-group">
                    <label>CVV:</label>
                    <input type="text" className="form-control" placeholder="123"/>
                </div>
                
                <div style={{padding: "1em"}}>
                <button type="submit" className="btn btn-primary btn-block">Pay Now</button>
                </div>
            </form>
        </div>
        {/* <Footer/> */}
        </>
    );
};

export default Checkout;