import React from "react";
import { CartProvider } from "./context/CartContext";  // Import CartProvider
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./pages/Cart";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
