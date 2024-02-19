import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../Assets/BannerHP.jpg";
import "./HomePage.css";
import NavBar from "../../Navbar";
import { Paper } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>SMART COLLECTOR</h1>
          <p>Think Before Your Trash</p>
          <Link to="/signup">
            <button> Sign Up </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
