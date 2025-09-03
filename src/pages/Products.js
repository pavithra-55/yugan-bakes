import ProductCard from "../Components/ProductCard";
import './css/Products.css';
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import img1 from '../assets/img/banner1.jpg';
import img2 from '../assets/img/banner2.jpg';
import img3 from '../assets/img/banner3.jpg';
import img4 from '../assets/img/b10.jpg';
import img5 from '../assets/img/b6.jpg';
import img6 from '../assets/img/chocolate-brownie-cake-piece-stack-plate-homemade-pastries.jpg';



const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
  { id: 1, name: "Chocolate Cake", image: img1 , price: 10 },
  { id: 2, name: "Vanilla Cake", image: img2, price: 8 },
  { id: 3, name: "Cream cheese brownie", image: img4, price: 12 },
  { id: 4, name: "Fudgy brownie", image: img5, price: 15 },
  { id: 5, name: "Nutella brownie", image: img3, price: 7 },
  { id: 6, name: "Vegan brownie", image: img6, price: 11 },

];
  return (
    <div className="container mt-5 py-4">
      <h2 className="text-center">Our Cakes</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 ">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
