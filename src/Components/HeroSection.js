import React, { useEffect } from "react";
import './css/HeroSection.css';
import Banner from "./Banner";
import { Link } from "react-router-dom";




const HeroSection = () => {
  
    return (
        <div>
        {/* Hero Section */}
        <Banner />
          <div className="jumbotron text-center bg-light py-5 mt-1">
            <h1 className="fw-bold">Welcome to Our Bakes</h1>
            <p>Delicious brownies made with love and fresh ingredients.</p>
          {/* <a href="/products" className=""></a> */}
          <Link className="btn btn-primary btn-lg" to="/products">Order Now</Link>
          </div>

        </div>
    );
};

export default HeroSection;
