import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "./App.css";
import FoodMedReceipt from "./components/victimsReq/FoodMedReceipt";
import FoodMedReq from "./components/victimsReq/FoodMedReq";
import RequestSlip from "./components/victimsReq/RequestSlip";
import RescueForm from "./components/victimsReq/RescueForm";
import ShelterBooking from "./components/victimsReq/ShelterBooking";
import ShelterBookingReceipt from "./components/victimsReq/ShelterBookingReceipt";
import ShelterReliefCamp from "./components/victimsReq/ShelterReliefCamp";
import VictimReqMain from "./components/victimsReq/VictimReqMain";
import Header1 from "./components/Header1";
import Donationhome from "./components/donation/Donationhome";
import Moneyhome from "./components/donation/Moneyhome";
import Foodcloth from "./components/donation/Foodcloth";
import Card1 from "./components/donation/Card1";
import Upi from "./components/donation/Upi";
import Qr1 from "./components/donation/Qr1";
import Success from "./components/donation/Success";
import ReliefHome from "./components/reliefProvider/ReliefHome";
import RescueReq from "./components/reliefProvider/RescueReq";
import FoodReq from "./components/reliefProvider/FoodReq";
import LogIn from "./components/login/LogIn";
import RegistrationHome from "./components/login/RegistrationHome";
import VictimsRegistration from "./components/login/VictimsRegistration";
import OrganizationRegistration from "./components/login/OrganizationRegistration";
import VolunteerRegistration from "./components/login/VolunteerRegistration";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Header1></Header1>
      <div className="Allpages">
        <Router>
          <Routes>
            {/* .....Umer routes */}
            <Route path="/RegistrationHome" element={<RegistrationHome />} />
            <Route
              path="/RegistrationHome/VictimsRegistration"
              element={<VictimsRegistration />}
            />
            <Route
              path="/RegistrationHome/OrganizationRegistration"
              element={<OrganizationRegistration />}
            />
            <Route
              path="/RegistrationHome/VolunteerRegistration"
              element={<VolunteerRegistration />}
            />

            <Route path="/LogIn" element={<LogIn />} />

            {/* .....sunny routes */}
            <Route path="/RescueForm" element={<RescueForm />}></Route>
            <Route path="/RequestSlip" element={<RequestSlip />}></Route>
            <Route path="/FoodMedReq" element={<FoodMedReq />}></Route>
            <Route path="/FoodMedReceipt" element={<FoodMedReceipt />}></Route>
            <Route
              path="/ShelterReliefCamp"
              element={<ShelterReliefCamp />}
            ></Route>
            <Route path="/ShelterBooking" element={<ShelterBooking />}></Route>
            <Route
              path="/ShelterBookingReceipt"
              element={<ShelterBookingReceipt />}
            ></Route>
            <Route path="/VictimReqMain" element={<VictimReqMain />}></Route>
            <Route path="/" element={<HomePage/>} ></Route>
            {/* .....omkar routes */}
            <Route path="/Card" element={<Card1 />} />
            <Route path="/qr" element={<Qr1 />} />
            <Route path="/upi" element={<Upi />} />
            <Route path="/moneyhome" element={<Moneyhome />} />
            <Route path="/donationhome" element={<Donationhome />} />
            <Route path="/Foodcloth" element={<Foodcloth />} />
            <Route path="/success" element={<Success />} />

            {/* .....Shubham routes */}
            <Route path="/ReliefHome" element={<ReliefHome />} />
            <Route path="/relief2" element={<RescueReq />} />
            <Route path="/relief3" element={<FoodReq />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
