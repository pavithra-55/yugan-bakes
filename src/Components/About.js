import React from "react";
import "./css/About.css"; // Add custom styles if needed

const About = () => {
  return (
    <div className="container  margin-top">
      <h1 className="text-center text-primary fw-bold">About Us</h1>
      <p className="mt-3 text-muted ">
        Welcome to <strong>Yugan Bakes</strong>, where every cake is a
        masterpiece! We specialize in crafting delicious, high-quality cakes for
        all occasions. From birthdays to weddings, our expert bakers ensure that
        every treat is made with love and the finest ingredients.
      </p>

      <h3 className="mt-4 text-secondary">Our Story</h3>
      <p className="text-muted">
        Established in <strong>2024</strong>, our passion for baking started
        as a small home business and grew into a beloved cake shop. We take
        pride in delivering joy, one cake at a time.
      </p>

      <h3 className="mt-4 text-secondary">Why Choose Us?</h3>
      <ul className="list-unstyled">
        <li>✅ Fresh & Quality Ingredients</li>
        <li>✅ Custom Creations for Every Occasion</li>
        <li>✅ Baked with Passion & Care</li>
        <li>✅ On-Time Delivery & Excellent Service</li>
      </ul>

      <h3 className="mt-4 text-secondary">Visit Us</h3>
      <p className="text-muted">
        📍 <strong>Location:</strong> Coimbatore <br />
        📞 <strong>Contact Us:</strong> +91 9876543210 <br />
        📧 <strong>Email:</strong> yuganbakes@gmail.com
      </p>
    </div>
  );
};

export default About;
