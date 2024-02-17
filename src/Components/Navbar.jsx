import React, { useState } from "react";
import Logo from "../Components/Assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/" className="title">
            Home
          </Link>
          <Link to="/news">News</Link>
          {/* <Link to="/contact-us">Contact Us</Link> */}
          <Link to="/about-us">About Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup"></Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/" className="title">
          Home
        </Link>
        <Link to="/news">News</Link>
        {/* <Link to="/contact-us">Contact Us</Link> */}
        <Link to="/about-us">About Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup"></Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;