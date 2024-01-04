import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./components/ReviewHome";
import Signin from "./components/ReviewSignin";
import Login from './components/ReviewLogin';
import Dashboard from "./components/Dashboard";
import '../src/Assests/CSS/App.css';
import Sofa from "./components/Sofa";
import Dinning from "./components/Dinning";
import Bed from "./components/Bed";
import Addashboard from "./components/AdDashboard";
import Details from "./components/Details";
import Chair from "./components/Chair";
import Common from "./components/Common";
import Payment from "./components/Payment";
import Success from "./components/Success";
import AdSignin from "./components/AdSignin";
import AdLogin from"./components/AdLogin"





function App() {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/dinning" element={<Dinning />} />
          <Route path="/bed" element={<Bed/>} />
          <Route path="/Addashboard" element={<Addashboard/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/chair" element={<Chair/>} />
          <Route path="/common/:id" element={<Common />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/AdSignin" element={<AdSignin />} />
          <Route path="/AdLogin" element={<AdLogin />} />
         

          
        
        </Routes>
      {/* </Router> */}
    </div>
  );
}


export default App;
