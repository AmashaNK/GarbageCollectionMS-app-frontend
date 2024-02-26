import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/LoginPage/Login";
import SignupForm from "./Components/Pages/SignUpPage/SignupForm";
import HomePage from "./Components/Pages/HomePage/HomePage";
import NewsPage from "./Components/Pages/NewsPage/NewsPage";
import AboutUs from "./Components/Pages/AboutUsPage/AboutUs";
import ContactUs from "./Components/Pages/ContactUsPage/ContactUs";
import AdminDashboard from "./Components/MainPages/Admin/AdminDashboard";
import TruckDriverDashboard from "./Components/MainPages/TruckDriver/TruckDriverDashboard";
import HouseOwnerDashboard from "./Components/MainPages/HouseOwner/HouseOwnerDashboard";
import Collection_Route from "./Components/Pages/CollectionRoutePage/Collection_Route";
import AddNewBin from "./Components/MainPages/Admin/AddNewBin";
import AddTruck from "./Components/MainPages/Admin/AddTruck";
import AddTruckDriver from "./Components/MainPages/Admin/AddTruckDriver";
import AvailableTrucks from "./Components/MainPages/Admin/AvailableTrucks";
import AvailableDrivers from "./Components/MainPages/Admin/AvailableDrivers";
import EditNewsPage from "./Components/MainPages/Admin/EditNewsPage";
import Occasion from "./Components/MainPages/HouseOwner/Occasion";
import Complaints from "./Components/MainPages/HouseOwner/Complaints";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/news" element={<NewsPage />} />{" "}
          <Route path="/contact-us" element={<ContactUs />} />{" "}
          <Route path="/about-us" element={<AboutUs />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<SignupForm />} />{" "}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />{" "}
          <Route
            path="/truckdriver-dashboard"
            element={<TruckDriverDashboard />}
          />{" "}
          <Route
            path="/house-owner-dashboard"
            element={<HouseOwnerDashboard />}
          />{" "}
          <Route path="/add/new/bin" element={<AddNewBin />} />{" "}
          <Route path="/add/truck" element={<AddTruck />} />{" "}
          <Route path="/add/truck/driver" element={<AddTruckDriver />} />{" "}
          <Route path="/available/trucks" element={<AvailableTrucks />} />{" "}
          <Route path="/available/drivers" element={<AvailableDrivers />} />{" "}
          <Route path="/edit/newspage" element={<EditNewsPage />} />{" "}
          <Route path="/route" element={<Collection_Route />} />{" "}
          <Route path="/special/occasion-request" element={<Occasion />} />{" "}
          <Route path="/add/complaints" element={<Complaints />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
