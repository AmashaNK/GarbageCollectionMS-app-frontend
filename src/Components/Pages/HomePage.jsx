import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../Assets/banner.jpg";
import Banner2 from "../Assets/banner2.jpg";
import Banner3 from "../Assets/banner3.jpg";
import "./HomePage.css";

import { Paper } from "@mui/material";

// ... (imports)

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="headerContainer">
        <h1>Smart Collector</h1>
        <p>Think before your trash</p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
      <Slider {...sliderSettings}>
        <div
          className="slider-item"
          style={{ backgroundImage: `url(${Banner1})` }}
        ></div>
        <div
          className="slider-item"
          style={{ backgroundImage: `url(${Banner2})` }}
        ></div>
        <div
          className="slider-item"
          style={{ backgroundImage: `url(${Banner3})` }}
        ></div>
      </Slider>
    </div>
  );
};

export default HomePage;
