import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import SignupForm from "./Components/Pages/SignupForm";
import HomePage from "./Components/Pages/HomePage";

import NewsPage from "./Components/Pages/NewsPage";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/news" element={<NewsPage />} />{" "}
          <Route path="/contact-us" element={<ContactUs />} />{" "}
          <Route path="/about-us" element={<AboutUs />} />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/signup" element={<SignupForm />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
