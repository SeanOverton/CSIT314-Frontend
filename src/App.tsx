import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Request from './components/pages/Request';
import AllRequests from './components/pages/AllRequests';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import RequestDetails from './components/pages/RequestDetails';
import car_logo from "./images/moving_car.png"

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
              path="/details/:id"
              element={
                <ProtectedRoute>
                  <RequestDetails/>
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
