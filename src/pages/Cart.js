import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import sad from '../assets/img/sad1.jpg';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="container mt-5 pt-4 py-5">
            <h2 className="text-center">Your Cart</h2>
            {cart.length === 0 ? (
                <div className="card">
                    <div className="card-body text-center">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={sad} className="card-img-top" alt="Sad" width="300" height="400"/>
                            </div>
                            <div className="col-md-6 p-5 ">
                                <h2 className="text-center">Your cart is empty.</h2>
                                <Link className="btn btn-warning btn-lg" to="/products">Go to products page</Link>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <div className="row">
                    {cart.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">₹{item.price}</p>
                                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                                        Remove ❌
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
