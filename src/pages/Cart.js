import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import sad from '../assets/img/sad1.jpg';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="container mt-5 pt-4 py-5">
            <h2 className="text-center">Your Cart</h2>
            {cart.length === 0 ? (
                <div className="card">
                    <div className="card-body text-center">
                        <img src={sad} className="card-img-top" alt="Sad" width="300" height="400"/>
                        <p className="text-center">Your cart is empty.</p>
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
