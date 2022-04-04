import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/General/Home";
import Login from "./pages/General/Login";
import SignUp from "./pages/General/SignUp";
import Request from './pages/Customer/Request';
import AllRequests from './pages/Professional/AllRequests';
import MySubscriptions from './pages/Customer/ViewMySubscriptions';
import AddSubscription from './pages/Customer/AddSubscription';
import OrderHistory from './pages/Customer/CustomerOrderHistory';
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import RequestDetails from './pages/Professional/RequestDetails';
import MechanicDashboard from "./pages/Professional/MechanicCurrentJob";
import Checkout from "./pages/Customer/Checkout";
import JobHistory from "./pages/Professional/JobHistory";
import JobHistoryDetails from "./pages/Professional/JobHistoryDetails";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import car_logo from "./images/moving_car.png";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route
              path="/request"
              element={
                <ProtectedRoute>
                  <Request />
                </ProtectedRoute>
              }
            />
            <Route
              path="/requests"
              element={
                <ProtectedRoute>
                  <AllRequests/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/subscriptions"
              element={
                <ProtectedRoute>
                  <MySubscriptions/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/orderhistory"
              element={
                <ProtectedRoute>
                  <OrderHistory/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/add_car"
              element={
                <ProtectedRoute>
                  <AddSubscription/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/currentjob"
              element={
                <ProtectedRoute>
                  <MechanicDashboard/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/details/:id"
              element={
                <ProtectedRoute>
                  <RequestDetails/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <JobHistory/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/historical_details/:id"
              element={
                <ProtectedRoute>
                  <JobHistoryDetails/>
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout/>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
          <img className="moving_car1" src={car_logo} style={{height: "70px"}}/>
          <img className="moving_car2" src={car_logo} style={{height: "70px"}}/>
    </div>
  );
}

export default App;
