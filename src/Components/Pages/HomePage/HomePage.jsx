import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../Assets/h3.jpeg";
import "./HomePage.css";
import NavBar from "../../Navbar";
import { Paper } from "@mui/material";


const HomePage = () => {
  return (
    <div>
        <NavBar />
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <Paper sx={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '80%',
              width: '50%',
              borderRadius: '80px',
              backgroundColor:'#E1F0DA',
              marginLeft:'10px',
            }}>
      <div className="headerContainer">
        <h1>Smart Collector</h1>
        <p>djfhgjkjknjk</p>
        <Link to="/signup">
          <button> Sign Up </button>
        </Link>
      </div>
      </Paper>
    </div>
    </div>
  );
};

export default HomePage;
