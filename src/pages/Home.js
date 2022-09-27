import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Flight.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Aviation Fuel System </h1>
        <p> We help you to fly as high as your dreams </p>
        <Link to="/menu">
          <button> Book Fuel Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
