import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/LoginPage/Login'
import SignupForm from './Components/Pages/SignUpPage/SignupForm'
import HomePage from './Components/Pages/HomePage/HomePage'
import NewsPage from './Components/Pages/NewsPage/NewsPage'
import AboutUs from './Components/Pages/AboutUsPage/AboutUs'
import ContactUs from './Components/Pages/ContactUsPage/ContactUs'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import SideNavbar from './Components/SideNavbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Dashboard from './Components/MainPages/AdminDashboard/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;