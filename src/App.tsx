import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Request from './pages/Request';
import AllRequests from './pages/AllRequests';
import MySubscriptions from './pages/ViewMySubscriptions';
import AddSubscription from './pages/AddSubscription';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import RequestDetails from './pages/RequestDetails';
import car_logo from "./images/moving_car.png";
import MechanicDashboard from "./pages/MechanicDashboard";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
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
