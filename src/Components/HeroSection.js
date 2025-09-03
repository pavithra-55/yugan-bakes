import React, { useEffect } from "react";
import './css/HeroSection.css';
import Banner from "./Banner";




const HeroSection = () => {
  
    return (
        <div>
        {/* Hero Section */}
        <Banner />
          <div className="jumbotron text-center bg-light py-5 mt-1">
            <h1 className="fw-bold">Welcome to Our Bakes</h1>
            <p>Delicious brownies made with love and fresh ingredients.</p>
            <a href="/products" className="btn btn-primary btn-lg">Order Now</a>
          </div>

        </div>
    );
};

export default HeroSection;
